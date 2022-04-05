import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-add-update',
  templateUrl: './add-update.component.html',
  styleUrls: ['./add-update.component.css'],
})
export class AddUpdateComponent implements OnInit {
  userform: FormGroup;
  userToUpdateData: any = {};
  selectedHobbies: string[] = [];
  id: string = '';
  city: any = ['','Surat','Bhavnagar','Rajkot','Vadodara','Ahmedabad','Mumbai'];
  userHobbies: string[] = ['Cricket','Football','Sports','Reading','Playing','Gaming'];

  constructor(private fb: FormBuilder ,private http: HttpClient ,private route: Router ,private activatedRoute: ActivatedRoute,private StudentService: StudentService) {
    this.id = this.activatedRoute.snapshot.params['id'];
    if (this.id) {
      this.getById(this.id);
    }
    this.userform = this.fb.group({
      id: [''],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      age: ['', [Validators.required]],
      city: ['', [Validators.required]],
      gender: [''],
    });
  }

  get City() {
    return this.userform.get('city');
  }
  changecity($event: any) {
    this.city.patchValue($event.target.value, {
      onlySelf: true,
    });
  }

  submitData() {
    if (!this.userform.valid) {
      return;
    }
    if (!this.userform.value.id) {
      const payload = {
        ...this.userform.value,
        hobbies: this.selectedHobbies.join(','),
      };

      this.StudentService.submitData(payload) //services
        .subscribe((res: any) => {
          if (res.isSuccess) {
            this.route.navigateByUrl('list');
          } else {
            alert(res.message);
          }
        });
    } else {
      const isExist = this.userToUpdateData;
      if (isExist) {
        isExist.firstName = this.userform.value.firstName;
        isExist.lastName = this.userform.value.lastName;
        isExist.age = this.userform.value.age;
        isExist.city = this.userform.value.city;
        isExist.gender = this.userform.value.gender;
        isExist.hobbies = this.selectedHobbies.join(',');
        isExist.id = this.id;
       
        this.StudentService.updatedata(isExist) //services
          .subscribe((res: any) => {
            if (res.isSuccess) {
              this.route.navigateByUrl('list');
            } else {
              alert(res.message);
            }
          });
      } else {
        alert('Data not found');
      }
    }
    this.userform.reset();
    this.selectedHobbies = [];
  }
  ngOnInit(): void {}

  getById(id: string) {
    this.http
      .get(`${environment.apiEndPoint}/student/get-student-by-id?id=${id}`)
      .subscribe((res: any) => {
        if (res.isSuccess) {
          const isExist = res.data;
          this.userToUpdateData = isExist;
          if (isExist) {
            this.userform.patchValue({
              id: isExist._id,
              firstName: isExist.firstName,
              lastName: isExist.lastName,
              age: isExist.age,
              city: isExist.city,
              gender: isExist.gender,
            });
            this.selectedHobbies = isExist.hobbies.split(',');
          }
        } else {
          alert(res.message);
        }
      });
  }

  hobbyselected($event: any) {
    if (this.selectedHobbies.find((x) => x == $event.target.value)) {
      this.selectedHobbies = this.selectedHobbies.filter(
        (x) => x != $event.target.value
      );
    } else {
      this.selectedHobbies.push($event.target.value);
    }
  }
}

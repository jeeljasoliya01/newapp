import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-api-crud-student',
  templateUrl: './api-crud-student.component.html',
  styleUrls: ['./api-crud-student.component.css'],
})
export class ApiCrudStudentComponent implements OnInit {
  userForm: FormGroup;
  userData: IUser[] = [];
  selectedHobbies: string[] = [];
  userHobbies: string[] = ['cricket', 'footboll', 'reading', 'travaling'];

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.userForm = this.fb.group({
      id: [''],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      age: ['', Validators.required],
      gender: [''],
    });
  }

  getStudentData() {
    this.http
      .get(`${environment.apiEndPoint}/student/get`)
      .subscribe((res: any) => {
        if (res.isSuccess) {
          this.userData = res.data;
          this.userData.forEach((x: any) => {
            x.id = x._id;
          });
        } else {
          alert(res.message);
        }
      });
  }

  ngOnInit(): void {
    this.selectedHobbies = ['travaling'];
    this.getStudentData();
  }

  submitData() {
    // console.log(this.userData);
    if (!this.userForm.valid) {
      return;
    }
    if (!this.userForm.value.id) {
      const payload = {
        ...this.userForm.value,
        hobbies: this.selectedHobbies.join(','),
      };
      this.http
        .post(`${environment.apiEndPoint}/student/add`, payload)
        .subscribe((res: any) => {
          if (res.isSuccess) {
            this.getStudentData();
          } else {
            alert(res.message);
          }
        });
    } else {
      const isExist = this.userData.find((x) => x.id == this.userForm.value.id);
      if (isExist) {
        isExist.firstName = this.userForm.value.firstName;
        isExist.lastName = this.userForm.value.lastName;
        isExist.age = this.userForm.value.age;
        isExist.gender = this.userForm.value.gender;
        isExist.hobbies = this.selectedHobbies.join(',');
        this.http
          .post(`${environment.apiEndPoint}/student/update`, isExist)
          .subscribe((res: any) => {
            if (res.isSuccess) {
              this.getStudentData();
            } else {
              alert(res.message);
            }
          });
      } else {
        alert('Data not found');
      }
    }
    this.userForm.reset();
    this.selectedHobbies = [];
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

  deleteUser(user: IUser) {
    if (confirm('Are you sure you want to delete ?')) {
      this.http
        .delete(`${environment.apiEndPoint}/student/delete?id=${user.id}`)
        .subscribe((res: any) => {
          if (res.isSuccess) {
            this.getStudentData();
          } else {
            alert(res.message);
          }
        });
    }
  }

  getById(id: number) {
    this.http
      .get(`${environment.apiEndPoint}/student/get-student-by-id?id=${id}`)
      .subscribe((res: any) => {
        if (res.isSuccess) {
          const isExist = res.data;
          if (isExist) {
            this.userForm.patchValue({
              id: isExist._id,
              firstName: isExist.firstName,
              lastName: isExist.lastName,
              age: isExist.age,
              gender: isExist.gender,
            });
            this.selectedHobbies = isExist.hobbies.split(',');
          }
        } else {
          alert(res.message);
        }
      });
  }
}
interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  hobbies: string;
}

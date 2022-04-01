import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-api-student-template',
  templateUrl: './api-student-template.component.html',
  styleUrls: ['./api-student-template.component.css'],
})

export class ApiStudentTemplateComponent implements OnInit {
  userData: IUser[] = [];
  id = [''];
  selectedHobbies: string[] = [];
  hobbies: string[] = ['cricket', 'footboll', 'reading', 'travaling','Cokking','Exercise'];

  @ViewChild('userForm', { static: false }) userForm!: NgForm;

  constructor(private http: HttpClient) { 
 
  }

  ngOnInit(): void {
    this.getStudentData();
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

  hobbyselected($event: any) {
    if (this.selectedHobbies.find((x) => x == $event.target.value)) {
      this.selectedHobbies = this.selectedHobbies.filter(
        (x) => x != $event.target.value
      );
    } else {
      this.selectedHobbies.push($event.target.value);
    }
  }

  submitData() {
    console.log(this.userData);
    if (!this.userForm.valid) {
      return;
    }
    if (!this.userForm.value.id) {
      const payload = {
        ...this.userForm.value,
        hobbies: this.selectedHobbies.join(','),
      }
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
        isExist.id = this.userForm.value.id;
        isExist.firstName = this.userForm.value.firstName;
        isExist.lastName = this.userForm.value.lastName;
        isExist.age = this.userForm.value.age;
        isExist.gender = this.userForm.value.gender;
        isExist.city = this.userForm.value.city;
        isExist.hobbies = this.selectedHobbies.join(',');
        this.http
        .post(`${environment.apiEndPoint}/student/update`, isExist)
        .subscribe((res: any) => {
          if (res.isSuccess) {
            this.getStudentData();
          } else {
            alert(res.message);
          }
        })
      } else {
        alert('Data not Found');
      }
    }
    this.userForm.reset();
    this.selectedHobbies = [];
  }
  deleteUser(user: IUser) {
    if (confirm('Are you sure you want to delete  ?')) {
      this.http
        .delete(`${environment.apiEndPoint}/student/delete?id=${user.id}`)
        .subscribe((res: any) => {
          if (res.isSuccess) {
            this.getStudentData();
          } else {
            alert(res.message);
          }
        })
    }
  }
  getById(id: number) {
    // const isExist = this.userData.find((x) => x.id == id);
    this.http
      .get(`${environment.apiEndPoint}/student/get-student-by-id?id=${id}`)
      .subscribe((res: any) => {
        if (res.isSuccess) {
          var isExist = res.data;
          if (isExist) {
            this.userForm.setValue({
              id: isExist._id,
              firstName: isExist.firstName,
              lastName: isExist.lastName,
              age: isExist.age,
              gender: isExist.gender,
              city: isExist.city,
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
  city: string;
}
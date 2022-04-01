import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms-template',
  templateUrl: './forms-template.component.html',
  styleUrls: ['./forms-template.component.css'],
})
export class FormsTemplateComponent implements OnInit, AfterViewInit {
  userData: IUser[] = [];
  id = [''];
  selectedHobbies: string[] = [];
  hobbies: string[] = ['cricket', 'footboll', 'reading', 'travaling'];

  @ViewChild('userForm', { static: false }) userForm!: NgForm;
  constructor() {}

  ngAfterViewInit(): void {
    console.log('AfterViewInit', this.userForm);
  }

  ngOnInit(): void {}

  // submitData(userForm: NgForm) {
  //   console.log(userForm);
  // }

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
      this.userData.push({
        ...this.userForm.value,
        id: this.userData.length + 1,
        hobbies: this.selectedHobbies.join(','),
      });
    } else {
      const isExist = this.userData.find((x) => x.id == this.userForm.value.id);
      if (isExist) {
        isExist.firstname = this.userForm.value.firstname;
        isExist.lastname = this.userForm.value.lastname;
        isExist.email = this.userForm.value.email;
        isExist.password = this.userForm.value.password;
        isExist.Age = this.userForm.value.Age;
        isExist.phone = this.userForm.value.phone;
        isExist.gender = this.userForm.value.gender;
        isExist.hobbies = this.selectedHobbies.join(',');
      } else {
        alert('Data not found');
      }
    }
    this.userForm.reset();
    this.selectedHobbies = [];
  }

  deleteUser(user: IUser) {
    if (confirm('Are you sure you want to delete ?')) {
      this.userData = this.userData.filter((x) => x.id != user.id);
    }
  }

  getById(id: number) {
    const isExist = this.userData.find((x) => x.id == id);
    if (isExist) {
      this.userForm.setValue({
        id: isExist.id,
        firstname: isExist.firstname,
        lastname: isExist.lastname,
        phone: isExist.phone,
        email: isExist.email,
        password: isExist.password,
        Age: isExist.Age,
        gender: isExist.gender,
      });
      this.selectedHobbies = isExist.hobbies.split(',');
    }
  }
}
interface IUser {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  Age: string;
  phone: string;
  gender: string;
  hobbies: string;
}

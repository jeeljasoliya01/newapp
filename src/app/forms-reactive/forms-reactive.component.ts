import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms-reactive',
  templateUrl: './forms-reactive.component.html',
  styleUrls: ['./forms-reactive.component.css'],
})
export class FormsReactiveComponent implements OnInit {
  userForm: FormGroup;
  userData: IUser[] = [];
  selectedHobbies: string[] = [];
  userHobbies: string[] = ['cricket', 'footboll', 'reading', 'travaling'];

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      id: [''],
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      email: ['', [Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),Validators.email,]],
      phone: ['', [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]],
      Age: ['', Validators.required],
      password: ['', [Validators.required,Validators.maxLength(8)]],
      gender: [''],
    });
  }

  ngOnInit(): void {
    this.selectedHobbies = ['travaling'];
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
      this.userData = this.userData.filter((x) => x.id != user.id);
    }
  }

  getById(id: number) {
    const isExist = this.userData.find((x) => x.id == id);
    if (isExist) {
      this.userForm.patchValue({
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
  Age: number;
  phone: string;
  gender: string;
  hobbies: string;
}

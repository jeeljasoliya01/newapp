import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-api-token-base-crud',
  templateUrl: './api-token-base-crud.component.html',
  styleUrls: ['./api-token-base-crud.component.css'],
})
export class ApiTokenBaseCrudComponent implements OnInit {
  userform: FormGroup;
  userData: Iuser[] = [];
  logintoken: string = '';
  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.userform = this.fb.group({
      fullname: ['', [Validators.required]],
      Email: ['',[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$')]],
      password: ['',[Validators.required,Validators.pattern('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=()])(?=\\S+$).{8}$')]],
      cpassword: ['', [Validators.required]],
      phone: ['',[Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]],
    });
  }
  ngOnInit(): void {}

  submitData() {
    console.log(this.userData);
    if (!this.userform.valid) {
      return;
    }
    if (!this.userform.value.id) {
      this.userData.push({
        ...this.userform.value,
        id: this.userData.length + 1,
      });
    } else {
      const isExist = this.userData.find((x) => x.id == this.userform.value.id);
      if (isExist) {
        isExist.fullname = this.userform.value.fullname;
        isExist.Email = this.userform.value.Email;
        isExist.password = this.userform.value.password;
        isExist.cpassword = this.userform.value.cpassword;
        isExist.phone = this.userform.value.phone;
      } else {
        alert('Data not found');
      }
    }
    this.userform.reset();
  }

  deleteUser(user: Iuser) {
    if (confirm('Are you sure you want to delete ?')) {
      this.userData = this.userData.filter((x) => x.id != user.id);
    }
  }

  getById(id: number) {
    const isExist = this.userData.find((x) => x.id == id);
    if (isExist) {
      this.userform.patchValue({
        id: isExist.id,
        fullname: isExist.fullname,
        Email: isExist.Email,
        phone: isExist.phone,
        password: isExist.password,
        cpassword: isExist.cpassword,
      });
    }
  }
}

interface Iuser {
  id: number;
  fullname: string;
  Email: string;
  password: string;
  cpassword: string;
  phone: string;
}

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
  constructor(private fb: FormBuilder) {
    this.userform = this.fb.group({
      fullname: ['', [Validators.required]],
      Email: ['', [Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$')]],
      password: ['', [Validators.required,Validators.pattern('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=()])(?=\\S+$).{8}$')]],
      cpassword: ['', [Validators.required]],
      phone:['',[Validators.required,Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]]
    });
  }

  ngOnInit(): void {}
}

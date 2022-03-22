import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms-reactive',
  templateUrl: './forms-reactive.component.html',
  styleUrls: ['./forms-reactive.component.css']
})
export class FormsReactiveComponent implements OnInit {
  userForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      firstname: ['',[Validators.required]],
      lastname: ['',[Validators.required]],
      email:['',[Validators.required]],
     phone: ['', [Validators.maxLength(10)]],

    })
  }

  ngOnInit(): void {
  }

}

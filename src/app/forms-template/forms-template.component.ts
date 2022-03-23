import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms-template',
  templateUrl: './forms-template.component.html',
  styleUrls: ['./forms-template.component.css']
})
export class FormsTemplateComponent implements OnInit {
  // @ViewChild('userForm', { static: false }) userForm: NgForm;
  constructor() { }

  ngOnInit(): void { }

  submitData(userForm: NgForm) {
    console.log(userForm)
  }

}

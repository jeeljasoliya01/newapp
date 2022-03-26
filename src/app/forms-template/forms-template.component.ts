import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms-template',
  templateUrl: './forms-template.component.html',
  styleUrls: ['./forms-template.component.css']
})
export class FormsTemplateComponent implements OnInit, AfterViewInit {

  selectedHobbies: string[] = [];
  userHobbies: string[] = ['cricket', 'footboll', 'reading', 'travaling'];
  
  @ViewChild('userForm', { static: false }) userForm!: NgForm;
  constructor() { }

  ngAfterViewInit(): void {
    console.log('AfterViewInit', this.userForm);
  }

  ngOnInit(): void { }


  submitData(userForm: NgForm) {
    console.log(userForm)
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

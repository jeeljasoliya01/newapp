import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conditional',
  templateUrl: './conditional.component.html',
  styleUrls: ['./conditional.component.css'],
})
export class ConditionalComponent implements OnInit {
  currselection: string = '';
  selcetionlist: string[] = [
    'name',
    'age',
    'image',
    'email',
    'name_age',
    'name_email',
    'Show_all',
  ];

  // example if
  showme: boolean = true;
  isLoggin: string = '';
  isPassword: string = '';

  userlist = [{ name : 'jeel', age : 21 },{name : 'damini', age : 22},{name : 'siddhali', age : 20},{name : 'tasvi', age : 5}];
  //example for
  isvisible: boolean = true;
  hidelist() {
    this.isvisible = false;
  }
  showlist() {
    this.isvisible = true;
  }
  selectedNumber: number = 0;
  showValues() {
    const array = [0];
    console.log(array.fill(this.selectedNumber));
  }
  constructor() {}

  ngOnInit(): void {}
}

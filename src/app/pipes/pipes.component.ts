import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css'],
})
export class PipesComponent implements OnInit {
  dataArray: any[] = [
    {
      Fname: 'jeel',
      Lname: 'jasoliya',
    },
  ];
  str : string = 'jeel jasoliya';
  // collection: string[] = ['a', 'b', 'c', 'd'];
  // languages: string[]= ['Java','PHP', '.Net','JQuery', 'JavaScript','Angular','AngularJS']
  currentDate: Date = new Date();
  constructor() {}

  ngOnInit(): void {}
}

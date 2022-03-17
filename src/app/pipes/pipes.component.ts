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
  currentDate: Date = new Date();
  constructor() {}

  ngOnInit(): void {}
}

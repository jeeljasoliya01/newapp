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
  firstName: string[] = [];
  lastName: string[] = [];

  str: string = 'jeel jasoliya';

  currentDate: Date = new Date();

  file = { name: 'photo.jpg', size: 2120109, type: 'image/jpg' };

  //temp-convert
  Fahrenheit: number = 0;
  celcius: number = 0;

  color = '';
  constructor() { }
  ngOnInit(): void { }
}

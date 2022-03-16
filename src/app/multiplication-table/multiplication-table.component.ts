import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multiplication-table',
  templateUrl: './multiplication-table.component.html',
  styleUrls: ['./multiplication-table.component.css']
})
export class MultiplicationTableComponent implements OnInit {
  InputParams: Iparams = {
    from: 0,
    To: 0,
  }
  counter: number[] = [];
  rows: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor() { }

  ngOnInit(): void {
  }

  generate() {
    for (var i = this.InputParams.from; i < this.InputParams.To; i++) {
      this.counter.push(i);
    }
  }
}
interface Iparams {
  from: number;
  To: number;
}

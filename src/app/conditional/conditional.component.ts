import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conditional',
  templateUrl: './conditional.component.html',
  styleUrls: ['./conditional.component.css']
})
export class ConditionalComponent implements OnInit {

  currselection: string = '';
  selcetionlist: string[] = ['name', 'age', 'image', 'email', 'name_age', 'name_email', 'Show_all'];
  select(){
    return this.selcetionlist
  }

  selectedNumber: number = 0;
  showValues() {
    
  }
  constructor() { }
  
  ngOnInit(): void {
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  test: string = 'jeel'
  updateSTring = ''
  constructor() {}

  ngOnInit(): void {}
  
  doUpdate($event: any) {
    this.updateSTring = $event;
  }
}

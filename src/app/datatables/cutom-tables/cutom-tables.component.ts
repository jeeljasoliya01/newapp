import { Component, OnInit } from '@angular/core';
import { NgbPaginationConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-cutom-tables',
  templateUrl: './cutom-tables.component.html',
  styleUrls: ['./cutom-tables.component.css']
})
export class CutomTablesComponent implements OnInit {
  page = 4;

  // constructor(config: NgbPaginationConfig) {
  //   // customize default values of paginations used by this component tree
  //   config.size = 'sm';
  //   config.boundaryLinks = true;
  // }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}

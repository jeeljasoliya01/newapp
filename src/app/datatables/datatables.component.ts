import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datatables',
  templateUrl: './datatables.component.html',
  styleUrls: ['./datatables.component.css']
})
export class DatatablesComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  constructor() { }

  ngOnInit(): void {
    this.dtOptions = {
       pagingType: 'full_numbers'
    };
    // this.dtOptions = {
    //   ajax: 'data/data.json',
    //   columns: [{
    //     title: 'ID',
    //     data: 'id'
    //   }, {
    //     title: 'First name',
    //     data: 'firstName'
    //   }, {
    //     title: 'Last name',
    //     data: 'lastName'
    //   }]
    // };
  }

}

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
    this.dtOptions = {
      ajax: 'https://student-api.mycodelibraries.com/api/student/get',
      columns: [{
        title: 'ID',
        data: '_id'
      }, {
        title: 'First name',
        data: 'firstName'
      }, {
        title: 'Last name',
        data: 'lastName'
      },
      {
        title: 'hobbies',
        data: 'hobbies'
      },
      {
        title: 'Gender',
        data: 'gender'
      },
      {
        title: 'City',
        data: 'city'
      },
      {
        title: 'Age',
        data: 'age'
      },]
    };
  }

}

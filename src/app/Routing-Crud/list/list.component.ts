import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
 
  userdata: Iuser[] = [];
  constructor(private route: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.getStudentData();
  }

  addstudent() {
    this.route.navigate([`/add`]);
  }

  getStudentData() {
    this.http
      .get(`${environment.apiEndPoint}/student/get`)
      .subscribe((res: any) => {
        if (res.isSuccess) {
          this.userdata = res.data;
          this.userdata.forEach((x: any) => {
            x.id = x._id;
          });
        } else {
          alert(res.message);
        }
      });
  }
  getById(id: string) {
    this.route.navigate([`/update/${id}`]);
  }
  deletedata(id: string) {
    this.route.navigate([`/delete/${id}`]);

  }
}
interface Iuser {
  id: string;
  firstName: string;
  lastName: string;
  age: string;
  city: string;
  gender: string;
  hobbies: string;
}

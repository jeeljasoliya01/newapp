import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-go-rest',
  templateUrl: './go-rest.component.html',
  styleUrls: ['./go-rest.component.css'],
})
export class GoRestComponent implements OnInit {
  usersData: any[] = [];
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getuserdetail();
    this.createuser();
  }
  getuserdetail() {
    this.http.get(`${environment.gorest}/v2/users`).subscribe((res: any) => {
      this.usersData = res;
    });
  }

  createuser() {
    this.http
      .post(
        `${environment.gorest}/v2/users`,
        {
          name: 'Test',
          email: 'jeel1@gmail.com',
          gender: 'female',
          status: 'active',
        },
        {
          headers: {
            Authorization: `Bearer ${environment.token}`,
          },
        }
      )
      .subscribe((res: any) => {
        this.getuserdetail();
        // this.updateUser(res.id);
      });
  }

  updateuser(id: number) {
    this.http
      .patch(
        `${environment.gorest}/v2/users/${id}`,
        {
          name: 'jeel1',
          email: 'jeel12@gmail.com',
          gender: 'female',
          status: 'inactive',
        },
        {
          headers: {
            Authorization: `Bearer ${environment.token}`,
          },
        }
      )
      .subscribe((res: any) => {
        this.deleteuser(res.id);
      });
  }

  deleteuser(id: number) {
    this.http
      .delete(`${environment.gorest}/v2/users/${id}`, {
        headers: { Authorization: `Bearer ${environment.token}` },
      })
      .subscribe((res: any) => {
        this.getuserdetail();
      });
  }
}

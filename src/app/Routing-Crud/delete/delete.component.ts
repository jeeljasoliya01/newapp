import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css'],
})
export class DeleteComponent implements OnInit {
  id: string = '';
  constructor(
    private http: HttpClient,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
  }

  deleteUser() {
    if (confirm('Are you sure you want to delete ?')) {
      this.http
        .delete(`${environment.apiEndPoint}/student/delete?id=${this.id}`)
        .subscribe((res: any) => {
          if (res.isSuccess) {
            this.router.navigateByUrl('list');
          } else {
            alert(res.message);
          }
        });
    }
  }
}

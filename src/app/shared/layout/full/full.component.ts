import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api/primengconfig';

@Component({
  selector: 'app-full',
  templateUrl: './full.component.html',
  styleUrls: ['./full.component.css']
})
export class FullComponent implements OnInit {
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  // product() {
  //   this.router.navigate(['/api-crud-product']);
  // }
  logout() {
    localStorage.removeItem('currentUserValue');
    this.router.navigate(['/login']);
  }

}

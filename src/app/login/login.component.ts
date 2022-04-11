import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  loading = false;
  submitted = false;
  returnUrl!: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) {
    // redirect to home if already logged in
    if (localStorage.getItem('currentUserValue')) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/app/conditional';
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.http
      .post(`${environment.irisApi}/User/LoginAuthenticate`, {
        email: this.loginForm.get('username')?.value,
        password: this.loginForm.get('password')?.value,
      })
      .subscribe(
        (res: any) => {
          if (res.isSuccess) {
            localStorage.setItem('currentUserValue', res.responseData.token);
            this.router.navigate([this.returnUrl]);
          } else {
            alert(res.message);
          }
        },
        () => {
          this.loading = false;
          alert('Error occured');
        }
      );
  }
}

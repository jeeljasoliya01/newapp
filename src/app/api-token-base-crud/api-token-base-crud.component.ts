import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { isSubscription } from 'rxjs/internal/Subscription';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-api-token-base-crud',
  templateUrl: './api-token-base-crud.component.html',
  styleUrls: ['./api-token-base-crud.component.css'],
})
export class ApiTokenBaseCrudComponent implements OnInit {
  userform: FormGroup;
  userData: Iuser[] = [];
  loginToken: string = '';

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.userform = this.fb.group({
      id: [''],
      fullname: ['', [Validators.required]],
      Email: ['',[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$')]],
      password: ['',[Validators.required,Validators.pattern('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=()])(?=\\S+$).{8}$')]],
      cpassword: ['', [Validators.required]],
      phone: ['',[Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]],
    });
  }
  async ngOnInit() {
    await this.loginUser();
    this.getAllUser();
    // this.postUser();
  }

  async loginUser() {
    await new Promise((resolve) => {
      this.http
        .post(`${environment.irispoint}/User/LoginAuthenticate`, {
          email: 'admin@mail.com',
          password: 'Test@123',
        })
        .subscribe((res: any) => {
          if (res.isSuccess) {
            this.loginToken = res.responseData.token;
          }
          resolve(true);
        });
    });
  }

  getAllUser() {
    this.http
      .get(`${environment.irispoint}/User/GetAllUsers`, {
      })
      .subscribe((res: any) => {
        if (res.isSuccess) {
          this.userData=res.responseData
          // console.log(res.responseData);
        }
      });
  }

  // postUser() {
  //   this.http
  //     .post(
  //       `${environment.irispoint}/User/CreateUser`,
  //       {
  //         email: 'jeel@gmail.com',
  //         fullName: 'Jeel',
  //         mobileNumber: '78965412',
  //         password: 'Test@123',
  //         roleId: 2,
  //         profileImageBase64: '',
  //         userRole: [],
  //       },
  //       {
  //         headers: {
  //           Authorization: `Bearer ${this.loginToken}`,
  //         },
  //       }
  //     )
  //     .subscribe((res: any) => {
  //       if (res.isSuccess) {
  //         console.log(res.responseData);
  //       }
  //     });
  // }

  submitData() {
    console.log(this.userData);
    if (!this.userform.valid) {
      return;
    }
    if (!this.userform.value.id) {
      const payload = {
        ...this.userform.value,
      };
      this.http
        .post(`${environment.irispoint}/User/UpdateUser`, payload, {
        })
        .subscribe((res: any) => {
          if (res.isSuccess) {
            this.getAllUser();
          }else{
            alert(res.message);
          }
        });
    } else {
      const isExist = this.userData.find((x) => x.id == this.userform.value.id);
      if (isExist) {
        isExist.fullname = this.userform.value.fullname;
        isExist.Email = this.userform.value.Email;
        isExist.password = this.userform.value.password;
        isExist.cpassword = this.userform.value.cpassword;
        isExist.phone = this.userform.value.phone;

        this.http.post(`${environment.irispoint}/User/createUser`,isExist,{
        })
        .subscribe((res: any) => {
          if (res.isSuccess) {
            this.getAllUser();
          }else{
            alert(res.message);
          }
        });
      } else {
        alert('Data not found');
      }
    }
    this.userform.reset();
  }

  deleteUser(user: Iuser) {
    if (confirm('Are you sure you want to delete ?')) {
      this.userData = this.userData.filter((x) => x.id != user.id);
      this.http.delete(`${environment.irispoint}/User/DeleteUser?.id=${user.id}`,{
      })
      .subscribe((res: any) => {
        if (res.isSuccess) {
          this.getAllUser();
        }else{
          alert(res.message);
        }
      });
    }
  }

  getById(id: number) {
    this.http.get(`${environment.irispoint}/User/GetUser-id?.id=${id}`,{
    })
    .subscribe((res: any) => {
      if (res.isSuccess) {
        const isExist = res.data;
        if (isExist) {
          this.userform.patchValue({
            id: isExist.id,
            fullname: isExist.fullname,
            Email: isExist.Email,
            phone: isExist.phone,
            password: isExist.password,
            cpassword: isExist.cpassword,
          });
        }
      } else {
        alert(res.message);
      }
    });
  }
}

interface Iuser {
  id: number;
  fullname: string;
  Email: string;
  password: string;
  cpassword: string;
  phone: string;
}

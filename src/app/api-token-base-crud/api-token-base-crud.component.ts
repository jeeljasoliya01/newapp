import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { TokenUserService } from '../services/token-user.service';

@Component({
  selector: 'app-api-token-base-crud',
  templateUrl: './api-token-base-crud.component.html',
  styleUrls: ['./api-token-base-crud.component.css'],
})
export class ApiTokenBaseCrudComponent implements OnInit {

  userForm: FormGroup;
  userData: Iuser[] = [];
  loginToken: string = '';

  constructor(private fb: FormBuilder, private http: HttpClient, private TokenUserService: TokenUserService) {
    this.userForm = this.fb.group({
      id: [''],
      roleId: [''],
      fullName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$')]],
      password: ['', [Validators.required, Validators.pattern('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=()])(?=\\S+$).{8}$')]],
      cpassword: ['', [Validators.required]],
      mobileNumber: ['', [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]],
    });
  }
  async ngOnInit() {
    await this.loginUser();
    this.getAllUser();
    this.postUser();
  }

  async loginUser() {
    await new Promise((resolve) => {
      this.http
        .post(`${environment.irisApi}/User/LoginAuthenticate`, {
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
    this.TokenUserService.getAllUser() //services
      // this.http
      //   .get(`${environment.irisApi}/User/GetAllUsers`, {
      //     headers: {
      //   Authorization: `Bearer ${this.loginToken}`,
      // },
      // })
      .subscribe((res: any) => {
        if (res.isSuccess) {
          this.userData = res.responseData;
          console.log(res.responseData);
        }
      });
  }

  postUser() {
    this.http
      .post(
        `${environment.irisApi}/User/CreateUser`,
        {
          email: 'jeel@gmail.com',
          fullName: 'Jeel',
          mobileNumber: '7896541234',
          passWord: 'Test@123',
          roleId: 2,
          profileImageBase64: '',
          userRole: [],
        },
        {
          // headers: {
          //   Authorization: `Bearer ${this.loginToken}`,
          // },
        }
      )
      .subscribe((res: any) => {
        if (res.isSuccess) {
          console.log(res.responseData);
        }
      });
  }

  submitData() {
    // console.log(this.userData);
    if (!this.userForm.valid) {
      return;
    }
    if (!this.userForm.value.id) {
      const payload = {
        ...this.userForm.value,
        roleId: 2,
        companyList: [],
        profileImageBase64: '',
        isActive: false,
        employeeId: 0,
        userRole:[],
        notificationTypeList:''
      };
      // this.http
      //   .post(`${environment.irisApi}/User/CreateUser`, payload, {
      // headers: {
      //   Authorization: `Bearer ${this.loginToken}`
      // }
      // })

      this.TokenUserService.postUser(payload) //services
        .subscribe((res: any) => {
          if (res.isSuccess) {
            this.getAllUser();
          } else {
            alert(res.message);
          }
        });
    } else {
      const isExist = this.userData.find((x) => x.id == this.userForm.value.id) as any;
      if (isExist) {
        isExist.fullName = this.userForm.value.fullName;
        isExist.email = this.userForm.value.email;
        isExist.password = this.userForm.value.passWord;
        isExist.cpassword = this.userForm.value.cpword;
        isExist.mobileNumber = this.userForm.value.mobileNumber;
        isExist.roleId = this.userForm.value.roleId;
        isExist.userRole = [];
        // this.http
        //   .post(`${environment.irisApi}/User/UpdateUser`, isExist, {
        // headers: {
        //   Authorization: `Bearer ${this.loginToken}`
        // }
        // })

        this.TokenUserService.Updateuser(isExist) //services
          .subscribe((res: any) => {
            if (res.isSuccess) {
              this.getAllUser();
            } else {
              alert(res.message);
            }
          });
      } else {
        alert('Data not Found');
      }
    }
    this.userForm.reset();
  }

  deleteUser(user: Iuser) {
    if (confirm('Are you sure you want to delete ?')) {
      this.userData = this.userData.filter((x) => x.id != user.id);

      // this.http
      //   .delete(`${environment.irisApi}/User/DeleteUser/${user.id}`, {
      // headers: {
      //   Authorization: `Bearer ${this.loginToken}`
      // }
      // })

      this.TokenUserService.deleteuser(user) //services
        .subscribe((res: any) => {
          if (res.isSuccess) {
            this.getAllUser();
          } else {
            alert(res.message);
          }
        });
    }
  }

  getById(id: number) {
    // const isExist = this.userData.find((x) => x.id == id);

    // this.http
    //   .get(`${environment.irisApi}/user/GetUser/${id}`, {
    // headers: {
    //   Authorization: `Bearer ${this.loginToken}`
    // }
    // })

    this.TokenUserService.getbyId(id) //services
      .subscribe((res: any) => {
        if (res.isSuccess) {
          const isExist = res.responseData;
          if (isExist) {
            this.userForm.patchValue({
              id: isExist.id,
              fullName: isExist.fullName,
              email: isExist.email,
              passWord: isExist.passWord,
              cpword: isExist.cpword,
              mobileNumber: isExist.mobileNumber,
              roleId: isExist.role.id,
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
  fullName: string;
  email: string;
  password: string;
  cpassword: string;
  mobileNumber: string;
  roleId: number;
}

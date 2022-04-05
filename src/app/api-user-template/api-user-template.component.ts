import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-api-user-template',
  templateUrl: './api-user-template.component.html',
  styleUrls: ['./api-user-template.component.css']
})
export class ApiUserTemplateComponent implements OnInit {

  genders = ['male', 'female'];
  id = [''];
  userData: IUser[] = [];
  imageBase: string = '';
  choosenImage: any = null;
  userHobbies = ['cooking', 'reading', 'travelling','Exercise' ,'Sports'];
  selectedHobbies: any[] = [];

  @ViewChild('userForm', { static: false }) userForm!: NgForm;

  constructor(private http: HttpClient, private UserService: UserService) { 
 
  }

  ngOnInit(): void {
    this.getUserData();
  }

  getUserData() {

    this.UserService.getUserData()  //services

      .subscribe((res: any) => {
        if (res.isSuccess) {
          this.userData = res.data;
          this.imageBase= '';
          this.choosenImage= null;
          this.userData.forEach((x: any) => {
            x.id = x._id;
          });
        } else {
          alert(res.message);
        }
      });
  }

  hobbyselected($event: any) {
    if (this.selectedHobbies.find((x) => x == $event.target.value)) {
      this.selectedHobbies = this.selectedHobbies.filter(
        (x) => x != $event.target.value
      );
    } else {
      this.selectedHobbies.push($event.target.value);
    }
  }

  submitData() {
    if (!this.userForm.valid) {
      return;
    }
    if (!this.userForm.value.id) {
      const payload = {
        ...this.userForm.value,
        hobbies: this.selectedHobbies.join(','),
      };
      if (this.choosenImage) {
        payload.userImage = this.choosenImage;
      }
      const formData = new FormData();
      Object.keys(payload).map((x) => formData.append(x, payload[x]));
     
      this.UserService.submitData(formData)   //services
        .subscribe((res: any) => {
          if (res.isSuccess) {
            this.getUserData();
          } else {
            alert(res.message);
          }
        });
    }
    else {
      const isExist = this.userData.find((x) => x.id == this.userForm.value.id) as any;
      if (isExist) {
        isExist.firstName = this.userForm.value.firstName;
        isExist.lastName = this.userForm.value.lastName;
        isExist.age = this.userForm.value.age;
        isExist.gender = this.userForm.value.gender;
        isExist.city = this.userForm.value.city;
        isExist.hobbies = this.selectedHobbies.join(',');
        if (this.choosenImage) {
          isExist.userImage = this.choosenImage;
        }
        const formData = new FormData();
        Object.keys(isExist).map((x) => formData.append(x, isExist[x]));
       
        this.UserService.updaatedata(formData)   //services
          .subscribe((res: any) => {
            if (res.isSuccess) {
              this.getUserData();
            } else {
              alert(res.message);
            }
          })
      } else {
        alert('Data not Found');
      }
    }
    this.userForm.reset();
    this.selectedHobbies = [];
  }
  deleteUser(user: IUser) {
    if (confirm('Are you sure you want to delete  ?')) {
      this.userData = this.userData.filter((x) => x.id != user.id);
   
      this.UserService.deleteUser(user)  //services
        
        .subscribe((res: any) => {
          if (res.isSuccess) {
            this.getUserData();
          } else {
            alert(res.message);
          }
        })
    }
  }
  renderImage($event: any) {
    if ($event.target.files && $event.target.files.length > 0) {
      this.choosenImage = $event.target.files[0];
      var reader = new FileReader();
      reader.onload = (e: any) => {
        this.imageBase = e.target.result;
      };
      reader.readAsDataURL($event.target.files[0]);
    }
  }
  getById(id: number) {
    // const isExist = this.userData.find((x) => x.id == id);
   
    this.UserService.getById(id)  //services
    
      .subscribe((res: any) => {
        if (res.isSuccess) {
          const isExist = res.data;
          if (isExist) {
            this.userForm.setValue({
              id: isExist._id,
              firstName: isExist.firstName,
              lastName: isExist.lastName,
              age: isExist.age,
              gender: isExist.gender,
              city: isExist.city,

            });
            this.selectedHobbies = isExist.hobbies.split(',');
          }
        }else{
          alert(res.message);
        }
      });
    }
  }

interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  hobbies: string;
  city: string;
  image:string;
}


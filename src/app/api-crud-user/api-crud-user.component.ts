import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-api-crud-user',
  templateUrl: './api-crud-user.component.html',
  styleUrls: ['./api-crud-user.component.css']
})
export class ApiCrudUserComponent implements OnInit {
  userForm: FormGroup;
  userData: IUser[] = [];

  city: any = ['','Surat', 'Bhavnagar', 'Rajkot' , 'Vadodara' , 'Ahmedabad','Mumbai'];

  imageBase: string = ''; //image
  choosenImage: any = null; //image
  
  selectedHobbies: string[] = [];
  userHobbies: string[] = [
    'cricket',
    'footboll',
    'Reading',
    'Travelling',
    'Sports',
    'Dancing',
  ];

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.userForm = this.fb.group({
      id: [''],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      age: ['', Validators.required],
      city: ['', Validators.required],
      gender: [''],
    });
  }
  get City() {
    return this.userForm.get('city');
  }
  changeCity($event: any) {
    this.city.setValue($event.target.value, {
      onlySelf: true,
    });
  }
  
  getUserData() {
    this.http
      .get(`${environment.apiEndPoint}/user/get`)
      .subscribe((res: any) => {
        if (res.isSuccess) {
          this.userData = res.data;
          this.imageBase = '';//image
          this.choosenImage = null;//image
          this.userData.forEach((x: any) => {
            x.id = x._id;
          });
        } else {
          alert(res.message);
        }
      });
  }

  ngOnInit(): void {
    this.getUserData();
  }

  submitData() {
    // console.log(this.userData);
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
      this.http
        .post(`${environment.apiEndPoint}/user/add`, formData)
        .subscribe((res: any) => {
          if (res.isSuccess) {
            this.getUserData();
          } else {
            alert(res.message);
          }
        });
    } else {
      const isExist = this.userData.find((x) => x.id == this.userForm.value.id)as any;
      if (isExist) {
        isExist.firstName = this.userForm.value.firstName;
        isExist.lastName = this.userForm.value.lastName;
        isExist.age = this.userForm.value.age;
        isExist.city = this.userForm.value.city;
        isExist.gender = this.userForm.value.gender;
        isExist.hobbies = this.selectedHobbies.join(',');
        if (this.choosenImage) {  //image
          isExist.userImage = this.choosenImage;
        }
        const formData = new FormData();
        Object.keys(isExist).map((x) => formData.append(x, isExist[x]));
        this.http
          .post(`${environment.apiEndPoint}/user/update`, formData)
          .subscribe((res: any) => {
            if (res.isSuccess) {
              this.getUserData();
            } else {
              alert(res.message);
            }
          });
      } else {
        alert('Data not found');
      }
    }
    this.userForm.reset();
    this.selectedHobbies = [];
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

  deleteUser(user: IUser) {
    if (confirm('Are you sure you want to delete ?')) {
      this.http
        .delete(`${environment.apiEndPoint}/user/delete?id=${user.id}`)
        .subscribe((res: any) => {
          if (res.isSuccess) {
            this.getUserData();
          } else {
            alert(res.message);
          }
        });
    }
  }

  getById(id: number) {
    this.http
      .get(`${environment.apiEndPoint}/user/get-user-by-id?id=${id}`)
      .subscribe((res: any) => {
        if (res.isSuccess) {
          const isExist = res.data;
          if (isExist) {
            this.userForm.patchValue({
              id: isExist._id,
              firstName: isExist.firstName,
              lastName: isExist.lastName,
              age: isExist.age,
              city:isExist.city,
              gender: isExist.gender,
            });
            this.selectedHobbies = isExist.hobbies.split(',');
          }
        } else {
          alert(res.message);
        }
      });
  }
  
  renderImage($event: any) {
    if ($event.target.files && $event.target.files.length > 0) {
      this.choosenImage = $event.target.files[0];
      var reader = new FileReader();
      reader.onload = (e: any) => {
        this.imageBase = e.target.result;
      };
      // you have to declare the file loading
      reader.readAsDataURL($event.target.files[0]);
    }
  }
}
interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  city:string;
  gender: string;
  hobbies: string;
  image: string; //image
}


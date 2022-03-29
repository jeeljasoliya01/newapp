import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-api-crud-product',
  templateUrl: './api-crud-product.component.html',
  styleUrls: ['./api-crud-product.component.css'],
})
export class ApiCrudProductComponent implements OnInit {
  userForm:FormGroup;
  userData: IUser[] = [];
  category: any = ['Boys', 'Girls'];
  clothSize: any = ['S', 'M', 'L', 'XL', 'XXL'];
  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.userForm = this.fb.group({
      id: [''],
      category: [''],
      productName: ['', [Validators.required]],
      description: ['', [Validators.required]],
      price: ['', [Validators.required]],
      clothSize: [''],
      inStock: [''],

    })
  }
  get Category() {
    return this.userForm.get('category');
  }
  changecategory($event: any) {
    this.category.setValue($event.target.value, {
      onlySelf: true
    })
  }
  get Size() {
    return this.userForm.get('sizes');
  }
  changeSize($event: any) {
    this.clothSize.setValue($event.target.value, {
      onlySelf: true
    })
  }
  getProductData() {
    this.http
      .get(`${environment.apiEndPoint}/product/get`)
      .subscribe((res: any) => {
        if (res.isSuccess) {
          this.userData = res.data;
          this.userData.forEach((x: any) => {
            x.id = x._id;
          });
        } else {
          alert(res.message);
        }
      });
  }

  ngOnInit(): void {
    this.getProductData();
  }

  submitData() {
    console.log(this.userData);
    if (!this.userForm.valid) {
      return;
    }
    if (!this.userForm.value.id) {
      const payload = {
        ...this.userForm.value,
      };
      this.http
        .post(`${environment.apiEndPoint}/product/add`, payload)
        .subscribe((res: any) => {
          if (res.isSuccess) {
            this.getProductData();
          } else {
            alert(res.message);
          }
        });
    }
    else {
      const isExist = this.userData.find((x) => x.id == this.userForm.value.id);
      if (isExist) {
        isExist.category = this.userForm.value.category;
        isExist.productName = this.userForm.value.productName;
        isExist.description = this.userForm.value.description;
        isExist.price = this.userForm.value.price;
        isExist.clothSize = this.userForm.value.clothSize;
        isExist.inStock = this.userForm.value.inStock;
        this.http
          .post(`${environment.apiEndPoint}/product/update`, isExist)
          .subscribe((res: any) => {
            if (res.isSuccess) {
              this.getProductData();
            } else {
              alert(res.message);
            }
          })
      } else {
        alert('Data not Found');
      }
    }
    this.userForm.reset();
  }


  deleteUser(user: IUser) {
    if (confirm('Are you sure you want to delete  ?')) {
      this.http
        .delete(`${environment.apiEndPoint}/product/delete?id=${user.id}`)
        .subscribe((res: any) => {
          if (res.isSuccess) {
            this.getProductData();
          } else {
            alert(res.message);
          }
        })
    }
  }
  getById(id: number) {
    this.http
      .get(`${environment.apiEndPoint}/product/get-product-by-id?id=${id}`)
      .subscribe((res: any) => {
        if (res.isSuccess) {
          const isExist = res.data;
          if (isExist) {
            this.userForm.patchValue({
              id: isExist._id,
              category: isExist.category,
              productName: isExist.productName,
              description: isExist.description,
              price: isExist.price,
              clothSize: isExist.clothSize,
              inStock: isExist.inStock,
            });
          }
        }
         else {
          alert(res.message);
        }
      });
  }
}
interface IUser {
  id: number;
  category: string;
  productName: string;
  description: string;
  price: number;
  clothSize: string;
  inStock: string;
}
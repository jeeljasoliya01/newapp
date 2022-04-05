import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-api-product-template',
  templateUrl: './api-product-template.component.html',
  styleUrls: ['./api-product-template.component.css'],
})
export class ApiProductTemplateComponent implements OnInit {
  id = [''];
  Stock = ['Yes', 'No'];
  userData: IUser[] = [];

  @ViewChild('userForm', { static: false }) userForm!: NgForm;
  constructor(
    private http: HttpClient,
    private ProductService: ProductService
  ) {}

  ngOnInit(): void {
    this.getProductData();
  }

  getProductData() {
    this.ProductService.getProductData() //services
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
  submitData() {
    // console.log(this.userData);
    if (!this.userForm.valid) {
      return;
    }
    if (!this.userForm.value.id) {
      const payload = {
        ...this.userForm.value,
        // hobbies: this.selectedHobbies.join(','),
      };

      this.ProductService.submitData(payload) //service
        .subscribe((res: any) => {
          if (res.isSuccess) {
            this.getProductData();
          } else {
            alert(res.message);
          }
        });
    } else {
      const isExist = this.userData.find((x) => x.id == this.userForm.value.id);
      if (isExist) {
        isExist.category = this.userForm.value.category;
        isExist.productName = this.userForm.value.productName;
        isExist.description = this.userForm.value.description;
        isExist.price = this.userForm.value.price;
        isExist.clothSize = this.userForm.value.clothSize;
        isExist.inStock = this.userForm.value.inStock;
     
        this.ProductService.updatedata(isExist) //services
          .subscribe((res: any) => {
            if (res.isSuccess) {
              this.getProductData();
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

  deleteUser(user: IUser) {
    if (confirm('Are you sure you want to delete  ?')) {
      
      this.ProductService.deleteUser(user)  //services
        .subscribe((res: any) => {
          if (res.isSuccess) {
            this.getProductData();
          } else {
            alert(res.message);
          }
        });
    }
  }

  getById(id: number) {
    // const isExist = this.userData.find((x) => x.id == id);
   
    this.ProductService.getById(id) //services
    
      .subscribe((res: any) => {
        if (res.isSuccess) {
          const isExist = res.data;
          if (isExist) {
            this.userForm.setValue({
              id: isExist._id,
              category: isExist.category,
              productName: isExist.productName,
              description: isExist.description,
              price: isExist.price,
              clothSize: isExist.clothSize,
              inStock: isExist.inStock,
            });
          }
        } else {
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

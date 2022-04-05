import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getProductData() {
    return this.http.get(`${environment.apiEndPoint}/product/get`);
  }

  submitData(payload: any) {
    return this.http.post(`${environment.apiEndPoint}/product/add`, payload);
  }

  updatedata(isExist: any) {
    return this.http.post(`${environment.apiEndPoint}/product/update`, isExist);
  }

  deleteUser(user: IUser) {
    return this.http.delete(
      `${environment.apiEndPoint}/product/delete?id=${user.id}`
    );
  }

  getById(id: number) {
    return this.http.get(
      `${environment.apiEndPoint}/product/get-product-by-id?id=${id}`
    );
  }
}
interface IUser {
  id: number;
}

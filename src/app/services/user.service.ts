import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUserData() {
    return this.http.get(`${environment.apiEndPoint}/user/get`);
  }
  submitData(formData: any) {
    return this.http.post(`${environment.apiEndPoint}/user/add`, formData);
  }
  updaatedata(formData: any) {
    return this.http.post(`${environment.apiEndPoint}/user/update`, formData);
  }
  deleteUser(user: IUser) {
    return this.http.delete(
      `${environment.apiEndPoint}/user/delete?id=${user.id}`
    );
  }
  getById(id:number) {
    return this.http.get(`${environment.apiEndPoint}/user/get-user-by-id?id=${id}`);
  }
}
interface IUser {
  id: number;
}

import { HttpClient } from '@angular/common/http';
import { Icu } from '@angular/compiler/src/i18n/i18n_ast';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TokenUserService {

  constructor(private http: HttpClient) { }

  getAllUser() {
    return this.http.get(`${environment.irisApi}/User/GetAllUsers`)
  }
  postUser(payload: any) {
    return this.http.post(`${environment.irisApi}/User/CreateUser`, payload)
  }
  Updateuser(isExist: any) {
    return this.http.post(`${environment.irisApi}/User/UpdateUser`, isExist,)
  }
  deleteuser(user: Iuser) {
    return this.http.delete(`${environment.irisApi}/User/DeleteUser/${user.id}`)
  }
  getbyId(id: number) {
    return this.http.get(`${environment.irisApi}/user/GetUser/${id}`)
  }
}
interface Iuser {
  id: number;
}

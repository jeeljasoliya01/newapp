import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor(private http: HttpClient) {}

  getStudentData() {
    return this.http.get(`${environment.apiEndPoint}/student/get`);
  }

  submitData(payload: any) {
    return this.http.post(`${environment.apiEndPoint}/student/add`, payload);
  }

  updatedata(isExist: any) {
    return this.http.post(`${environment.apiEndPoint}/student/update`, isExist);
  }

  Deletedata(user: IUser) {
    return this.http.delete(`${environment.apiEndPoint}/student/delete?id=${user.id}`);
  }

  getById(id: number) {
    return this.http.get(`${environment.apiEndPoint}/student/get-student-by-id?id=${id}`);
  }
}
interface IUser {
  id: number;
}

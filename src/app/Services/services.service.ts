import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Employee } from '../model/employee.model';

const headeroptions = {
  headers: new HttpHeaders({'content-type':'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  baseUrl : string = 'http://localhost:3000/User';

  currentUser: Employee = {
    userid: null,
    id:null,
    title: '',
    body: ''
  }
  constructor(private http: HttpClient) { }

  getAllData(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.baseUrl,headeroptions)
  }

  deleteEmployee(id:number): Observable<Employee> {
    return this.http.delete<Employee>(this.baseUrl+'/'+id,headeroptions)
  }

  createUser(user:Employee): Observable<Employee> {
    return this.http.post<Employee>(this.baseUrl,user,headeroptions)
  }
  updateUser(user:Employee): Observable<Employee> {
    return this.http.post<Employee>(this.baseUrl,user,headeroptions)
  }

  getUserData(id: number) {
    return this.http.get(this.baseUrl+'/'+id)
  }

  
}

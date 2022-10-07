import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUser(){
    return this.http.get("http://localhost:8080/getUser");
  }
  getUserById(id:any){
    return this.http.get(`http://localhost:8080/getUser/${id}`);
  }
  addUser(user:any){
    return this.http.post("http://localhost:8080/addUser",user);
  }
  loginUser(user:any){
    return this.http.post("http://localhost:8080/loginUser",user);
  }
  deleteUser(id:any){
    return this.http.delete(`http://localhost:8080/delete/${id}`);
  }
  updateUser(id:any,user:any){
    return this.http.put(`http://localhost:8080/updateUser/${id}`,user);
  }
}

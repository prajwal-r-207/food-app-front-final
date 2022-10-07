import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private http:HttpClient) { }

  addItem(id:any,item:any){
    return this.http.post(`http://localhost:8080/addItem/${id}`,item);
  }
}

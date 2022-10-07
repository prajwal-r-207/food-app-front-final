import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient) { }

  getFoodProducts(){
    return this.http.get("http://localhost:8080/getProduct");
  }
  addFoodProduct(id:any,foodProduct:any){
    return this.http.post(`http://localhost:8080/addProduct/${id}`,foodProduct);
  }
  editFoodProduct(foodProduct:any){
    
    return this.http.put("http://localhost:8080/updateProduct",foodProduct);
  }
  deleteFoodProduct(id:any){
    return this.http.delete(`http://localhost:8080/deleteProduct/${id}`);
  }
}

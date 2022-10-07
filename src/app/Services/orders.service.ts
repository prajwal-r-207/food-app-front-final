import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http: HttpClient) { }

  // get order by order id
  getOrderByOrderId(id:any){
    return this.http.get(`http://localhost:8080/getOrderById/${id}`);
  }
  // get orders by user id
  getOrdersByUserId(id:any){
    return this.http.get(`http://localhost:8080/order/${id}`);
  }
  // id is user id
  addOrder(id:any,order:any){
    return this.http.post(`http://localhost:8080/addOrder/${id}`,order);
  }
  // addOrder(order:any){
  //   return this.http.post("http://localhost:8080/addOrder/4",order);
  // }
  // id is order id
  deleteOrder(id:any){
    return this.http.delete(`http://localhost:8080/delete/order/${id}`)
  }
  // id is user id
  updateOrder(id:any,order:any){
    return this.http.put(`http://localhost:8080/updateOrder/${id}`,order)
  }
}

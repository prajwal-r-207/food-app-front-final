import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrdersService } from 'src/app/Services/orders.service';

@Component({
  selector: 'app-get-orders',
  templateUrl: './get-orders.component.html',
  styleUrls: ['./get-orders.component.css']
})
export class GetOrdersComponent implements OnInit {
  result:any;
  data:any;
  constructor(private orders:OrdersService,private router: Router) { }

  ngOnInit(): void {
    let userID=localStorage.getItem('userID')
    this.orders.getOrdersByUserId(userID).subscribe((res)=>{
      this.result=res;
      console.log(this.result);
      
    })
  }
  deleteOrder(id:any){
    this.orders.deleteOrder(id).subscribe((res)=>{
      this.data=res;
      console.log(this.data);
      this.router.navigate(['../get-orders']).then(()=>{window.location.reload()})
    })
  }
}

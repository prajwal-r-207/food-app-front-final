import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/Services/orders.service';

@Component({
  selector: 'app-final-order',
  templateUrl: './final-order.component.html',
  styleUrls: ['./final-order.component.css']
})
export class FinalOrderComponent implements OnInit {

  result:any;
  constructor(private orders:OrdersService) { }

  ngOnInit(): void {
    this.orders.getOrderByOrderId(localStorage.getItem('orderID')).subscribe((res)=>{
      this.result=res;
      console.log(this.result);
      
    })
  }

}

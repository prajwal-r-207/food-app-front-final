import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { OrdersService } from 'src/app/Services/orders.service';

@Component({
  selector: 'app-final-order',
  templateUrl: './final-order.component.html',
  styleUrls: ['./final-order.component.css']
})
export class FinalOrderComponent implements OnInit {

  result:any;
  dataSource!: MatTableDataSource<any>;
  displayedColumns:string[]=['id','item','price','quantity','total'];
  constructor(private orders:OrdersService) { }

  ngOnInit(): void {
    this.orders.getOrderByOrderId(localStorage.getItem('orderID')).subscribe((res)=>{
      this.result=res;
      this.dataSource = new MatTableDataSource(this.result.items);
      console.log(this.result);
      
    })
  }

}

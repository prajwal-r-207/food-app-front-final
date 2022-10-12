import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
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
  dataSource!: MatTableDataSource<any>;
  displayedColumns:string[]=['id','customerName','contactNumber','totalPrice','orderCreatetime','orderDeliverytime','actions'];
  constructor(private orders:OrdersService,private router: Router) { }

  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) matSort! : MatSort;

  ngOnInit(): void {
    let userID=localStorage.getItem('userID')
    this.orders.getOrdersByUserId(userID).subscribe((res)=>{
      this.result=res;
      this.dataSource = new MatTableDataSource(this.result);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.matSort;
      console.log(this.result);
      
    })
  }
  filterData($event : any){
    this.dataSource.filter = $event.target.value;
  }
  deleteOrder(id:any){
    this.orders.deleteOrder(id).subscribe((res)=>{
      this.data=res;
      console.log(this.data);
      this.router.navigate(['../get-orders']).then(()=>{window.location.reload()})
    })
  }
}

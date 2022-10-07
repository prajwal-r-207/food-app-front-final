import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { OrdersService } from 'src/app/Services/orders.service';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {
  result:any;
  constructor( private order: OrdersService,private router: Router) { }

  ngOnInit(): void {
  }
  addOrder(form: NgForm){
    let userID = localStorage.getItem('userID')
    this.order.addOrder(userID,form.value).subscribe((res)=>{
      console.log("add-order component");
      console.log(res);
      this.result=res;
      localStorage.setItem("orderID",this.result.id)
      console.log(localStorage.getItem('orderID'));
      this.router.navigate(['add-items'])
    })
    
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemsService } from 'src/app/Services/items.service';
import { MenuService } from 'src/app/Services/menu.service';
import { OrdersService } from 'src/app/Services/orders.service';

@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.css']
})
export class AddItemsComponent implements OnInit {

  result:any;
  data:any;
  orderID = localStorage.getItem('orderID')
  cName:any;
  cNumber:any;
  total=0;
  quantity:any;
  isLoading=false;
  available:any=[];
  map = new Map<any, any>();
  constructor(private menu:MenuService,private orders: OrdersService,private items:ItemsService,private router:Router) { }

  ngOnInit(): void {
    this.menu.getFoodProducts().subscribe((res)=>{
      this.result=res;
      console.log(this.result);
      
      for(let r of this.result){
        console.log(r);
        
        if(r.availability == "yes"){
          console.log("yes");
          this.available.push(r);
          console.log(this.available);
          
        }
      }
      console.log(this.available);
      
    })
    this.orders.getOrderByOrderId(this.orderID).subscribe((res)=>{
      this.data=res;
      console.log("add-items ngOnInit");
      console.log(this.data);
      
      this.cName=this.data.customerName;
      this.cNumber=this.data.contactNumber;
      this.isLoading=true;
    })
  }
  items_list(id: any) {
    if (this.map.has(id)) {
      this.map.set(id, this.map.get(id) + 1);
    } else {
      this.map.set(id, 1);
    }
    this.total+=id.price
  }
  delete_items(id: any) {
    if (this.map.get(id) == 1) {
      this.map.delete(id);
    } else {
      this.map.set(id, this.map.get(id) - 1);
    }
    this.total-=id.price
  }
  finalize(){
    this.map.forEach((value: any, key: any) => {
      let item = {
        name: key.name,
        type: key.type,
        quantity: value,
        price: key.price,
      };
      console.log("finalize items:");
      console.log(item);
      
      this.items
        .addItem(localStorage.getItem('orderID'),item)
        .subscribe((res) => {
          console.log(res);
        });
    });
    this.data['totalPrice']=this.total;
    console.log("finalize order");
    console.log(this.data);
    this.orders.updateOrder(localStorage.getItem('userID'),this.data).subscribe((res)=>{
      console.log(res);
      this.router.navigate(['../final-order'])
    })
  }
}

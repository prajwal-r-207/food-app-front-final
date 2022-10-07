import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from '../Services/menu.service';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  result:any;
  isManager=false;
  data:any;
  constructor(private foodProducts:MenuService,private users:UserService,private router:Router) { }

  ngOnInit(): void {
    this.users.getUserById(localStorage.getItem('userID')).subscribe((res)=>{
      this.data=res;
      if(this.data.role == "Manager"){
        this.isManager = true;
      }
    })
    this.foodProducts.getFoodProducts().subscribe((data)=>{
      this.result=data;
      console.log(this.result);
    })
  }
  deleteProduct(id:any){
    this.foodProducts.deleteFoodProduct(id).subscribe((res)=>{
      console.log(res);
      this.router.navigate(['menu']).then(()=>{window.location.reload()})
    });
  }

}

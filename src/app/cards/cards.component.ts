import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  isManager:boolean=false;
  result:any;
  constructor(private users:UserService) { }

  ngOnInit(): void {
    this.users.getUserById(localStorage.getItem('userID')).subscribe((res)=>{
      this.result=res;
      console.log(this.result.role);
      
      if(this.result.role == "Manager"){
        this.isManager=true;
      }
    })
  }

}

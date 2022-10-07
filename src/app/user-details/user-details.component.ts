import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  result:any;
  constructor(private users:UserService,private router: Router) { }

  ngOnInit(): void {
    this.users.getUser().subscribe((res)=>{
      this.result=res;
      console.log(this.result);
      
    })
  }
  deleteUser(id:any){
    this.users.deleteUser(id).subscribe((res)=>{
      console.log(res);
      this.router.navigate(['user-details']).then(()=>{window.location.reload()})
    });
  }
}

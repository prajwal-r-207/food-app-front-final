import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../Services/user.service';

interface Role {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  foods: Role[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];
  roleList: any[] = ['Manager', 'Staff'];
  constructor(private user:UserService,private router: Router) { }

  ngOnInit(): void {
  }
  onChange(event: any){

    console.log(event.value);

  }
  regUser(form: NgForm){
    console.log(form.value);
    console.log(this.foods.values);
    
    this.user.addUser(form.value).subscribe((res)=>{
      console.log(res);
      this.router.navigate(['login'])
    })
  }
}

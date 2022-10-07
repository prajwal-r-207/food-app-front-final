import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private user:UserService,private router: Router) { }

  ngOnInit(): void {
  }
  regUser(form: NgForm){
    this.user.addUser(form.value).subscribe((res)=>{
      console.log(res);
      this.router.navigate(['login'])
    })
  }
}

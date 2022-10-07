import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  data: any;
  error=false;
  constructor(private users: UserService, private router: Router) {}

  ngOnInit(): void {}
  logUser(form: NgForm) {
    console.log(form.value);
    this.users.loginUser(form.value).subscribe((res) => {
      console.log(res);
      this.data = res;
      if (this.data == null) {
        this.error=true;
      } else {
        console.log(this.data.id);
        localStorage.setItem('userID', this.data.id);
        this.router.navigate(['cards']);
      }
    });
  }
  reset(){
    this.error=false;
  }
}

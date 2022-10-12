import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  selectedUser:any;
  roleList: any[] = ['Manager', 'Staff'];
  constructor(private users: UserService,private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.users.getUserById(id).subscribe((res)=>{
      console.log(res);
      this.selectedUser=res;
    })
  }
  onChange(event: any){

    console.log(event.value);

  }
  editUser(form: NgForm){
    let user= form.value;
    user['id']=this.selectedUser.id;
    user['name']=this.selectedUser.name;
    user['email']=this.selectedUser.email;
    console.log(user);
    this.users.updateUser(user.id,user).subscribe((res)=>{
      console.log(res);
    this.router.navigate(['user-details']);
    });
  }
}

import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../Services/user.service';
import {MatTableDataSource} from '@angular/material/table';
import { MatSort,Sort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  result:any;
  dataSource!: MatTableDataSource<any>;
  displayedColumns:string[] = ['id','name','email','role','actions']
  constructor(private users:UserService,private router: Router) { }

  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) matSort! : MatSort;

  ngOnInit(): void {
    this.users.getUser().subscribe((res:any)=>{
      this.result=res;
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.matSort;
      console.log(this.result);
    })
  }
  filterData($event : any){
    this.dataSource.filter = $event.target.value;
  }
  // ngAfterViewInit() {
  //   console.log("hello");
  //   console.log(this.result);

  // }
  deleteUser(id:any){
    this.users.deleteUser(id).subscribe((res)=>{
      console.log(res);
      this.router.navigate(['user-details']).then(()=>{window.location.reload()})
    });
  }
}

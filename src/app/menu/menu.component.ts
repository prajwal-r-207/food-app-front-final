import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
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
  dataSource!: MatTableDataSource<any>;
  displayedColumns!:string[];

  constructor(private foodProducts:MenuService,private users:UserService,private router:Router) { }

  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) matSort! : MatSort;

  ngOnInit(): void {
    this.users.getUserById(localStorage.getItem('userID')).subscribe((res)=>{
      this.data=res;
      if(this.data.role == "Manager"){
        this.displayedColumns =  ['id','name','type','about','availability','price','actions'];
        this.isManager = true;
      }
      else{
        this.displayedColumns =  ['id','name','type','about','availability','price'];
      }
    })
    this.foodProducts.getFoodProducts().subscribe((data)=>{
      this.result=data;
      this.dataSource = new MatTableDataSource(this.result);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.matSort;
      console.log(this.result);
    })
  }

  filterData($event : any){
    this.dataSource.filter = $event.target.value;
  }
  deleteProduct(id:any){
    this.foodProducts.deleteFoodProduct(id).subscribe((res)=>{
      console.log(res);
      this.router.navigate(['menu']).then(()=>{window.location.reload()})
    });
  }

}

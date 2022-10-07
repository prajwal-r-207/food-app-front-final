import { Component, OnInit } from '@angular/core';
import { NgForm,FormControl,FormGroup } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
import { MenuService } from '../Services/menu.service';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  addProductForm = new FormGroup({
    name: new FormControl(''),
    type: new FormControl(''),
    about:new FormControl(''),
    availability:new FormControl(''),
    price:new FormControl('')
  });
  constructor(private products:MenuService, private route:ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
  }
  addProduct(){
    console.log(this.addProductForm.value);
    let userID = localStorage.getItem('userID')
    this.products.addFoodProduct(userID,this.addProductForm.value).subscribe((res)=>{
      console.log(res)
      this.router.navigate(['menu'])
    }
    )
    
  }
}

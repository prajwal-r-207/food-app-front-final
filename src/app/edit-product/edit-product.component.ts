import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
import { MenuService } from '../Services/menu.service';
import { FormGroup,FormControl } from '@angular/forms';
@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  result:any;
  selectedProduct: any;
  // editProductForm = new FormGroup({
  //   productId: new FormControl,
  //   productName: new FormControl,
  //   productType: new FormControl,
  //   productDesc:new FormControl,
  //   productAvailability:new FormControl,
  //   productPrice:new FormControl
  // });
  productAvailability: any[] = ['yes', 'no'];
  constructor(private route:ActivatedRoute,private router: Router, private products:MenuService) { }
  
  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    console.log(id);
    this.products.getFoodProducts().subscribe((res)=>{
      this.result = res;
      for(let r of this.result){ 
        if(r.id == id){
          this.selectedProduct = r;
          console.log(this.selectedProduct);   
        }
      }
      // this.editProductForm.setValue({productId:this.selectedProduct.id,productName:this.selectedProduct.name,productType:this.selectedProduct.type,productDesc:this.selectedProduct.about,
      //   productAvailability:this.selectedProduct.availability,productPrice:this.selectedProduct.price })
      // this.editProductForm.setControl
    });
  }
  onChange(event: any){

    console.log(event.value);

  }
  editProduct(form:NgForm){
    // console.log(form.value+this.selectedProduct.id);
    let foodProduct = form.value;
    foodProduct["id"]=this.selectedProduct.id;
    console.log(foodProduct);
    
    this.products.editFoodProduct(foodProduct).subscribe((res)=>{
      console.log(res);
      this.router.navigate(['menu']);
    })
    
  }
}

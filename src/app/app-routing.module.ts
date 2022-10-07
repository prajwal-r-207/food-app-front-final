import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { AddItemsComponent } from './orders/add-items/add-items.component';
import { AddOrderComponent } from './orders/add-order/add-order.component';
import { FinalOrderComponent } from './orders/final-order/final-order.component';
import { GetOrdersComponent } from './orders/get-orders/get-orders.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserDetailsComponent } from './user-details/user-details.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"cards",component:CardsComponent},
  {path:"register",component:RegistrationComponent},
  {path:"user-details",component:UserDetailsComponent},
  {path:"user-details/edit-user/:id",component:EditUserComponent},
  {path:"menu",component:MenuComponent},
  {path:"menu/add-product",component:AddProductComponent},
  {path:"menu/edit-product/:id",component:EditProductComponent},
  {path:"add-order",component:AddOrderComponent},
  {path:"add-items",component:AddItemsComponent},
  {path:"final-order",component:FinalOrderComponent},
  {path:"get-orders",component:GetOrdersComponent},
   {path:"",component:LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

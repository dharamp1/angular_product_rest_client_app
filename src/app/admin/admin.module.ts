import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductAddFormComponent } from './product-add-form/product-add-form.component';



@NgModule({
  declarations: [
    ProductViewComponent,
    ProductAddFormComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ProductViewComponent
  ]
})
export class AdminModule { }

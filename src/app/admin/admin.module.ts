import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductAddFormComponent } from './product-add-form/product-add-form.component';
import { ProductEditFormComponent } from './product-edit-form/product-edit-form.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    ProductViewComponent,
    ProductAddFormComponent,
    ProductEditFormComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    ProductViewComponent,
    ProductAddFormComponent,
    ProductEditFormComponent
  ]
})
export class AdminModule { }

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductViewComponent } from './admin/product-view/product-view.component';
import { ProductAddFormComponent } from './admin/product-add-form/product-add-form.component';
import { ProductEditFormComponent } from './admin/product-edit-form/product-edit-form.component';

const routes: Routes = [
  {
    path:'view',
    component:ProductViewComponent
  },
  {
    path:'add',
    component:ProductAddFormComponent
  },
  {
    path:'edit/:id/:nm/:br/:pr',
    component:ProductEditFormComponent
  },
  {
    path:'',
    redirectTo:'/view',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormsReactiveComponent } from './forms-reactive.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [FormsReactiveComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild([{
      path:'',
      component:FormsReactiveComponent
    }])
  ]
})
export class FormsReactiveModule { }

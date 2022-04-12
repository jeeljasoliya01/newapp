import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiplicationTableComponent } from './multiplication-table.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [ MultiplicationTableComponent,],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild([{
      path: '',
      component: MultiplicationTableComponent
    }])
  ]
})
export class MultiplicationTableModule { }

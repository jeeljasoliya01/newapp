import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConditionalComponent } from './conditional.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ConditionalComponent,],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild([{
      path: '',
      component: ConditionalComponent
    }])
  ]
})
export class ConditionalModule { }

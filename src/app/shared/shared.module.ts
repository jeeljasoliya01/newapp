import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmptyComponent } from './layout/empty/empty.component';
import { FullComponent } from './layout/full/full.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    EmptyComponent,
    FullComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }

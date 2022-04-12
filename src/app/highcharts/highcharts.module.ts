import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighchartsComponent } from './highcharts.component';
import { SharedModule } from 'primeng/api';
import { HighchartsChartModule } from 'highcharts-angular';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HighchartsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    HighchartsChartModule,
    HttpClientModule,
    RouterModule.forChild([{
      path: '',
      component: HighchartsComponent
    }])
  ]
})
export class HighchartsModule { }

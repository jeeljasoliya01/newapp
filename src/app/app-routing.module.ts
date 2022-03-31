import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiCrudProductComponent } from './api-crud-product/api-crud-product.component';
import { ApiCrudStudentComponent } from './api-crud-student/api-crud-student.component';
import { ApiCrudUserComponent } from './api-crud-user/api-crud-user.component';
import { ConditionalComponent } from './conditional/conditional.component';
import { FileSizePipe } from './custom-pipes/file-size.pipe';
import { ErrorsComponent } from './errors/errors.component';
import { FormsReactiveComponent } from './forms-reactive/forms-reactive.component';
import { FormsTemplateComponent } from './forms-template/forms-template.component';
import { MultiplicationTableComponent } from './multiplication-table/multiplication-table.component';
import { PipesComponent } from './pipes/pipes.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'conditional',
  },
  {
    path:'conditional',
    component:ConditionalComponent
  },
  {
    path:'multiplication-table',
    component:MultiplicationTableComponent
  },
  {
    path:'Pipes',
    component:PipesComponent
  },
  {
    path:'forms-reactive',
    component:FormsReactiveComponent
  },
  {
    path:'forms-template',
    component:FormsTemplateComponent
  },
  {
    path:'api-crud-student',
    component:ApiCrudStudentComponent
  },
  {
    path:'api-crud-user',
    component:ApiCrudUserComponent
  },
  {
    path:'api-crud-product',
    component:ApiCrudProductComponent
  },
  {
    path:'**',
    component:ErrorsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

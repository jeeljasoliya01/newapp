import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiCrudProductComponent } from './api-crud-product/api-crud-product.component';
import { ApiCrudStudentComponent } from './api-crud-student/api-crud-student.component';
import { ApiCrudUserComponent } from './api-crud-user/api-crud-user.component';
import { ApiProductTemplateComponent } from './api-product-template/api-product-template.component';
import { ApiStudentTemplateComponent } from './api-student-template/api-student-template.component';
import { ApiTokenBaseCrudComponent } from './api-token-base-crud/api-token-base-crud.component';
import { ApiUserTemplateComponent } from './api-user-template/api-user-template.component';
import { AuthGuard } from './auth-guard/auth-guard';
import { ConditionalComponent } from './conditional/conditional.component';
import { FileSizePipe } from './custom-pipes/file-size.pipe';
import { ErrorsComponent } from './errors/errors.component';
import { FormsReactiveComponent } from './forms-reactive/forms-reactive.component';
import { FormsTemplateComponent } from './forms-template/forms-template.component';
import { LoginComponent } from './login/login.component';
import { MultiplicationTableComponent } from './multiplication-table/multiplication-table.component';
import { ParentComponent } from './parent-child/parent/parent.component';
import { PipesComponent } from './pipes/pipes.component';
import { AddUpdateComponent } from './Routing-Crud/add-update/add-update.component';
import { DeleteComponent } from './Routing-Crud/delete/delete.component';
import { ListComponent } from './Routing-Crud/list/list.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'conditional',
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'api-token-base-crud',
    canActivate:[AuthGuard],
    component:ApiTokenBaseCrudComponent
  },
  {
    path: 'parent-child',
    component: ParentComponent,
  },
  {
    path:'irispoint',
    canActivate:[AuthGuard],
    component:ApiTokenBaseCrudComponent
  },
  {
    path:'conditional',
    canActivate:[AuthGuard],
    component:ConditionalComponent
  },
  {
    path:'multiplication-table',
    canActivate:[AuthGuard],
    component:MultiplicationTableComponent
  },
  {
    path:'Pipes',
    canActivate:[AuthGuard],
    component:PipesComponent
  },
  {
    path:'forms-reactive',
    canActivate:[AuthGuard],
    component:FormsReactiveComponent
  },
  {
    path:'forms-template',
    canActivate:[AuthGuard],
    component:FormsTemplateComponent
  },
  {
    path:'api-crud-student',
    canActivate:[AuthGuard],
    component:ApiCrudStudentComponent
  },
  {
    path:'api-crud-user',
    canActivate:[AuthGuard],
    component:ApiCrudUserComponent
  },
  {
    path:'api-student-template',
    canActivate:[AuthGuard],
    component:ApiStudentTemplateComponent
  },
  {
    path:'api-product-template',
    canActivate:[AuthGuard],
    component:ApiProductTemplateComponent
  },
  {
    path:'api-user-template',
    canActivate:[AuthGuard],
    component:ApiUserTemplateComponent
  },
  {
    path:'api-token-based-crud',
    canActivate:[AuthGuard],
    component:ApiTokenBaseCrudComponent
  },
  {
    path:'api-crud-product',
    canActivate:[AuthGuard],
    component:ApiCrudProductComponent
  },
  {
    path:'list',
    canActivate:[AuthGuard],
    component:ListComponent
  },
  {
    path:'add',
    canActivate:[AuthGuard],
    component:AddUpdateComponent
  },
  {
    path:'update/:id',
    canActivate:[AuthGuard],
    component:AddUpdateComponent
  },
  {
    path:'delete/:id',
    canActivate:[AuthGuard],
    component:DeleteComponent
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

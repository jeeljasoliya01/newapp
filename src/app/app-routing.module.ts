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
import { ErrorsComponent } from './errors/errors.component';
import { FormsReactiveComponent } from './forms-reactive/forms-reactive.component';
import { FormsTemplateComponent } from './forms-template/forms-template.component';
import { HighchartsComponent } from './highcharts/highcharts.component';
import { LoginComponent } from './login/login.component';
import { MultiplicationTableComponent } from './multiplication-table/multiplication-table.component';
import { AccordionComponent } from './ng-bootstrap/accordion/accordion.component';
import { CarouselComponent } from './ng-bootstrap/carousel/carousel.component';
import { ModelCrudComponent } from './ng-bootstrap/model-crud/model-crud.component';
import { ParentComponent } from './parent-child/parent/parent.component';
import { PipesComponent } from './pipes/pipes.component';
import { CalendarComponent } from './prime-ng/calendar/calendar.component';
import { DocksComponent } from './prime-ng/docks/docks.component';
import { AddUpdateComponent } from './Routing-Crud/add-update/add-update.component';
import { DeleteComponent } from './Routing-Crud/delete/delete.component';
import { ListComponent } from './Routing-Crud/list/list.component';
import { ParentrxjsComponent } from './rxjs-example/parentrxjs/parentrxjs.component';
import { EmptyComponent } from './shared/layout/empty/empty.component';
import { FullComponent } from './shared/layout/full/full.component';
import { SidebarComponent } from './sidebar/sidebar.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
  {
    path: '',
    component: EmptyComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
    ]
  },
  {
    path: 'app',
    component: SidebarComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'conditional',
        loadChildren: () => import('./conditional/conditional.module').then(x => x.ConditionalModule)
      },
      {
        path: 'multiplication-table',
        loadChildren: () => import('./multiplication-table/multiplication-table.module').then(x => x.MultiplicationTableModule)
      },
      {
        path: 'highcharts',
        loadChildren: () => import('./highcharts/highcharts.module').then(x => x.HighchartsModule)
      },
      {
        path: 'forms-reactive',
        loadChildren: () => import('./forms-reactive/forms-reactive.module').then(x => x.FormsReactiveModule)
      },
      {
        path: 'api-token-base-crud',
        component: ApiTokenBaseCrudComponent
      },
      {
        path: 'parent-child',
        component: ParentComponent,
      },
      {
        path: 'accordion',
        component: AccordionComponent,
      },
      {
        path: 'carousel',
        component: CarouselComponent,
      },
      {
        path: 'Rxjsparent-child',
        component: ParentrxjsComponent,
      },
      {
        path: 'calendar',
        component: CalendarComponent,
      },
      {
        path: 'model-crud',
        component: ModelCrudComponent,
      },
      {
        path: 'irispoint',
        component: ApiTokenBaseCrudComponent,
      },
      {
        path: 'Pipes',
        component: PipesComponent,
      },

      {
        path: 'forms-template',
        component: FormsTemplateComponent,
      },
      {
        path: 'api-crud-student',
        component: ApiCrudStudentComponent,
      },
      {
        path: 'api-crud-user',
        component: ApiCrudUserComponent,
      },
      {
        path: 'api-student-template',
        component: ApiStudentTemplateComponent,
      },
      {
        path: 'api-product-template',
        component: ApiProductTemplateComponent,
      },
      {
        path: 'api-user-template',
        component: ApiUserTemplateComponent,
      },
      {
        path: 'api-token-based-crud',
        component: ApiTokenBaseCrudComponent,
      },
      {
        path: 'api-crud-product',
        component: ApiCrudProductComponent,
      },
      {
        path: 'docks',
        component: DocksComponent,
      },
      {
        path: 'list',
        component: ListComponent,
      },
      {
        path: 'add',
        component: AddUpdateComponent,
      },
      {
        path: 'update/:id',
        component: AddUpdateComponent,
      },
      {
        path: 'delete/:id',
        component: DeleteComponent,
      },
    ]
  },
  {
    path: '**',
    component: ErrorsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

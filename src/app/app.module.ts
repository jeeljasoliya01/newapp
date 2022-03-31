import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConditionalComponent } from './conditional/conditional.component';
import { MultiplicationTableComponent } from './multiplication-table/multiplication-table.component';
import { PipesComponent } from './pipes/pipes.component';
import { ShortNumberPipe } from './custom-pipes/short-number.pipe';
import { FileSizePipe } from './custom-pipes/file-size.pipe';
import { UserFullNamePipe } from './custom-pipes/user-full-name.pipe';
import { SqurerootPipe } from './custom-pipes/squreroot.pipe';
import { PowerPipe } from './custom-pipes/power.pipe';
import { MultiplierPipe } from './custom-pipes/multiplier.pipe';
import { GigabyteToMegabytePipe } from './custom-pipes/gigabyte-to-megabyte.pipe';
import { TrimPipe } from './custom-pipes/trim.pipe';
import { TempConvertPipe } from './custom-pipes/temp-convert.pipe';
import { HighlightsDirective } from './custom-directive/highlights.directive';
import { ColorMethodDirective } from './custom-directive/color-method.directive';
import { TestDirective } from './custom-directive/test.directive';
import { ToogleDirective } from './custom-directive/toogle.directive';
import { FormsReactiveComponent } from './forms-reactive/forms-reactive.component';
import { FormsTemplateComponent } from './forms-template/forms-template.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiCrudStudentComponent } from './api-crud-student/api-crud-student.component';
import { ApiCrudProductComponent } from './api-crud-product/api-crud-product.component';
import { ApiCrudUserComponent } from './api-crud-user/api-crud-user.component';
import { ApiTokenBaseCrudComponent } from './api-token-base-crud/api-token-base-crud.component';
import { RouterModule } from '@angular/router';
import { ErrorsComponent } from './errors/errors.component';

@NgModule({
  declarations: [
    AppComponent,
    ConditionalComponent,
    MultiplicationTableComponent,
    PipesComponent,
    ShortNumberPipe,
    FileSizePipe,
    UserFullNamePipe,
    SqurerootPipe,
    PowerPipe,
    MultiplierPipe,
    GigabyteToMegabytePipe,
    TrimPipe,
    TempConvertPipe,
    HighlightsDirective,
    ColorMethodDirective,
    TestDirective,
    ToogleDirective,
    FormsReactiveComponent,
    FormsTemplateComponent,
    ApiCrudStudentComponent,
    ApiCrudProductComponent,
    ApiCrudUserComponent,
    ApiTokenBaseCrudComponent,
    ErrorsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

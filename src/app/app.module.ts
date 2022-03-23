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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

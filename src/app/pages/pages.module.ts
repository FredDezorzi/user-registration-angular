import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Module Routing
import { RoutingModule } from './routing.module';
import { ReactiveFormsModule } from '@angular/forms';


//Pages
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { PageErrorComponent } from './page-error/page-error.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    HomeComponent,
    RegisterComponent,
    PageErrorComponent
  ],
  imports: [
    CommonModule,
    RoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { PageErrorComponent } from './page-error/page-error.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'edit/:id',
    component: RegisterComponent
  },
  { 
    path: '404', 
    component: PageErrorComponent 
  },
  { 
    path: '**', 
    redirectTo: '404' 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }

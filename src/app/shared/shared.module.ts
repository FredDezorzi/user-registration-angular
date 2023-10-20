import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Components
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    MenuComponent,
    
  ],
  exports: [
    MenuComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }

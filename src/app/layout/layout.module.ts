import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';

import { MainComponent } from './main/main.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    MainComponent,
    NavbarComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    SharedModule,
  ]
})
export class LayoutModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsComponent } from './contacts.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { SharedModule } from '../../shared/shared.module';
import { ContactsFormComponent } from './contacts-form/contacts-form.component';


@NgModule({
  declarations: [
    ContactsComponent,
    ContactsListComponent,
    ContactsFormComponent
  ],
  imports: [
    CommonModule,
    ContactsRoutingModule,
    SharedModule
  ]
})
export class ContactsModule { }

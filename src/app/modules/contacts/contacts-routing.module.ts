import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactsFormComponent } from './contacts-form/contacts-form.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactsComponent } from './contacts.component';


const routes: Routes = [
  {
    path:'',
    component:ContactsComponent,
    children:[
      {
        path:'',
        component:ContactsListComponent,
      },
      {
        path:'new',
        component:ContactsFormComponent
      },
      {
        path:'edit/:id',
        component:ContactsFormComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactsRoutingModule { }

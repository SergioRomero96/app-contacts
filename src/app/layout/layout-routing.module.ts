import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';


const routes: Routes = [
  {
    path:'',
    component:MainComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: () => import('../modules/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'contacts',
        loadChildren: () => import('../modules/contacts/contacts.module').then(m => m.ContactsModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path:'app',
    loadChildren:() => import('./layout/layout.module').then(m => m.LayoutModule)
  },
  {
    path:'',
    redirectTo:'app',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

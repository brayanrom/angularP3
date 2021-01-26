import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EdadGuard} from './edad.guard'
import {FirstComponent} from './first/first.component';
import {SecondComponent} from './second/second.component';
import{NotfoundComponent} from './notfound/notfound.component'

const routes: Routes = [
  {path:'first',component:FirstComponent},
  {path:'second',component:SecondComponent,canActivate:[EdadGuard]},
  {path:'**',component:NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

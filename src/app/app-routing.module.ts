import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {path: '', component: HomeComponent},
      {path: 'home', component: HomeComponent}
    ],
    component: LayoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {anchorScrolling: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

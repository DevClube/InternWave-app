import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginPageComponent} from "./Component/login-page/login-page.component";

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  //add routing here
  routes: Routes = [
    { path: '/login', component: LoginPageComponent },
    {path:'', redirectTo: '/login', pathMatch: 'full'},
    ]

}

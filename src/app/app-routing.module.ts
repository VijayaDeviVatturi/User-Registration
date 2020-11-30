import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUPComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {path: '',redirectTo:'/signin',pathMatch:'full'},
  {path:'signin',component:SignInComponent},
  {path: 'signup',component:SignUPComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

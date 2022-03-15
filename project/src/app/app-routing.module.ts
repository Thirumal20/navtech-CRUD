import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { LoginGuard } from './core/gaurds/login.guard';
import { OrdersViewComponent } from './orders/orders-view/orders-view.component';

const routes: Routes = [
  { path:'',  redirectTo: 'login', pathMatch: 'full' },
  { path: 'orders', component: OrdersViewComponent },
  // { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  // { path: '**', component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

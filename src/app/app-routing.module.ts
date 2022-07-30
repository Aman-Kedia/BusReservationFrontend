import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBusComponent } from './add-bus/add-bus.component';
import { AddRouteComponent } from './add-route/add-route.component';
import { AdminComponent } from './admin/admin.component';
import { BookingComponent } from './booking/booking.component';
import { BuslistComponent } from './buslist/buslist.component';
import { DwrapperComponent } from './dwrapper/dwrapper.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PasswordComponent } from './password/password.component';
import { PaymentComponent } from './payment/payment.component';
import { ProfileComponent } from './profile/profile.component';
import { RemoveBusComponent } from './remove-bus/remove-bus.component';
import { SeatSelectionComponent } from './seat-selection/seat-selection.component';
import { WalletComponent } from './wallet/wallet.component';

const routes: Routes = [

  {
    path: '', component: HomeComponent
  },

{
  path:'adminHome',component:AdminComponent
},
{
  path:'addRoute',component:AddRouteComponent
},
{
  path:'addBuses',component:AddBusComponent
},
{
  path:'updateBuses',component:RemoveBusComponent
},
{
  path:'Login', component:LoginComponent
},
{
  path:'BusList', component:BuslistComponent
},
{
  path:'payment', component:PaymentComponent
},
{
  path:'feedback', component:FeedbackComponent
},
  {
    path: 'homeLink', component: HomeComponent
  },
  {
    path: 'dashboard', component: BookingComponent
  },
  {
    path: 'profile', component: ProfileComponent
  },
  {
    path: 'password', component: PasswordComponent
  },
  {
    path: 'wallet', component: WalletComponent
  },
  {
    path: 'Login', component: LoginComponent
  },
  {
    path: 'BusList', component: BuslistComponent
  },
  {
    path: 'select-seat', component: SeatSelectionComponent
  },
  {
    path: "**", component: ErrorpageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), RouterModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }

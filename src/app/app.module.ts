import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DwrapperComponent } from './dwrapper/dwrapper.component';
import { BookingComponent } from './booking/booking.component';
import { PasswordComponent } from './password/password.component';
import { ProfileComponent } from './profile/profile.component';
import { WalletComponent } from './wallet/wallet.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
// import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { BuslistComponent } from './buslist/buslist.component';
import { SeatSelectionComponent } from './seat-selection/seat-selection.component';
import { PaymentComponent } from './payment/payment.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { AdminComponent } from './admin/admin.component';
import { RemoveBusComponent } from './remove-bus/remove-bus.component';
import { AddBusComponent } from './add-bus/add-bus.component';
import { AddRouteComponent } from './add-route/add-route.component';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    DwrapperComponent,
    BookingComponent,
    PasswordComponent,
    ProfileComponent,
    WalletComponent,
    ErrorpageComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    BuslistComponent,
    SeatSelectionComponent,
    PaymentComponent,
    AdminComponent,
    RemoveBusComponent,
    AddBusComponent,
    AddRouteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ], 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

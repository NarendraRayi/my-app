import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { SquareComponent } from './square/square.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RectangularComponent } from './rectangular/rectangular.component';
import { EventRegistrationComponent } from './event-registration/event-registration.component';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';
import { CartComponent } from './cart/cart.component';
import { Addocart2Component } from './addocart2/addocart2.component';
import { EmplyoeesComponent } from './emplyoees/emplyoees.component';
import { PipesComponent } from './pipes/pipes.component';
import { PipePipe } from './pipe.pipe';
import { PricePipe } from './price.pipe';
import { PackagePipe } from './package.pipe';
import { AgePipe } from './age.pipe';
import { CarsComponent } from './cars/cars.component';
import { GpayComponent } from './gpay/gpay.component';
import { HttpClientModule } from '@angular/common/http';
import { VehicleComponent } from './vehicle/vehicle.component';
import { BankComponent } from './bank/bank.component';
import { ItemsComponent } from './items/items.component';
import { MediapostComponent } from './mediapost/mediapost.component';
import { MailComponent } from './mail/mail.component';
import { PersonComponent } from './person/person.component';
import { BoredomComponent } from './boredom/boredom.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { StarComponent } from './star/star.component';
import { ProductComponent } from './product/product.component';
import { NavComponent } from './nav/nav.component';
import { CartlistComponent } from './cartlist/cartlist.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PagenotfoundComponent,
    HomeComponent,
    CalculatorComponent,
    SquareComponent,
    DatabindingComponent,
    EventBindingComponent,
    TwoWayBindingComponent,
    RectangularComponent,
    EventRegistrationComponent,
    StudentRegistrationComponent,
    CartComponent,
    Addocart2Component,
    EmplyoeesComponent,
    PipesComponent,
    PipePipe,
    PricePipe,
    PackagePipe,
    AgePipe,
    CarsComponent,
    GpayComponent,
    VehicleComponent,
    BankComponent,
    ItemsComponent,
    MediapostComponent,
    MailComponent,
    PersonComponent,
    BoredomComponent,
    CreateVehicleComponent,
    CreateUserComponent,
    ParentComponent,
    ChildComponent,
    StarComponent,
    ProductComponent,
    NavComponent,
    CartlistComponent,
    VehicleDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

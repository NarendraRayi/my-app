import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Addocart2Component } from './addocart2/addocart2.component';
import { AuthGuard } from './auth.guard';
import { BankComponent } from './bank/bank.component';
import { BoredomComponent } from './boredom/boredom.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CarsComponent } from './cars/cars.component';
import { CartComponent } from './cart/cart.component';
import { CartlistComponent } from './cartlist/cartlist.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { EmplyoeesComponent } from './emplyoees/emplyoees.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { EventRegistrationComponent } from './event-registration/event-registration.component';
import { GpayComponent } from './gpay/gpay.component';
import { HomeComponent } from './home/home.component';
import { ItemsComponent } from './items/items.component';
import { LoginComponent } from './login/login.component';
import { MailComponent } from './mail/mail.component';
import { MediapostComponent } from './mediapost/mediapost.component';
import { NavComponent } from './nav/nav.component';
import { NotifyGuard } from './notify.guard';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ParentComponent } from './parent/parent.component';
import { PersonComponent } from './person/person.component';
import { PipesComponent } from './pipes/pipes.component';
import { ProductComponent } from './product/product.component';
import { RectangularComponent } from './rectangular/rectangular.component';
import { SquareComponent } from './square/square.component';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { VehicleComponent } from './vehicle/vehicle.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,canActivate:[AuthGuard],
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'calculator', component: CalculatorComponent },
      { path: 'square', component: SquareComponent },
      { path: 'rectangular', component: RectangularComponent },
      { path: 'databinding', component: DatabindingComponent },
      { path: 'eventbinding', component: EventBindingComponent },
      { path: 'twowaybinding', component: TwoWayBindingComponent },
      { path: 'eventregistration', component: EventRegistrationComponent },
      { path: 'studentregistration', component: StudentRegistrationComponent },
      { path: 'cart', component: CartComponent },
      { path: 'cart2', component: Addocart2Component },
      { path: 'employees', component: EmplyoeesComponent },
      { path: 'pipes', component: PipesComponent },
      { path: 'cars', component: CarsComponent },
      { path: 'gpay', component: GpayComponent },
      { path: 'vehicle', component: VehicleComponent },
      { path: 'bank', component: BankComponent },
      { path: 'items', component: ItemsComponent },
      { path: 'mediapost', component: MediapostComponent },
      { path: 'mail', component: MailComponent },
      { path: 'person', component: PersonComponent },
      { path: 'boredom', component: BoredomComponent },
      { path: 'createvehicle', component: CreateVehicleComponent, canDeactivate: [NotifyGuard] },
      { path: 'createuser', component: CreateUserComponent },
      { path: 'parent', component: ParentComponent },
      { path: 'product', component: ProductComponent },
      { path: "nav", component: NavComponent },
      { path: 'cartlist', component: CartlistComponent },
      {path:'vehicledetails/:id',component: VehicleDetailsComponent}
    ],
  },
  { path: '', component: LoginComponent },
  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { AuthComponent } from './auth/auth.component';
import { WeddingsComponent } from './weddings/weddings.component';
import { LifestyleComponent } from './lifestyle/lifestyle.component';
import { FoodAndBeverageComponent } from './food-and-beverage/food-and-beverage.component';
import { CelebrationsComponent } from './celebrations/celebrations.component';
import { AccomidationComponent } from './accomidation/accomidation.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OffersComponent } from './offers/offers.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';


const routes: Routes = [
   {path : 'accomidation', component: AccomidationComponent},
   {path : 'celebrations', component: CelebrationsComponent},
   {path: 'food-and-beverage' , component: FoodAndBeverageComponent},
   {path: 'lifestyle', component: LifestyleComponent},
   {path: 'weddings' , component: WeddingsComponent},
   {path : 'offers' , component: OffersComponent},
   {path: 'auth' , component: AuthComponent},
   {path : 'signin' , component: SigninComponent},
   {path : 'signup' , component: SignupComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurrencyRateComponent } from './currency-rate/currency-rate.component';


const routes: Routes = [
  { path: '', component: CurrencyRateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

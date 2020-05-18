import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DebitUsingSlipComponent } from './debit-using-slip/debit-using-slip.component';
import { CreditUsingSlipComponent } from './credit-using-slip/credit-using-slip.component';
import { CreditUsingChequeComponent } from './credit-using-cheque/credit-using-cheque.component';
import { DebitUsingChequeComponent } from './debit-using-cheque/debit-using-cheque.component';


const routes: Routes = [
  {path : 'debitUsingSlip',component: DebitUsingSlipComponent},
  {path : 'creditUsingSlip',component: CreditUsingSlipComponent},
  {path : 'debitUsingCheque',component: DebitUsingChequeComponent},
  {path : 'creditUsingCheque',component: CreditUsingChequeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


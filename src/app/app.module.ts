import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { DebitUsingChequeComponent } from './debit-using-cheque/debit-using-cheque.component';
import { DebitUsingSlipComponent } from './debit-using-slip/debit-using-slip.component';
import { CreditUsingChequeComponent } from './credit-using-cheque/credit-using-cheque.component';
import { CreditUsingSlipComponent } from './credit-using-slip/credit-using-slip.component';
import { FormsModule } from '@angular/forms';
import { MytransactionService } from './services/mytransaction.service';

@NgModule({
  declarations: [
    AppComponent,
    DebitUsingChequeComponent,
    DebitUsingSlipComponent,
    CreditUsingChequeComponent,
    CreditUsingSlipComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [MytransactionService],
  bootstrap: [AppComponent]
})
export class AppModule { }

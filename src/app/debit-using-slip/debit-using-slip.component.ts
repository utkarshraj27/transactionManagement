import { Component, OnInit } from '@angular/core';
import { MytransactionService } from '../services/mytransaction.service';
import { UsingSlip } from '../model/usingSlip';
import { Transaction } from '../model/transaction';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-debit-using-slip',
  templateUrl: './debit-using-slip.component.html',
  styleUrls: ['./debit-using-slip.component.css']
})
export class DebitUsingSlipComponent implements OnInit {

  service:MytransactionService;
  constructor(service:MytransactionService) {
    this.service=service;
   }

  ngOnInit(): void {

  }
  usingslip:UsingSlip=null;

  debitUsingSlip(form:any){
    let details=form.value;
    let transAccountId=details.transAccountId;
    let transAmountText = details.transAmount;
    this.usingslip=new UsingSlip();
    this.usingslip.transAccountId=transAccountId;
    this.usingslip.transAmountText=transAmountText;

    


  }
}


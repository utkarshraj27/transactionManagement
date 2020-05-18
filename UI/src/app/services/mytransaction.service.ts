import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transaction } from '../model/transaction';
import { UsingSlip } from '../model/usingSlip';
import { Cheque } from '../model/cheque';
import { UsingCheque } from '../model/usingCheque';

@Injectable({
  providedIn: 'root'
})
export class MytransactionService {

  
  client:HttpClient ;
  constructor(client:HttpClient ){
  this.client=client;
  }

  baseUrl="http://localhost:8082";


  debitUsingSlip(): Observable<Transaction>{
    let url=this.baseUrl+"/debitUsingSlip";
    let result:Observable<Transaction>= this.client.put<Transaction>(url,UsingSlip);
    return result;
   }

   creditUsingSlip(): Observable<String>{
    let url=this.baseUrl+"/creditUsingSlip";
    let result:Observable<String>= this.client.put<String>(url,UsingSlip);
    return result;
   }

   creditUsingCheque(): Observable<String>{
    let url=this.baseUrl+"/creditUsingCheque";
    let result:Observable<String>= this.client.put<String>(url,UsingCheque);
    return result;
   }

   debitUsingCheque(): Observable<String>{
    let url=this.baseUrl+"/debitUsingCheque";
    let result:Observable<String>= this.client.put<String>(url,UsingCheque);
    return result;
   }
  
}

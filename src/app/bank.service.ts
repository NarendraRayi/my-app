import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from './account';

@Injectable({
  providedIn: 'root'
})
export class BankService {

  constructor(private _httpClient: HttpClient) { }
  getBank(): Observable<Account[]>{
    return this._httpClient.get<Account[]>('https://6128991386a213001729f9df.mockapi.io/test/v1/principals');
  }
  getSortedBank(balance: string, currency: string): Observable <Account[]>{
   return this._httpClient.get<Account[]>('https://6128991386a213001729f9df.mockapi.io/test/v1/principals' + '?sortBy=' + balance + '&order=' + currency);
  }
}

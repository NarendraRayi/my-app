import { Component, OnInit } from '@angular/core';
import { Account } from '../account';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css']
})
export class BankComponent implements OnInit {

  public accounts: Account[] = [];
  constructor(private _bankService: BankService) { 
    
    this._bankService.getBank().subscribe(
      (data: any) => {
        this.accounts = data;
      },
      (err: any) => {
        alert('Internal Server Error');
      }
        
    )

  }

  ngOnInit(): void {
  }


}

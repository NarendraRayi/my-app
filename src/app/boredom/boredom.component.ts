import { Component, OnInit } from '@angular/core';
import { Boredom } from '../boredom';
import { BoredomService } from '../boredom.service';

@Component({
  selector: 'app-boredom',
  templateUrl: './boredom.component.html',
  styleUrls: ['./boredom.component.css']
})
export class BoredomComponent implements OnInit {

  public boredom : Boredom = <Boredom>{};
  constructor(private _boredomService: BoredomService) { 
    this._boredomService.getBoredom().subscribe(
      (data: any) => {
        this.boredom = data;
      },
      (err: any) => {
        alert('Internal Server Errror');
      }
    )
  }

  ngOnInit(): void {
  }

}

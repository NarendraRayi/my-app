import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent implements OnInit {
 
  public number: number = 0;
 
  public result: number = 0;

  area() {
    this.result = this.number * this.number;
  }
  perimeter() {
    this.result = this.number * 4;
  }

  constructor() { }

  ngOnInit(): void {
  }

}

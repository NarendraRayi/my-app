import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rectangular',
  templateUrl: './rectangular.component.html',
  styleUrls: ['./rectangular.component.css']
})
export class RectangularComponent implements OnInit {
 
  public length: number = 0;
  public bredth: number = 0;
  public result: number = 0;
  area() {
    this.result = this.length * this.bredth;
  }
  perimeter() {
    this.result = 2*(this.length + this.bredth);
  }

  constructor() { }

  ngOnInit(): void {
  }

}

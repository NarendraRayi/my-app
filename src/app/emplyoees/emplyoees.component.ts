import { Component, OnInit } from '@angular/core';
import { Employee2 } from '../employee2';

@Component({
  selector: 'app-emplyoees',
  templateUrl: './emplyoees.component.html',
  styleUrls: ['./emplyoees.component.css']
})
export class EmplyoeesComponent implements OnInit {

  public name: string = '';
  public age: number = 0;
  public company: string = '';
  public package : number =0;
  public employees: Employee2[] = [];
  public totalPackage: number = 0;
  public updatedbalance: number = 0;
  constructor() { }

  ngOnInit(): void {
  }
  register() {
    this.employees.push(
      {
       'name':this.name,
        'age': this.age,
       'company': this.company,
        'package': this.package
      });
    this.total();
  }
  delete(i: number) {
    this.updatedBalance(this.employees[i].package);
    this.employees.splice(i, 1);

  }
  clear() {
    this.employees = [];
  }
  sortLowToHigh() {
    this.employees.sort((a, b) => a.package - b.package);
  }
  sortHighToLow() {
    this.employees.sort((a, b) => b.package - a.package);
  }
  total() {
    this.totalPackage = 0;
    for(let employee of this.employees)
    this.totalPackage = this.totalPackage + employee.package;
  }
  updatedBalance(p:number) {
    this.totalPackage = this.totalPackage - p;
  }

}

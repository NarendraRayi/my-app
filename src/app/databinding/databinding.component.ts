import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { Student } from '../student';
import { User } from '../user';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {

  public age: number = 22;
  public name: string = 'Ramarao';
  public isIndian: boolean = true;
  public phones: number[] = [4554, 9559, 7955];
  public courses: string[] = ["Angular", "React"];
  public user: User = { name: 'Ramu', city: 'Texas' };
  public student: Student = { name: 'Gopi', id: 44, marks: 534 };
  public employee: Employee = { name: 'Nari', company: 'TCS', salary: 55350 };
  public users: User[] = [
    { name: 'Ramesh', city: 'kakinada' },
    { name: 'Teja', city: 'Hyd' },
    { name: 'Janu', city: 'chennai' }
  ];
  public students: Student[] = [
    { name: 'Ramesh',id: 223, marks:545 },
    { name: 'Teja', id:434, marks:566},
    { name: 'Janu',id:345, marks: 432 }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',
  styleUrls: ['./student-registration.component.css']
})
export class StudentRegistrationComponent implements OnInit {

  public sname: string = '';
  public snames: string[] = [];
  register() {
    this.snames.push(this.sname);
  }
  delete() {
    this.snames.pop();
  }
  constructor() { }

  ngOnInit(): void {
  }
  
  reverse() {
    this.snames.reverse();
  }

}

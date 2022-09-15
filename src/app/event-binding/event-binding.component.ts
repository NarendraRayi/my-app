import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  submit() {
    alert("Submit clicked");
  }
  test(){
    alert('keyup')
  }
  test2(){
    alert('keydown')
  }
  test3(){
    alert('keypress')
  }
  test4(){
    alert('Hello')
  }
  test5(){
    alert('Hello leave')
  }
  cancel() {
    alert("cancel double clicked");
  }
}

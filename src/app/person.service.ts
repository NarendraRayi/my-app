import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from './person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private _httpClient: HttpClient) { }
  getPerson(): Observable <Person[]> {
    return this._httpClient.get<Person[]>('https://jsonplaceholder.typicode.com/users');
  }
}

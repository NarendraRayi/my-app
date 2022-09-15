import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Boredom } from './boredom';

@Injectable({
  providedIn: 'root'
})
export class BoredomService {

  constructor(private _httpClient: HttpClient) { }
  getBoredom(): Observable<Boredom>{
    return this._httpClient.get<Boredom>('https://www.boredapi.com/api/activity');
  }
}

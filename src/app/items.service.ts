import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from './item';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private _httpClient: HttpClient) { }
  getItems(): Observable<Item[]> {
    return this._httpClient.get<Item[]>('https://fakestoreapi.com/products');
  }
}

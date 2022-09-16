import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Api } from './api';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private _httpClient: HttpClient) { }
  getVehicles():Observable<Api[]> {
    return this._httpClient.get<Api[]>('https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?limit=10&page=1');
  }
  getVehicle(id:string):Observable<Api> {
    return this._httpClient.get<Api>('https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction'+'/'+id);
  }


  getFilterVehicle(filterTerm: string): Observable<Api[]>{
    return this._httpClient.get<Api[]>('https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction' + '?filter=' + filterTerm);
  }
  getPagedVehicles(pageNo: number):Observable<Api[]> {
    return this._httpClient.get<Api[]>('https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction'+'?limit=10&page='+pageNo);
  }
  getSortedVehicles(column: string, order: string):Observable<Api[]> {
    return this._httpClient.get<Api[]>('https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction'+'?sortBy='+column+'&order='+order);
  }
  createdVehicle(vehicle: Api): Observable<Api>{
    return this._httpClient.post<Api>('https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction', vehicle);
  }

  deleteVehicle(id:string): Observable<Api>{
    return this._httpClient.delete<Api>('https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction'+'/'+id);  
  }


}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Api } from '../api';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {

  public vehicles: Api[] = [];
  public filterTerm: string = '';

  public column: string = '';
  public order: string = '';


  constructor(private _vehicleServive: VehicleService, private router:Router) { 
     
    this._vehicleServive.getVehicles().subscribe(
      (data:any) => {
        this.vehicles = data;
      },
      (err: any) => {
       alert('Internal server error') ;
      }
    )
  }

  ngOnInit(): void {
  }
  filter() {
    this._vehicleServive.getFilterVehicle(this.filterTerm).subscribe(
      (data:any) => {
        this.vehicles = data;
      },
      (err: any) => {
       alert('Internal server error') ;
      }
      )
  }
  page(pageNo: number) {
    this._vehicleServive.getPagedVehicles(pageNo).subscribe(
      (data:any) => {
        this.vehicles = data;
      },
      (err: any) => {
       alert('Internal server error') ;
      }
    )
  }

  sort() {
    this._vehicleServive.getSortedVehicles(this.column,this.order).subscribe(
      (data:any) => {
        this.vehicles = data;
      },
      (err: any) => {
       alert('Internal server error') ;
      }
    )
  }


  delete(id: string) {
    this._vehicleServive.deleteVehicle(id).subscribe(
      (data:any) => {
        alert('Deleted Successfilly!!');
        location.reload();
      },
      (err: any) => {
        alert('Internal server error');
      }
    )
  }
  view(id: string) {
    this.router.navigateByUrl('/dashboard/vehicledetails'+'/'+id)
  }


}

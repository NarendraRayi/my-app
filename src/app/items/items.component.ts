import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  
  public items: Item[] = [];
  constructor(private _itemService: ItemsService) {
     
    this._itemService.getItems().subscribe(
      (data: any) => {
        this.items = data;
      },
      (err: any) => {
        alert('Internal server error');
      }
   )

   }

  ngOnInit(): void {
  }

}

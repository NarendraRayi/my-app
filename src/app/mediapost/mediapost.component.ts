import { Component, OnInit } from '@angular/core';
import { Media } from '../media';
import { MediapostService } from '../mediapost.service';

@Component({
  selector: 'app-mediapost',
  templateUrl: './mediapost.component.html',
  styleUrls: ['./mediapost.component.css']
})
export class MediapostComponent implements OnInit {

  public posts: Media[] = [];
  constructor(private _mediaPost: MediapostService) {
     
    this._mediaPost.getPost().subscribe(
      (data: any) => {
        this.posts = data;
      },
      (err: any) => {
        alert('Internal server error')
      }
    )
   }

  ngOnInit(): void {
  }

}

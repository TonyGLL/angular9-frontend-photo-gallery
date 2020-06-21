import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../../services/photo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos = [];

  constructor( private photoService: PhotoService,
               private router: Router ) { }

  ngOnInit() {

    this.photoService.getPhotos()
        .subscribe(res => {

          console.log(res);
          this.photos = res;
        },
        err => console.log(err));
  }

  selectedCard(id: string) {

    // console.log(id);
    this.router.navigate(['photos/', id]);
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PhotoService } from '../../services/photo.service';

import { Photo } from '../../interfaces/Photo';

@Component({
  selector: 'app-photo-preview',
  templateUrl: './photo-preview.component.html',
  styleUrls: ['./photo-preview.component.css']
})
export class PhotoPreviewComponent implements OnInit {

  id: string;
  photo: Photo;

  constructor( private activeRoute: ActivatedRoute,
               private router: Router,
               private photoService: PhotoService ) { }

  ngOnInit(): void {

    this.activeRoute.params.subscribe(params => {

      this.id = params.id;
      console.log(this.id);

      this.photoService.getPhoto(this.id)
          .subscribe(res => {

            console.log(res);
            this.photo = res;
          },

          err => console.log(err));
    });
  }

  deletePhoto(id: string) {

    this.photoService.deletePhoto(id)
        .subscribe(res => {

          console.log(res);
          this.router.navigate(['/photos']);
        },

        err => console.log(err));
  }

  updatePhoto(title: HTMLInputElement, description: HTMLTextAreaElement): boolean {

    this.photoService.updatePhoto(this.id, title.value, description.value)
        .subscribe(res => {

          console.log(res);
          this.router.navigate(['/photos']);
        },

        err => console.log(err)
        );
    return false;
  }

}

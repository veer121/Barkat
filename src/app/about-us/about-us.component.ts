import { Component, OnInit, HostListener } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ImageViewerComponent } from '../image-viewer/image-viewer.component';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  homeHeader = true;

  @HostListener('window:scroll', ['$event']) scrollHandler(event) {
    if (event.path[1]['scrollY'] > (window.innerHeight - 20)) {
      this.homeHeader = false;
    }
    else {
      this.homeHeader = true;
    }
  }

  /* ===================================== */
  customOptions: OwlOptions = {
    margin: 24,
    loop: false,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['<', '>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: true
  }

  images = [
    { image: "url(../../assets/gallery/IMG-6480.JPG)", title: 'Test Title', color: 'white' },
    { image: "url(../../assets/gallery/IMG-6480.JPG)", title: 'Test Title', color: 'white' },
    { image: "url(../../assets/gallery/IMG-6480.JPG)", title: 'Test Title', color: 'white' },
    { image: "url(../../assets/gallery/IMG-6480.JPG)", title: 'Test Title', color: 'white' },
    { image: "url(../../assets/gallery/IMG-6480.JPG)", title: 'Test Title', color: 'white' },
    { image: "url(../../assets/gallery/IMG-6480.JPG)", title: 'Test Title', color: 'white' },
  ]

  openImage(img) {
    const dRef = this.dialog.open(ImageViewerComponent, { data: img,width:'max-content',height:'max-content' })
  }

}

import { Component, HostListener, OnInit, Inject } from '@angular/core';
import { gsap } from 'gsap';
import { DOCUMENT } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ImageViewerComponent } from '../image-viewer/image-viewer.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document, public dialog: MatDialog)  { }

  ngOnInit(): void {
    window.scrollTo(0,0);
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


  rotate(){
    document.querySelector(".cardy-main").classList.toggle('cardy-main-rotate')
    document.querySelector(".cardy-front").classList.toggle("cardy-front-hide")
  }


    /* ===================================== */
    customOptions: OwlOptions = {
      margin: 24,
      autoplay:true,
      autoplayHoverPause:true,
      autoplaySpeed:200,
      loop: true,
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
      { image: "url(../../assets/associates/img1.jpg)", title: 'Test Title', color: 'white' },
      { image: "url(../../assets/associates/img2.jpg)", title: 'Test Title', color: 'white' },
      { image: "url(../../assets/associates/img3.jpg)", title: 'Test Title', color: 'white' },
      { image: "url(../../assets/associates/img4.jpg)", title: 'Test Title', color: 'white' },
      { image: "url(../../assets/associates/img5.jpg)", title: 'Test Title', color: 'white' },
      { image: "url(../../assets/associates/img6.jpg)", title: 'Test Title', color: 'white' },
      { image: "url(../../assets/associates/img7.jpg)", title: 'Test Title', color: 'white' },
      { image: "url(../../assets/associates/img8.jpg)", title: 'Test Title', color: 'white' },
    ]
  
    openImage(img) {
      const dRef = this.dialog.open(ImageViewerComponent, { data: img,width:'max-content',height:'max-content' })
    }

    mentorImages = [
      {image:"url(../../assets/founders/IMG-20200923-WA00477.jpg)", name: '', fb: '', insta: '', },
      {image:"url(../../assets/founders/IMG-20200923-WA0046.jpg)", name: '', fb: '', insta: '', },
      {image:"url(../../assets/founders/IMG-20200923-WA00456.jpg)", name: '', fb: '', insta: '', },
      {image:"url(../../assets/founders/IMG-20200728-WA0036.jpg)", name: '', fb: '', insta: '', twit: '', link: '', thought: ''},
      {image:"url(../../assets/founders/IMG-20200209-WA0036-022.jpeg)", name: '', fb: '', insta: '', twit: '', link: '', thought: ''}
    ]

}

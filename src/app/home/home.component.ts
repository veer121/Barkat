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


  rotate(i){


    document.getElementById(i).classList.toggle('cardy-main-rotate')
    document.querySelector(i).classList.toggle("cardy-front-hide")
  }


    /* ===================================== */
    customOptions: OwlOptions = {
      margin: 24,
      autoplay:true,
      autoplayHoverPause:true,
      autoplayTimeout:2000,
      autoplaySpeed:200,
      loop: true,
      mouseDrag: false,
      touchDrag: true,
      pullDrag: false,
      dots: true,
      navSpeed: 20,
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
      { image: "url(https://firebasestorage.googleapis.com/v0/b/barkat-cb375.appspot.com/o/associates%2Fimg1.jpg?alt=media&token=f2683038-05a0-4c69-9f97-04a9908cf551)", title: 'Test Title', color: 'white' },
      { image: "url(https://firebasestorage.googleapis.com/v0/b/barkat-cb375.appspot.com/o/associates%2Fimg2.jpg?alt=media&token=5e674970-c913-40bb-b569-1c53f387e2eb)", title: 'Test Title', color: 'white' },
      { image: "url(https://firebasestorage.googleapis.com/v0/b/barkat-cb375.appspot.com/o/associates%2Fimg3.jpg?alt=media&token=9214c1f9-1874-47d1-869c-b46cf657bcb7)", title: 'Test Title', color: 'white' },
      { image: "url(https://firebasestorage.googleapis.com/v0/b/barkat-cb375.appspot.com/o/associates%2Fimg4.jpg?alt=media&token=c86ee20e-2632-40b5-8c0c-0071831be6b9)", title: 'Test Title', color: 'white' },
      { image: "url(https://firebasestorage.googleapis.com/v0/b/barkat-cb375.appspot.com/o/associates%2Fimg5.jpg?alt=media&token=c0d3ebb7-0f55-4a9a-b791-2354f256da37)", title: 'Test Title', color: 'white' },
      { image: "url(https://firebasestorage.googleapis.com/v0/b/barkat-cb375.appspot.com/o/associates%2Fimg6.jpg?alt=media&token=cc62b334-b492-443d-a615-5d94c82b89d0)", title: 'Test Title', color: 'white' },
      { image: "url(https://firebasestorage.googleapis.com/v0/b/barkat-cb375.appspot.com/o/associates%2Fimg7.jpg?alt=media&token=989d0f66-5933-4210-9b7f-3cb22999adf5)", title: 'Test Title', color: 'white' },
      { image: "url(https://firebasestorage.googleapis.com/v0/b/barkat-cb375.appspot.com/o/associates%2Fimg8.jpg?alt=media&token=25496ba8-0236-4a49-b671-7a0f31066beb)", title: 'Test Title', color: 'white' },
    ]
  
    openImage(img) {
      const dRef = this.dialog.open(ImageViewerComponent, { data: img,width:'max-content',height:'max-content' })
    }

    mentorImages1 = [
      {image:"url(https://firebasestorage.googleapis.com/v0/b/barkat-cb375.appspot.com/o/founders%2FIMG-20200728-WA0036.jpg?alt=media&token=cd7b0eba-07a0-4ae0-804a-3ebfcd044836)", name: 'Randeep Singh Kohli', position:'Founder', fb: 'https://www.facebook.com/randeepskohli/', insta: 'https://instagram.com/kohlirandeep?igshid=1pds2axsi66rk', twit: '', link: 'http://linkedin.com/in/randeep-s-kohli-92104553', thought: ''},
      {image:"url(https://firebasestorage.googleapis.com/v0/b/barkat-cb375.appspot.com/o/founders%2FIMG-20200923-WA00477.jpg?alt=media&token=ca3a619d-4bfc-425d-9120-82cc0a835900)", name: 'Surjeet Kaur', position:'Co-ordinator', fb: 'https://www.facebook.com/mini.kohli.12', insta: 'https://instagram.com/kohliminikohli?igshid=g90ibx873jic', },
      {image:"url(https://firebasestorage.googleapis.com/v0/b/barkat-cb375.appspot.com/o/founders%2FIMG-20200923-WA00456.jpg?alt=media&token=2151eb18-95da-44b3-9365-6e66a4aa41b2)", name: 'Pushmeet Kaur', position:'Co-founder', fb: 'https://www.facebook.com/kohlihenna', insta: 'https://instagram.com/kohli_henna?igshid=ewhg9dyxi2c6', },
    ]

    mentorImages2 = [
      {image:"url(https://firebasestorage.googleapis.com/v0/b/barkat-cb375.appspot.com/o/founders%2FIMG-20200923-WA0046.jpg?alt=media&token=529d2865-0097-487a-be0f-465aa79dde81)", name: 'Simranjeet Singh', position:'International Ambassador', fb: 'https://www.facebook.com/profile.php?id=100000050764936', insta: 'https://instagram.com/simranhennamatharu.official?igshid=1ef1lh1qaxxkq', },
      {image:"url(https://firebasestorage.googleapis.com/v0/b/barkat-cb375.appspot.com/o/founders%2FIMG-20200209-WA0036-022.jpeg?alt=media&token=1bbd9e53-f812-4efe-9ae1-ca3b0add3270)", name: 'Simarpreet Singh Sethi', position:'Vice President', fb: 'https://www.facebook.com/simarpreetsingh.sethi.5', insta: 'https://instagram.com/simar713?igshid=169mf4941ku33', twit: '', link: 'https://www.linkedin.com/in/simarpreet-singh-sethi-5098711a9', thought: ''}
    ]



}

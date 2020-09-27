import { Component, HostListener, Inject, OnInit } from '@angular/core';
import {gsap} from 'gsap';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
    this.anim();
  }

  homeHeader = false;

  @HostListener('window:scroll', ['$event']) scrollHandler(event) {
    if (event.path[1]['scrollY'] > (window.innerHeight - 70)) {
      this.homeHeader = true;
    }
    else {
      this.homeHeader = false;
    }
  }

  anim(){
    gsap.from(this.document.querySelector('.social-icons'),{
      duration:0.5,
      left:-100,
      opacity:0,
      delay:0.7
    })
  }

}

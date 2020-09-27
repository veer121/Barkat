import { Component, OnInit, Inject } from '@angular/core';
import { gsap } from 'gsap';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-social-icons',
  templateUrl: './social-icons.component.html',
  styleUrls: ['./social-icons.component.scss']
})
export class SocialIconsComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
  }

  anim() {
    gsap.to(this.document.querySelector('.anim-btn'), { duration: 1, width: "100%", pin: true, reverse: 1, scrub: 1, })
  }

  fbText = false;

  expand(id) {
    this.fbText = !this.fbText;
    document.getElementById(id).classList.toggle('expandBox')
  }

}

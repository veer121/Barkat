import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public route: Router) { }

  homeHeader;


  @HostListener('window:scroll', ['$event']) scrollHandler(event) {

    if (event.path[1]['scrollY'] > (window.innerHeight - 70)) {
      this.homeHeader = true;
    }
    else {
      this.homeHeader = false;
    }

  }

}

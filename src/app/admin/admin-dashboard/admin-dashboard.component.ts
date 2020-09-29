import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

  constructor(public user: UserService, public route: Router) { }

  loading = true;

  ngOnInit(): void {

    this.user.signedIn$.subscribe(res => {
      if (!res) {
        this.route.navigate(['adminLogin'])
      }
      else if (res == undefined) {
        this.loading = true;
      }
      else {
        this.loading = false;
      }
    })


  }

}

import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin-dash-nav',
  templateUrl: './admin-dash-nav.component.html',
  styleUrls: ['./admin-dash-nav.component.scss']
})
export class AdminDashNavComponent implements OnInit {

  constructor(public user: UserService) { }

  ngOnInit(): void {
  }

}

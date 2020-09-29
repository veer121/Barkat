import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {

  constructor(public auth: AngularFireAuth, public route: Router, public user: UserService) { }

  loading = true;

  ngOnInit(): void {

    this.user.signedIn$.subscribe(res => {
      if (res) {
        this.route.navigate(['adminDash'])
      }
      else if (res == undefined) {
        this.loading = true;
      }
      else {
        this.loading = false;
      }
    })

  }

  signIn = new FormGroup({
    email: new FormControl(''),
    pass: new FormControl('')
  })

  submit() {
    this.user.signIn(this.signIn.get('email').value, this.signIn.get('pass').value).then(res => {
      console.log(res);
    })
  }

}

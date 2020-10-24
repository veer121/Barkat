import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { FormControl, FormGroup } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {

  constructor(public db: AngularFireDatabase, public auth: AngularFireAuth) { }

  data;

  ngOnInit(): void {

    this.db.list('contactus').valueChanges().subscribe(res => {
      this.data = res
    })

  }

  signIn = new FormGroup({
    email: new FormControl(''),
    pass: new FormControl('')
  })

  submit() {
    this.auth.signInWithEmailAndPassword(this.signIn.get('email').value, this.signIn.get('pass').value).then(res=>{
      console.log(res)
    })
  }

  out(){
    this.auth.signOut();
  }

}

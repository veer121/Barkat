import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';
import { BehaviorSubject, Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public auth: AngularFireAuth, public db: AngularFireDatabase) {
    this.checkUser();
  }

  ngOnInit() {
  }

  private signedIn = new BehaviorSubject<boolean>(undefined);
  signedIn$ = this.signedIn.asObservable();

  checkUser() {
    this.auth.user.subscribe(res => {
      if (res != null)
        this.signedIn.next(true);
      else
        this.signedIn.next(false);
    });
  }

  async signIn(email, pass) {
    return await this.auth.signInWithEmailAndPassword(email, pass);
  }

  async signOut() {
    return await this.auth.signOut();
  }

  /** Fire base */

  getContactUs() {
    return this.db.list('contactus').valueChanges();
  }

  updateValue(obj){
    return this.db.list('contactus').update(status, obj);
  }

  updateFooter(obj) {
    return this.db.object('footer').set(obj);
  }

}

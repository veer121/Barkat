import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public auth: AngularFireAuth) {
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

}

import { Component, OnInit, HostListener, Inject  } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { FormArray, FormControl, FormGroup, FormBuilder, Validators, } from '@angular/forms';
import { gsap } from 'gsap';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  object;
  contact: FormGroup;

  constructor( @Inject(DOCUMENT) private document: Document, public db: AngularFireDatabase, private fb: FormBuilder,) {


  }



  ngOnInit(): void {
    window.scrollTo(0, 0);

    this.contact = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.email],
      contact: ['', [Validators.pattern("^[0-9]+$"), Validators.minLength(10), Validators.maxLength(10)]],
      subject: ['', Validators.required],
      message: ['', Validators.required],
    })
  }

  checkFormValidity() {
    // console.log(this.registrationForm['status']);
    if (this.contact['status'] == "VALID") {
      return false;
    }
    else if (this.contact['status'] == "INVALID") {
      return true;
    }
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

  submit() {

    var pushId = this.db.createPushId()

    this.object = { id: pushId, name: this.contact.get('name').value, email: this.contact.get('email').value, contact: this.contact.get('contact').value, subject: this.contact.get('subject').value, message: this.contact.get('message').value, status: 'NEW' }

    this.db.object('contactus/' + pushId).set(this.object).then(res => {
      console.log(res);

      gsap.fromTo(this.document.querySelector('.success'), { opacity:0,display:'none',y:'20%' },{opacity:1, display:'block', y:0, ease: "power2.out", duration: 2, delay:1.5});
      gsap.to(this.document.querySelector('.success'),{display:'none',opacity:0,duration:1.5, delay:4.5})

      document.getElementById("form-wrap").classList.remove("form-wrap-anim")
      document.getElementById("form").classList.remove("form-anim")

    }).catch(err => {
      console.log(err)
    })

  }

  open() {
    document.getElementById("form-wrap").classList.add("form-wrap-anim")
    document.getElementById("form").classList.add("form-anim")
  }

}

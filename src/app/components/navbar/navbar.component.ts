import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';

import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user: Observable<firebase.User>;
  isLoggedIn: boolean;

  constructor(public afAuth: AngularFireAuth, public flashMessage: FlashMessagesService) {
    this.user = afAuth.authState;
    this.user.subscribe(auth => {
      if (auth) this.isLoggedIn = true;
      else this.isLoggedIn = false;
    });
  }

  ngOnInit() {
  }

  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
  }

  logout() {
    this.afAuth.auth.signOut();
    this.flashMessage.show('Logged out successfully', {cssClass: 'alert-info', timeout: 3000});
  }

}

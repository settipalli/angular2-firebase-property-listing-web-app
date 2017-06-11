import {Component, OnInit} from "@angular/core";
import {FlashMessagesService} from "angular2-flash-messages";

import {Observable} from "rxjs/Observable";
import {AngularFireAuth} from "angularfire2/auth";
import * as firebase from "firebase/app";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
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

  loginWithGoogle() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
}

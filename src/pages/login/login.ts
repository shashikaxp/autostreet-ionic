import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from "../../providers/auth/auth";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private authProvider: AuthProvider) {
  }

  login(loginForm) {
    this.authProvider.login(loginForm.value).subscribe(data => {
      console.log('data', data);
    })
    // this.navCtrl.setRoot("HomePage", {}, {animate: true, direction: 'forward'});
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { AuthProvider } from "../../providers/core/auth/auth";
import { Storage } from "@ionic/storage";
import { STORAGE } from "../../config";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController,
              private authProvider: AuthProvider,
              private storage: Storage) {
  }

   login(loginForm) {
   this.navCtrl.setRoot("HomePage", {}, {animate: true, direction: 'forward'})
    // this.authProvider.login(loginForm.value).subscribe(async data => {
    //   await this.storage.set(STORAGE.TOKEN, data.token);
    //   await this.storage.set(STORAGE.COMPANY_ID, data.company_id);
    //   await this.storage.set(STORAGE.USER_ID, data.user_id);
    //   this.navCtrl.setRoot("HomePage", {}, {animate: true, direction: 'forward'})
    // })

  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { AuthProvider } from "../../../providers/core/auth/auth";
import { Storage } from "@ionic/storage";
import { STORAGE } from "../../../config";
import { ErrorLogger } from "../../../modules/ErrorLogger";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public log;

  constructor(public navCtrl: NavController,
              private authProvider: AuthProvider,
              private storage: Storage) {
    this.log = new ErrorLogger();
  }

   login(loginForm) {
    this.authProvider.login(loginForm.value).subscribe(async data => {
      try {
        await this.storage.set(STORAGE.TOKEN, data.tokens.access_token);
        await this.storage.set(STORAGE.COMPANY_ID, data.company);
        await this.storage.set(STORAGE.USER_ID, data.user);
      } catch (e) {
        this.log._error('Error occurred while saving the data', e);
      }
      this.navCtrl.setRoot("TabsPage", {}, {animate: true, direction: 'forward'})
    }, error => {
      this.log.error('Error occurred while login', error);
    })

  }

}

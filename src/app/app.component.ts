import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TranslateService } from "@ngx-translate/core";
import { Spinkit } from "ng-http-loader/spinkits";
import { STORAGE } from "../config";
import _ from "lodash";
import { Storage } from "@ionic/storage";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any;
  public spinkit = Spinkit;

  constructor(public platform: Platform,
              public statusBar: StatusBar,
              public splashScreen: SplashScreen,
              public translate: TranslateService,
              public storage: Storage) {
    this.initializeApp();
  }

  initializeApp() {
    this.translate.setDefaultLang('en');
    this.platform.ready().then(() => {
      this.translate.use('en');
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.checkTokenValidity().then(validToken => {
        if (validToken) {
          this.rootPage = "HomePage"
        } else {
          this.rootPage = "LoginPage"
        }
      });
    });
  }

  loadPage(pageName) {
    this.nav.push(pageName)
  }

  async checkTokenValidity() {
    let token = await this.storage.get(STORAGE.TOKEN);
    return !_.isEmpty(token);
  }

}

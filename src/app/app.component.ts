import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TranslateService } from "@ngx-translate/core";
import { Spinkit } from "ng-http-loader/spinkits";
import { STORAGE } from "../config";
import _ from "lodash";
import { StorageProvider } from "../providers/core/storage/storage";

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
              public storageProvider: StorageProvider) {
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
          this.rootPage = "TabsPage"
        } else {
          this.rootPage = "LoginPage"
        }
      });
    });
  }

  loadPage(pageName) {
    this.nav.push(pageName)
  }

  async logout() {
    await this.storageProvider.clear();
    this.nav.setRoot("LoginPage", {}, {animate: true, direction: 'forward'});
  }

  async checkTokenValidity() {
    let token = await this.storageProvider.get(STORAGE.TOKEN);
    return !_.isEmpty(token);
  }

}

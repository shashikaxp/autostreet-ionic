import { Injectable } from '@angular/core';
import { HttpErrorResponse } from "@angular/common/http";
import {
  App, NavController
} from 'ionic-angular';
import _ from "lodash";
import { ErrorToastProvider } from "../../error-toast/error-toast";

@Injectable()
export class HttpErrorHandlerProvider {

  private navCtrl: NavController;

  constructor(private errorToast: ErrorToastProvider,
              private app: App,) {
    this.navCtrl = app.getActiveNav();
  }

  handle(error: HttpErrorResponse) {
    let errorMessage = _.get(error, 'error.error', "Server Error");
    let status = _.get(error, 'status', "404");

    if (status.toString() === "401") {
      if (this.navCtrl.getActive().name !== "LoginPage") {
        this.navCtrl.setRoot("LoginPage", {}, {animate: true, direction: 'forward'});
      } else {
        this.createErrorToast("Invalid Credentials");
      }
    } else {
      this.createErrorToast(errorMessage);
    }
  }

  createErrorToast(message) {
    let toast = this.errorToast.create(message);
    toast.present();
  }

}

import { Injectable } from '@angular/core';
import { ToastController } from "ionic-angular";

@Injectable()
export class ErrorToastProvider {

  constructor(public toastCtrl: ToastController) {
  }

  create(message) {
    let options = {
      message: message,
      cssClass: "httpErrorToast",
      position: 'top',
      showCloseButton: true,
      dismissOnPageChange: true,
      closeButtonText: "X"
    };

    return this.toastCtrl.create(options);
  }

}

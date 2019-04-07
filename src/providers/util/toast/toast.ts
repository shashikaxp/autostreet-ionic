import { Injectable } from '@angular/core';
import { ToastController } from "ionic-angular";

@Injectable()
export class ToastProvider {

  constructor(public toastCtrl: ToastController) {
  }

  create(message, type, autoDismiss:boolean) {

    let options = {
      message: message,
      cssClass: `${type}-toast`,
      position: 'top',
      showCloseButton: !autoDismiss,
      dismissOnPageChange: !autoDismiss,
      closeButtonText: "X"
    };

    if (autoDismiss) {
      options['duration'] = 2000
    }

    return this.toastCtrl.create(options);
  }

}

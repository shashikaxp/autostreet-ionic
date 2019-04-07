import { Injectable } from '@angular/core';
import { AlertController } from "ionic-angular";

@Injectable()
export class ConfirmationPopupProvider {

  constructor(public alertCtrl: AlertController) {
  }

  create(message, callback) {
    return this.alertCtrl.create({
      message: message,
      buttons: [
        {
          text: 'No',
          handler: () => {
          }
        },
        {
          text: 'Yes',
          handler: () => {
            callback()
          }
        }
      ]
    });
  }

}

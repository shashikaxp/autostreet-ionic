import { Component } from '@angular/core';
import {
  IonicPage, NavController, NavParams, ViewController
} from 'ionic-angular';
import { PublicProvider } from "../../providers/core/public/public";
import { CallNumber } from "@ionic-native/call-number";
import { ErrorLogger } from "../../modules/ErrorLogger";

@IonicPage()
@Component({
  selector: 'page-single-item-details',
  templateUrl: 'single-item-details.html',
})
export class SingleItemDetailsPage {

  public item;
  public itemId;
  public log = new ErrorLogger();

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public publicProvider: PublicProvider,
              private callNumber: CallNumber,
              public viewCtrl: ViewController) {
    this.itemId = this.navParams.get('itemId');
    this.getItemDetails();
  }

  close() {
    this.viewCtrl.dismiss();
  }

  getItemDetails() {
    this.publicProvider.itemDetails(this.itemId).subscribe(data => {
      this.item = data;
    })
  }

  callContactNumber(number) {
    this.callNumber.callNumber(number, true)
      .then(res => this.log.info('Launched dialer!', res))
      .catch(err => this.log.error('Error launching dialer', err));
  }

}

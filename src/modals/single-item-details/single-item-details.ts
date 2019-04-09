import { Component } from '@angular/core';
import {
  IonicPage, NavController, NavParams, ViewController
} from 'ionic-angular';
import { PublicProvider } from "../../providers/public/public";

@IonicPage()
@Component({
  selector: 'page-single-item-details',
  templateUrl: 'single-item-details.html',
})
export class SingleItemDetailsPage {

  public item;
  public itemId;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public publicProvider: PublicProvider,
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

}

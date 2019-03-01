import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-all-advertisements',
  templateUrl: 'all-advertisements.html',
})
export class AllAdvertisementsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  onItemChanged(item) {
    console.log('ionViewDidLoad FindItemsPage', item);
  }

}

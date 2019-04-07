import { Component } from '@angular/core';
import {
  IonicPage, NavController, NavParams, ViewController
} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-filters-modal',
  templateUrl: 'filters-modal.html',
})
export class FiltersModalPage {

  public itemType;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewCtrl: ViewController) {

    this.itemType = this.navParams.get('itemType');

  }

  close() {
    this.viewCtrl.dismiss();
  }

}

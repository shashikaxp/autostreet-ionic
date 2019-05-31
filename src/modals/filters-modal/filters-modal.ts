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
  public formData;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewCtrl: ViewController) {

    this.itemType = this.navParams.get('itemType');
    this.formData = this.navParams.get('formData')
  }

  close() {
    this.viewCtrl.dismiss({
      canUpdate: false
    });
  }

  resetFilters() {
    this.viewCtrl.dismiss({
      canUpdate: true
    });
  }

  setData(formData) {
    this.viewCtrl.dismiss({
      canUpdate: true,
      data: formData
    });
  }

}

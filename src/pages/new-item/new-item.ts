import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-new-item',
  templateUrl: 'new-item.html',
})
export class NewItemPage {

  public selectedItemType;
  public formType = 'Add';

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
  }

  onItemChanged(item) {
    this.selectedItemType = item;
    this.formType = 'Add';
  }

}

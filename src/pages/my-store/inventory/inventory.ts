import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SellerProvider } from "../../../providers/core/seller/seller";
import { StorageProvider } from "../../../providers/core/storage/storage";
import { STORAGE } from "../../../config";
import _ from "lodash";

@IonicPage()
@Component({
  selector: 'page-inventory',
  templateUrl: 'inventory.html',
})
export class InventoryPage {

  public selectedItemType;
  public items = [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public storage: StorageProvider,
              public seller: SellerProvider) {
  }


  onItemChanged(item) {
    this.selectedItemType = item;
    this.getItems();
  }

  async getItems() {
    let sellerId = await this.storage.get(STORAGE.COMPANY_ID);
    let searchParams = `type=${this.selectedItemType}&page=0&size=100`;
    this.seller.items(sellerId, searchParams).subscribe(data => {
      this.items = data.items;
    });
  }

  getImageSrc(src) {
    if(!_.isEmpty(src)) {
      return src;
    } else {
      return '../../../assets/imgs/default-placeholder.png';
    }
  }

  delete() {
    console.log('delete');
  }

  edit(itemId) {
    this.navCtrl.push("EditItemPage", {
      itemId: itemId
    })
  }

}



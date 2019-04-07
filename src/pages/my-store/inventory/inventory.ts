import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SellerProvider } from "../../../providers/core/seller/seller";
import { StorageProvider } from "../../../providers/core/storage/storage";
import { STORAGE } from "../../../config";
import _ from "lodash";
import { ConfirmationPopupProvider } from "../../../providers/confirmation-popup/confirmation-popup";
import { ItemProvider } from "../../../providers/core/item/item";
import { ErrorLogger } from "../../../modules/ErrorLogger";

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
              public seller: SellerProvider,
              public itemProvider: ItemProvider,
              public confirmationPopup: ConfirmationPopupProvider) {
  }

  public log = new ErrorLogger();

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

  deleteConfirmation(itemId) {
    let message = "Are you sure to delete this item";
    let popup = this.confirmationPopup.create(message, this.delete(itemId));
    popup.present();
  }

  delete(itemId) {
    return (() => {
      this.itemProvider.deleteItem(itemId).subscribe(data => {
        this.getItems();
      }, error => this.log.error("Delete Item", error))
    });
  }

  edit(itemId) {
    this.navCtrl.push("EditItemPage", {
      itemId: itemId
    })
  }

}



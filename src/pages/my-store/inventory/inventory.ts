import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SellerProvider } from "../../../providers/core/seller/seller";
import { StorageProvider } from "../../../providers/core/storage/storage";
import { STORAGE } from "../../../config";
import _ from "lodash";
import { ConfirmationPopupProvider } from "../../../providers/util/confirmation-popup/confirmation-popup";
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
  public page = 0;
  public itemsPerPage = 5;
  public infiniteScroll;

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
    this.resetData();
    this.getItems();
  }

   getItems() {
    return new Promise(async (resolve, reject) => {
      let sellerId = await this.storage.get(STORAGE.COMPANY_ID);
      let searchParams = `type=${this.selectedItemType}&page=${this.page}&size=${this.itemsPerPage}`;
      this.seller.items(sellerId, searchParams).subscribe(data => {
        let enableScroll = _.size(data.items) === this.itemsPerPage;
        this.page++;
        if (this.infiniteScroll) {
          this.infiniteScroll.enable(enableScroll);
          this.infiniteScroll.complete()
        }
        this.items = _.concat(this.items, data.items);
        resolve(this.items);
      }, error => this.log.error("Inventory items", error));
    })
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
        this.resetData();
        this.getItems();
      }, error => this.log.error("Delete Item", error))
    });
  }

  edit(itemId) {
    this.navCtrl.push("EditItemPage", {
      itemId: itemId
    })
  }

  async doInfinite(infiniteScroll) {
    this.infiniteScroll = infiniteScroll;
    await this.getItems();
  }

  resetData() {
    this.items = [];
    this.page = 0;
  }

}



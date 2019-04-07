import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SellerProvider } from "../../../providers/core/seller/seller";
import { FORM_TYPES } from "../../../components/item-form/item-form.config";
import _ from "lodash";
import { ItemImageProvider } from "../../../providers/core/item/item-image/item-image";
import { ItemProvider } from "../../../providers/core/item/item";
import { ErrorLogger } from "../../../modules/ErrorLogger";
import { STORAGE } from "../../../config";
import { StorageProvider } from "../../../providers/core/storage/storage";

@IonicPage()
@Component({
  selector: 'page-edit-item',
  templateUrl: 'edit-item.html',
})
export class EditItemPage {

  public formType = FORM_TYPES.UPDATE;
  public item;
  public images = [];

  public log = new ErrorLogger();

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public itemProvider: ItemProvider,
              public itemImageProvider: ItemImageProvider,
              public storage: StorageProvider,
              public seller: SellerProvider) {

    let itemId = this.navParams.get("itemId");
    this.getItemDetails(itemId);
  }

  getItemDetails(itemId) {
    this.seller.itemDetails(itemId).subscribe(item => {
      this.item = item;
      this.images = this.itemImageProvider.generateFormattedImagesArray(item.images);
    })
  }

  async updateItem(formData) {
    let sellerId = await this.storage.get(STORAGE.COMPANY_ID);
    this.itemProvider.updateItem(sellerId, this.item.id, formData).subscribe(data => {
      this.getItemDetails(this.item.id);
    }, error => this.log.error("Item update", error));
  }

  deleteImage(src, imageId) {
    let itemId = this.item.id;
    this.itemProvider.deleteImage(itemId, imageId).subscribe(() => {
      this.getItemDetails(itemId);
    }, error => {this.log.error("delete image", error);});
  }

  newImage(src, id) {
    let imageObject = _.find(this.images, {'id': id});
    if (typeof imageObject !== 'undefined') {
      imageObject.src = src;
      imageObject.isChanged = true;
    }
  }

}

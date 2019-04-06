import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SellerProvider } from "../../providers/core/seller/seller";
import { FORM_TYPES } from "../../components/item-form/item-form.config";
import _ from "lodash";
import { ItemImageProvider } from "../../providers/core/item/item-image/item-image";
import { ItemProvider } from "../../providers/core/item/item";

@IonicPage()
@Component({
  selector: 'page-edit-item',
  templateUrl: 'edit-item.html',
})
export class EditItemPage {

  public formType = FORM_TYPES.UPDATE;
  public item;
  public images = [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public itemProvider: ItemProvider,
              public itemImageProvider: ItemImageProvider,
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

  editItem($event) {

  }

  deleteImage(src, imageId) {
    let itemId = this.item.id;
    this.itemProvider.deleteImage(itemId, imageId).subscribe(() => {
      this.getItemDetails(itemId);
    }, error => {
      console.error("error", error);
    });
  }

  newImage(src, id) {
    let imageObject = _.find(this.images, {'id': id});
    if (typeof imageObject !== 'undefined') {
      imageObject.src = src;
      imageObject.isChanged = true;
    }
  }

}

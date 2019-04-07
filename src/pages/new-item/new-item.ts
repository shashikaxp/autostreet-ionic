import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StorageProvider } from "../../providers/core/storage/storage";
import { STORAGE } from "../../config";
import { ItemProvider } from "../../providers/core/item/item";
import _ from "lodash";
import { FORM_TYPES } from "../../components/item-form/item-form.config";
import { ItemImageProvider } from "../../providers/core/item/item-image/item-image";
import { ErrorLogger } from "../../modules/ErrorLogger";

@IonicPage()
@Component({
  selector: 'page-new-item',
  templateUrl: 'new-item.html',
})
export class NewItemPage {

  public selectedItemType;
  public formType = FORM_TYPES.NEW;

  public images;
  public log = new ErrorLogger();

  constructor(public navCtrl: NavController,
              public storage: StorageProvider,
              public itemProvider: ItemProvider,
              public itemImageProvider: ItemImageProvider,
              public navParams: NavParams) {
  }

  onItemChanged(item) {
    this.selectedItemType = item;
    this.formType = FORM_TYPES.NEW;
    this.images =  this.itemImageProvider.generateFormattedImagesArray([]);
  }

  async newItem(formData) {
      let sellerId = await this.storage.get(STORAGE.COMPANY_ID);
      this.itemProvider.newItem(sellerId, formData).subscribe(data => {
        this.addImages(data.id);
      }, error => this.log.error("add new item", error));
  }

  addImages(itemId) {
    this.itemProvider.handleImages(itemId, this.images).subscribe(data => {
      this.navCtrl.setRoot('InventoryPage');
    }, error => {
      this.log.error("add new images", error);
      this.navCtrl.setRoot('InventoryPage');
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

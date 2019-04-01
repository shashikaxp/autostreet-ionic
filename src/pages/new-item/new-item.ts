import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StorageProvider } from "../../providers/core/storage/storage";
import { STORAGE } from "../../config";
import { ItemProvider } from "../../providers/core/item/item";
import { dataURItoBlob } from "../../providers/util/blob-convertor/blob-convertor";
import _ from "lodash";
import { ErrorToastProvider } from "../../providers/util/error-toast/error-toast";

@IonicPage()
@Component({
  selector: 'page-new-item',
  templateUrl: 'new-item.html',
})
export class NewItemPage {

  public selectedItemType;
  public formType = 'Add';

  public images;
  public imageCount = 2;

  constructor(public navCtrl: NavController,
              public storage: StorageProvider,
              public itemProvider: ItemProvider,
              public errorToast: ErrorToastProvider,
              public navParams: NavParams) {
  }

  onItemChanged(item) {
    this.selectedItemType = item;
    this.formType = 'Add';
  }

  async newItem(formData) {
    if (_.size(this.images) < 1) {
      this.errorToast.create("Please add at least one image").present();
    } else {
      let sellerId = await this.storage.get(STORAGE.COMPANY_ID);
      this.itemProvider.newItem(sellerId, formData).subscribe(data => {
        this.addImages(data.id);
      });
    }
  }

  setImages(images) {
    this.images = images.data;
  }

  addImages(itemId) {
    let formData = this.getImageFormData();
    this.itemProvider.addImages(itemId, formData).subscribe(data => {
    });
  }

  getImageFormData() {
    let formData = new FormData();
    _.forEach(this.images, (src, i) => {
      if (!_.isEmpty(src)) {
        formData.append('images', dataURItoBlob(src), i + '.jpeg');
      }
    });
    return formData;
  }

}

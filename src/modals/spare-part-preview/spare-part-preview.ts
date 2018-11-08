import { Component } from '@angular/core';
import {
  AlertController,
  IonicPage, NavController, NavParams, ViewController
} from 'ionic-angular';
import { SparePartsProvider } from "../../providers/core/spare-parts/spare-parts";
import { Storage } from "@ionic/storage";
import { STORAGE } from "../../config";
import _ from "lodash";
import { dataURItoBlob } from "../../providers/util/blob-convertor/blob-convertor";

@IonicPage()
@Component({
  selector: 'page-spare-part-preview',
  templateUrl: 'spare-part-preview.html',
})
export class SparePartPreviewPage {

  public sparePart;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private sparePartProvider: SparePartsProvider,
              private storage: Storage,
              private viewCtrl: ViewController,
              private alertCtrl: AlertController) {

    this.sparePart = this.navParams.get('sparePart');

  }

  async addNewSparePart() {
    let companyId = await this.storage.get(STORAGE.COMPANY_ID);
    let params = this.getSparePartData();
    this.sparePartProvider.addNewSparePart(companyId, params).subscribe(data => {
      this.presentSuccessAlert();
    });
  }

  getSparePartData() {
    let formData = new FormData();
    formData.append('category_id', this.sparePart.category.id.toString());
    formData.append('title', this.sparePart.title);
    formData.append('description', this.sparePart.description);
    formData.append('price', this.sparePart.price);
    formData.append('condition', this.sparePart.condition.id);
    formData.append('manufacturer_id', this.sparePart.manufacturer.id.toString());
    formData.append('model_id', this.sparePart.model.id.toString());
    _.forEach(this.sparePart.images, function (image) {
      formData.append('images', dataURItoBlob(image.url), image.id + '.jpeg');
    });
    return formData
  }

  presentSuccessAlert() {
    let alert = this.alertCtrl.create({
      message: 'Upload Successful',
      buttons: [
        {
          text: 'Ok',
          role: 'cancel',
          handler: () => {
            this.viewCtrl.dismiss({status: true});
          }
        }
      ]
    });
    alert.present();
  }

  close() {
    this.viewCtrl.dismiss({"status": false});
  }

}

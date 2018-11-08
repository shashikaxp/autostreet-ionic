import { Component } from '@angular/core';
import {
  AlertController,
  IonicPage, NavController, NavParams, ViewController
} from 'ionic-angular';
import { Category } from "../../../interfaces/Category";
import { Model } from "../../../interfaces/Model";
import { Manufacturer } from "../../../interfaces/Manufacturer";
import { SparePartsProvider } from "../../../providers/core/spare-parts/spare-parts";
import _ from "lodash";
import { Storage } from "@ionic/storage";
import { STORAGE } from "../../../config";
import { dataURItoBlob } from "../../../providers/util/blob-convertor/blob-convertor";

@IonicPage()
@Component({
  selector: 'page-edit-spare-parts',
  templateUrl: 'edit-spare-parts.html',
})
export class EditSparePartsPage {

  public manufacturers: Array<Manufacturer>;
  public manufacturer;
  public models: Array<Model>;
  public model;
  public categories: Array<Category>;
  public category;
  public conditions = [];
  public condition;
  public title;
  public price;
  public description;
  public imagesArray;
  private sparePartId;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private storage: Storage,
              private viewCtrl: ViewController,
              private alertCtrl: AlertController,
              private sparePartsProvider: SparePartsProvider) {

    sparePartsProvider.getManufacturers().subscribe(data => {
      this.manufacturers = data.manufacturers;
    });

    sparePartsProvider.getCategories().subscribe(data => {
      this.categories = data.categories;
    });

    sparePartsProvider.getConditions().subscribe(data => {
      _.forEach(data, (value, key) => {
        this.conditions.push({
          id: key,
          name: value
        });
      });
    });

    this.sparePartId = this.navParams.get("sparePartId");

  }

  ionViewWillEnter() {
    this.getSparePartDetails();
  }

  loadModels() {
    this.sparePartsProvider.getModels(this.manufacturer).subscribe(data => {
      this.models = data.models;
    });
  }

  async getSparePartDetails() {
    let companyId = await this.storage.get(STORAGE.COMPANY_ID);
    this.sparePartsProvider.getDetails(companyId, this.sparePartId).subscribe(data => {
      this.category = data.category.id;
      this.model = data.model.id;
      this.manufacturer = data.manufacturer.id;
      this.condition = data.condition.id;
      this.title = data.title;
      this.description = data.description;
      this.price = data.price;
      this.imagesArray = this.formatImagesArray(data.images);
      this.loadModels();
    });
  }

  formatImagesArray(array) {

    let temp = {
      id: null,
      url: null
    };

    let tempArray = _.fill(Array(4), temp);
    _.forEach(array, (value, index) => {
      tempArray[index] = value;
    });

    return tempArray;
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }

  async updateImage(url, imageId) {
    let companyId = await this.storage.get(STORAGE.COMPANY_ID);
    let formData = new FormData();
    formData.append('image', dataURItoBlob(url), imageId + '.jpeg');
    this.sparePartsProvider.updateSparePartImage(companyId, this.sparePartId, imageId, formData).subscribe(data => {
      this.presentSuccessAlert();
    });
  }

  presentSuccessAlert() {
    let alert = this.alertCtrl.create({
      message: 'Upload Successful',
      buttons: [
        {
          text: 'Ok',
          role: 'cancel'
        }
      ]
    });
    alert.present();
  }

}

import { Component } from '@angular/core';
import {
  IonicPage, NavController, NavParams, ViewController
} from 'ionic-angular';
import { Category } from "../../../interfaces/Category";
import { Model } from "../../../interfaces/Model";
import { Manufacturer } from "../../../interfaces/Manufacturer";
import { SparePartsProvider } from "../../../providers/core/spare-parts/spare-parts";
import _ from "lodash";
import { Storage } from "@ionic/storage";
import { STORAGE } from "../../../config";

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

  ionViewDidEnter() {
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
      this.imagesArray = data.images;
      this.loadModels();
    });
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }

  getImageSrc(i) {
    if (_.size(this.imagesArray) > 0) {
      let src = null;
      if (typeof this.imagesArray[i] === 'undefined') {
        src = '../../../assets/imgs/default-placeholder.png';
      } else {
        src = this.imagesArray[i].url;
      }
      return src;
    }
  }

}

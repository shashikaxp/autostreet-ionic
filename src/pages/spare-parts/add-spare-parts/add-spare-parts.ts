import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';
import { SparePartsProvider } from "../../../providers/core/spare-parts/spare-parts";
import _ from "lodash";
import { Manufacturer } from "../../../interfaces/Manufacturer";
import { Model } from "../../../interfaces/Model";
import { Category } from "../../../interfaces/Category";
import { Camera } from "@ionic-native/camera";

@IonicPage()
@Component({
  selector: 'page-add-spare-parts',
  templateUrl: 'add-spare-parts.html',
})
export class AddSparePartsPage {

  public manufacturers: Array<Manufacturer>;
  public manufacturer: Manufacturer;
  public models: Array<Model>;
  public model: Model;
  public categories: Array<Category>;
  public category: Category;
  public conditions = [];
  public condition;
  public title;
  public price;
  public description;
  public cameraOptions;
  public imagesArray = [];

  constructor(public navCtrl: NavController,
              private sparePartsProvider: SparePartsProvider,
              private camera: Camera,
              private modalCtrl: ModalController) {

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

    this.imagesArray = this.getImagesArray();

  }

  loadModels() {
    this.sparePartsProvider.getModels(this.manufacturer.id).subscribe(data => {
      this.models = data.models;
    });
  }

  isManufacturerAvailable() {
    return _.get(this.manufacturer, 'id', false);
  }

  takeSpatePartImage(url, id) {
      let imageObject = _.find(this.imagesArray, {'id': id});
      if (typeof imageObject !== 'undefined') {
        imageObject.url = url
      }
  }

  getSparePartDetails() {
    return {
      manufacturer: this.manufacturer,
      model: this.model,
      category: this.category,
      title: this.title,
      description: this.description,
      images: _.filter(this.imagesArray, 'url'),
      condition: this.condition,
      price: this.price
    }
  }

  loadPreviewPage() {
    let data = this.getSparePartDetails();
    let profileModal = this.modalCtrl.create("SparePartPreviewPage",
      {
        sparePart: data
      });

    profileModal.onDidDismiss(data => {
      if (data.status) {
        this.navCtrl.setRoot("HomePage");
      }
    });

    profileModal.present();
  }

  getImagesArray() {
    let tempArray = [];
    for (let i = 0; i < 4; i++ ) {
      tempArray.push({
        id: i,
        url: null
      });
    }
    return tempArray;
  }

}

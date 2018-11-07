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
  public title;
  public condition;
  public price;
  public description;
  public cameraOptions;
  public imagesArray = [];

  constructor(public navCtrl: NavController,
              private sparePartsProvider: SparePartsProvider,
              private camera: Camera,
              private modalCtrl: ModalController) {

    this.cameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      targetWidth: 600,
      targetHeight: 600,
      allowEdit: true
    };

    sparePartsProvider.getManufacturers().subscribe(data => {
      this.manufacturers = data.manufacturers;
    });

    sparePartsProvider.getCategories().subscribe(data => {
      this.categories = data.categories;
    })

  }

  loadModels() {
    this.sparePartsProvider.getModels(this.manufacturer.id).subscribe(data => {
      this.models = data.models;
    });
  }

  isManufacturerAvailable() {
    return _.get(this.manufacturer, 'id', false);
  }

  takeSpatePartImage(type) {
    this.camera.getPicture(this.cameraOptions).then((imageData) => {
      let imageObject = _.find(this.imagesArray, {'type': type});
      if (typeof imageObject === 'undefined') {
        this.imagesArray.push({
          type: type,
          src: 'data:image/jpeg;base64,'  + imageData
        });
      } else {
        imageObject.src = 'data:image/jpeg;base64,' + imageData;
      }
    }, (err) => {
      // Handle error
    });
  }

  getImageSrc(type) {
    let imageObject = _.find(this.imagesArray, {'type': type});
    let src = null;
    if (typeof imageObject === 'undefined') {
      src = '../../../assets/imgs/default-placeholder.png';
    } else {
      src = imageObject['src']
    }
    return src;
  }

  getSparePartDetails() {
    return {
      manufacturer: this.manufacturer,
      model: this.model,
      category: this.category,
      title: this.title,
      description: this.description,
      images: this.imagesArray,
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

}

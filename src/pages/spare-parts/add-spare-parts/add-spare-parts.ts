import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SparePartsProvider } from "../../../providers/core/spare-parts/spare-parts";
import _ from "lodash";
import { Manufacturer } from "../../../interfaces/Manufacturer";

;

@IonicPage()
@Component({
  selector: 'page-add-spare-parts',
  templateUrl: 'add-spare-parts.html',
})
export class AddSparePartsPage {

  public manufacturers: Array<Manufacturer>;
  public manufacture: Manufacturer;
  public models;
  public model;
  public categories;
  public category;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private sparePartsProvider: SparePartsProvider) {

    sparePartsProvider.getManufacturers().subscribe(data => {
      this.manufacturers = data;
    });

    sparePartsProvider.getCategories().subscribe(data => {
      this.categories = data;
    })

  }

  loadModels() {
    this.sparePartsProvider.getModels(this.manufacture.id).subscribe(models => {
      this.models = models;
    });
  }

  isManufacturerAvailable() {
    return _.get(this.manufacture, 'id', false);
  }

}

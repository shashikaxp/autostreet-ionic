import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { SparePartsProvider } from "../../../providers/core/spare-parts/spare-parts";
import _ from "lodash";
import { Manufacturer } from "../../../interfaces/Manufacturer";
import { Model } from "../../../interfaces/Model";
import { Category } from "../../../interfaces/Category";

@IonicPage()
@Component({
  selector: 'page-add-spare-parts',
  templateUrl: 'add-spare-parts.html',
})
export class AddSparePartsPage {

  public manufacturers: Array<Manufacturer>;
  public manufacture: Manufacturer;
  public models: Array<Model>;
  public model: Model;
  public categories: Array<Category>;
  public category: Category;

  constructor(public navCtrl: NavController,
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

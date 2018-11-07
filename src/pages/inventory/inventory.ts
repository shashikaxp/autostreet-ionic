import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CompanyProvider } from "../../providers/core/company/company";
import { Storage } from "@ionic/storage";
import { STORAGE } from "../../config";

@IonicPage()
@Component({
  selector: 'page-inventory',
  templateUrl: 'inventory.html',
})
export class InventoryPage {

  public spareParts;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private companyProvider: CompanyProvider,
              private storage: Storage) {
  }

  ionViewDidLoad() {
    this.getSparePartsList();
  }

  async getSparePartsList() {
    let companyId = await this.storage.get(STORAGE.COMPANY_ID);
    this.companyProvider.getSparePartsList(companyId, 0, 10).subscribe(data => {
      this.spareParts = data.items;
    });
  }

}

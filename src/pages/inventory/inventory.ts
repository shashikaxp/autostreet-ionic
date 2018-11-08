import { Component } from '@angular/core';
import {
  IonicPage, ModalController, NavController
} from 'ionic-angular';
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
              private companyProvider: CompanyProvider,
              private storage: Storage,
              private modalCtrl: ModalController) {
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

  loadEditSparePartsModal(id) {
    let modal = this.modalCtrl.create("EditSparePartsPage", {
      sparePartId: id
    });
    modal.present();
  }

}

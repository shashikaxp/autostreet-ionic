import { Component } from '@angular/core';
import {
  IonicPage, ModalController, NavController, NavParams
} from 'ionic-angular';
import { PublicProvider } from "../../providers/public/public";
import { ITEM_TYPES } from "../../config";
import _ from "lodash";
import { ErrorLogger } from "../../modules/ErrorLogger";

@IonicPage()
@Component({
  selector: 'page-all-advertisements',
  templateUrl: 'all-advertisements.html',
})
export class AllAdvertisementsPage {

  public selectedItemType;

  public items = [];
  public page = 0;
  public itemsPerPage = 5;
  public infiniteScroll;

  public log = new ErrorLogger();

  constructor(public navCtrl: NavController,
              public publicProvider: PublicProvider,
              public modalCtrl: ModalController,
              public navParams: NavParams) {
  }

  ionViewWillEnter() {
    this.selectedItemType = ITEM_TYPES.VEHICLE;
    this.resetData();
    this.getItems();
  }

  onItemChanged(item) {
    this.selectedItemType = item;
    this.resetData();
    this.getItems();
  }

  getItems() {
    return new Promise(async (resolve, reject) => {
      let searchParams = `type=${this.selectedItemType}&page=${this.page}&size=${this.itemsPerPage}`;
      this.publicProvider.items(searchParams).subscribe(data => {
        let enableScroll = _.size(data) === this.itemsPerPage;
        this.page++;
        if (this.infiniteScroll) {
          this.infiniteScroll.enable(enableScroll);
          this.infiniteScroll.complete()
        }
        this.items = _.concat(this.items, data);
        resolve(this.items);
      }, error => this.log.error("Inventory items", error));
    })
  }

  loadSingleItemModal(id) {
    let modal = this.modalCtrl.create('SingleItemDetailsPage', {
      itemId: id
    });
    modal.present();
  }

  async doInfinite(infiniteScroll) {
    this.infiniteScroll = infiniteScroll;
    await this.getItems();
  }

  getImageSrc(src) {
    if(!_.isEmpty(src)) {
      return src;
    } else {
      return '../../../assets/imgs/default-placeholder.png';
    }
  }

  resetData() {
    this.items = [];
    this.page = 0;
  }

}

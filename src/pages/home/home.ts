import { Component } from '@angular/core';
import {
  IonicPage, ModalController, NavController, NavParams
} from 'ionic-angular';
import { ITEM_TYPES } from "../../config";
import { ErrorLogger } from "../../modules/ErrorLogger";
import { PublicProvider } from "../../providers/core/public/public";
import _ from "lodash";

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

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

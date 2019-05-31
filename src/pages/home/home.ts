import { Component } from '@angular/core';
import {
  IonicPage, NavController, NavParams
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

  public keyword;
  public filters;

  public searchParams;
  public searchByKeyword = '';
  public searchByFilters = '';

  public log = new ErrorLogger();

  constructor(public navCtrl: NavController,
              public publicProvider: PublicProvider,
              public navParams: NavParams) {
  }

  ionViewWillEnter() {
    this.selectedItemType = ITEM_TYPES.VEHICLE;
    this.resetSearchParametersAndGetItems();
  }

  onItemChanged(item) {
    this.selectedItemType = item;
    this.resetSearchParametersAndGetItems();
  }

  getItems() {
    return new Promise(async (resolve, reject) => {
      this.publicProvider.items(this.searchParams).subscribe(data => {
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

  loadSingleItemPage(id) {
    this.navCtrl.push('SingleItemDetailsPage', {
      itemId: id
    });
  }

  searchParamsChanged(filterData) {
    console.log('##########', filterData.searchParams.canUpdate);
    if (filterData.searchParams.canUpdate) {
      this.filters = filterData.searchParams.data;
      this.searchByFilters = this.generateSearchParamsString(this.filters);
      this.resetSearchParametersAndGetItems();
    }
  }

  onSearchText(text) {
    this.resetSearchParametersAndGetItems();
  }

  resetSearchParametersAndGetItems() {
    this.resetData();
    this.generateSearchParams();
    this.getItems();
  }

  generateSearchParams() {
    this.searchParams = `type=${this.selectedItemType}&page=${this.page}&limit=${this.itemsPerPage}`;
    if (!_.isEmpty(this.keyword)) {
      this.searchByKeyword = `&q=${this.keyword}`;
    } else {
      this.searchByKeyword = ``;
    }
    this.searchParams = `${this.searchParams}${this.searchByFilters}${this.searchByKeyword}`;
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

  generateSearchParamsString(filterData) {
    if (!_.isEmpty(filterData)) {
      let searchParam = '&';
      _.forIn(filterData, (value, key) => {
        if (value) {
          if (key === 'item_category') {
            key = 'category';
          }
          searchParam = searchParam.concat(`${key}=${value}&`);
        }
      });
      return searchParam.slice(0, -1);
    } else {
      return "";
    }

  }

}

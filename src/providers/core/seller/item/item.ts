import { Injectable } from '@angular/core';
import { ApiProvider } from "../../api/api";
import { ENDPOINTS } from "../../api/endpoints";
import { ItemImageProvider } from "./item-image/item-image";
import { combineLatest } from "rxjs/observable/combineLatest";

@Injectable()
export class ItemProvider {

  constructor(public api: ApiProvider,
              public itemImagesProvider: ItemImageProvider) {
  }

  newItem(sellerId, params) {
    let url = this.api.getHttpUrl(ENDPOINTS.SELLERS.ADD_ITEM, sellerId);
    return this.api.httpPostCall(url, params);
  }

  deleteItem(itemId) {
    let url = this.api.getHttpUrl(ENDPOINTS.SELLERS.DELETE_ITEM, itemId);
    return this.api.httpDeleteCall(url);
  }

  updateItem(sellerId, itemId, paramms) {
    let url = this.api.getHttpUrl(ENDPOINTS.SELLERS.UPDATE_ITEM,sellerId, itemId);
    return this.api.httpPutCall(url, paramms);
  }

  handleImages(itemId, images) {
    let addImages = this.itemImagesProvider.addImages(itemId, images);
    let updateImages = this.itemImagesProvider.updateImages(itemId, images);
    return combineLatest(addImages, updateImages);
  }

  deleteImage(itemId, imageId) {
    let url = this.api.getHttpUrl(ENDPOINTS.SELLERS.DELETE_IMAGE, itemId, imageId);
    return this.api.httpDeleteCall(url);
  }

}

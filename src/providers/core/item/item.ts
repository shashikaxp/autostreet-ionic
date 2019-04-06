import { Injectable } from '@angular/core';
import { ApiProvider } from "../api/api";
import { ENDPOINTS } from "../api/endpoints";
import { forkJoin } from "rxjs/observable/forkJoin";
import { ItemImageProvider } from "./item-image/item-image";

@Injectable()
export class ItemProvider {

  constructor(public api: ApiProvider,
              public itemImagesProvider: ItemImageProvider) {
  }

  newItem(sellerId, params) {
    let url = this.api.getHttpUrl(ENDPOINTS.ITEM.ADD, sellerId);
    return this.api.httpPostCall(url, params);
  }

  handleImages(itemId, images) {
    let addImages = this.itemImagesProvider.addImages(itemId, images);
    let updateImages = this.itemImagesProvider.updateImages(itemId, images);
    return forkJoin([addImages, updateImages]);
  }

  deleteImage(itemId, imageId) {
    let url = this.api.getHttpUrl(ENDPOINTS.ITEM.DELETE_IMAGE, itemId, imageId);
    return this.api.httpDeleteCall(url);
  }

}

import { Injectable } from '@angular/core';
import { ApiProvider } from "../api/api";
import { ENDPOINTS } from "../api/endpoints";

@Injectable()
export class ItemProvider {

  constructor(public api: ApiProvider) {
  }

  newItem(sellerId, params) {
    let url = this.api.getHttpUrl(ENDPOINTS.ITEM.ADD, sellerId);
    return this.api.httpPostCall(url, params);
  }

  addImages(itemId, params) {
    let url = this.api.getHttpUrl(ENDPOINTS.ITEM.ADD_IMAGES, itemId);
    return this.api.httpPostCall(url, params);
  }

  deleteImage(itemId, imageId) {
    let url = this.api.getHttpUrl(ENDPOINTS.ITEM.DELETE_IMAGE, itemId, imageId);
    return this.api.httpDeleteCall(url);
  }

  updateItem(itemId, imageID, params) {
    let url = this.api.getHttpUrl(ENDPOINTS.ITEM.UPDATE_IMAGE, itemId, imageID);
    return this.api.httpPostCall(url, params);
  }

}

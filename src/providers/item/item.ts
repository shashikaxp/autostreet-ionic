import { Injectable } from '@angular/core';
import { ApiProvider } from "../core/api/api";
import { ENDPOINTS } from "../core/api/endpoints";

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

}

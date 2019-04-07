import { Injectable } from '@angular/core';
import { ApiProvider } from "../api/api";
import { ENDPOINTS } from "../api/endpoints";
import { HEADER_SKIP_INTERCEPTOR } from "../api/http-headers";

@Injectable()
export class SellerProvider {

  constructor(public apiProvider: ApiProvider) {
  }

  register(params) {
    let url = this.apiProvider.getHttpUrl(ENDPOINTS.SELLERS.REGISTER);
    return this.apiProvider.httpPostCall(url, params, HEADER_SKIP_INTERCEPTOR);
  }

  items(sellerId, searchParams) {
    let url = this.apiProvider.getHttpUrl(ENDPOINTS.SELLERS.ITEMS, sellerId, searchParams);
    return this.apiProvider.httpGetCall(url);
  }

  itemDetails(itemId) {
    let url = this.apiProvider.getHttpUrl(ENDPOINTS.SELLERS.ITEM_DETAILS, itemId);
    return this.apiProvider.httpGetCall(url);
  }

}

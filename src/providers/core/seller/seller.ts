import { Injectable } from '@angular/core';
import { ApiProvider } from "../api/api";
import { ENDPOINTS } from "../api/endpoints";
import { HEADER_SKIP_INTERCEPTOR } from "../api/http-headers";

@Injectable()
export class SellerProvider {

  constructor(public apoProvider: ApiProvider) {
  }

  register(params) {
    let url = this.apoProvider.getHttpUrl(ENDPOINTS.SELLERS.REGISTER);
    return this.apoProvider.httpPostCall(url, params, HEADER_SKIP_INTERCEPTOR);
  }

  items(sellerId, searchParams) {
    let url = this.apoProvider.getHttpUrl(ENDPOINTS.SELLERS.ITEMS, sellerId, searchParams);
    return this.apoProvider.httpGetCall(url);
  }

  itemDetails(itemId) {
    let url = this.apoProvider.getHttpUrl(ENDPOINTS.SELLERS.ITEM, itemId);
    return this.apoProvider.httpGetCall(url);
  }

}

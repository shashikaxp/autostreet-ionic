import { Injectable } from '@angular/core';
import { ApiProvider } from "../core/api/api";
import { HEADER_SKIP_INTERCEPTOR } from "../core/api/http-headers";
import { ENDPOINTS } from "../core/api/endpoints";

@Injectable()
export class PublicProvider {

  constructor(public apiProvider: ApiProvider) {
  }

  items(searchParams) {
    let url = this.apiProvider.getHttpUrl(ENDPOINTS.PUBLIC.ITEMS, searchParams);
    return this.apiProvider.httpGetCall(url, HEADER_SKIP_INTERCEPTOR);
  }

  itemDetails(itemId) {
    let url = this.apiProvider.getHttpUrl(ENDPOINTS.PUBLIC.ITEM_DETAILS, itemId);
    return this.apiProvider.httpGetCall(url, HEADER_SKIP_INTERCEPTOR);
  }

}

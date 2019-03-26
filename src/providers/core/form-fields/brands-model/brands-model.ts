import { Injectable } from '@angular/core';
import { HEADER_SKIP_INTERCEPTOR } from "../../api/http-headers";
import { ENDPOINTS } from "../../api/endpoints";
import { ApiProvider } from "../../api/api";

@Injectable()
export class BrandsModelProvider {

  constructor(public apiProvider: ApiProvider) {
  }

  getBrands() {
    let url = this.apiProvider.getHttpUrl(ENDPOINTS.FORM.BRANDS);
    return this.apiProvider.httpGetCall(url, HEADER_SKIP_INTERCEPTOR);
  }

  getModels(brandId) {
    let url = this.apiProvider.getHttpUrl(ENDPOINTS.FORM.MODEL, brandId);
    return this.apiProvider.httpGetCall(url, HEADER_SKIP_INTERCEPTOR);
  }

}

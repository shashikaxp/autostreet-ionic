import { Injectable } from '@angular/core';
import { ApiProvider } from "../../api/api";
import { HEADER_SKIP_INTERCEPTOR } from "../../api/http-headers";
import { ENDPOINTS } from "../../api/endpoints";

@Injectable()
export class DistrictCityProvider {


  constructor(public apiProvider: ApiProvider) {
  }

  getDistricts() {
    let url = this.apiProvider.getHttpUrl(ENDPOINTS.FORM.DISTRICTS);
    return this.apiProvider.httpGetCall(url, HEADER_SKIP_INTERCEPTOR);
  }

  getCities(districtId) {
    let url = this.apiProvider.getHttpUrl(ENDPOINTS.FORM.CITY, districtId);
    return this.apiProvider.httpGetCall(url, HEADER_SKIP_INTERCEPTOR);
  }

}

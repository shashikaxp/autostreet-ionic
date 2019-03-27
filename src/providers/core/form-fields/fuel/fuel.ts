import { Injectable } from '@angular/core';
import { HEADER_SKIP_INTERCEPTOR } from "../../api/http-headers";
import { ENDPOINTS } from "../../api/endpoints";
import { ApiProvider } from "../../api/api";

@Injectable()
export class FuelProvider {

  constructor(public apiProvider: ApiProvider) {
  }

  getFuelTypes() {
    let url = this.apiProvider.getHttpUrl(ENDPOINTS.FORM.FUEL);
    return this.apiProvider.httpGetCall(url, HEADER_SKIP_INTERCEPTOR);
  }

}

import { Injectable } from '@angular/core';
import { HEADER_SKIP_INTERCEPTOR } from "../../api/http-headers";
import { ENDPOINTS } from "../../api/endpoints";
import { ApiProvider } from "../../api/api";

@Injectable()
export class ConditionProvider {

  constructor(public apiProvider: ApiProvider) {
  }

  getConditions(itemType) {
    let url = this.apiProvider.getHttpUrl(ENDPOINTS.FORM.CONDITION, itemType);
    return this.apiProvider.httpGetCall(url, HEADER_SKIP_INTERCEPTOR);
  }

}

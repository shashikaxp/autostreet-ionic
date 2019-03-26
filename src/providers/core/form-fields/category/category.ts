import { Injectable } from '@angular/core';
import { ApiProvider } from "../../api/api";
import { ENDPOINTS } from "../../api/endpoints";
import { HEADER_SKIP_INTERCEPTOR } from "../../api/http-headers";

@Injectable()
export class CategoryProvider {

  constructor(private apiProvider: ApiProvider) {
  }

  getCategories(itemType) {
    let url = this.apiProvider.getHttpUrl(ENDPOINTS.FORM.CATEGORY, itemType);
    return this.apiProvider.httpGetCall(url, HEADER_SKIP_INTERCEPTOR);
  }

}

import { Injectable } from '@angular/core';
import { ApiProvider } from "../api/api";
import { ENDPOINTS } from "../api/endpoints";

@Injectable()
export class SparePartsProvider {

  constructor(private apiProvider: ApiProvider) {
  }

  getManufacturers() {
    let url = this.apiProvider.getHttpUrl(ENDPOINTS.PARTS.MANUFACTURERS);
    return this.apiProvider.httpGetCall(url);
  }

  getModels(manufacturerId) {
    let url = this.apiProvider.getHttpUrl(ENDPOINTS.PARTS.MODELS, manufacturerId);
    return this.apiProvider.httpGetCall(url);
  }

  getCategories() {
    let url = this.apiProvider.getHttpUrl(ENDPOINTS.PARTS.CATEGORIES);
    return this.apiProvider.httpGetCall(url);
  }

  addNewSparePart(companyId, params) {
    let url = this.apiProvider.getHttpUrl(ENDPOINTS.PARTS.ADD, companyId);
    return this.apiProvider.httpPostCall(url, params);
  }

}

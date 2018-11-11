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

  getConditions() {
    let url = this.apiProvider.getHttpUrl(ENDPOINTS.PARTS.CONDITIONS);
    return this.apiProvider.httpGetCall(url);
  }

  addNewSparePart(companyId, params) {
    let url = this.apiProvider.getHttpUrl(ENDPOINTS.PARTS.ADD, companyId);
    return this.apiProvider.httpPostCall(url, params);
  }

  getDetails(companyId, partId) {
    let url = this.apiProvider.getHttpUrl(ENDPOINTS.PARTS.DETAILS, companyId, partId);
    return this.apiProvider.httpGetCall(url);
  }

  updateSparePartImage(companyId, partId, imageId, params) {
    let url = this.apiProvider.getHttpUrl(ENDPOINTS.PARTS.IMAGE_UPDATE, companyId, partId, imageId);
    return this.apiProvider.httpPutCall(url, params);
  }

  addSparePartImage(companyId, partId, params) {
    let url = this.apiProvider.getHttpUrl(ENDPOINTS.PARTS.ADD_NEW_IMAGE, companyId, partId);
    return this.apiProvider.httpPostCall(url, params);
  }

  updateSparePartDetails(companyId, partId, params) {
    let url = this.apiProvider.getHttpUrl(ENDPOINTS.PARTS.DETAILS_UPDATE, companyId, partId);
    return this.apiProvider.httpPutCall(url, params);
  }

}

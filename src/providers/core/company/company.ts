import { Injectable } from '@angular/core';
import { ApiProvider } from "../api/api";
import { ENDPOINTS } from "../api/endpoints";
import { HttpHeaders } from "@angular/common/http";

@Injectable()
export class CompanyProvider {

  constructor(public apiProvider: ApiProvider) {
  }

  register(companyDetails) {
    let url = this.apiProvider.getHttpUrl(ENDPOINTS.COMPANY.REGISTER);
    let httpHeaders = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.apiProvider.httpPostCall(url, companyDetails, httpHeaders);
  }

  getSparePartsList(companyId, pageNo, limit) {
    let url = this.apiProvider.getHttpUrl(ENDPOINTS.COMPANY.PARTS_LIST, companyId, pageNo, limit);
    return this.apiProvider.httpGetCall(url);
  }

}

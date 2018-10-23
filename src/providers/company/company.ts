import { Injectable } from '@angular/core';
import { ApiProvider } from "../core/api/api";
import { ENDPOINTS } from "../core/api/endpoints";
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

}

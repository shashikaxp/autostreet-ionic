import { Injectable } from '@angular/core';
import { ApiProvider } from "../core/api/api";
import { ENDPOINTS } from "../core/api/endpoints";
import { HttpHeaders } from "@angular/common/http";

@Injectable()
export class AuthProvider {

  constructor(public apiProvider: ApiProvider) {
  }

  login({userName, password}) {
    let url = this.apiProvider.getHttpUrl(ENDPOINTS.AUTH.LOGIN);
    let httpHeaders = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' +  btoa(userName + ':' + password)
      })
    };
    return this.apiProvider.httpGetCall(url, httpHeaders);
  }

}

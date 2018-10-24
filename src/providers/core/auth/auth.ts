import { Injectable } from '@angular/core';
import { ApiProvider } from "../api/api";
import { ENDPOINTS } from "../api/endpoints";
import { HEADER_SKIP_INTERCEPTOR } from "../api/http-headers";

@Injectable()
export class AuthProvider {

  constructor(public apiProvider: ApiProvider) {
  }

  login({userName, password}) {
    let url = this.apiProvider.getHttpUrl(ENDPOINTS.AUTH.LOGIN);

    let httpHeaders = HEADER_SKIP_INTERCEPTOR;
    httpHeaders.headers = httpHeaders.headers
      .set('Authorization', 'Basic ' + btoa(userName + ':' + password));
    return this.apiProvider.httpGetCall(url, httpHeaders);
  }

}

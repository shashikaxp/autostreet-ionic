import { Injectable } from '@angular/core';
import { ApiProvider } from "../../api/api";
import { ENDPOINTS } from "../../api/endpoints";
import { HEADER_SKIP_INTERCEPTOR } from "../../api/http-headers";

@Injectable()
export class TransmissionProvider {

  constructor(private apiProvider: ApiProvider) {
  }

  getTranmissions() {
    let url = this.apiProvider.getHttpUrl(ENDPOINTS.FORM.TRANSMISSION);
    return this.apiProvider.httpGetCall(url, HEADER_SKIP_INTERCEPTOR);
  }

}

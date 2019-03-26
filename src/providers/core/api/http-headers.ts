import { HttpHeaders } from "@angular/common/http";
import { API_VERSION } from "../../../config";

export const HEADER_SKIP_INTERCEPTOR = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'X-Api-Version': API_VERSION,
    'X-Skip-Interceptor': ''
  })
};

export const HEADER_SKIP_LOADER = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'X-Api-Version': API_VERSION,
    'X-Skip-HttpLoader': ''
  })
};

import { HttpHeaders } from "@angular/common/http";

export const HEADER_SKIP_INTERCEPTOR = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'X-Skip-Interceptor': ''
  })
};

export const HEADER_SKIP_LOADER = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'X-Skip-HttpLoader': ''
  })
};

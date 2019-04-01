import {
  HttpClient, HttpEvent, HttpHandler, HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { switchMap } from "rxjs/operators";
import { fromPromise } from "rxjs/observable/fromPromise";
import { Storage } from "@ionic/storage";
import 'rxjs/add/operator/do';
import { API_VERSION, STORAGE } from "../../../config";

@Injectable()
export class TokenInterceptorProvider {

  private InterceptorSkipHeader = "X-Skip-Interceptor";
  private HttpLoaderSkipHeader = "X-Skip-HttpLoader";


  constructor(public http: HttpClient,
              public storage: Storage) {
  }

  intercept(request: HttpRequest<any>,
            next: HttpHandler): Observable<HttpEvent<any>> {

    request = request.clone({
      headers: request.headers.set('X-Api-Version', API_VERSION)
    });

    if (!request.headers.has(this.InterceptorSkipHeader)) {
      return fromPromise(this.storage.get(STORAGE.TOKEN))
        .pipe(switchMap(token => {
          let headers = request.headers.set('Authorization', 'Bearer ' + token);
          const reqClone = request.clone({headers});
          return this.handleRequest(next, reqClone);
        }));
    } else {
      return this.handleRequest(next, request);
    }
  }

  removeHeaders(request) {
    if (request.headers.has(this.InterceptorSkipHeader)) {
      const headers = request.headers.delete(this.InterceptorSkipHeader);
      request = request.clone({headers});
    }

    if (request.headers.has(this.HttpLoaderSkipHeader)) {
      const headers = request.headers.delete(this.InterceptorSkipHeader);
      request = request.clone({headers});
    }

    return request;
  }

  handleRequest(next: HttpHandler, request: HttpRequest<any>) {
    request = this.removeHeaders(request);
    return next.handle(request).do((event: HttpEvent<any>) => {
        return event;
    });
  }

}

import {
  HttpClient, HttpErrorResponse, HttpEvent, HttpHandler, HttpRequest,
  HttpResponse
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { switchMap } from "rxjs/operators";
import { fromPromise } from "rxjs/observable/fromPromise";
import { Storage } from "@ionic/storage";
import 'rxjs/add/operator/do';
import { STORAGE } from "../../../config";

@Injectable()
export class TokenInterceptorProvider {

  private InterceptorSkipHeader = "X-Skip-Interceptor";
  private HttpLoaderSkipHeader = "X-Skip-HttpLoader";

  constructor(public http: HttpClient,
              private storage: Storage) {
  }

  intercept(request: HttpRequest<any>,
            next: HttpHandler): Observable<HttpEvent<any>> {

    if (request.headers.has(this.HttpLoaderSkipHeader)) {
      const headers = request.headers.delete(this.HttpLoaderSkipHeader);
      request = request.clone({headers});
    } else {
      // this.presentLoadingPopup();
    }

    if (request.headers.has(this.InterceptorSkipHeader)) {
      const headers = request.headers.delete(this.InterceptorSkipHeader);
      request = request.clone({headers});
      return next.handle(request).do((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          // this.dismissLoadingPopup();
        }
        return event;
      }, (err: any) => {
        if (err instanceof HttpErrorResponse) {
          // this.dismissLoadingPopup();
        }
      })
    }

    return fromPromise(this.storage.get(STORAGE.TOKEN))
      .pipe(switchMap(token => {
        const headers = request.headers
          .set('Authorization', 'Bearer ' + token);
        const reqClone = request.clone({
          headers
        });
        return next.handle(reqClone).do((event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            // this.dismissLoadingPopup();
          }
          return event;
        }, (err: any) => {
          // this.dismissLoadingPopup();
        })
      }));
  }

}

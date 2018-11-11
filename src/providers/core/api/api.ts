import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { HttpErrorHandlerProvider } from "./http-error-handler";
import _ from "lodash";

@Injectable()
export class ApiProvider {

  constructor(public http: HttpClient,
              private errorHandler: HttpErrorHandlerProvider) {
  }

  httpGetCall(url, header?){
    return Observable.create(observer => {
      this.http.get(url, header)
        .subscribe(data => {
          observer.next(data);
        },(err) => {
          this.errorHandler.handle(err);
          observer.error(err);
        });
    });
  }

  httpPostCall(url, params, header?) {
    return Observable.create(observer => {
      this.http.post(url, params, header)
        .subscribe(data => {
          observer.next(data);
        },(err) => {
          this.errorHandler.handle(err);
          observer.error(err);
        });
    });
  }

  httpPutCall(url, params, header?) {
    return Observable.create(observer => {
      this.http.put(url, params, header)
        .subscribe(data => {
          observer.next(data);
        },(err) => {
          this.errorHandler.handle(err);
          observer.error(err);
        });
    });
  }

  httpDeleteCall(url, header?) {
    return Observable.create(observer => {
      this.http.delete(url, header)
        .subscribe(data => {
          observer.next(data);
        },(err) => {
          this.errorHandler.handle(err);
          observer.error(err);
        });
    });
  }

  getHttpUrl(url, ...variables) {
    _.templateSettings.interpolate = /{{([\s\S]+?)}}/g;
    let compiled =  _.template(url);
    let params = this.getHttpParams(variables);
    return compiled(params);
  }

  getHttpParams(variables) {
    let httpParams = {};
    _.forEach(variables, (variable, index) => {
      httpParams[`param${index + 1}`] = variable;
    });
    return httpParams;
  }

}

import { Injectable } from '@angular/core';
import { HttpErrorResponse } from "@angular/common/http";

@Injectable()
export class HttpErrorHandlerProvider {

  handle(error: HttpErrorResponse) {
    console.log('error', JSON.stringify(error));
  }

}

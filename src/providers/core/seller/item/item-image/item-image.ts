import { Injectable } from '@angular/core';
import _ from "lodash";
import { ENDPOINTS } from "../../../api/endpoints";
import { ApiProvider } from "../../../api/api";
import { formDataGenerator } from "./form-data-generator";
import { imageArrayGenerator } from "./image-array-generator";
import { Observable } from "rxjs/Observable";
import { combineLatest } from "rxjs/observable/combineLatest";

@Injectable()
export class ItemImageProvider {

  constructor(public api: ApiProvider) {
  }

  addSingleImage(itemId, params) {
    let url = this.api.getHttpUrl(ENDPOINTS.SELLERS.ADD_IMAGES, itemId);
    return this.api.httpPostCall(url, params);
  }

  addImages(itemId, images) {
    let imagesToAdd = _.filter(images, {'type': 'add', "isChanged": true});
    let formData = formDataGenerator().add(imagesToAdd);
    if (_.size(imagesToAdd) > 0) {
      return this.addSingleImage(itemId, formData);
    } else {
      return Observable.create((observer) => {
        observer.next('No images for add');
        observer.complete();
      })
    }
  }

  updateSingleImage(itemId, imageID, params) {
    let url = this.api.getHttpUrl(ENDPOINTS.SELLERS.UPDATE_IMAGE, itemId, imageID);
    return this.api.httpPutCall(url, params);
  }

  updateImages(itemId, images) {
    let imagesToUpdate = _.filter(images, {'type': 'update', "isChanged": true});
    if (_.size(imagesToUpdate) > 0) {
      let observerArray = _.map(imagesToUpdate, (image) => {
        let params = formDataGenerator().update(image);
        return this.updateSingleImage(itemId, image.id, params)
      });
      return combineLatest(observerArray);
    } else {
      return Observable.create((observer) => {
        observer.next('No images for update');
        observer.complete();
      })
    }
  }

  generateFormattedImagesArray(images) {
    if (_.size(images) < 1) {
      return imageArrayGenerator().add();
    } else {
      return imageArrayGenerator().update(images);
    }
  }

}

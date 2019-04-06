import { Injectable } from '@angular/core';
import _ from "lodash";
import { forkJoin } from "rxjs/observable/forkJoin";
import { ENDPOINTS } from "../../api/endpoints";
import { ApiProvider } from "../../api/api";
import { formDataGenerator } from "./form-data-generator";
import { imageArrayGenerator } from "./image-array-generator";

@Injectable()
export class ItemImageProvider {

  constructor(public api: ApiProvider) {
  }

  addSingleImage(itemId, params) {
    let url = this.api.getHttpUrl(ENDPOINTS.ITEM.ADD_IMAGES, itemId);
    return this.api.httpPostCall(url, params);
  }

  addImages(itemId, images) {
    let imagesToAdd = _.filter(images, {'type': 'add', "isChanged": true});
    let formData = formDataGenerator().add(imagesToAdd);
    return this.addSingleImage(itemId, formData);
  }

  updateSingleImage(itemId, imageID, params) {
    let url = this.api.getHttpUrl(ENDPOINTS.ITEM.UPDATE_IMAGE, itemId, imageID);
    return this.api.httpPostCall(url, params);
  }

  updateImages(itemId, images) {
    let imagesToAdd = _.filter(images, {'type': 'update', "isChanged": true});
    let forkArray = _.map(imagesToAdd, (image) => {
      let params = formDataGenerator().update(image);
      return this.updateSingleImage(itemId, image.id, params)
    });
    return forkJoin(forkArray);
  }

  generateFormattedImagesArray(images) {
    if (_.size(images) < 1) {
      return imageArrayGenerator().add();
    } else {
      return imageArrayGenerator().update(images);
    }
  }

}

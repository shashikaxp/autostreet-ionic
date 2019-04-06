import { Injectable } from '@angular/core';
import { dataURItoBlob } from "../../../util/blob-convertor/blob-convertor";
import _ from "lodash";
import { ItemProvider } from "../item";
import { forkJoin } from "rxjs/observable/forkJoin";

@Injectable()
export class ItemImageProvider {

  public imageCount = 6;

  constructor(public itemProvider: ItemProvider) {
  }

  handleImages(itemId, images) {
    let addImages = this.addImages(itemId, images);
    let updateImages = this.updateImages(itemId, images);
    return forkJoin([addImages, updateImages]);
  }

  addImages(itemId, images) {
    let imagesToAdd = _.filter(images, {'type': 'add', "isChanged": true});
    console.log('imagesToAdd', imagesToAdd);
    let formData = this.newImagesFormData(imagesToAdd);
    return this.itemProvider.addImages(itemId, formData);
  }

  updateImages(itemId, images) {
    let imagesToAdd = _.filter(images, {'type': 'update', "isChanged": true});
    let forkArray = _.map(imagesToAdd, (image) => {
      let params = this.updateImageFormData(image);
      return this.itemProvider.updateItem(itemId, image.id, params)
    });
    return forkJoin(forkArray);
  }

  updateImageFormData(image) {
    let formData = new FormData();
    formData.append('images', dataURItoBlob(image.src), image.id + '.jpeg');
    return formData;
  }

  newImagesFormData(images) {
    let formData = new FormData();
    _.forEach(images, (image, i) => {
      if (!_.isEmpty(image.src)) {
        formData.append('images', dataURItoBlob(image.src), i + '.jpeg');
      }
    });
    return formData;
  }

  generateFormattedImagesArray(images) {
    if (_.size(images) < 1) {
      return this.generateAddImagesArray();
    } else {
      return this.generateUpdateImagesArray(images);
    }
  }

  generateAddImagesArray() {
    let tempArray = [];
    for (let i = 0; i < this.imageCount; i++) {
      tempArray.push({
        id: i,
        src: null,
        isChanged: false,
        type: 'add'
      });
    }
    return tempArray;
  }

  generateUpdateImagesArray(images) {

    let arraySize = _.size(images);

    images = _.map(images, (image) => {
      return {
        id: image.id,
        src: image.url,
        isChanged: false,
        type: 'update'
      }
    });
    console.log("images",images);
    let formattedArray = images;
    for (let i = arraySize; i < this.imageCount; i++) {
      formattedArray.push({
        id: i,
        src: null,
        isChanged: false,
        type: 'update'
      });
    }
    console.log("formattedArray",formattedArray);
    return formattedArray;
  }

}

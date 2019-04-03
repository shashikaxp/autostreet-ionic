import { Injectable } from '@angular/core';
import { dataURItoBlob } from "../../../util/blob-convertor/blob-convertor";
import _ from "lodash";
import { ItemProvider } from "../item";

@Injectable()
export class ItemImageProvider {

  public imageCount = 6;

  constructor(public itemProvider: ItemProvider) {
  }

  handleImages(itemId, images) {
    let imagesToAdd = _.filter(images, {'type': 'add', "isChanged": true});
    console.log('imagesToAdd', imagesToAdd);
    let formData = this.newImagesFormData(imagesToAdd);
    return this.itemProvider.addImages(itemId, formData);
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

    let temp = { id: 1, src: null};
    let arraySize = _.size(images);

    let filledArray = _.fill(images, temp, arraySize);
    return _.map(filledArray, (image) => {
      return {
        ...image,
        isChanged: false,
        type: 'update'
      }

    })

  }

}

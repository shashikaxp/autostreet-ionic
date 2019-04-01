import { Component, EventEmitter, Input, Output } from '@angular/core';
import _ from 'lodash';

@Component({
  selector: 'item-add-images',
  templateUrl: 'item-add-images.html'
})
export class ItemAddImagesComponent {

  @Input() imageCount;
  @Output() selectedImages = new EventEmitter();

  public images;

  constructor() {
  }

  ngOnInit() {
    this.images = this.getImagesArray(this.imageCount);
  }

  getImagesArray(imageCount) {
    let tempArray = [];
    for (let i = 0; i < imageCount; i++) {
      tempArray.push({
        id: i,
        src: null
      });
    }
    return tempArray;
  }

  newImage(event, id) {
    let imageObject = _.find(this.images, {'id': id});
    if (typeof imageObject !== 'undefined') {
      imageObject.src = event.src;
      this.selectedImages.emit({
        data: _.map(this.images, 'src')
      });
    }

  }


}

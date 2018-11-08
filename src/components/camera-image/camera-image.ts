import { Component, EventEmitter, Input, Output } from '@angular/core';
import _ from "lodash";
import { Camera } from "@ionic-native/camera";

@Component({
  selector: 'camera-image',
  templateUrl: 'camera-image.html'
})
export class CameraImageComponent {

  @Input() imageInputSrc: string;
  @Input() imageName: string;
  @Output() changeImage = new EventEmitter<string>();
  private cameraOptions;
  public imageSrc;

  constructor(private camera: Camera) {

    this.imageSrc = this.imageInputSrc;

    this.cameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      targetWidth: 600,
      targetHeight: 600,
      allowEdit: true
    };
  }

  getImageSrc() {
    if(!_.isEmpty(this.imageInputSrc)) {
      return this.imageInputSrc;
    } else {
      return '../../../assets/imgs/default-placeholder.png';
    }
  }

  isValidUrl() {
    return !_.includes(this.getImageSrc(), 'default-placeholder');
  }

  takeSparePartImage() {
    this.camera.getPicture(this.cameraOptions).then((imageData) => {
      this.imageInputSrc = 'data:image/jpeg;base64,' + imageData;
      this.changeImage.emit('data:image/jpeg;base64,' + imageData);
    }, (err) => {
      // Handle error
    });
  }

}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import _ from "lodash";
import { Camera } from "@ionic-native/camera";
import { AlertController } from "ionic-angular";

@Component({
  selector: 'camera-image',
  templateUrl: 'camera-image.html'
})
export class CameraImageComponent {

  @Input() imageSrc;
  @Output() changeImage = new EventEmitter<any>();
  @Output() deleteImage = new EventEmitter();
  private cameraOptions;

  constructor(private camera: Camera,
              private alertCtrl: AlertController) {

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
    if(!_.isEmpty(this.imageSrc)) {
      return this.imageSrc;
    } else {
      return '../../../assets/imgs/default-placeholder.png';
    }
  }

  isValidUrl() {
    return !_.includes(this.getImageSrc(), 'default-placeholder');
  }

  takeImage() {

    this.camera.getPicture(this.cameraOptions).then((imageData) => {
      this.imageSrc = 'data:image/jpeg;base64,' + imageData;
      this.changeImage.emit(this.imageSrc);
    }, (err) => {
      // Handle error
    });
  }

  delete() {
    this.deleteImage.emit(this.imageSrc);
  }

  presentConfirm() {
    let alert = this.alertCtrl.create({
      title: 'Confirm delete',
      message: 'Do you want to delete this image?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Delete',
          handler: () => {
            this.delete();
          }
        }
      ]
    });
    alert.present();
  }

}

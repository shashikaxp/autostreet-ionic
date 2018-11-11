import { Component, EventEmitter, Input, Output } from '@angular/core';
import _ from "lodash";
import { Camera } from "@ionic-native/camera";
import { AlertController } from "ionic-angular";

@Component({
  selector: 'camera-image',
  templateUrl: 'camera-image.html'
})
export class CameraImageComponent {

  @Input() imageInputSrc: string;
  @Output() changeImage = new EventEmitter<any>();
  private cameraOptions;
  public imageSrc;

  constructor(private camera: Camera,
              private alertCtrl: AlertController) {

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

      let params = {
        type: "updateOrAdd",
        url: this.imageInputSrc
      };

      this.changeImage.emit(params);
    }, (err) => {
      // Handle error
    });
  }

  deleteImage() {
    let params = {
      type: "delete",
      url: this.imageInputSrc
    };
    this.changeImage.emit(params);
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
            this.deleteImage();
          }
        }
      ]
    });
    alert.present();
  }

}

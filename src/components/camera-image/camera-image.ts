import { Component, EventEmitter, Input, Output } from '@angular/core';
import _ from "lodash";
import { Camera } from "@ionic-native/camera";
import { AlertController } from "ionic-angular";

@Component({
  selector: 'camera-image',
  templateUrl: 'camera-image.html'
})
export class CameraImageComponent {

  @Input() imageInput;
  @Output() changeImage = new EventEmitter<any>();
  private cameraOptions;
  public imageSrc;

  constructor(private camera: Camera,
              private alertCtrl: AlertController) {

    this.cameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true
    };
  }

  ngOnInit() {
    this.imageSrc = this.imageInput;
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

  takeSparePartImage(type) {

    let params;
    this.camera.getPicture(this.cameraOptions).then((imageData) => {
      this.imageSrc = 'data:image/jpeg;base64,' + imageData;

      if (type == 'add') {
        params = {
          type: "add",
          src: this.imageSrc,
        };
      } else if (type == 'edit') {
        params = {
          type: "edit",
          src: this.imageSrc,
          id: this.imageInput['id']
        };
      }

      this.changeImage.emit(params);
    }, (err) => {
      // Handle error
    });
  }

  deleteImage() {
    let params = {
      type: "delete",
      src: this.imageSrc,
      id: this.imageInput['id']
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

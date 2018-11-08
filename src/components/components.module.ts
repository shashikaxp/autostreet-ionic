import { NgModule } from '@angular/core';
import { CameraImageComponent } from './camera-image/camera-image';
import { IonicModule } from "ionic-angular";
import { IonicImageLoader } from "ionic-image-loader";

@NgModule({
  declarations: [CameraImageComponent],
  imports: [IonicModule,
            IonicImageLoader],
  exports: [CameraImageComponent]
})
export class ComponentsModule {
}

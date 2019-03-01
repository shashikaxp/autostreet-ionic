import { NgModule } from '@angular/core';
import { CameraImageComponent } from './camera-image/camera-image';
import { IonicModule } from "ionic-angular";
import { IonicImageLoader } from "ionic-image-loader";
import { CategorySelectorComponent } from './category-selector/category-selector';

@NgModule({
  declarations: [CameraImageComponent,
    CategorySelectorComponent],
  imports: [IonicModule,
            IonicImageLoader],
  exports: [CameraImageComponent,
    CategorySelectorComponent]
})
export class ComponentsModule {
}

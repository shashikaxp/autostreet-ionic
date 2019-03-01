import { NgModule } from '@angular/core';
import { CameraImageComponent } from './camera-image/camera-image';
import { IonicModule } from "ionic-angular";
import { IonicImageLoader } from "ionic-image-loader";
import { CategorySelectorComponent } from './category-selector/category-selector';
import { FiltersComponent } from './filters/filters';

@NgModule({
  declarations: [CameraImageComponent,
    CategorySelectorComponent,
    FiltersComponent],
  imports: [IonicModule,
            IonicImageLoader],
  exports: [CameraImageComponent,
    CategorySelectorComponent,
    FiltersComponent]
})
export class ComponentsModule {
}

import { NgModule } from '@angular/core';
import { CameraImageComponent } from './camera-image/camera-image';
import { IonicModule } from "ionic-angular";
import { IonicImageLoader } from "ionic-image-loader";
import { CategorySelectorComponent } from './category-selector/category-selector';
import { FiltersComponent } from './filters/filters';
import { NewItemFormComponent } from './new-item-form/new-item-form';
import { FieldModelComponent } from './new-item-form/field-model/field-model';

@NgModule({
  declarations: [CameraImageComponent,
    CategorySelectorComponent,
    FiltersComponent,
    NewItemFormComponent,
    FieldModelComponent],
  imports: [IonicModule,
            IonicImageLoader],
  exports: [CameraImageComponent,
    CategorySelectorComponent,
    FiltersComponent,
    NewItemFormComponent,
    FieldModelComponent]
})
export class ComponentsModule {
}

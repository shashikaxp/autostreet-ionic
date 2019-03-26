import { NgModule } from '@angular/core';
import { CameraImageComponent } from './camera-image/camera-image';
import { IonicModule } from "ionic-angular";
import { IonicImageLoader } from "ionic-image-loader";
import { CategorySelectorComponent } from './category-selector/category-selector';
import { FiltersComponent } from './filters/filters';
import { ItemFormComponent } from './item-form/item-form';
import { FieldBrandModelComponent } from './item-form/field-brand-model/field-brand-model';
import { FieldDistrictCityComponent } from './item-form/field-district-city/field-district-city';

@NgModule({
  declarations: [CameraImageComponent,
    CategorySelectorComponent,
    FiltersComponent,
    ItemFormComponent,
    FieldBrandModelComponent,
    FieldDistrictCityComponent],
  imports: [IonicModule,
            IonicImageLoader],
  exports: [CameraImageComponent,
    CategorySelectorComponent,
    FiltersComponent,
    ItemFormComponent,
    FieldBrandModelComponent,
    FieldDistrictCityComponent]
})
export class ComponentsModule {
}

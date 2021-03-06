import { NgModule } from '@angular/core';
import { CameraImageComponent } from './camera-image/camera-image';
import { IonicModule } from "ionic-angular";
import { IonicImageLoader } from "ionic-image-loader";
import { CategorySelectorComponent } from './category-selector/category-selector';
import { FiltersComponent } from './filters/filters';
import { ItemFormComponent } from './item-form/item-form';
import { FieldBrandModelComponent } from './item-form/field-brand-model/field-brand-model';
import { FieldDistrictCityComponent } from './item-form/field-district-city/field-district-city';
import { FieldCategoryComponent } from './item-form/field-category/field-category';
import { FieldConditionComponent } from './item-form/field-condition/field-condition';
import { FieldFuelComponent } from './item-form/field-fuel/field-fuel';
import { FieldTransmissionComponent } from './item-form/field-transmission/field-transmission';
import { FieldContactsComponent } from './item-form/field-contacts/field-contacts';
import { SortOptionsComponent } from './sort-options/sort-options';

@NgModule({
  declarations: [CameraImageComponent,
    CategorySelectorComponent,
    FiltersComponent,
    ItemFormComponent,
    FieldBrandModelComponent,
    FieldDistrictCityComponent,
    FieldCategoryComponent,
    FieldConditionComponent,
    FieldFuelComponent,
    FieldTransmissionComponent,
    FieldContactsComponent,
    SortOptionsComponent],
  imports: [IonicModule,
            IonicImageLoader],
  exports: [CameraImageComponent,
    CategorySelectorComponent,
    FiltersComponent,
    ItemFormComponent,
    FieldBrandModelComponent,
    FieldDistrictCityComponent,
    FieldCategoryComponent,
    FieldConditionComponent,
    FieldFuelComponent,
    FieldTransmissionComponent,
    FieldContactsComponent,
    SortOptionsComponent]
})
export class ComponentsModule {
}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditSparePartsPage } from './edit-spare-parts';
import { ComponentsModule } from "../../../components/components.module";

@NgModule({
  declarations: [
    EditSparePartsPage,
  ],
  imports: [
    IonicPageModule.forChild(EditSparePartsPage),
    ComponentsModule
  ],
})
export class EditSparePartsPageModule {}

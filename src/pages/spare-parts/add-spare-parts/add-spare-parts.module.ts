import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddSparePartsPage } from './add-spare-parts';
import { ComponentsModule } from "../../../components/components.module";

@NgModule({
  declarations: [
    AddSparePartsPage,
  ],
  imports: [
    IonicPageModule.forChild(AddSparePartsPage),
    ComponentsModule
  ],
})
export class AddSparePartsPageModule {}

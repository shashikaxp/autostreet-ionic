import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditSparePartsPage } from './edit-spare-parts';
import { ComponentsModule } from "../../../components/components.module";
import { NgHttpLoaderModule } from "ng-http-loader/ng-http-loader.module";

@NgModule({
  declarations: [
    EditSparePartsPage,
  ],
  imports: [
    IonicPageModule.forChild(EditSparePartsPage),
    ComponentsModule,
    NgHttpLoaderModule
  ],
})
export class EditSparePartsPageModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FiltersModalPage } from './filters-modal';
import { ComponentsModule } from "../../components/components.module";

@NgModule({
  declarations: [
    FiltersModalPage,
  ],
  imports: [
    IonicPageModule.forChild(FiltersModalPage),
    ComponentsModule
  ],
})
export class FiltersModalPageModule {}

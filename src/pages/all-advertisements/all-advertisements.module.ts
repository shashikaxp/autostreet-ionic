import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AllAdvertisementsPage } from './all-advertisements';
import { ComponentsModule } from "../../components/components.module";

@NgModule({
  declarations: [
    AllAdvertisementsPage,
  ],
  imports: [
    IonicPageModule.forChild(AllAdvertisementsPage),
    ComponentsModule
  ],
})
export class AllAdvertisementsPageModule {}

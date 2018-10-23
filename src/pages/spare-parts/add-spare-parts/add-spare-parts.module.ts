import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddSparePartsPage } from './add-spare-parts';

@NgModule({
  declarations: [
    AddSparePartsPage,
  ],
  imports: [
    IonicPageModule.forChild(AddSparePartsPage),
  ],
})
export class AddSparePartsPageModule {}

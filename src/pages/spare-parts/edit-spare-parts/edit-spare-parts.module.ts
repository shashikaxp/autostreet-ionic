import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditSparePartsPage } from './edit-spare-parts';

@NgModule({
  declarations: [
    EditSparePartsPage,
  ],
  imports: [
    IonicPageModule.forChild(EditSparePartsPage),
  ],
})
export class EditSparePartsPageModule {}

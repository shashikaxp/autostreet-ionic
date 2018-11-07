import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SparePartPreviewPage } from './spare-part-preview';

@NgModule({
  declarations: [
    SparePartPreviewPage,
  ],
  imports: [
    IonicPageModule.forChild(SparePartPreviewPage),
  ],
})
export class SparePartPreviewPageModule {}

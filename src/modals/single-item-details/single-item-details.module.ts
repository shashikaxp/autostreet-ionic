import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SingleItemDetailsPage } from './single-item-details';

@NgModule({
  declarations: [
    SingleItemDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(SingleItemDetailsPage),
  ],
})
export class SingleItemDetailsPageModule {}

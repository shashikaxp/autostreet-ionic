import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyStorePage } from './my-store';

@NgModule({
  declarations: [
    MyStorePage,
  ],
  imports: [
    IonicPageModule.forChild(MyStorePage),
  ],
})
export class MyStorePageModule {}

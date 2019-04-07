import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewItemPage } from './new-item';
import { ComponentsModule } from "../../../components/components.module";

@NgModule({
  declarations: [
    NewItemPage,
  ],
  imports: [
    IonicPageModule.forChild(NewItemPage),
    ComponentsModule
  ],
})
export class NewItemPageModule {}

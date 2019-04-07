import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditItemPage } from './edit-item';
import { ComponentsModule } from "../../../components/components.module";

@NgModule({
  declarations: [
    EditItemPage,
  ],
  imports: [
    IonicPageModule.forChild(EditItemPage),
    ComponentsModule
  ],
})
export class EditItemPageModule {}

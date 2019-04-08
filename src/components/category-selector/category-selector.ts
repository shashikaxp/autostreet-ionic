import {
  Component, EventEmitter, Output
} from '@angular/core';
import { ITEM_TYPES } from "../../config";

@Component({
  selector: 'category-selector',
  templateUrl: 'category-selector.html'
})

export class CategorySelectorComponent{

  @Output() itemChanged = new EventEmitter<any>();
  public itemTypes = ITEM_TYPES;
  public selectedType = this.itemTypes.VEHICLE;

  segmentChanged(event) {
   this.itemChanged.emit(event.value);
  }

}

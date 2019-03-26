import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ITEM_TYPES } from "../../config";

@Component({
  selector: 'category-selector',
  templateUrl: 'category-selector.html'
})

export class CategorySelectorComponent implements OnInit{

  @Output() itemChanged = new EventEmitter<any>();
  public itemTypes = ITEM_TYPES;
  public selectedType = this.itemTypes.VEHICLE;

  ngOnInit() {
    this.itemChanged.emit(this.selectedType);
  }

  segmentChanged(event) {
   this.itemChanged.emit(event.value);
  }

}

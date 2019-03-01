import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'category-selector',
  templateUrl: 'category-selector.html'
})

export class CategorySelectorComponent {

  @Output() itemChanged = new EventEmitter<any>();

  segmentChanged(event) {
   this.itemChanged.emit(event.value);
  }

}

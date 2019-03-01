import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'category-selector',
  templateUrl: 'category-selector.html'
})

export class CategorySelectorComponent implements OnInit{

  @Output() itemChanged = new EventEmitter<any>();
  public selectedType = 'vehicle';

  ngOnInit() {
    this.itemChanged.emit(this.selectedType);
  }

  segmentChanged(event) {
   this.itemChanged.emit(event.value);
  }

}

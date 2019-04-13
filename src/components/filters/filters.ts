import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ModalController } from "ionic-angular";

@Component({
  selector: 'filters',
  templateUrl: 'filters.html',
  styles: [`
    :host { right: 15px; bottom: 15px; }
    :host ion-fab { position: static; }
  `]
})
export class FiltersComponent {

  @Input() itemType;
  @Input() formData;
  @Output() searchParamsChanged = new EventEmitter();

  constructor(private modalCtrl: ModalController) {
  }

  openFiltersModal() {
    let modal = this.modalCtrl.create('FiltersModalPage', {
      itemType: this.itemType,
      formData: this.formData
    });
    modal.present();
    modal.onDidDismiss(searchParams => {
      this.searchParamsChanged.emit({searchParams})
    });
  }

}

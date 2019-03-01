import { Component, Input } from '@angular/core';
import { ModalController } from "ionic-angular";

@Component({
  selector: 'filters',
  templateUrl: 'filters.html'
})
export class FiltersComponent {

  @Input() itemType;

  constructor(private modalCtrl: ModalController) {
  }

  openFiltersModal() {
    let modal = this.modalCtrl.create('FiltersModalPage', {
      itemType: this.itemType
    });
    modal.present();
  }

}

import { Component, Input } from '@angular/core';
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

  constructor(private modalCtrl: ModalController) {
  }

  openFiltersModal() {
    let modal = this.modalCtrl.create('FiltersModalPage', {
      itemType: this.itemType
    });
    modal.present();
  }

}

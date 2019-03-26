import { Component, Input } from '@angular/core';
import { FuelProvider } from "../../../providers/core/form-fields/fuel/fuel";
import { formFields } from "../item-form.config";
import { ControlContainer, NgForm } from "@angular/forms";

@Component({
  selector: 'field-fuel',
  templateUrl: 'field-fuel.html',
  viewProviders: [ { provide: ControlContainer, useExisting: NgForm } ]
})
export class FieldFuelComponent {

  @Input() defaultFuelType;

  public formFields = formFields;
  public fuelTypes;

  constructor(private fuelProvider: FuelProvider) {
  }

  ngOnInit() {
    this.fuelProvider.getFuelTypes().subscribe(data => {
      this.fuelTypes = data.fuels;
    })
  }

}

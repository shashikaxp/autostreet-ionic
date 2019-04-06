import { Component, Input } from '@angular/core';
import { formFields } from "../item-form.config";
import { ControlContainer, NgForm } from "@angular/forms";
import { DistrictCityProvider } from "../../../providers/core/form-fields/district-city/district-city";
import { ErrorLogger } from "../../../modules/ErrorLogger";

@Component({
  selector: 'field-district-city',
  templateUrl: 'field-district-city.html',
  viewProviders: [{provide: ControlContainer, useExisting: NgForm}]
})
export class FieldDistrictCityComponent {

  @Input() defaultDistrict;
  @Input() defaultCity;

  public districts;
  public cities;

  public selectedCity;
  public selectedDistrict;
  public formFields = formFields;

  public log = new ErrorLogger();

  constructor(private districtAndCityProvider: DistrictCityProvider) {
  }

  ngOnInit() {
    this.selectedDistrict = this.defaultDistrict;
    this.selectedCity = this.defaultCity;
    this.getDistricts();
    if (this.defaultDistrict) {
      this.getCities(this.selectedDistrict)
    }
  }

  getDistricts() {
    this.districtAndCityProvider.getDistricts().subscribe(data => {
      this.districts = data.districts;
    }, error => this.log.error(error));
  }

  getCities(districtId) {
    this.districtAndCityProvider.getCities(districtId).subscribe(data => {
      this.cities = data.cities;
      this.selectedCity = data.cities[0].id;
    }, error => this.log.error(error))
  }

}

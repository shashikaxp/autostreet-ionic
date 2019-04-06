import { Component, Input } from '@angular/core';
import { formFields } from "../item-form.config";
import { BrandsModelProvider } from "../../../providers/core/form-fields/brands-model/brands-model";
import { ControlContainer, NgForm } from "@angular/forms";
import { ErrorLogger } from "../../../modules/ErrorLogger";

@Component({
  selector: 'field-brand-model',
  templateUrl: 'field-brand-model.html',
  viewProviders: [{provide: ControlContainer, useExisting: NgForm}]
})
export class FieldBrandModelComponent {

  @Input() defaultBrand;
  @Input() defaultModel;

  public brands;
  public models;

  public selectedBrand;
  public selectedModel;
  public formFields = formFields;

  public log = new ErrorLogger();

  constructor(private brandsAndModelProvider: BrandsModelProvider) {
  }

  ngOnInit() {
    this.selectedBrand = this.defaultBrand;
    this.selectedModel = this.defaultModel;
    this.getBrands();
    if (this.defaultBrand) {
      this.getModels(this.selectedBrand)
    }
  }

  getBrands() {
    this.brandsAndModelProvider.getBrands().subscribe(data => {
      this.brands = data.brands;
    }, error => this.log.error(error));
  }

  getModels(brandId) {
    this.brandsAndModelProvider.getModels(brandId).subscribe(data => {
      this.models = data.models;
      this.selectedModel = data.models[0].id;
    }, error => this.log.error(error))
  }

}

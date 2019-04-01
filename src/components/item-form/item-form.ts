import { Component, EventEmitter, Input, Output } from '@angular/core';
import { formFields } from "./item-form.config";
import { ItemFormService } from "./item-form.svc";
import _ from 'lodash';
import { vehicleTransformer } from "../../transformers/vehicle";

@Component({
  selector: 'new-item-form',
  templateUrl: 'item-form.html'
})
export class ItemFormComponent {

  public formFields = formFields;

  @Input() itemType;
  @Input() formType;
  @Input() formData;

  @Output() formSubmitted = new EventEmitter();

  public itemFormSvc;

  constructor() {
  }

  ngOnChanges(change) {
    this.itemType = _.get(change, 'itemType.currentValue', this.itemType);
    this.formType = _.get(change, 'formType.currentValue', this.formType);
    this.formData = _.get(change, 'formData.currentValue', {});
    this.itemFormSvc = new ItemFormService(this.formType, this.formData, this.itemType);
  }

  setData(formData) {
    formData.item_type = this.itemType;
    this.formSubmitted.emit(vehicleTransformer(formData));
  }

  getDisplayOption(fieldName) {
    return this.itemFormSvc.getDisplayOption(fieldName);
  }

  getDisplayValue(fieldName) {
    return this.itemFormSvc.getDisplayValue(fieldName);
  }

}



import { Component, Input } from '@angular/core';
import { formFields } from "./item-form.config";
import { ItemFormService } from "./item-form.svc";
import _ from 'lodash';

@Component({
  selector: 'new-item-form',
  templateUrl: 'item-form.html'
})
export class ItemFormComponent {

  public formFields = formFields;

  @Input() itemType;
  @Input() formType;
  @Input() formData;

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
    console.log('formData', formData);
  }

  getDisplayOption(fieldName) {
    return this.itemFormSvc.getDisplayOption(fieldName);
  }

  getDisplayValue(fieldName) {
    return this.itemFormSvc.getDisplayValue(fieldName);
  }

}



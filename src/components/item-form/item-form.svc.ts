import _ from 'lodash';
import { formConfig, formFields } from "./item-form.config";

export class ItemFormService {

  public formType;
  public formData;
  public itemType;

  constructor(formType, formData, itemType) {
    this.formType = formType;
    this.formData = formData;
    this.itemType = itemType;
  }

  getDisplayValue(filedType) {
    if (this.formType === 'update') {
      return  _.get(this.formData, filedType, '');
    } else if (filedType === formFields.Year) {
      return new Date().getFullYear().toString()
    }
    return ''
  };

  getDisplayOption(filedName) {
    return _.includes(formConfig[this.itemType], filedName);
  };


}

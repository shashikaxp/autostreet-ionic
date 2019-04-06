import _ from 'lodash';
import { FORM_TYPES, formConfig, formFields } from "./item-form.config";

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
    if (filedType === formFields.Year) {
      return this.getYearValue();
    }
    if (this.formType === FORM_TYPES.UPDATE) {
      return  _.get(this.formData, filedType, '');
    }
    return ''
  };

  getDisplayOption(filedName) {
    return _.includes(formConfig[this.itemType], filedName);
  };

  getYearValue() {
    let year =  _.get(this.formData, formFields.Year, null);
    if (_.isNull(year)) {
      return new Date().getFullYear().toString()
    }
    return year.toString();
  }


}

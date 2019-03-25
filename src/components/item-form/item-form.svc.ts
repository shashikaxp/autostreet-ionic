import _ from 'lodash';

export default class ItemFormService {

  public formType;
  public formData;

  constructor(formType, formData) {
    this.formType = formType;
    this.formData = formData;
  }

  getDisplayValue = (filedType) => {
    if (this.formType === 'update') {
      return  _.get(this.formData, filedType, '');
    }
    return '';
  }

}

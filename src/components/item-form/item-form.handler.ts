import _ from 'lodash';
import { formConfig } from "./item-form.config";

export default class ItemFormUiHandler {

  public itemType;

  constructor(itemType) {
    this.itemType = itemType;
  }

  getDisplayOption = (filedName) => {
    return _.includes(formConfig[this.itemType], filedName);
  };

}


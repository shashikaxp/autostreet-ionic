import { Component, Input } from '@angular/core';
import _ from 'lodash';

@Component({
  selector: 'new-item-form',
  templateUrl: 'new-item-form.html'
})
export class NewItemFormComponent {

  title = 'test title';
  test =  {id:1, name:'toyota'};
  @Input() itemType;

  public config = {
    'spare-part': ['title', 'price', 'model'],
    'vehicle': ['title', 'price', 'model', 'description']
  };

  getValue(x) {
    return x
  }

  getDisplayOption(filedName) {
    return _.includes(this.config[this.itemType], filedName)
  }

  setData(formData) {
    console.log('formData', formData);
  }

}



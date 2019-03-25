import { Component, Input, OnInit } from '@angular/core';
import ItemFormUiHandler from './item-form.handler';
import { formFields } from "./item-form.config";
import ItemFormService from "./item-form.svc";
import _ from 'lodash';

@Component({
  selector: 'new-item-form',
  templateUrl: 'item-form.html'
})
export class ItemFormComponent {

  public title = 'test title';
  public test =  {id:1, name:'toyota'};

  public formFields = formFields;

  @Input() itemType;
  @Input() formType;
  @Input() formData;

  public uiHandler;
  public itemFormSrv;

  constructor() {
    this.uiHandler = new ItemFormUiHandler(this.itemType);
  }

  ngOnChanges(change) {
    this.itemType = _.get(change, 'itemType.currentValue', this.itemType);
    this.formType = _.get(change, 'formType.currentValue', this.formType);
    this.formData = _.get(change, 'formData.currentValue', {});

    this.uiHandler = new ItemFormUiHandler(this.itemType);
    this.itemFormSrv = new ItemFormService(this.formType, this.formData);
  }

  setData(formData) {
    console.log('formData', formData);
  }

}



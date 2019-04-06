import { Component, Input } from '@angular/core';
import _ from "lodash";
import { ControlContainer, NgForm } from "@angular/forms";
import { formFields } from "../item-form.config";

@Component({
  selector: 'field-contacts',
  templateUrl: 'field-contacts.html',
  viewProviders: [{provide: ControlContainer, useExisting: NgForm}]
})
export class FieldContactsComponent {

  @Input() defaultContacts;
  @Input() contactCount;

  public formFields = formFields;
  public contacts;

  constructor() {
  }

  ngOnInit() {
    if (_.size(this.defaultContacts) < 1) {
      this.contacts = _.fill(Array(this.contactCount), "");
    } else {
      this.contacts = this.defaultContacts;
    }
  }

  getPlaceHolder(i) {
    return "Contact " + (i + 1);
  }


}

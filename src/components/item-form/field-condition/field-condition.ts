import { Component, Input } from '@angular/core';
import { formFields } from "../item-form.config";
import { ConditionProvider } from "../../../providers/core/form-fields/condition/condition";
import { ControlContainer, NgForm } from "@angular/forms";

@Component({
  selector: 'field-condition',
  templateUrl: 'field-condition.html',
  viewProviders: [ { provide: ControlContainer, useExisting: NgForm } ]
})
export class FieldConditionComponent {

  @Input() defaultCondition;
  @Input() itemType;

  public formFields = formFields;
  public conditions;

  constructor(private conditionProvider: ConditionProvider) {
  }

  ngOnChanges(changes) {
    let itemType = changes.itemType.currentValue;
    if(itemType) {
      this.conditionProvider.getConditions(itemType).subscribe(data => {
        this.conditions = data.conditions;
      })
    }

  }
}

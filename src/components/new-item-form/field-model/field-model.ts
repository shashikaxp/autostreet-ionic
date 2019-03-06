import { Component, Input, Output } from '@angular/core';
import { ControlContainer, NgForm } from "@angular/forms";

@Component({
  selector: 'field-model',
  templateUrl: 'field-model.html',
  viewProviders: [ { provide: ControlContainer, useExisting: NgForm } ]
})
export class FieldModelComponent {

  @Input() defaultValue;
  @Output() selectedValue;

  public models = [
    {id:1, name:'toyota'},
    {id:2, name:'nissan'},
    {id:3, name:'honda'}
  ];

}

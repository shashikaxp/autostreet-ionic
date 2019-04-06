import { Component, Input } from '@angular/core';
import { TransmissionProvider } from "../../../providers/core/form-fields/transmission/transmission";
import { formFields } from "../item-form.config";
import { ControlContainer, NgForm } from "@angular/forms";
import { ErrorLogger } from "../../../modules/ErrorLogger";

@Component({
  selector: 'field-transmission',
  templateUrl: 'field-transmission.html',
  viewProviders: [{provide: ControlContainer, useExisting: NgForm}]
})
export class FieldTransmissionComponent {

  @Input() defaultTransmission;

  public formFields = formFields;
  public transmissions;
  public log = new ErrorLogger();

  constructor(private transmissionProvider: TransmissionProvider) {
  }

  ngOnInit() {
    this.transmissionProvider.getTranmissions().subscribe(data => {
      this.transmissions = data.transmissions;
    }, error => this.log.error(error))
  }

}

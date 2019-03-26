import { Component, Input } from '@angular/core';
import { CategoryProvider } from "../../../providers/core/form-fields/category/category";
import { ControlContainer, NgForm } from "@angular/forms";
import { formFields } from "../item-form.config";

@Component({
  selector: 'field-category',
  templateUrl: 'field-category.html',
  viewProviders: [ { provide: ControlContainer, useExisting: NgForm } ]
})
export class FieldCategoryComponent {

  @Input() defaultCategory;
  @Input() itemType;

  public formFields = formFields;
  public categories;

  constructor(private categoryProvider: CategoryProvider) {
  }

  ngOnChanges(changes) {
    let itemType = changes.itemType.currentValue;
    console.log(itemType);
    if(itemType) {
      this.categoryProvider.getCategories(itemType).subscribe(data => {
        this.categories = data.categoories;
      })
    }

  }


}

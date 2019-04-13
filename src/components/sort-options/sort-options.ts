import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from "@angular/forms";
import { PublicProvider } from "../../providers/core/public/public";
import _ from "lodash";

@Component({
  selector: 'sort-options',
  templateUrl: 'sort-options.html',
  viewProviders: [{provide: ControlContainer, useExisting: NgForm}]
})
export class SortOptionsComponent {

  public sortOptions;
  @Input() defaultSortOption;

  constructor(private publicProvider: PublicProvider) {
    this.getSortOptions()
  }

  getSortOptions() {
    this.publicProvider.sortOptions().subscribe(data  => {
      this.sortOptions = this.formatSortOptions(data.sorts);
    })
  }

  formatSortOptions(options) {
    let tmp = [];
    _.forIn(options, (value, key) => {
      tmp.push({
        id: key,
        value: value
      })
    });
    return tmp;
  }

}

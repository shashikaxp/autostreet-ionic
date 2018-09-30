import { Injectable } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";

@Injectable()
export class SettingsProvider {

  constructor(private translate: TranslateService) {
    console.log('Hello SettingsProvider Provider');
  }

  getCurrentLanguage() {
    return this.translate.currentLang;
  }

  changeLanguage(language) {
    this.translate.use(language)
  }

}

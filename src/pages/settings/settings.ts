import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SettingsProvider } from "../../providers/core/settings/settings";

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  public selectedLanguage;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public settingProvider: SettingsProvider) {
    this.selectedLanguage = settingProvider.getCurrentLanguage();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  changeLanguage() {
    this.settingProvider.changeLanguage(this.selectedLanguage);
  }


}

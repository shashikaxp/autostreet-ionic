import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CompanyProvider } from "../../providers/company/company";

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private companyProvider: CompanyProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  register(registerForm) {
    this.companyProvider.register(registerForm.value).subscribe(companyData => {
      console.log(JSON.stringify(companyData));
    });
  }

}

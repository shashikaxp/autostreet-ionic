import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { CompanyProvider } from "../../providers/company/company";

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(public navCtrl: NavController,
              private companyProvider: CompanyProvider) {
  }

  register(registerForm) {
    this.companyProvider.register(registerForm.value).subscribe(companyData => {
      this.navCtrl.push("LoginPage");
    });
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { SellerProvider } from "../../providers/core/seller/seller";
import { StorageProvider } from "../../providers/storage/storage";
import { STORAGE } from "../../config";
import { ErrorLogger } from "../../modules/ErrorLogger";

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  public log;

  constructor(public navCtrl: NavController,
              private storageProvider: StorageProvider,
              private seller: SellerProvider) {
    this.log = new ErrorLogger();
  }

  register(registerForm) {
    registerForm.value.seller_type = "BUSINESS";
    this.seller.register(registerForm.value).subscribe(async sellerData => {
      try {
        await this.storageProvider.set(STORAGE.COMPANY_ID, sellerData.company_id);
        await this.storageProvider.set(STORAGE.TOKEN, sellerData.user.token);
        this.navCtrl.push("TabsPage");
      } catch (e) {
        this.log.error('Error occurred while saving the login data', e)
      }
    }, error => {
      this.log.error('Error occurred while register', error)
    });
  }

}

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import {
  HttpClientModule, HttpClient, HTTP_INTERCEPTORS
} from '@angular/common/http';
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { IonicStorageModule } from "@ionic/storage";

import { AuthProvider } from '../providers/core/auth/auth';
import { ApiProvider } from '../providers/core/api/api';
import { SettingsProvider } from "../providers/core/settings/settings";
import { HttpErrorHandlerProvider } from '../providers/core/api/http-error-handler';
import { TokenInterceptorProvider } from "../providers/util/token-interceptor/token-interceptor";
import { NgHttpLoaderModule } from "ng-http-loader/ng-http-loader.module";
import { Camera } from "@ionic-native/camera";
import { IonicImageLoader } from "ionic-image-loader";
import { BrandsModelProvider } from '../providers/core/form-fields/brands-model/brands-model';
import { DistrictCityProvider } from '../providers/core/form-fields/district-city/district-city';
import { CategoryProvider } from '../providers/core/form-fields/category/category';
import { ConditionProvider } from '../providers/core/form-fields/condition/condition';
import { FuelProvider } from '../providers/core/form-fields/fuel/fuel';
import { TransmissionProvider } from '../providers/core/form-fields/transmission/transmission';
import { SellerProvider } from '../providers/core/seller/seller';
import { StorageProvider } from '../providers/core/storage/storage';
import { ItemProvider } from '../providers/core/seller/item/item';
import { ItemImageProvider } from '../providers/core/seller/item/item-image/item-image';
import { ConfirmationPopupProvider } from '../providers/util/confirmation-popup/confirmation-popup';
import { ToastProvider } from '../providers/util/toast/toast';
import { PublicProvider } from '../providers/core/public/public';
import { CallNumber } from "@ionic-native/call-number";
import { AppVersion } from "@ionic-native/app-version";

export function setTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpClientModule,
    NgHttpLoaderModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (setTranslateLoader),
        deps: [HttpClient]
      }
    }),
    IonicImageLoader.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SettingsProvider,
    ApiProvider,
    AuthProvider,
    HttpErrorHandlerProvider,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorProvider,
      multi: true
    },
    Camera,
    BrandsModelProvider,
    DistrictCityProvider,
    CategoryProvider,
    ConditionProvider,
    FuelProvider,
    TransmissionProvider,
    SellerProvider,
    StorageProvider,
    ItemProvider,
    ItemImageProvider,
    ConfirmationPopupProvider,
    ToastProvider,
    PublicProvider,
    CallNumber,
    AppVersion
  ]
})
export class AppModule {}

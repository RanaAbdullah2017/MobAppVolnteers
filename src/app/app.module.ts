import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

// import { VolenteerPage } from '../pages/volenteer/volenteer';
// import {VolunteerWorkPage } from '../pages/volunteer-work/volunteer-work';
import {ContactUsPage } from '../pages/contact-us/contact-us';

import { Http } from '@angular/http';
import { AppService } from './AppService.service';
import { InitialPage } from '../pages/initial/initial';
import { HumStateRepPage } from '../pages/hum-state-rep/hum-state-rep';
import { AboutUsPage } from '../pages/about-us/about-us';
import { AdvicePage } from '../pages/advice/advice';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from '@angular/http';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    InitialPage,
    HumStateRepPage,
    ContactUsPage,
    AboutUsPage,
    AdvicePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    InitialPage,
    HumStateRepPage,
    ContactUsPage,
    AboutUsPage,
    AdvicePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AppService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

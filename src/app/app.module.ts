import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TableRenderPage } from '../pages/table-render/table-render';
import { GpsPage } from '../pages/gps/gps';
import { HomePage } from '../pages/home/home';
import { ApiCallPage } from '../pages/api-call/api-call';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Camera } from '@ionic-native/camera';

@NgModule({
  declarations: [
    MyApp,
    TableRenderPage,
    GpsPage,
    HomePage,
    ApiCallPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TableRenderPage,
    GpsPage,
    HomePage,
    ApiCallPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

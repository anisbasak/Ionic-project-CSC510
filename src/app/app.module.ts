import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http'
import { TableRenderPage } from '../pages/table-render/table-render';
import { GpsPage } from '../pages/gps/gps';
import { HomePage } from '../pages/home/home';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ApiCallPage } from '../pages/api-call/api-call';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Camera } from '@ionic-native/camera';

import {Geolocation} from '@ionic-native/geolocation'

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
    HttpClientModule,
    NgxDatatableModule,
    HttpModule,
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
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

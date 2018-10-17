import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GpsPage } from './gps';
import { Geolocation } from '@ionic-native/geolocation';

@NgModule({
  declarations: [
    GpsPage,
  ],
  imports: [
    IonicPageModule.forChild(GpsPage),
    Geolocation
  ],
})
export class GpsPageModule {}

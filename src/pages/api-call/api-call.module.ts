import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ApiCallPage } from './api-call';

@NgModule({
  declarations: [
    ApiCallPage,
  ],
  imports: [
    IonicPageModule.forChild(ApiCallPage),
  ],
})
export class ApiCallPageModule {}

import { Component } from '@angular/core';

import { GpsPage } from '../gps/gps';
import { HomePage } from '../home/home';
import { TableRenderPage } from '../table-render/table-render';
import { ApiCallPage } from '../api-call/api-call';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = GpsPage;
  tab3Root = TableRenderPage;
  tab4Root = ApiCallPage;

  constructor() {

  }
}

import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TableRenderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
export interface Config {
	technologies: string;
}

@IonicPage()
@Component({
  selector: 'page-table-render',
  templateUrl: 'table-render.html',
})
export class TableRenderPage {

  public config : Config;
  public columns : any;
  public rows : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private _HTTP: HttpClient) {
    this.columns = [
      { prop: 'name' },
      { name: 'Summary' },
      { name: 'Company' }
    ];
  }

  ionViewDidLoad() {
    this._HTTP
      .get<Config>('../../assets/data/technologies.json')
      .subscribe((data) =>
      {
         this.rows = data.technologies;
      });
    console.log('ionViewDidLoad TableRenderPage');
  }

}

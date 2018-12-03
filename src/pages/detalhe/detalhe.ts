import { Component } from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams
} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-detalhe',
  templateUrl: 'detalhe.html',
})
export class DetalhePage {

  public itemNome:any;
  public itemHora:any;
  public itemFoto:any;
  public itemDesc:any;
  public itemData:any;
  public dataHora:any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    ) {
      this.itemNome =  this.navParams.get('item_nome');
      this.itemHora = this.navParams.get('item_hora');
      this.itemFoto = this.navParams.get('item_img');
      this.itemDesc = this.navParams.get('item_desc');
      this.itemData = this.navParams.get('item_data');

      if(this.itemHora==null||this.itemHora==''){
        this.dataHora = this.itemData;
      }else{
        this.dataHora = this.itemData + ' às ' + this.itemHora;
      }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestePage');
  }

}

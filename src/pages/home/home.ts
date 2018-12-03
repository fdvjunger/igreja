import { Http } from '@angular/http';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import 'rxjs';
import { DetalhePage } from '../detalhe/detalhe';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private url:string = 'http://191.252.200.224:8080/ibcweb/rest/webservice/getProximosEventos';
  public itens: Array<{}>;

  constructor(
    public navCtrl: NavController,
    public http: Http
    ) {
      this.http.get(this.url)
      .map(
        res => res.json()
        )
      .subscribe(
        data => {
          this.itens = data;
        }
        )
  }



  itemSelected(item){
    this.navCtrl.push(DetalhePage,{
      'item_nome':item.nomeEvento,
      'item_hora': item.horaEvento,
      'item_data':item.dataEvento,
      'item_img':item.foto,
      'item_desc':item.descricaoEvento
    })
  }

  doRefresh(refresher){
    console.log('Começando refresh', refresher);
    this.http.get(this.url)
    .map(
      res => res.json()
      )
    .subscribe(
      data => {
        this.itens = data;
      }
    )
    setTimeout(()=>{
      console.log(this.itens);
      refresher.complete();
    },2000)
  }

}

import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import { AddListPage } from '../add-list/add-list';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public lists = [];

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
 
  }
 
  ionViewDidLoad(){
 
  }
 
  addList(){
 
    let addModal = this.modalCtrl.create(AddListPage);
 
    addModal.onDidDismiss((list) => {
 
          if(list){
            this.savelist(list);
          }
 
    });
 
    addModal.present();
 
  }
 
  savelist(list){
    this.lists.push(list);
  }
 
  viewlist(list){
 
  }
}

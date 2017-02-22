import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';

/*
  Generated class for the AddList page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-add-list',
  templateUrl: 'add-list.html'
})
export class AddListPage {

  title;
  description;

  constructor(public navCtrl: NavController, public view: ViewController) {}

  saveList(){
 
    let newList = {
      title: this.title,
      description: this.description
    };
 
    this.view.dismiss(newList);
 
  }
 
  close(){
    this.view.dismiss();
  }

}

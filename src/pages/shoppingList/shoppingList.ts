 import { AddShoppingListPage } from './../add-shopping-list/add-shopping-list';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-shoppingList',
  templateUrl: 'shoppingList.html'
})
export class shoppingList {
  constructor(private navCtrl: NavController) {}
  GoAddShopping()
  {
    console.log("ready to go")
    this.navCtrl.push(AddShoppingListPage);
  }
 
}

import { MapPage } from './../map/map';
 import { shoppingList } from './../shoppingList/shoppingList';
import { Component } from '@angular/core';
  // import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database";
//  import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database"; 
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';
import {  NavController, NavParams, ItemGroup } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

import * as _ from "lodash";

import * as firebase from 'firebase';
@Component({
  selector: 'page-add-shopping-list',
  templateUrl: 'add-shopping-list.html',
})
export class AddShoppingListPage {
  ItemGroup:FormGroup;
  ItemGroupRef$:FirebaseListObservable<ItemGroup[]>
  myPerson:any;
 
  constructor(private navCtrl: NavController, 
    private navParams: NavParams,
    private formBuilder: FormBuilder,
  )
  
  {
    this.ItemGroup= this.formBuilder.group({
ItemName:['', Validators.required],
ItemNumber:['', Validators.required],
    });
/// for give the data to firebase
    // this.ItemGroupRef$ = this.database.list('dummydata');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddShoppingListPage');
    // const ItemGroupRef: firebase.database.Reference = firebase.database().ref(`dummydata`);
    // ItemGroupRef.once('value').then((snap)=> {
    //   this.myPerson = _.map(snap.val(), (value : any, key) => {
    //     value.id = key;
    //     return value;
    //   }); 
    //   console.log(this.myPerson);
      
    // }); 
   
  }

  //// constructor is closed /// 
  // AddItem(ItemGroup)
  // {
  //  var database  = [
  //    {
  //     name : 'srijan',
  //     age : 21, 
  //     salary:10000,
  //     designation:'developer',
  //     enemy:'gourav'
  //   },
  //   {
  //     name : 'jaspreet',
  //     age : 22,
  //     salary:15000,
  //     designation:'developer',
  //     enemy:'Ankit'
  //   },
  //   {
  //     name : 'ankit',
  //     age : 29, 
  //     salary:20000,
  //     designation:'intern',
  //     enemy:'gourav'
  //   },
  //   {
  //     name : 'abhishek',
  //     age : 30, 
  //     salary:35000,
  //     designation:'intern',
  //     enemy:'gourav'
  //   },
  //   {
  //     name : 'sunny',
  //     age : 31, 
  //     salary:40000,
  //     designation:'developer',
  //     enemy:'ankit'
  //   },
  //   {
  //     name : 'akash',
  //     age : 41, 
  //     salary:45000,
  //     designation:'developer',
  //     enemy:''
  //   },
  // ] 
  //   console.log("form value",this.ItemGroup.value);
  //   database.forEach(element => {
  //     this.ItemGroupRef$.push(element);
  //   });
  // }
//   checkdata()
//   {
//     console.log("hipaaa")
//  let query;
//     const ref = firebase.database().ref('dummydata/');
//     return ref.orderByChild('name_age').equalTo('srijan_21').once('value')
              
    
//     // return ref.orderByChild('salary').startAt(25000).once('value')
//     // return ref.orderByChild('salary').startAt(50000).endAt(100000).once('value')
//       .then((snap)=> {
//         this.myPerson = _.map(snap.val(),(value:any,key) =>{
//           value.id =key;
//           return value;
//         });
//         console.log(this.myPerson);
        
//       });
//   }
   
  // update(ItemGroup)
  // {
  //   console.log("ItemGroup",ItemGroup.value)
   
  // }
  /// for Function for Autocomplete //
  navigatetoAutocomplete(PageNumber)
  {
    console.log("jjckvwkvnwnvo")
    this.navCtrl.setRoot(shoppingList);
  }
  /// Function for Navigate to Map Page
  NaviagteToMap()
  {
    console.log("bhcsvjnsm");
    this.navCtrl.push(MapPage)
  }
}

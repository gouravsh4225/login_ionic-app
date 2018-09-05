import { MapPage } from './../pages/map/map';

import { AddShoppingListPage } from './../pages/add-shopping-list/add-shopping-list';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicPageModule, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

import { shoppingList } from '../pages/shoppingList/shoppingList';
import { AngularFireDatabaseModule } from 'angularfire2/database'


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import{ AngularFireModule } from 'angularfire2';
import { FIREBASE_CREDENTAIL } from './firbaseCredential';
import { Geolocation } from '@ionic-native/geolocation';
 
@NgModule({
  declarations: [
    MyApp,
    shoppingList,
    AddShoppingListPage,
    MapPage,
        
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    //// initialise the Firebase credentials from Dashboard ///
    AngularFireModule.initializeApp(FIREBASE_CREDENTAIL),
    /// import the angularFireDatabaseModule to use database interaction ///
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    shoppingList,
    AddShoppingListPage,
    MapPage,
   
    
  ],
  providers: [
    Geolocation,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

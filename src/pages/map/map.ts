import { Component,NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
declare var google;


@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {
  markers: any[];
  geocoder: any;
  autocompleteItems: any[];
  autocomplete: { input: string; };
  GoogleAutocomplete: any;
map:any;

  constructor(private navCtrl: NavController, 
    private navParams: NavParams,
    private zone:NgZone,
    private geolocation: Geolocation) {
    this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
    this.autocomplete = { input: '' };
    this.autocompleteItems = [];
    this.geocoder = new google.maps.Geocoder;
    this.markers = [];
    this.tryGeolocation();
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapPage');
    this.map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: -34.9011, lng: -56.1645 },
      zoom: 15
    });
  }
  ////// Update Function
  updateSearchResults(){
    if (this.autocomplete.input == '') {
      this.autocompleteItems = [];
      return;
    }
    this.GoogleAutocomplete.getPlacePredictions({ input: this.autocomplete.input },
    (predictions, status) => {
      this.autocompleteItems = [];
      this.zone.run(() => {
        predictions.forEach((prediction) => {
          this.autocompleteItems.push(prediction);
        });
      });
    
    });
  }

  ////// Direction Show Function
  selectSearchResult(item){
    this.autocompleteItems = [];
  
    this.geocoder.geocode({'placeId': item.place_id}, (results, status) => {
      if(status === 'OK' && results[0]){
        let position = {
            lat: results[0].geometry.location.lat,
            lng: results[0].geometry.location.lng
        };
        let marker = new google.maps.Marker({
          position: results[0].geometry.location,
          map: this.map,
        });
        this.markers.push(marker);
        this.map.setCenter(results[0].geometry.location);
      }
    })
  }
  //// for current location
  tryGeolocation(){
    this.geolocation.getCurrentPosition().then((resp) => {

      console.log(resp);
      let pos = {
        lat: resp.coords.latitude,
        lng: resp.coords.longitude 
      };
      let marker = new google.maps.Marker({
        position: pos,
        map: this.map,
        title: 'I am here!'
      });
      this.markers.push(marker);
      this.map.setCenter(pos);
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }
  

}

import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { EtalageDataService } from '../services/etalage-data.service';
import { Etalage } from 'src/models/etalage';
declare var google;

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class AllEtalagePage implements OnInit {
  @ViewChild('map',{static: false}) mapContainer: ElementRef;
  map: any;
  etalageData = [];

  constructor(
    private geolocation: Geolocation,
    private etalageService: EtalageDataService) { }

  ngOnInit() {
    this.etalageData = this.etalageService.getEtalages();
    this.displayGoogleMap();
    this.getMarkers();
  }

  displayGoogleMap() {
    const latLng = new google.maps.LatLng(28.6117993, 77.2194934);

    const mapOptions = {
      center: latLng,
      disableDefaultUI: true,
      zoom: 4,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    this.map = new google.maps.Map(this.mapContainer.nativeElement, mapOptions);
  }

  getMarkers() {
    // tslint:disable-next-line:variable-name
    for (let _i = 0; _i < this.etalageData.length; _i++) {
      if (_i > 0) {
        this.addMarkersToMap(this.etalageData[_i]);
      }
    }
  }

  addMarkersToMap(etalage) {
    const position = new google.maps.LatLng(etalage.latitude, etalage.longitude);
    const etalageMarker = new google.maps.Marker({ position, title: etalage.name });
    etalageMarker.setMap(this.map);
  }
}
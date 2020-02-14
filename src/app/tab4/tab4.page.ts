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
  @ViewChild('map', {static: false}) mapContainer: ElementRef;
  map: any;
  etalage = {} as Etalage;

  constructor(
    private geolocation: Geolocation,
    private etalageService: EtalageDataService) { }

    ngOnInit() {
      this.etalage = this.etalageService.getEtalage();
      this.displayGoogleMap();
      
    }

    displayGoogleMap() {
      const latLng = new google.maps.LatLng(this.etalage.latitude, this.etalage.longitude);
      const mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };

  this.map = new google.maps.Map(this.mapContainer.nativeElement, mapOptions);
    const marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: latLng
    });
    this.addInfoWindow(marker, this.etalage.name);
  }

  addInfoWindow(marker, content) {
    const infoWindow = new google.maps.InfoWindow({
      content
    });
    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });
  }
}
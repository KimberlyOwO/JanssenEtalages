import { Component } from '@angular/core';
import { EtalageDataService } from '../services/etalage-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  etalageData = [];
  filteredEtalage = [];
  isfiltered: boolean;


  constructor(private router: Router, private etalageService: EtalageDataService) {
    fetch('./assets/data/etalage.json').then(res => res.json())
      .then(data => {
        this.etalageData = data.etalage;
        this.etalageService.setEtalage(this.etalageData);
      });
}
searchMaps(event) {
  if (event.target.value.length > 2) {
    const filteredJson = this.etalageData.filter((row) => {
      if (row.state.indexOf(event.target.value) !== -1) {
        return true;
      } else {
        return false;
      }
    });
    this.isfiltered = true;
    this.filteredEtalage = filteredJson;
  }
}

getEtalageDetails(etalage) {
  this.etalageService.setEtalage(etalage);
  this.router.navigate['/etalage-detail'];
}

allEtalageMap() {
  this.router.navigate['/all-etalage'];
}
}

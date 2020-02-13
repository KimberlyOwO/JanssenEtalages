import { Injectable } from '@angular/core';
import { Etalage } from 'src/models/etalage';

@Injectable({
  providedIn: 'root'
})
export class EtalageDataService {
  etalages: [];
  etalage: Etalage;

  constructor() { }

  setEtalages(data) {
    this.etalages = data;
  }

  getEtalages() {
    return this.etalages;
  }

  setEtalage(data) {
    this.etalage = data;
  }

  getEtalage() {
    return this.etalage;
  }

}

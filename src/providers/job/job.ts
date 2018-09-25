import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RestProvider } from '../rest/rest';

/*
  Generated class for the JobProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class JobProvider {

  constructor(public rest: RestProvider) {
    console.log('Hello JobProvider Provider');
  }

  getEmploymentTypes() {
    return this.rest.get('/key-val/EMP_TYPE');
  }

  getMinSalaries() {
    return this.rest.get('/key-val/SAL_MIN');
  }

  getExperienceVals() {
    return this.rest.get('/key-val/REQ_EXP');
  }

  getLocations() {
    return this.rest.get('/key-val/LOCATION');
  }

  getSkills() {
    return [{display: 'Java', value: '1'}, {display: 'Spring', value: '2'}, {display: 'Hibernate', value: '3'}];
  }

}

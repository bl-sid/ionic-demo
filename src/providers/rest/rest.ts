import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {

  baseUrl = 'http://192.168.0.105:8080';

  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }

  get(url){
    url = this.baseUrl + url;
    return this.http.get(url);
  }

}

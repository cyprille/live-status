import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { isDevMode } from '@angular/core';

import { Observable } from 'rxjs';

import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
  private _data: BehaviorSubject<any>;

	constructor(public http: HttpClient) {
		this._data = new BehaviorSubject([]);
	}

	public cget() {
    var $statusStream: Observable<any>;

   //  if (true == isDevMode()) {
   //    $statusStream = this.http.get('http://status.localhost:82/');
	  // } else {
      $statusStream = this.http.get('http://status-api.mynelis.com/');
    // }

  	return $statusStream.map(response => {
  		this._data.next(response);
  	});
  }

  public get data() {
  	return this._data.asObservable();
  }
}

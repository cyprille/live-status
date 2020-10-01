import { Component, OnInit, Inject } from '@angular/core';
import { LOCALE_ID } from '@angular/core';
import * as moment from 'moment';

import { DataService } from '../server/data.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	public serverItems: any[];
	public refreshTimestamp: string;
	public globalStatusIsOk: boolean = true;

	constructor (public dataService: DataService, @Inject(LOCALE_ID) locale: string) {
		if (locale == 'fr') {
			moment.locale('fr_fr');
		} else {
			moment.locale('en_en');
		}
	}

	ngOnInit() {
		let serverData = this.dataService.data;

		serverData.subscribe(response => {
			let self = this;
			let responseSize = Object.keys(response);

			if (responseSize.length > 0) {
				this.serverItems = response['servers'];

				this.refreshTimestamp = moment(response['refresh']).startOf('second').fromNow(); ;

				this.serverItems.forEach(function (serverItem) {
				  if (serverItem.status != "available" && serverItem.status != "maintenance") {
				  	self.globalStatusIsOk = false;
				  }
				});
			}
		});
	}
}

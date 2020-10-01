import { Component, OnInit } from '@angular/core';

import { DataService } from './server/data.service';
import { LoadService } from './server/load.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public serverItems: any[];

  constructor(
    public dataService: DataService, 
    public loadService: LoadService
  ) {}

  ngOnInit() {
    this.dataService.cget().subscribe();

    let serverData = this.dataService.data;

    serverData.subscribe(response => {
      console.log(response['servers']);
      this.serverItems = response['servers'];
    });
  }
}

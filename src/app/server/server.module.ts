import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServerItemComponent } from './server-item/server-item.component';
import { ServerItemStatusComponent } from './server-item-status/server-item-status.component';

import { DataService } from './data.service';
import { LoadService } from './load.service';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
  	ServerItemComponent
  ],
  declarations: [
    ServerItemComponent,
    ServerItemStatusComponent
  ],
  providers: [
    DataService,
    LoadService
  ]
})
export class ServerModule { }

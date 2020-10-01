import { Component, OnInit, Input } from '@angular/core';

import { LoadService } from '../load.service';

@Component({
  selector: 'app-server-item-status',
  templateUrl: './server-item-status.component.html',
  styleUrls: ['./server-item-status.component.css']
})
export class ServerItemStatusComponent implements OnInit {
  @Input() public server: any;

  constructor(public loadService: LoadService) { }

  ngOnInit() {
  }
}

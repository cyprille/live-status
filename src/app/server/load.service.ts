import { Injectable } from '@angular/core';

@Injectable()
export class LoadService {
	public statusCondition = [
		function(server) {
			return server.status == "available";
		},
		function(server) {
			return server.status == "degraded";
		},
		function(server) {
			return server.status == "interrupted";
		},
		function(server) {
			return server.status == 'maintenance';
		},
		function(server) {
			return server.status == "unknown";
		},
	];

  constructor() {}

  public filter(serverItems, identifier) {
  	let self = this;

    return serverItems.filter(function(server) {
      return self.statusCondition[identifier](server);
    });
  }
}

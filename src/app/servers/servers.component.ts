import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "Server not created";
  serverName = "";
  serverCreated = false;
  servers = ['Teste', 'Production'];

  constructor() { 
    setTimeout(() => this.allowNewServer = true, 2000);
  }

  ngOnInit() {
  }

  onServerCreation(){
    this.serverCreated = true;
    this.serverCreationStatus = "Server created! Name = " + this.serverName;
    this.servers.push(this.serverName);
  }

  onUpdatingServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}

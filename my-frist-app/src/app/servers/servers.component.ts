import { Component, OnInit, Output } from '@angular/core';

@Component({
  //selector: 'app-servers',
  selector: 'app-servers',
  // selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  
  canAllowNewServer: boolean = false;
  serverCreationStatus: string = 'No server was created!';
  serverName: string = 'TestServer';
  isServerCreated: boolean = false;
  servers: string[] = ['TestServer - 1','TestServer - 2']
  constructor() {
    setTimeout(()=>{
      this.canAllowNewServer=true;
    },2000);
  }
  
  ngOnInit(): void { }

  onCreateServer(){
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
    this.servers.push(this.serverName);
    this.isServerCreated =  true;
  }
  onUpdateServerName( event: Event ){
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}

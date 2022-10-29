import { Injectable } from '@angular/core';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  
  accounts = [
  {
    name: 'Master Account',
    status: 'active'
  },
  {
    name: 'Testaccount',
    status: 'inactive'
  },
  {
    name: 'Hidden Account',
    status: 'unknown'
  }
  ];

  constructor( private loggingService: LoggingService ) { }

  addAcount( newAccount: {name: string, status: string} ){
    this.accounts.push(newAccount);

  }

  updateStatus(updateInfo: {id: number, newStatus: string}){
    this.accounts[updateInfo.id].status = updateInfo.newStatus;
    
    this.loggingService.logStatusChange( updateInfo.newStatus );

  }



}

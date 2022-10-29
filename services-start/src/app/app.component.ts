import { Component } from '@angular/core';
import { AccountsService } from './service/accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor( private accountsService: AccountsService){}

  onAccountAdded(newAccount: {name: string, status: string}) {
    this.accountsService.addAcount( newAccount );
  }

  onStatusChanged(updateInfo: {id: number, newStatus: string}) {
    this.accountsService.updateStatus( updateInfo );
  }

  
  public get accounts() : { name: string, status: string }[]  {
    return this.accountsService.accounts;
  }
  

}

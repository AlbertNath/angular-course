import { Component} from '@angular/core';
import { AccountsService } from '../accounts.service';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  //providers: [LoggingService]
})
export class NewAccountComponent {
  constructor(private logger: LoggingService,
             private accounts: AccountsService,) {
    this.accounts.statusUpdate.subscribe(
      (status: string) => alert("New status is: " + status)
    );
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accounts.addAccount(accountName, accountStatus);
    // this.logger.logStatusChange(accountStatus);
    //console.log('A server status changed, new status: ' + accountStatus);
  }
}

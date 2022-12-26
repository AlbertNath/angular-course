import { EventEmitter, Injectable } from "@angular/core";
import { LoggingService } from "./logging.service";

@Injectable()
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
    statusUpdate = new EventEmitter<string>();

    constructor (private logger: LoggingService) {}

    addAccount(name: string, status: string) {
        this.accounts.push({name: name, status: status});
        this.logger.logStatusChange(status);
    }

    onStatusChanged(id: number, newStatus: string) {
        this.accounts[id].status = newStatus;
        this.logger.logStatusChange(newStatus);
    }
}

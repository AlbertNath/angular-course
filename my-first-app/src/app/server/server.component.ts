// This is a component, a pice of a page that is modular:
// it can be reused later.
import { style } from "@angular/animations";
import { Component } from "@angular/core";

@Component({
    //html uses this to identify this component
    selector: 'app-server',
    // this is the path used when we call to this
    // component.
    templateUrl: './server.component.html',

    styles: [`
        .online {
            color: white;
    }`]
})

export class ServerComponent {
    serverId: number = 10;
    serverStatus: string = 'offline';

    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }

    getServerStatus() {
        return this.serverStatus;
    }

    getColor() {
        return this.serverStatus === 'online'? 'green' : 'red';
    }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private userName: string = '';

  checkUserName() {
    return this.userName === '';
  }
  onEraseName() {
    this.userName = '';
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  allow: boolean = false;
  count: number = 0;
  allCounts = []

  onShow() {
    this.allow = !this.allow;
    this.allCounts.push(new Date().toDateString());
  }
}

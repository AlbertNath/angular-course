import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  odds: number[] = [];
  evens: number[] = [];

  onAddEven(num: number) {
    this.evens.push(num);
  }

  onAddOdd(num: number) {
    this.odds.push(num);
  }
}

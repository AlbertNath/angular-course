import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // numbers = [1, 2, 3, 4, 5];
  getRndInt(min, max) {
    let num = Math.floor(Math.random() * (max - min)) + min;
    console.log(num);
    return Math.abs(num);
  }

  oddNums = [1,3,5];
  evenNums = [2,4];
  onlyOdd = false;
  value = this.getRndInt(0,3);
}

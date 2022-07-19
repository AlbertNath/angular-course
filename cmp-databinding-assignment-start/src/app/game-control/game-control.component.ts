import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() emitOdd = new EventEmitter<number>();
  @Output() emitEven = new EventEmitter<number>();
  count: number = 0;
  exec;

  constructor() { }

  ngOnInit(): void {
  }

  onStartGame() {
    this.exec = setInterval(() => {
      console.log(this.count);
      (this.count % 2 == 0)? this.emitEven.emit(this.count++) :
                             this.emitOdd.emit(this.count++);
    }, 1000);
  }

  onStopGame() {
    clearInterval(this.exec);
  }
}

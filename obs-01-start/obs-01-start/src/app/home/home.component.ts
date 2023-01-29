import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  private sub: Subscription;

  constructor() { }

  ngOnInit() {
    // Almost out of the box observable.
    // this.sub = interval(1000).subscribe(
    //   count => {
    //     console.log(count);
    //   });
      // A REAL custom observale
    const customObservable = Observable.create(observer => {
      let count = 0;
      setInterval(() => {
          if (count === 4)
            observer.complete();

        observer.next(count);

        if(count > 3)
          observer.error(new Error("Counter greater than 3"));

        count++;
      }, 1000)
    });

    this.sub = customObservable.pipe(map(
      (data: number) => {
        return "Round " + (data + 1);
      }
    )).subscribe(
      data => {
        console.log(data);
      },
      error => {
        alert(error.message);
      },
      () => {
        console.log("Task completed.");
      });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}

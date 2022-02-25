import { Component, OnInit } from '@angular/core';
import {
  BehaviorSubject,
  interval,
  Observable,
  repeatWhen,
  Subscription,
  takeWhile,
} from 'rxjs';

@Component({
  selector: 'app-timer-app',
  templateUrl: './timer-app.component.html',
  styleUrls: ['./timer-app.component.scss'],
})
export class TimerAppComponent {
  initialCountLimit: number = 0;
  counter: number = 0;
  isCounterActive: boolean = false;
  originalValue: number = 0;
  startCount: number = 0;
  pausedCount: number = 0;
  notPaused$ = new BehaviorSubject<boolean>(true);
  notStop$ = new BehaviorSubject<boolean>(true);
  start$ = new BehaviorSubject<boolean>(true);
  timerObservale$: Observable<any>;
  subscription1$: Subscription | undefined;
  startedTime: Date | undefined;
  pausedTime: Date | undefined;

  constructor() {
    this.timerObservale$ = interval(1000).pipe(
      takeWhile((x) => this.notStop$.value === true),
      takeWhile((x) => this.notPaused$.value === true),
      repeatWhen(() => this.start$)
    );
  }
  //start/ stop counter
  counterStartPause() {
    if (this.isCounterActive && this.counter > 0) {
      if (this.notPaused$.value) {
        this.pausedTime = new Date();
        this.notPaused$.next(false);
        this.pausedCount++;
      } else {
        this.start$.next(true);
        this.notPaused$.next(true);
        this.startCount++;
        this.startedTime = new Date();
      }
    } else {
      if (
        this.initialCountLimit == 0 &&
        this.counter !== 0 &&
        !this.isCounterActive
      ) {
        this.initialCountLimit = this.counter;
      }
      if (this.initialCountLimit !== 0 && this.initialCountLimit > 0) {
        this.resetObservables();
        this.startCount = 1;
        this.startedTime = new Date();
        this.counter = this.initialCountLimit;
        this.originalValue = this.initialCountLimit;
        this.subscription1$ = this.timerObservale$.subscribe(() => {
          if (this.counter > 0) {
            this.counter--;
          } else {
            this.notStop$.next(false);
            this.isCounterActive = false;
          }
        });
        this.isCounterActive = true;
        this.initialCountLimit = 0;
      }
    }
  }

  resetObservables() {
    this.notStop$.next(true);
    this.notPaused$.next(true);
    this.start$.next(true);
  }
  //reset counter
  counterReset() {
    this.counter = this.originalValue;
    this.initialCountLimit = 0;
    this.notStop$.next(false);
    this.isCounterActive = false;
    this.startCount = 0;
    this.pausedCount = 0;
    this.pausedTime = undefined;
    this.subscription1$?.unsubscribe();
  }
}

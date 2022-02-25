import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer-log',
  templateUrl: './timer-log.component.html',
  styleUrls: ['./timer-log.component.scss'],
})
export class TimerLogComponent implements OnInit {
  _startTime: Date | undefined;
  _pauseTime: Date | undefined;

  @Input()
  set startTime(time: Date | undefined) {
    this._startTime = time;
  }
  @Input()
  set pauseTime(time: Date | undefined) {
    this._pauseTime = time;
  }

  constructor() {}

  ngOnInit(): void {}
}

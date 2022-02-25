import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer-display',
  templateUrl: './timer-display.component.html',
  styleUrls: ['./timer-display.component.scss'],
})
export class TimerDisplayComponent implements OnInit {
  @Input() count: number = 0;
  constructor() {}

  ngOnInit(): void {}
}

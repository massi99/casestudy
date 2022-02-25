import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimerAppRoutingModule } from './timer-app-routing.module';
import { TimerAppComponent } from './timer-app.component';
import { TimerDisplayComponent } from './components/timer-display/timer-display.component';
import { TimerLogComponent } from './components/timer-log/timer-log.component';
import { TimerCountComponent } from './components/timer-count/timer-count.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TimerAppComponent,
    TimerDisplayComponent,
    TimerLogComponent,
    TimerCountComponent,
  ],
  imports: [CommonModule, TimerAppRoutingModule, FormsModule],
})
export class TimerAppModule {}

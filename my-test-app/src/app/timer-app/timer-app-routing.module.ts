import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimerAppComponent } from './timer-app.component';

const routes: Routes = [{ path: '', component: TimerAppComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimerAppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './wecome';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: WelcomeComponent },
  {
    path: 'bannerImage',
    loadChildren: () =>
      import('./banner-image/banner-image.module').then(
        (m) => m.BannerImageModule
      ),
  },
  {
    path: 'ecommerseSite',
    loadChildren: () =>
      import('./ecommerse-site/ecommerse-site.module').then(
        (m) => m.EcommerseSiteModule
      ),
  },
  {
    path: 'timerApp',
    loadChildren: () =>
      import('./timer-app/timer-app.module').then((m) => m.TimerAppModule),
  },
  {
    path: 'timerAppService',
    loadChildren: () =>
      import('./timer-app-service/timer-app-service.module').then(
        (m) => m.TimerAppServiceModule
      ),
  },
  {
    path: 'studentMarksInfo',
    loadChildren: () =>
      import('./student-marks-info/student-marks-info.module').then(
        (m) => m.StudentMarksInfoModule
      ),
  },
  {
    path: 'dynamicDiv',
    loadChildren: () =>
      import('./dynamic-div/dynamic-div.module').then(
        (m) => m.DynamicDivModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

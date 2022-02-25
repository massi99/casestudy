import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerAppComponent } from './timer-app.component';

describe('TimerAppComponent', () => {
  let component: TimerAppComponent;
  let fixture: ComponentFixture<TimerAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimerAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

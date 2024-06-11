import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallbacktestComponent } from './callbacktest.component';

describe('CallbacktestComponent', () => {
  let component: CallbacktestComponent;
  let fixture: ComponentFixture<CallbacktestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CallbacktestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CallbacktestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

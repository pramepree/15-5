import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteOOpComponent } from './write-oop.component';

describe('WriteOOpComponent', () => {
  let component: WriteOOpComponent;
  let fixture: ComponentFixture<WriteOOpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WriteOOpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WriteOOpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

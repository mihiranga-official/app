import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingComponentComponent } from './training-component.component';

describe('TrainingComponentComponent', () => {
  let component: TrainingComponentComponent;
  let fixture: ComponentFixture<TrainingComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrainingComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrainingComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyParameterComponent } from './monthly-parameter.component';

describe('MonthlyParameterComponent', () => {
  let component: MonthlyParameterComponent;
  let fixture: ComponentFixture<MonthlyParameterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonthlyParameterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MonthlyParameterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionRegistrationComponent } from './section-registration.component';

describe('SectionRegistrationComponent', () => {
  let component: SectionRegistrationComponent;
  let fixture: ComponentFixture<SectionRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionRegistrationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SectionRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

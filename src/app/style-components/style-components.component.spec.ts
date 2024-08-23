import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleComponentsComponent } from './style-components.component';

describe('StyleComponentsComponent', () => {
  let component: StyleComponentsComponent;
  let fixture: ComponentFixture<StyleComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StyleComponentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StyleComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

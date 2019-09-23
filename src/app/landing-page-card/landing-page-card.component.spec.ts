import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageCardComponent } from './landing-page-card.component';

describe('LandingPageCardComponent', () => {
  let component: LandingPageCardComponent;
  let fixture: ComponentFixture<LandingPageCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingPageCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPageCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationPageCardComponent } from './reservation-page-card.component';

describe('ReservationPageCardComponent', () => {
  let component: ReservationPageCardComponent;
  let fixture: ComponentFixture<ReservationPageCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservationPageCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationPageCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

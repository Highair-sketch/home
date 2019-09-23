import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventPageCardComponent } from './event-page-card.component';

describe('EventPageCardComponent', () => {
  let component: EventPageCardComponent;
  let fixture: ComponentFixture<EventPageCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventPageCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventPageCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

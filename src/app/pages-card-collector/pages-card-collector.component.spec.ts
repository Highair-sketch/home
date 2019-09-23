import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesCardCollectorComponent } from './pages-card-collector.component';

describe('PagesCardCollectorComponent', () => {
  let component: PagesCardCollectorComponent;
  let fixture: ComponentFixture<PagesCardCollectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagesCardCollectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesCardCollectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

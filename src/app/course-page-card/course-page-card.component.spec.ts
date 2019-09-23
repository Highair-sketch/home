import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursePageCardComponent } from './course-page-card.component';

describe('CoursePageCardComponent', () => {
  let component: CoursePageCardComponent;
  let fixture: ComponentFixture<CoursePageCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursePageCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursePageCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

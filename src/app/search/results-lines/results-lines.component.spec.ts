import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultLinesComponent } from './results-lines.component';

describe('ResultLinesComponent', () => {
  let component: ResultLinesComponent;
  let fixture: ComponentFixture<ResultLinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultLinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultLinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

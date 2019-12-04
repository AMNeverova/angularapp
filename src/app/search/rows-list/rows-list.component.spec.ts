import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RowsListComponent } from './rows-list.component';

describe('RowsListComponent', () => {
  let component: RowsListComponent;
  let fixture: ComponentFixture<RowsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RowsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RowsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

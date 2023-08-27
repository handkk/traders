import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayCollectionsComponent } from './day-collections.component';

describe('DayCollectionsComponent', () => {
  let component: DayCollectionsComponent;
  let fixture: ComponentFixture<DayCollectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DayCollectionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DayCollectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

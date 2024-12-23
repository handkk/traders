import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportCollectionsComponent } from './report-collections.component';

describe('ReportCollectionsComponent', () => {
  let component: ReportCollectionsComponent;
  let fixture: ComponentFixture<ReportCollectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportCollectionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportCollectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

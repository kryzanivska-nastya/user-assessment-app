import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentReportComponentComponent } from './assessment-report-component.component';

describe('AssessmentReportComponentComponent', () => {
  let component: AssessmentReportComponentComponent;
  let fixture: ComponentFixture<AssessmentReportComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AssessmentReportComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AssessmentReportComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

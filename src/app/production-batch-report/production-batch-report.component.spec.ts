import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionBatchReportComponent } from './production-batch-report.component';

describe('ProductionBatchReportComponent', () => {
  let component: ProductionBatchReportComponent;
  let fixture: ComponentFixture<ProductionBatchReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductionBatchReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductionBatchReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishedGoodsListComponent } from './finished.goods.list.component';

describe('FinishedGoodsListComponent', () => {
  let component: FinishedGoodsListComponent;
  let fixture: ComponentFixture<FinishedGoodsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinishedGoodsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinishedGoodsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

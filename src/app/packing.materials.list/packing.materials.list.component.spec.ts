import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {PackingMaterialsListComponent} from 'src/app/packing.materials.list/packing.materials.list.component';
 

describe('PackingMaterialsListComponent', () => {
  let component: PackingMaterialsListComponent;
  let fixture: ComponentFixture<PackingMaterialsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackingMaterialsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackingMaterialsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

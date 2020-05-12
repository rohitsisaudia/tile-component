import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierLineComponent } from './supplier-line.component';

describe('SupplierLineComponent', () => {
  let component: SupplierLineComponent;
  let fixture: ComponentFixture<SupplierLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplierLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

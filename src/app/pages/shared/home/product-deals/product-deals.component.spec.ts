import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDealsComponent } from './product-deals.component';

describe('ProductDealsComponent', () => {
  let component: ProductDealsComponent;
  let fixture: ComponentFixture<ProductDealsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDealsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

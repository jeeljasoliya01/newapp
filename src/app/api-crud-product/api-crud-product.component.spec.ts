import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiCrudProductComponent } from './api-crud-product.component';

describe('ApiCrudProductComponent', () => {
  let component: ApiCrudProductComponent;
  let fixture: ComponentFixture<ApiCrudProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiCrudProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiCrudProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

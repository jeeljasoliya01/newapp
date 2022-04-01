import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiProductTemplateComponent } from './api-product-template.component';

describe('ApiProductTemplateComponent', () => {
  let component: ApiProductTemplateComponent;
  let fixture: ComponentFixture<ApiProductTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiProductTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiProductTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiTokenBaseCrudComponent } from './api-token-base-crud.component';

describe('ApiTokenBaseCrudComponent', () => {
  let component: ApiTokenBaseCrudComponent;
  let fixture: ComponentFixture<ApiTokenBaseCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiTokenBaseCrudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiTokenBaseCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

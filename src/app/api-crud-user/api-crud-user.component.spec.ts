import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiCrudUserComponent } from './api-crud-user.component';

describe('ApiCrudUserComponent', () => {
  let component: ApiCrudUserComponent;
  let fixture: ComponentFixture<ApiCrudUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiCrudUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiCrudUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

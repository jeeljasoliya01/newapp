import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiCrudStudentComponent } from './api-crud-student.component';

describe('ApiCrudStudentComponent', () => {
  let component: ApiCrudStudentComponent;
  let fixture: ComponentFixture<ApiCrudStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiCrudStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiCrudStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

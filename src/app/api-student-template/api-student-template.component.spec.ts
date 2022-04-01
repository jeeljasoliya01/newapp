import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiStudentTemplateComponent } from './api-student-template.component';

describe('ApiStudentTemplateComponent', () => {
  let component: ApiStudentTemplateComponent;
  let fixture: ComponentFixture<ApiStudentTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiStudentTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiStudentTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

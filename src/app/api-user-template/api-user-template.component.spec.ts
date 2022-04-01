import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiUserTemplateComponent } from './api-user-template.component';

describe('ApiUserTemplateComponent', () => {
  let component: ApiUserTemplateComponent;
  let fixture: ComponentFixture<ApiUserTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiUserTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiUserTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

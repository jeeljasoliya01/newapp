import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelCrudComponent } from './model-crud.component';

describe('ModelCrudComponent', () => {
  let component: ModelCrudComponent;
  let fixture: ComponentFixture<ModelCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelCrudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

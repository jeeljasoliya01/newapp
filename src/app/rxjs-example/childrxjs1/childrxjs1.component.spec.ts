import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Childrxjs1Component } from './childrxjs1.component';

describe('Childrxjs1Component', () => {
  let component: Childrxjs1Component;
  let fixture: ComponentFixture<Childrxjs1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Childrxjs1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Childrxjs1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Childrxjs2Component } from './childrxjs2.component';

describe('Childrxjs2Component', () => {
  let component: Childrxjs2Component;
  let fixture: ComponentFixture<Childrxjs2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Childrxjs2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Childrxjs2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

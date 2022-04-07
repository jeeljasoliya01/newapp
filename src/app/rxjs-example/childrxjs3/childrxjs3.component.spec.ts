import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Childrxjs3Component } from './childrxjs3.component';

describe('Childrxjs3Component', () => {
  let component: Childrxjs3Component;
  let fixture: ComponentFixture<Childrxjs3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Childrxjs3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Childrxjs3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoRestComponent } from './go-rest.component';

describe('GoRestComponent', () => {
  let component: GoRestComponent;
  let fixture: ComponentFixture<GoRestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoRestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoRestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

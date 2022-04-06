import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildFourthComponent } from './child-fourth.component';

describe('ChildFourthComponent', () => {
  let component: ChildFourthComponent;
  let fixture: ComponentFixture<ChildFourthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildFourthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildFourthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

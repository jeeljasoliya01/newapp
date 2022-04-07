import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildrxjsComponent } from './childrxjs.component';

describe('ChildrxjsComponent', () => {
  let component: ChildrxjsComponent;
  let fixture: ComponentFixture<ChildrxjsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildrxjsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildrxjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

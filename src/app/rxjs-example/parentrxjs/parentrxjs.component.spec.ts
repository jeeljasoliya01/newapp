import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentrxjsComponent } from './parentrxjs.component';

describe('ParentrxjsComponent', () => {
  let component: ParentrxjsComponent;
  let fixture: ComponentFixture<ParentrxjsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentrxjsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentrxjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

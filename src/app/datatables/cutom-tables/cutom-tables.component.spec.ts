import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CutomTablesComponent } from './cutom-tables.component';

describe('CutomTablesComponent', () => {
  let component: CutomTablesComponent;
  let fixture: ComponentFixture<CutomTablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CutomTablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CutomTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

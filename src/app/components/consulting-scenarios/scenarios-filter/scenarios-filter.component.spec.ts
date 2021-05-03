import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScenariosFilterComponent } from './scenarios-filter.component';

describe('ScenariosFilterComponent', () => {
  let component: ScenariosFilterComponent;
  let fixture: ComponentFixture<ScenariosFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScenariosFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScenariosFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

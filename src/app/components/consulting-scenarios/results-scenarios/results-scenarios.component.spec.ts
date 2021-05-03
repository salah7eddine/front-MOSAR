import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsScenariosComponent } from './results-scenarios.component';

describe('ResultsScenariosComponent', () => {
  let component: ResultsScenariosComponent;
  let fixture: ComponentFixture<ResultsScenariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultsScenariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsScenariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

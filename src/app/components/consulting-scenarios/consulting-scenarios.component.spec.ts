import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultingScenariosComponent } from './consulting-scenarios.component';

describe('ConsultingScenariosComponent', () => {
  let component: ConsultingScenariosComponent;
  let fixture: ComponentFixture<ConsultingScenariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultingScenariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultingScenariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

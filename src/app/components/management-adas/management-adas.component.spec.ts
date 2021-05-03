import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementADASComponent } from './management-adas.component';

describe('ManagementADASComponent', () => {
  let component: ManagementADASComponent;
  let fixture: ComponentFixture<ManagementADASComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagementADASComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagementADASComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

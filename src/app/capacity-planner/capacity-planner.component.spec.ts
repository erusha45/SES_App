import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapacityPlannerComponent } from './capacity-planner.component';

describe('CapacityPlannerComponent', () => {
  let component: CapacityPlannerComponent;
  let fixture: ComponentFixture<CapacityPlannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapacityPlannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CapacityPlannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

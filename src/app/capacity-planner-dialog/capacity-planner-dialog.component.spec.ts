import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapacityPlannerDialogComponent } from './capacity-planner-dialog.component';

describe('CapacityPlannerDialogComponent', () => {
  let component: CapacityPlannerDialogComponent;
  let fixture: ComponentFixture<CapacityPlannerDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapacityPlannerDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CapacityPlannerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

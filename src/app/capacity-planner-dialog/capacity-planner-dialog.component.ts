import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-capacity-planner-dialog',
  templateUrl: './capacity-planner-dialog.component.html',
  styleUrls: ['./capacity-planner-dialog.component.css']
})
export class CapacityPlannerDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

}

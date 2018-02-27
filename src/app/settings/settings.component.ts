import { Component, OnInit, Inject } from '@angular/core';
import { WorkoutComponent } from '../workout/workout.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<WorkoutComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}

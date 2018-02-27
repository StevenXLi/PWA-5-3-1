import { Component, OnInit } from '@angular/core';
import { SettingsComponent } from '../settings/settings.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.css']
})
export class WorkoutComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(SettingsComponent, {
      width: '300px',
      data: { squat: 145, bench: 115, deadlift: 195, press: 70 }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

}

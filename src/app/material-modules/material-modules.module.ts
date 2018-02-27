import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatToolbarModule, MatCardModule, MatGridListModule, MatIconModule, MatFormFieldModule,
  MatDialogModule, MatInputModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule, MatToolbarModule, MatCardModule, MatGridListModule, MatIconModule, MatFormFieldModule, MatDialogModule, MatInputModule,
    FormsModule, MatDatepickerModule, MatNativeDateModule
  ],
  exports: [
    MatButtonModule, MatToolbarModule, MatCardModule, MatGridListModule, MatIconModule, MatFormFieldModule, MatDialogModule, MatInputModule,
    FormsModule, MatDatepickerModule, MatNativeDateModule
  ]
})
export class MaterialModulesModule { }

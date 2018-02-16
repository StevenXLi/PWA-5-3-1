import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule, MatCardModule, MatGridListModule, MatIconModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule, MatToolbarModule, MatCardModule, MatGridListModule, MatIconModule
  ],
  exports: [
    MatButtonModule, MatToolbarModule, MatCardModule, MatGridListModule, MatIconModule
  ]
})
export class MaterialModulesModule { }

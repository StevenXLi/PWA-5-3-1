import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule, MatCardModule, MatGridListModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule, MatToolbarModule, MatCardModule, MatGridListModule
  ],
  exports: [
    MatButtonModule, MatToolbarModule, MatCardModule, MatGridListModule
  ]
})
export class MaterialModulesModule { }

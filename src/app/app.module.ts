import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { WorkoutComponent } from './workout/workout.component';

import { MaterialModulesModule } from './material-modules/material-modules.module';
import { SettingsComponent } from './settings/settings.component';
import { AddEntryComponent } from './add-entry/add-entry.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: WorkoutComponent, data: { name: 'main'} },
  { path: 'add', component: AddEntryComponent, data: { name: 'add'} }
];

@NgModule({
  declarations: [
    AppComponent,
    WorkoutComponent,
    SettingsComponent,
    AddEntryComponent
  ],
  entryComponents: [
    SettingsComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModulesModule,
    FormsModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

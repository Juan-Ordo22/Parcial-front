import { Routes } from '@angular/router';
import { ClinicaListComponent } from './components/clinica-list/clinica-list';
import { ClinicaFormComponent } from './components/clinica-form/clinica-form';

export const routes: Routes = [
  { path: '', component: ClinicaListComponent },
  { path: 'nueva', component: ClinicaFormComponent }
];

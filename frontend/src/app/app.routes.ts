import { Routes } from '@angular/router';
import { DoctorListComponent } from './components/doctor-list/doctor-list.component';
import { DoctorFormComponent } from './components/doctor-form/doctor-form.component';
import { DoctorAppoimentListComponent } from './components/doctor-appoiment-list/doctor-appoiment-list.component';
import { PacientListComponent } from './components/pacient-list/pacient-list.component';
import { AppoimentFormComponent } from './components/appoiment-form/appoiment-form.component';
import { PacientFormComponent } from './components/pacient-form/pacient-form.component';
import { AppoimentCheckComponent } from './components/appoiment-check/appoiment-check.component';



export const routes: Routes = [
  { path: '', redirectTo: 'listDoctor', pathMatch: 'full' },
  { path: 'listDoctor', component: DoctorListComponent },
  {path:'doctor/new',component:DoctorFormComponent},
  {path:'doctor/edit/:id',component:DoctorFormComponent},
  {path:'list/appointment/:id',component:DoctorAppoimentListComponent},
  {path:'listPacient',component:PacientListComponent},
  {path:'create-appoiment',component:AppoimentFormComponent},
  {path:'pacient/new',component:PacientFormComponent},
  {path:'pacient/edit/:id',component:PacientFormComponent},
  {path:'appoiment/check/:id',component:AppoimentCheckComponent},
];
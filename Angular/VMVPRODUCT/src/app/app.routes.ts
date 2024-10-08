import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppointmentlistComponent } from './appointmentlist/appointmentlist.component';
import { HospitalListComponent } from './hospital-list/hospital-list.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { NewHospitalComponent } from './new-hospital/new-hospital.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'home',
        pathMatch:'full'
    },
    {
        path:'home',
        component:HomeComponent
    },
    {
        path:'dashboard',
        component:DashboardComponent
    },
    {
        path:'appointments',
        component:AppointmentlistComponent
    },
    {
        path:'hospitallist',
        component:HospitalListComponent
    },
    {
        path:'patientlist',
        component:PatientListComponent
    },
    {
        path:'newhospital',
        component:NewHospitalComponent
    }
];

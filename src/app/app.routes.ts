import { Routes } from '@angular/router';
import { FlightDashboard } from './features/flight-dashboard/flight-dashboard';

export const routes: Routes = [
     {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: FlightDashboard
  }
];

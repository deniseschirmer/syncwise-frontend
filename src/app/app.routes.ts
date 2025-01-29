import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ActivitiesComponent } from './pages/activities/activities.component';
import { TimeEntriesComponent } from './pages/time-entries/time-entries.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },  // Protegendo a rota
  { path: 'projects', component: ProjectsComponent, canActivate: [AuthGuard] },     // Protegendo a rota
  { path: 'activities', component: ActivitiesComponent, canActivate: [AuthGuard] }, // Protegendo a rota
  { path: 'time-entries', component: TimeEntriesComponent, canActivate: [AuthGuard] }, // Protegendo a rota
  { path: 'reports', component: ReportsComponent, canActivate: [AuthGuard] },       // Protegendo a rota
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

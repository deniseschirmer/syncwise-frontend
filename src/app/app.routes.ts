import { ProjectCreateComponent } from './pages/project/create/create.component';
import { Routes } from "@angular/router";
import { LoginComponent } from "./pages/auth/login/login.component";
import { LayoutComponent } from "./layout/layout/layout.component";
import { ActivitiesComponent } from "./pages/activities/activities.component";
import { RegisterComponent } from "./pages/auth/register/register.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { ProjectsComponent } from "./pages/project/projects/projects.component";
import { ReportsComponent } from "./pages/reports/reports.component";
import { TimeEntriesComponent } from "./pages/time-entries/time-entries.component";

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'projects', children: [
        {path: '', redirectTo: 'list', pathMatch: 'full' },
        { path: 'list', component: ProjectsComponent },
        { path: 'create', component: ProjectCreateComponent},
        { path: 'edit/:id', component: ProjectsComponent },
      ] },
      { path: 'activities', component: ActivitiesComponent },
      { path: 'time-entries', component: TimeEntriesComponent },
      { path: 'reports', component: ReportsComponent }
    ]
  },
  { path: '**', redirectTo: 'login' }
];


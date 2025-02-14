import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { AppComponent } from './app/app.component';
import { LoginComponent } from './app/pages/auth/login/login.component';
import { DashboardComponent } from 'app/pages/dashboard/dashboard.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: '', component: LoginComponent },
      { path: 'login', component: LoginComponent },
      { path: 'dashboard', component: DashboardComponent } // Comentado até criar o componente
    ], withComponentInputBinding())
  ]
}).catch(err => console.error(err));

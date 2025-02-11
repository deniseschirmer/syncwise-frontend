import { Component } from '@angular/core';
import { LoginComponent } from './pages/auth/login/login.component';
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { ActivitiesComponent } from "./pages/activities/activities.component";
import { HeaderComponent } from "./components/header/header.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DashboardComponent, ActivitiesComponent, HeaderComponent, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Syncwise';
}

import { Component } from '@angular/core';
import { HeaderComponent } from "./components/header/header.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    HeaderComponent,
    SidebarComponent
],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Syncwise';
}

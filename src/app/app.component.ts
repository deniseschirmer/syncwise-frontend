import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent],
  template: `
    <div class="flex">
      <app-sidebar></app-sidebar>
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {
  title = 'Syncwise';
}

import { Component, Inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  activeMenu: string | null = null;

  toggleMenu(menu: string): void {
    this.activeMenu = this.activeMenu === menu ? null : menu;
  }

  constructor(@Inject(AuthService) private authService: AuthService) {}

  logout(): void {
    this.authService.logout();
  }
}

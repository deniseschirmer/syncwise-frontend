import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  activeMenu: string | null = null;

  constructor(
    @Inject(AuthService) private authService: AuthService,
    private router: Router
  ) {}

  toggleAndNavigate(menu: string, route: string): void {
    this.activeMenu = this.activeMenu === menu ? null : menu;
    this.router.navigate([route]);
  }

  toggleMenu(menu: string): void {
    this.activeMenu = this.activeMenu === menu ? null : menu;
  }

  logout(): void {
    this.authService.logout();
  }
}

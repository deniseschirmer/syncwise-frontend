import { Component, signal } from '@angular/core';
import { NgIf, NgClass } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [NgIf, NgClass, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  activeMenu = signal<string | null>(null);

  toggleMenu(menu: string) {
    this.activeMenu.set(this.activeMenu() === menu ? null : menu);
  }
}

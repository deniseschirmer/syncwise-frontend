import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, @Inject(PLATFORM_ID) private platformId: object) {}

  canActivate(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('authToken');
      console.log('AuthGuard - Token encontrado:', token);

      if (!token) {
        console.log('Redirecionando para login...');
        this.router.navigate(['/login']);
        return false;
      }

      console.log('Acesso permitido!');
      return true;
    }
    return false;
  }
}

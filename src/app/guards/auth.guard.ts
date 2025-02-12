import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const token = localStorage.getItem('token');
    console.log('Token no localStorage:', token);

    if (!token) {
      console.log('Token não encontrado, redirecionando para login...');
      this.router.navigate(['/login']);
      return false;
    }

    console.log('Token encontrado, permitindo acesso...');
    return true;
  }
}

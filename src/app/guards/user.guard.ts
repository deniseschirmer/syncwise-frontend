import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const perfil = localStorage.getItem('perfil');

    if (perfil === 'ADMIN') {
      console.log('Acesso negado: Redirecionando administrador');
      this.router.navigate(['/dashboard']);
      return false;
    }

    return true;
  }
}

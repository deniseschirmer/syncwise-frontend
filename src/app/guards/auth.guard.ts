import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'; // Verifique se o usuário está logado
    if (!isLoggedIn) {
      this.router.navigate(['/login']); // Redireciona para o login caso não esteja logado
      return false;
    }
    return true;
  }
}

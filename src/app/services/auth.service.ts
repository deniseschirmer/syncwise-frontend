import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private mockUser = {
    email: 'admin@email.com',
    password: '123456',
    perfil: 'ADMIN',
    token: 'fake-jwt-token',
  };

  login(email: string, password: string): Observable<any> {
    if (email === this.mockUser.email && password === this.mockUser.password) {
      localStorage.setItem('token', this.mockUser.token);
      localStorage.setItem('perfil', this.mockUser.perfil);

      return of({ token: this.mockUser.token, perfil: this.mockUser.perfil }).pipe(delay(1000));
    } else {
      return throwError(() => new Error('Credenciais inválidas'));
    }
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('perfil');
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }
}

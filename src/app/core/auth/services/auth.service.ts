import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

interface LoginResponse {
  token: string;
  perfil: 'ADMIN' | 'USUARIO';
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  login(email: string, password: string): Observable<LoginResponse> {
    // Simulação de resposta do servidor
    return of({
      token: 'fake-jwt-token',
      perfil: 'USUARIO'
    });
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('perfil');
  }
} 
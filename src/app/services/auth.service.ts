import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  logout() {
    throw new Error('Method not implemented.');
  }
  constructor() {}

  // Método para simular o login e retornar um token fictício
  login(email: string, password: string): Observable<any> {
    // Simulando uma resposta de sucesso com um token fictício
    const fakeToken = 'fake-jwt-token-12345'; // Token fictício
    return of({ token: fakeToken }); // Retorna o token dentro de um Observable
  }
}

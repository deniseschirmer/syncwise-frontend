import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../core/auth/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [CommonModule, ReactiveFormsModule]
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      this.errorMessage = 'Por favor, preencha todos os campos corretamente.';
      return;
    }

    const { email, password } = this.loginForm.value;

    this.authService.login(email, password).subscribe({
      next: (response) => {
        console.log('Login bem-sucedido', response);

        localStorage.setItem('token', response.token);
        localStorage.setItem('perfil', response.perfil);

        console.log('Token salvo:', localStorage.getItem('token'));
        console.log('Perfil salvo:', localStorage.getItem('perfil'));

        if (response.perfil === 'ADMIN') {
          this.router.navigate(['/admin/dashboard']);
        } else if (response.perfil === 'USUARIO') {
          this.router.navigate(['/dashboard']);
        } else {
          console.warn('Perfil não reconhecido:', response.perfil);
          this.router.navigate(['/login']);
        }
      },
      error: (error) => {
        console.error('Erro no login', error);
        this.errorMessage = error.error?.message || 'Erro ao fazer login. Verifique suas credenciais.';
      }
    });
  }

}

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  imports: [ReactiveFormsModule],
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;

      console.log("Email digitado:", email);
      console.log("Senha digitada:", password);

      const fakeJwtToken = "fake-jwt-token-12345";
      localStorage.setItem('authToken', fakeJwtToken);

      console.log("Token salvo:", localStorage.getItem('authToken')); // Deve exibir o token

      this.router.navigate(['/dashboard']);
    }
  }

}

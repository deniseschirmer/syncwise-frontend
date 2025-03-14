import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ChartModule } from 'primeng/chart';
import { CommonModule } from '@angular/common'; // Importe o CommonModule

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ReactiveFormsModule, ChartModule, CommonModule], // Adicione CommonModule aqui
  templateUrl: './profile.component.html',
})
export class ProfileComponent {
  personalForm: FormGroup;
  securityForm: FormGroup;
  activeTab: string = 'personal'; // Aba ativa inicial
  chartData: any;
  chartOptions: any;

  constructor(private fb: FormBuilder) {
    this.personalForm = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });

    this.securityForm = this.fb.group({
      senhaAtual: ['', Validators.required],
      novaSenha: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, { validators: this.passwordMatchValidator });
  }

  // Método para alterar a aba ativa
  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }

  // Verifica se há um erro específico em um controle do formulário
  hasError(form: FormGroup, controlName: string, errorName: string): boolean {
    const control = form.get(controlName);
    return control ? control.hasError(errorName) && control.touched : false;
  }

  // Validador para garantir que as senhas coincidam
  passwordMatchValidator(form: FormGroup) {
    const novaSenha = form.get('novaSenha')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    return novaSenha === confirmPassword ? null : { passwordMismatch: true };
  }

  // Método chamado ao enviar o formulário
  onSubmit(): void {
    if (this.personalForm.valid) {
      console.log('Formulário pessoal válido:', this.personalForm.value);
    } else {
      console.log('Formulário pessoal inválido');
    }

    if (this.securityForm.valid) {
      console.log('Formulário de segurança válido:', this.securityForm.value);
    } else {
      console.log('Formulário de segurança inválido');
    }
  }
}

import { Component, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], // Certifique-se de importar os módulos necessários
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  activeTab = signal<'personal' | 'security'>('personal'); // Utilizando signal para reatividade
  personalForm: FormGroup;
  securityForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.personalForm = this.fb.group({
      nome: ['', Validators.required],
      email: [{ value: 'usuario@email.com', disabled: true }],
      perfil: [{ value: 'Administrador', disabled: true }],
    });

    this.securityForm = this.fb.group({
      senhaAtual: ['', Validators.required],
      novaSenha: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    });
  }

  setActiveTab(tab: 'personal' | 'security') {
    this.activeTab.set(tab);
  }

  onSaveChanges() {
    if (this.activeTab() === 'personal') {
      console.log('Salvando Informações Pessoais:', this.personalForm.value);
    } else {
      if (this.securityForm.valid) {
        console.log('Alterando Senha:', this.securityForm.value);
      } else {
        console.error('Erro: Formulário de segurança inválido.');
      }
    }
  }
}

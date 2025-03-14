import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common'; // Importe CommonModule e isPlatformBrowser
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-help-center',
  standalone: true, // Se estiver usando standalone components
  imports: [CommonModule, ReactiveFormsModule], // Adicione CommonModule e ReactiveFormsModule
  templateUrl: './help-center.component.html',
  styleUrls: ['./help-center.component.scss'],
})
export class HelpCenterComponent implements OnInit {
  contactForm: FormGroup; // Formulário reativo
  isSubmitting = false; // Estado de envio do formulário
  showSuccessMessage = false; // Mensagem de sucesso após envio
  isBrowser: boolean; // Verifica se está no navegador

  constructor(
    private fb: FormBuilder,
    @Inject(PLATFORM_ID) private platformId: Object // Injeta PLATFORM_ID
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId); // Define se está no navegador
    // Inicializa o formulário
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  ngOnInit(): void {
    // Simula um email pré-preenchido (pode ser substituído por um valor real)
    this.contactForm.patchValue({
      email: 'usuario@exemplo.com',
    });
  }

  // Método para enviar o formulário
  onSubmit(): void {
    if (this.contactForm.valid) {
      this.isSubmitting = true;

      // Simula o envio do formulário (substitua por uma chamada HTTP real)
      setTimeout(() => {
        this.isSubmitting = false;
        this.showSuccessMessage = true;

        // Reseta o formulário após o envio
        this.contactForm.reset();

        // Oculta a mensagem de sucesso após 5 segundos
        setTimeout(() => {
          this.showSuccessMessage = false;
        }, 5000);
      }, 2000);
    } else {
      // Marca todos os campos como tocados para exibir erros de validação
      this.markFormGroupTouched(this.contactForm);
    }
  }

  // Método para cancelar o formulário
  onCancel(): void {
    this.contactForm.reset();
  }

  // Método para exibir mensagens de erro de validação
  getErrorMessage(controlName: string): string {
    const control = this.contactForm.get(controlName);
    if (control?.errors) {
      if (control.errors['required']) {
        return 'Este campo é obrigatório';
      }
      if (control.errors['email']) {
        return 'Email inválido';
      }
      if (control.errors['minlength']) {
        return `Mínimo de ${control.errors['minlength'].requiredLength} caracteres`;
      }
    }
    return '';
  }

  // Método para marcar todos os campos do formulário como tocados
  private markFormGroupTouched(formGroup: FormGroup): void {
    Object.values(formGroup.controls).forEach((control) => {
      control.markAsTouched();
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
}

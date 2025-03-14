import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ToastModule,
    InputTextModule,
    DropdownModule,
    CalendarModule,
    ButtonModule,
  ],
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [MessageService],
})
export class CreateComponent implements OnInit {
  tarefa: any = {
    nome: '',
    descricao: '',
    usuarioResponsavel: null,
    horasEstimadas: 0,
    tempoRegistrado: 0,
    status: '',
    dataInicio: null,
    dataFim: null,
  };

  statusOpcoes: string[] = ['Planejado', 'Em Andamento', 'Concluído', 'Cancelado'];

  usuarioLogado = {
    nome: 'Usuário Comum',
    perfil: 'COMUM', // Pode ser 'ADMIN' ou 'COMUM'
  };

  constructor(private messageService: MessageService, private router: Router) {}

  ngOnInit(): void {
    if (this.usuarioLogado.perfil !== 'ADMIN') {
      this.mostrarToastAcessoNegado();
    }
  }

  mostrarToastAcessoNegado(): void {
    this.messageService.add({
      severity: 'warn',
      summary: 'Acesso Negado',
      detail: 'Somente administradores podem criar novas tarefas.',
    });
  }

  navigateToTarefas(): void {
    this.router.navigate(['/tarefas']);
  }

  validarHoras(): void {
    if (this.tarefa.horasEstimadas < 0) {
      this.tarefa.horasEstimadas = 0;
    }
  }

  salvarAlteracoes(): void {
    if (this.usuarioLogado.perfil !== 'ADMIN') {
      this.mostrarToastAcessoNegado();
      return;
    }

    console.log('Tarefa salva:', this.tarefa);
    this.messageService.add({
      severity: 'success',
      summary: 'Sucesso',
      detail: 'Tarefa criada com sucesso!',
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';

@Component({
  selector: 'app-projetos',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    DropdownModule,
    CalendarModule,
  ],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  searchQuery: string = '';
  selectedStatus: string = '';
  selectedPriority: string = '';
  showNewProjectModal: boolean = false;
  hasProjects: boolean = true; // Simulação de projetos existentes
  filteredProjects: any[] = []; // Lista de projetos filtrados

  // Dados de exemplo para projetos
  projetos: any[] = [
    {
      id: 1,
      nome: 'Projeto Alpha',
      cliente: { nome: 'Cliente A' },
      horasTrabalhadas: 50,
      horasEstimadas: 100,
      custoTrabalhado: 5000,
      custoEstimado: 10000,
      status: 'EM_ANDAMENTO',
      prioridade: 'ALTA',
      dataInicio: new Date('2023-01-01'),
      dataFim: new Date('2023-12-31'),
    },
    // Adicione mais projetos conforme necessário
  ];

  // Dados para o formulário de novo projeto
  project: any = {
    nome: '',
    descricao: '',
    cliente: null,
    horasEstimadas: 0,
    custoEstimado: 0,
    status: null,
    prioridade: null,
    dataInicio: null,
    dataFim: null,
  };

  // Opções para os dropdowns
  clientes = [
    { id: 1, nome: 'Cliente A' },
    { id: 2, nome: 'Cliente B' },
  ];

  statusOptions = [
    { label: 'Planejado', value: 'PLANEJADO' },
    { label: 'Em Andamento', value: 'EM_ANDAMENTO' },
    { label: 'Concluído', value: 'CONCLUIDO' },
    { label: 'Cancelado', value: 'CANCELADO' },
  ];

  prioridadeOptions = [
    { label: 'Alta', value: 'ALTA' },
    { label: 'Média', value: 'MEDIA' },
    { label: 'Baixa', value: 'BAIXA' },
  ];

  ngOnInit(): void {
    this.filteredProjects = this.projetos;
  }

  // Filtra os projetos com base na pesquisa, status e prioridade
  filterProjects(): void {
    this.filteredProjects = this.projetos.filter((projeto) => {
      const matchesSearch = projeto.nome
        .toLowerCase()
        .includes(this.searchQuery.toLowerCase());
      const matchesStatus = this.selectedStatus
        ? projeto.status === this.selectedStatus
        : true;
      const matchesPriority = this.selectedPriority
        ? projeto.prioridade === this.selectedPriority
        : true;
      return matchesSearch && matchesStatus && matchesPriority;
    });
  }

  // Abre o modal de novo projeto
  openNewProjectModal(): void {
    this.showNewProjectModal = true;
  }

  // Fecha o modal
  closeModal(): void {
    this.showNewProjectModal = false;
  }

  // Navega para a edição do projeto
  navegarParaEdicao(id: number, nome: string): void {
    console.log(`Navegar para edição do projeto ${nome} com ID ${id}`);
    // Implemente a navegação para a página de edição do projeto
  }

  // Submete o formulário de novo projeto
  onSubmit(form: NgForm): void {
    if (form.valid) {
      console.log('Projeto criado:', this.project);
      this.closeModal();
      // Aqui você pode adicionar a lógica para salvar o projeto
    }
  }
}

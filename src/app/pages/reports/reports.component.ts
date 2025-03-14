import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importe o CommonModule

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [CommonModule], // Adicione o CommonModule aqui
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent {
  // Dados de exemplo para a tabela
  reportData: any[] = [
    { project: 'Projeto A', user: 'Usuário 1', hours: 40, progress: 75 },
    { project: 'Projeto B', user: 'Usuário 2', hours: 30, progress: 50 },
    { project: 'Projeto C', user: 'Usuário 3', hours: 20, progress: 25 },
  ];

  applyFilters() {
    // Lógica para aplicar filtros
    console.log('Filtros aplicados');
  }

  generateProjectReport() {
    // Lógica para gerar relatório de projetos
    console.log('Relatório de projetos gerado');
  }

  generateUserReport() {
    // Lógica para gerar relatório de usuários
    console.log('Relatório de usuários gerado');
  }

  exportToPDF(reportType: string) {
    // Lógica para exportar para PDF
    console.log('Exportando para PDF:', reportType);
  }
}

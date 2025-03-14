import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importe o CommonModule

@Component({
  selector: 'app-time-entries',
  standalone: true,
  imports: [CommonModule], // Adicione o CommonModule aqui
  templateUrl: './time-entries.component.html',
  styleUrls: ['./time-entries.component.css']
})
export class TimeEntriesComponent {
  // Dados de exemplo para a tabela
  timeEntries: any[] = [
    { project: 'Projeto A', user: 'Usuário 1', date: '2023-10-01', hours: 8, description: 'Desenvolvimento de funcionalidades' },
    { project: 'Projeto B', user: 'Usuário 2', date: '2023-10-02', hours: 6, description: 'Reunião de planejamento' },
  ];

  // Função para salvar um novo lançamento
  saveEntry() {
    // Lógica para salvar o lançamento
    console.log('Lançamento salvo');
  }

  // Função para limpar o formulário
  clearForm() {
    // Lógica para limpar os campos
    console.log('Formulário limpo');
  }

  // Função para editar um lançamento
  editEntry(entry: any) {
    // Lógica para editar o lançamento
    console.log('Editar:', entry);
  }

  // Função para excluir um lançamento
  deleteEntry(entry: any) {
    // Lógica para excluir o lançamento
    console.log('Excluir:', entry);
  }
}

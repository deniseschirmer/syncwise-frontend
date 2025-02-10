import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, HeaderComponent, SidebarComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  projetosAtivos = 12;
  atividadesPendentes = 7;
  horasTrabalhadas = 45;
  atividadesRecentes = [
    { titulo: 'Finalizado relatório mensal', status: 'Concluído' },
    { titulo: 'Correção de bug no sistema', status: 'Em andamento' },
    { titulo: 'Revisão do design do app', status: 'Pendente' }
  ];
}

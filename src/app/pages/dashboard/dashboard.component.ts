import { Component } from '@angular/core';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ChartModule], // Importe o ChartModule aqui
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  // Dados do gráfico de barras
  barChartData = {
    labels: ['Projeto A', 'Projeto B', 'Projeto C', 'Projeto D'],
    datasets: [
      {
        label: 'Horas Trabalhadas',
        backgroundColor: '#3b82f6',
        data: [65, 59, 80, 81]
      }
    ]
  };

  // Opções do gráfico de barras
  barChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  // Dados do gráfico de pizza
  pieChartData = {
    labels: ['Desenvolvimento', 'Reuniões', 'Testes', 'Documentação'],
    datasets: [
      {
        data: [300, 50, 100, 70],
        backgroundColor: ['#3b82f6', '#10b981', '#f59e0b', '#8b5cf6']
      }
    ]
  };

  // Opções do gráfico de pizza
  pieChartOptions = {
    responsive: true,
    maintainAspectRatio: false
  };
}

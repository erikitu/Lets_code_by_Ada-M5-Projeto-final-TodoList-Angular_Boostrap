import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.component.html',
  styleUrls: ['./date-time.component.css'],
})
export class DateTimeComponent implements OnInit, OnDestroy {
  currentDate: string = '';
  currentTime: string = '';
  intervalId: any;

  ngOnInit(): void {
    this.updateDateTime(); // Atualizar a data e a hora ao iniciar
    this.startClock(); // Iniciar o relógio para atualizar a cada minuto
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId); // Limpar o intervalo ao destruir o componente
  }

  private updateDateTime() {
    const now = new Date();
    this.currentDate = now.toLocaleDateString();
    this.currentTime = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }

  private startClock() {
    this.intervalId = setInterval(() => {
      this.updateDateTime();
    }, 60000); // Atualiza a cada minuto
  }
}

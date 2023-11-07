import { Component, Input, OnInit } from '@angular/core';
import { ChartData, ChartEvent, ChartType } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent implements OnInit{
  ngOnInit(): void {
    console.log(this.doughnutChartLabels);
    this.doughnutChartData = {
      labels: this.doughnutChartLabels,
      datasets: [
        { data: this.datos },
       
      ],
    };
  }
  @Input() titulo:string = 'titulo';
  @Input('etiquetas') doughnutChartLabels: string[] = [
    'Pruebas',
    'In-Store Sales',
    'Mail-Order Sales',
  ];
  @Input() datos: number[] = [33,33,33];
  public doughnutChartData?: ChartData<'doughnut'>;
  public doughnutChartType: ChartType = 'doughnut';
  // events
  public chartClicked({
    event,
    active,
  }: {
    event: ChartEvent;
    active: object[];
  }): void {
    console.log(event, active);
  }

  public chartHovered({
    event,
    active,
  }: {
    event: ChartEvent;
    active: object[];
  }): void {
    console.log(event, active);
  }
}

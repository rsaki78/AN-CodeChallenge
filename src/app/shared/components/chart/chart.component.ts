import { Component, Input, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  @Input() legendPosition: any = 'left';
  @Input() typeOfChart: ChartType = 'pie';
  @Input() labels: Label[] = [];
  @Input() data: number[] = [];
  @Input() backgroundColors = [];

  public chartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: this.legendPosition,
    },
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return label;
        },
      },
    }
  };
  public chartLabels = this.labels;
  public chartData = this.data;
  public chartType = this.typeOfChart;
  public chartLegend = true;
  public chartColors = [
    {
      backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)'],
    },
  ];

  constructor() { }

  ngOnInit() {
    this.chartLabels = this.labels;
    this.chartData = this.data;
    this.chartType = this.typeOfChart;
    if (this.backgroundColors.length > 0) {
      this.chartColors[0].backgroundColor = this.backgroundColors;
    }
  }

}

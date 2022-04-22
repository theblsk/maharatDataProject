import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

import ChartDataLabels from 'chartjs-plugin-datalabels';
@Component({
  selector: 'bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
  chart;
  constructor() {
    Chart.register(...registerables);
    Chart.register(ChartDataLabels);
   }

  ngOnInit(): void {
    this.chart = new Chart('myChart', {
      type: 'bar',
      data: {
        labels: ['الحزن', 'الخوف', 'الفرح', 'غضب'],
        datasets: [
          {
            label: '31 يوليو/ 1 أغسطس',
            data: [6,8,18,4],
            backgroundColor: [
              '#ff782d',
              '#f5b96e',
   
              '#96d7fa',
              '#0f1e55',
            ]
          },
          {
            label: '4,5,6 آب',
            data: [7,7,4,3],
            backgroundColor: [
              '#ff782d',
              '#f5b96e',
    
              '#96d7fa',
              '#0f1e55',
            ]
          }
        ],
      },
      options: {
        
        scales:{
          y: {
            ticks: {
              display: false
            },
            grid:{
              display: false,
              drawBorder: false,
              drawOnChartArea: false,
              drawTicks: false,

            }
          },
          x: {
            grid:{
              display: false,
              drawBorder: false,
              drawOnChartArea: false,
              drawTicks: false
            }
          },

        },
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          datalabels: {
            align: 'center',
            anchor: 'center',
            textAlign: 'center',
            font: {
              size: 20,
              family: 'bebas'
            },
            color: 'white',
            formatter: function(value){
              return value + '%'
            }
          },
          tooltip: {
            enabled: false,
          },
          title: {
            display: false,
            text: 'النسب المئوية للعواطف',
            align: 'center',
            fullSize: true,
            font: {
              size: 20,
              family: 'bebas'
            },
          },
          legend: {
            display: true,
          },
        },
        elements: {
          arc: {
            borderColor: 'transparent',
          },
        },
      },
    });
  }

}

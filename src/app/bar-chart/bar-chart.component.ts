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
   ngOnDestroy(){
    Chart.unregister(ChartDataLabels);
   }
  ngOnInit(): void {
    window.history.replaceState('','', '/')
    this.chart = new Chart('myChart', {
      type: 'bar',
      
      data: {

        labels: ['الحزن', 'الخوف', 'الفرح', 'غضب'],
        datasets: [
          {
            label: '31 يوليو/ 1 أغسطس',
            data: [6,8,18,4],
            backgroundColor: [
              
              '#96d7fa'
        
            ]
          },
          {
            label: '4,5,6 آب',
            data: [7,7,4,3],
            backgroundColor: [
              '#ff782d'
            ]
          }
        ],
      },
      options: {
        layout:{
          padding: 20
        },
        
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
        maintainAspectRatio: false,
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
            position: 'bottom'
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

import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'hash-data',
  templateUrl: './hash-data.component.html',
  styleUrls: ['./hash-data.component.css'],
})
export class HashDataComponent implements OnInit {
  chart;
  constructor() {
    Chart.register(...registerables);


    Chart.defaults.font.family = 'droid';
  }
  ngOnDestroy() {}
  ngOnInit(): void {
    window.history.replaceState('', '', '/');
    this.chart = new Chart('myChart', {
      type: 'line',

      data: {
        labels: ['انفجار_بيروت#', 'كورونا_لبنان#', 'تفجير_بيروت# ', 'كورونا#'],
        datasets: [
          {
            label: 'الحدوث',
            data: [8,8,8,15],
            backgroundColor: '#96d7fa',
            tension: 0.1,
            borderColor: '#96d7fa',
   
          },
          {
            label: 'المداخلات',
            data: [128,10,201,129],
            backgroundColor: '#ff782d',
            tension: 0.5,
            borderColor: '#ff782d',
         
          }
        ],
      },
      options: {
        interaction: {
          intersect: false,
          axis: 'x'
        },
        layout: {
          padding: 50,
        },

        scales: {

        },
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          datalabels: {
            align: 'center',
            anchor: 'center',
            textAlign: 'center',
            font: {
              size: 10,
              family: 'bebas',
            },
            color: 'white',
          },
          tooltip: {
            enabled: true,
          },
          title: {
            display: false,
            text: 'النسب المئوية للعواطف',
            align: 'center',
            fullSize: true,
            font: {
              size: 20,
              family: 'bebas',
            },
          },
          legend: {
            display: true,
            position: 'bottom',
            labels: {
              font: {
                family: 'droid',
     
              },
            },
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

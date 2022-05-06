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
        labels: ['BeirutBlast', 'Beirut_Explosion', '#كورونا_سوريا ', 'كورونا#'],
        datasets: [
        
            
          {
            label: 'المداخلات',
            data: [348,211,475,693],
            backgroundColor: 'transparent',
            pointBackgroundColor: '#96d7fa',
            tension: 0.2,
            borderColor: '#ff782d',
            fill:true,
            pointStyle: 'circle',
            pointRadius: 10,
            pointHoverRadius: 15,
          
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
          x:{
            beginAtZero: true
          },
          y:{
            beginAtZero: true
          }
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
            display: true,
            text: 'أكثر الhashtags تفاعلاً بين تموز و أيلول ٢٠٢٠',
            align: 'center',
            fullSize: true,
            font: {
              size: 20,
              family: 'bebas',
            },
          },
          legend: {
            display: false,
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

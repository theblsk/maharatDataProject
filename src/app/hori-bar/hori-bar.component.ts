import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
@Component({
  selector: 'hori-bar',
  templateUrl: './hori-bar.component.html',
  styleUrls: ['./hori-bar.component.css'],
})
export class HoriBarComponent implements OnInit {
  constructor() {
    Chart.defaults.font.family = 'droid'
  }

  HoriBar: any;
  extract = 'الموضوع';
  value1 
  value2 
  externalToolTipHandler = (context) => {
    const { chart, tooltip } = context;

 
    this.extract = tooltip.title;
    const index = tooltip.dataPoints[0].parsed.y;
    const set1 = chart._metasets[0]
    const set2 = chart._metasets[1]

    this.value1 = Math.round(set1._dataset.data[index])
    this.value2 = Math.round(set2._dataset.data[index])


  };
  ngOnInit(): void {
    window.history.replaceState('', '', '/');
    this.HoriBar = new Chart('horiBar', {
      type: 'bar',
      data: {
        labels: [
          'فنون',
          'إقتصاد',
          'تعليم',
          'بيئة',
          'صحة',
          'عطل',
          'سياسة',
          'علم النفس',
          'دين',
          'ضمان اجتماعي',
          'رياضيات',
        ],
        
        datasets: [
          {
            label: 'value',
            data: [
              19.17, 6.56, 5.91, 5.02, 11.51, 0.0, 28.02, 4.33, 11.88, 0.99,
              6.49,
            ],
            backgroundColor: ['#96d7fa'],
            hoverBackgroundColor: ['#96d7fa'],
            
          },
          {
            label: 'value2',
            data: [
              7.32, 1.98, 3.0, 0.0, 39.88, 0.0, 6.32, 2.79, 33.85, 0.99, 3.57,
            ],
            backgroundColor: ['#ff782d'],

            hoverBackgroundColor: ['#ff782d'],
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        scales: {
    
          x: {
            min: 0,
            max: 50,
            beginAtZero: true,
            grid: {
              display: false,
              drawBorder: false,
              drawOnChartArea: false,
              drawTicks: false,
              
            },
            ticks:{
              backdropColor: 'black'
            }
          

            
            
          },
          y: {
            grid: {
              display: false,
              drawBorder: false,
              drawOnChartArea: false,
              drawTicks: false,
            },
            ticks:{
              backdropColor: 'black'
            }
          }
        },

        indexAxis: 'y',
        // Elements options apply to all of the options unless overridden in a dataset
        // In this case, we are setting the border of each horizontal bar to be 2px wide
        elements: {
          bar: {
            borderWidth: 0,
          },
        },
        responsive: true,
        plugins: {
          legend: {
            display: false,
            labels:{
              font:{
                family: 'droid'
                ,size: 5
              }
            }
          },
          datalabels:{
            font:{
              family: 'droid'
            }
          },
          title: {
            display: false,
          },
          tooltip: {
            enabled: false,
            external: this.externalToolTipHandler,
          },
        },
      },
    });
  }
}

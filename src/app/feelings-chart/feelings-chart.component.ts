import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'feelings-chart',
  templateUrl: './feelings-chart.component.html',
  styleUrls: ['./feelings-chart.component.css'],
})
export class FeelingsChartComponent implements OnInit {
  chart;
  constructor() {
    Chart.register(...registerables);
    Chart.register(ChartDataLabels);
    Chart.defaults.font.size = 20
    Chart.defaults.font.family = 'droid'
  }
  ngOnDestroy() {
    Chart.unregister(ChartDataLabels);
  }
  ngOnInit(): void {
    window.history.replaceState('', '', '/');
    this.chart = new Chart('myChart', {
      type: 'bar',

      data: {
        labels: ['غضب', 'إشمئزاز', 'خوف', 'فرح', 'حزن'],
        datasets: [
          {
            label: '31 يوليو/ 1 أغسطس',
            data: [2770, 3372, 5906, 5326, 3939],
            backgroundColor: [
              '#f5b96e',
              '#ff782d',
              '#96d7fa',
              '#0f1e55',
              '#c8e6f5',
            ],
          },
        ],
      },
      options: {
        layout: {
          padding: 20,
        },

        scales: {
          y: {
            ticks: {
              display: false,
            },
            grid: {
              display: false,
              drawBorder: false,
              drawOnChartArea: false,
              drawTicks: false,
            },
          },
          x: {
            grid: {
              display: false,
              drawBorder: false,
              drawOnChartArea: false,
              drawTicks: false,
            },
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
              family: 'bebas',
            },
            color: 'white',
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
              family: 'bebas',
            },
          },
          legend: {
            display: false,
            position: 'bottom',
            labels: {
              font:{
                family: 'droid',
                size: 4
              }
            }
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

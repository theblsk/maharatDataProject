import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { Chart, registerables } from 'chart.js';

import ChartDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.css'],
})
export class DonutChartComponent implements OnInit {
  chart;

  constructor(
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {
    Chart.register(...registerables);
    Chart.register(ChartDataLabels);
    // Chart.register(this.centerDoughnutPlugin);
  }
  ngOnDestroy() {
    // Chart.unregister(this.centerDoughnutPlugin)
    Chart.unregister(ChartDataLabels);
  }

  // private thisAsThat(callBack: Function) {
  //   const self = this;
  //   return function () {
  //       return callBack.apply(self, [this].concat(Array.prototype.slice.call(arguments)));
  //   };
  // }
  test = () => {
    return 20;
  };
  getOrCreateTooltip = (chart) => {
    let toolElement = chart.canvas.parentNode.querySelector('div');
    if (!toolElement) {
      toolElement = this.renderer.createElement('div');
      toolElement.classList.toggle('toolTipDesign');
      let toolUL = this.renderer.createElement('ul');
      toolUL.classList.toggle('toolTipUl');
      toolElement.appendChild(toolUL);
      chart.canvas.parentNode.appendChild(toolElement);
    }

    return toolElement;
  };
  externalTooltipHandler = (context) => {
    const { chart, tooltip } = context;
    const toolElement = this.getOrCreateTooltip(chart);
    let toolUL = toolElement.children[0];

    if (tooltip.opacity === 0) {
      toolElement.style.opacity = 0;
    }
    if (tooltip.opacity === 1) {
      toolElement.style.opacity = 1;
    }
    if (tooltip.body) {
      const titleLines = tooltip.title || [];
      const bodyLines = tooltip.body.map((b) => b.lines);
      let tooltipLI = this.renderer.createElement('li');
      toolUL.appendChild(tooltipLI);

      titleLines.forEach((title) => {
        const toolSpan = this.renderer.createElement('span');
        tooltipLI.appendChild(toolSpan);
        const toolTipTitle = this.renderer.createText(title);
        toolSpan.appendChild(toolTipTitle);
      });
      const tooltTipBodyP = this.renderer.createElement('p');
      bodyLines.forEach((item, i) => {
        const colors = tooltip.labelColors[i];
        let strFirst = item.toString().match(/\d+/)[0] + '% ' + 'من النازحين';
        let br = this.renderer.createElement('br');
        var textLabel = this.renderer.createText(strFirst);
        tooltTipBodyP.appendChild(textLabel);
        tooltTipBodyP.appendChild(br);
        let strSecond =
          'شعروا ب' + item.toString().replace(/[0-9]/g, '').replace(':', '');
        textLabel = this.renderer.createText(strSecond);
        tooltTipBodyP.appendChild(textLabel);
        if (colors.backgroundColor !== '#c8e6f5')
          tooltTipBodyP.style.color = colors.backgroundColor;
        else{
          tooltTipBodyP.style.color = '#96d7fa';
        }
      });
      while (toolUL.firstChild) {
        toolUL.firstChild.remove();
      }
      toolUL.appendChild(tooltipLI);
      tooltipLI.appendChild(tooltTipBodyP);

      //postition the tooltip
      const { offsetLeft: positionX, offsetTop: positionY } = chart.canvas;
      toolElement.style.left = positionX + tooltip.caretX + 'px';
      toolElement.style.top = positionY + tooltip.caretY + 'px';
      toolElement.style.position = 'absolute';
    }
  };
  positionMe() {
    let chart = this.document.getElementById('donutChart');
    let title = this.document.getElementById('donutTitle');
    let titleWidth = title.offsetWidth / 2;
    let positionX = chart.clientWidth / 2;
    positionX = positionX - titleWidth;
    title.style.top = chart.clientHeight / 1.97 + 'px';
    title.style.right = positionX + 'px';
  }
  ngOnInit(): void {
    window.history.replaceState('', '', '/');
    this.positionMe();
    this.chart = new Chart('myChart', {
      type: 'doughnut',
      data: {
        labels: [
          'الثقة',
          'الخوف',
          'الفرح',
          'التوقع',
          'الاشمئزاز',
          'الحزن',
          'غضب',
          'مفاجأة',
        ],
        datasets: [
          {
            label: 'value',
            data: [22, 17, 14, 14, 23, 11, 8, 5],
            backgroundColor: [
              '#ff782d',
              '#f5b96e',
              '#c8e6f5',
              '#96d7fa',
              '#0f1e55',
            ],
            hoverOffset: 10,
            hoverBackgroundColor: [
              '#ff782d',
              '#f5b96e',
              '#c8e6f5',
              '#96d7fa',
              '#0f1e55',
            ],
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        layout: {
          padding: 40,
        },
        cutout: '75%',
        responsive: true,

        plugins: {
          title: {
            display: false,
            text: 'النسبة المئوية للعواطف',
            font: {
              family: 'droid',
              size: this.test(),
            },
            color: 'black',
            position: 'top',
          },
          datalabels: {
            align: 'center',
            anchor: 'center',
            textAlign: 'center',
            font: {
              size: this.test(),
              family: 'bebas',
            },
            color: 'white',
            formatter: function (value) {
              return value + '%';
            },
          },
          tooltip: {
            enabled: false,
            // rtl: true,
            // displayColors: false,
            // padding: 30,
            // titleFont: { size: 200 },
            // cornerRadius: 25,
            external: this.externalTooltipHandler,
          },

          legend: {
            display: false,
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

import {Component, Input} from '@angular/core';
import {ChartData, ChartOptions, ChartType} from "chart.js";
import {CurrentMeasureModel} from "../../model/current-measure.model";

@Component({
  selector: 'app-current-measures-chart',
  templateUrl: './current-measures-chart.component.html',
  styleUrls: ['./current-measures-chart.component.css']
})
export class CurrentMeasuresChartComponent {
  lineChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            const value = tooltipItem.formattedValue;
            const label = tooltipItem.label;
            const index = tooltipItem.dataIndex
            return `Czas: ${label}, Prąd: ${value} A, Wózek: ${this.carts[index]}`;
          }
        }
      },
      legend: {
        display: true
      }
    },
    scales: {
      x: {
        type: 'category',
        ticks: {
          maxTicksLimit: 10
        }
      }
    }
  };
  lineChartType: ChartType = 'line';
  measurements: number[] = [];
  labels: string[] = [];
  carts: string[] = [];
  public lineChartData: ChartData<'line'> = {
    labels: this.labels,
    datasets: [
      {
        label: 'Prąd (A)',
        data: this.measurements,
        fill: false,
        borderColor: 'blue',
        backgroundColor: 'rgba(54,162,235,0.2)',
        pointRadius: 2,
        pointHoverRadius: 4
      }
    ]
  };

  constructor() {
  }

  @Input()
  set measures(value: CurrentMeasureModel[]) {
    this.measurements = value.map(value => value.current);
    this.labels = value.map(value => this.extractHourAndMinute(value.createdAt));
    this.carts = value.map(value => value.umupNumber);
    this.lineChartData = {
      ...this.lineChartData,
      labels: [...this.labels],
      datasets: [
        {
          ...this.lineChartData.datasets[0],
          data: [...this.measurements]
        }
      ]
    };
  }

  private extractHourAndMinute(dateTimeStr: string) {
    const [, timePart] = dateTimeStr.split('T');
    return timePart.substring(0, 5);
  }
}

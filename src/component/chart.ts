import {Session} from "../model/session";
import {COLORS} from "../colors";
import {CategoryScale, Chart, ChartOptions, LinearScale, LineController, LineElement, PointElement} from "chart.js";

Chart.register(CategoryScale, LinearScale, LineController, LineElement, PointElement);

// https://www.chartjs.org/docs/master/general/performance/

const chartOptions: ChartOptions<any> = {
  type: 'line',
  data: {
    labels: [] as Array<string>,
    datasets: [
      {
        label: 'time',
        backgroundColor: COLORS[0],
        borderColor: COLORS[0],
        fill: false,
        data: [] as Array<number>,
      }]
  },
  options: {
    title: {
      text: 'Time chart'
    },
    elements: {
      point: {
        radius: 2
      },
      line: {
        borderWidth: 2
      }
    },
    scales: {
      xAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'No.'
        }
      }],
      yAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'value'
        }
      }]
    },
    animation: false,
  }
};

export function showChart(ses: Session): void {
  for (let i = 0; i < ses.phases; i++) {
    chartOptions.data.datasets.push({
      label: ses.headers[5 + i],
      backgroundColor: COLORS[1 + i],
      borderColor: COLORS[1 + i],
      fill: false,
      data: []
    });
  }

  ses.solves.forEach(s => {
    chartOptions.data.labels.push(s.no);
    chartOptions.data.datasets[0].data.push(parseFloat(s.time));
    for (let i = 0; i < ses.phases; i++) {
      chartOptions.data.datasets[i + 1].data.push(parseFloat(s.phases[i]));
    }
  });

  const canvas = document.getElementById("chart")! as HTMLCanvasElement;
  const ctx = canvas.getContext("2d")!;
  const chart = new Chart(ctx, chartOptions);
}
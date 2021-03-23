import {Session} from "../model/session";
import {COLORS} from "../colors";
import {
  CategoryScale,
  Chart,
  ChartOptions,
  Legend,
  LinearScale,
  LineController,
  LineElement,
  PointElement,
  Tooltip
} from "chart.js";

Chart.register(CategoryScale, Legend, LinearScale, LineController, LineElement, PointElement, Tooltip);

// https://www.chartjs.org/docs/master/general/performance/

const chartOptions: ChartOptions<any> = {
  type: 'line',
  data: {
    labels: [] as Array<string>,
    datasets: [
      {
        label: 'time',
        borderColor: COLORS[0].replace(")", ",0.5)"),
        backgroundColor: COLORS[0].replace(")", ",0.5)"),
        fill: false,
        data: [] as Array<number>,
        radius: 0,
      }
    ]
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

let chart: Chart;

export function reset(): void {
  // FIXME This state may break
  chartOptions.data.labels = [];
  chartOptions.data.datasets.splice(1);
  chartOptions.data.datasets[0].data = [];
}

export function showChart(ses: Session): void {
  reset();

  for (let i = 0; i < ses.phases; i++) {
    chartOptions.data.datasets.push({
      label: ses.headers[5 + i],
      borderColor: COLORS[1 + i].replace(")", ",0.5)"),
      backgroundColor: COLORS[1 + i].replace(")", ",0.5)"),
      fill: false,
      data: [],
      radius: 0,
    });
  }

  for (let i = 0; i < ses.ao.length; i++) {
    chartOptions.data.datasets.push({
      label: `Ao${ses.ao[i]}`,
      borderColor: COLORS[1 + i + ses.phases],
      backgroundColor: COLORS[1 + i + ses.phases],
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
    for (let i = 0; i < ses.ao.length; i++) {
      chartOptions.data.datasets[i + 1 + ses.phases].data.push(s.ao[ses.ao[i]]);
    }
  });

  if (!chart) {
    const canvas = document.getElementById("chart")! as HTMLCanvasElement;
    const ctx = canvas.getContext("2d")!;
    chart = new Chart(ctx, chartOptions);
  }
  chart.update();
}
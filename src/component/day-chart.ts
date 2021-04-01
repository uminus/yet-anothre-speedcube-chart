import {COLORS} from "../colors";
import {Session} from "../model/session";
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
import {BoxPlotController} from "@sgratzl/chartjs-chart-boxplot";

Chart.register(CategoryScale, Legend, LinearScale, LineController, LineElement, PointElement, Tooltip, BoxPlotController,);

const chartOptions: ChartOptions<any> = {
  type: 'boxplot',
  data: {
    labels: [],
    datasets: [{
      label: 'time',
      borderColor: COLORS[0],
      backgroundColor: COLORS[0].replace(")", ",0.5)"),
      borderWidth: 1,
      outlierColor: '#999999',
      padding: 10,
      itemRadius: 0,
      data: []
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
          labelString: 'day'
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
  chartOptions.data.datasets[0].data = [];
}

export function showChart(ses: Session): void {
  reset();

  ses.days!.forEach(s => {
    chartOptions.data.labels.push(s.date.toDateString());
    chartOptions.data.datasets[0].data.push(s.solves.map(s => parseFloat(s.time)));
  });

  if (!chart) {
    const canvas = document.getElementById("chart")! as HTMLCanvasElement;
    const ctx = canvas.getContext("2d")!;
    chart = new Chart(ctx, chartOptions);
  }
  chart.update();
}
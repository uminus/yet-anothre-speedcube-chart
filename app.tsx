import {Component, Fragment, h, JSX, render,} from "preact";
import Chart from "chart.js";

export interface Session {
  headers: Array<string>;
  solves: Array<Solve>;
  phases: number;
}

export interface Solve {
  no: string;
  time: string;
  // comment: string;
  // scramble: string;
  date: string;
  phases: Array<string>;
}

const colors = [
  "rgb(54, 162, 235)",
  "rgb(75, 192, 192)",
  "rgb(201, 203, 207)",
  "rgb(255, 159, 64)",
  "rgb(153, 102, 255)",
  "rgb(255, 99, 132)",
  "rgb(255, 205, 86)"
]

export class FileInput extends Component {
  onInput(ev: JSX.TargetedEvent<HTMLInputElement, Event>) {
    console.log(ev);
    console.log(ev.currentTarget.files);
    let files = ev.currentTarget.files;
    if (files && files.length == 0) {
      console.log('No file selected');
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      const ln = /\r?\n/
      const csv = /\s*(?:;|$)\s*/
      const raw = reader.result as string;
      const split = raw.split(ln).map(l => l.split(csv))
      if (split[0].length < 5) {
        alert("This file is not exported csv from csTimer.");
        return;
      }
      const session: Session = {
        headers: split[0],
        phases: split[0].length - 5,
        solves: split.map(l => {
          return {
            no: l[0],
            time: toSeconds(l[1]),
            // comment: l[2],
            // scramble: l[3],
            date: l[4],
            phases: l.slice(5).map(t => toSeconds(t)),
          }
        })
          .slice(1)
      };
      console.log(session);
      showChart(session);
    };
    reader.readAsText(files![0]);
  }

  render() {
    return (<Fragment>
      <label for="file">File: </label>
      <input id="file" type="file" accept="text/csv" onInput={this.onInput} />
      {/*<label for="file">Choose a file or drag it here.</label>*/}
    </Fragment>);
  }
}


render(<FileInput />, document.body);

const chartOptions = {
  type: 'line',
  data: {
    labels: [] as Array<string>,
    datasets: [
      {
        label: 'time',
        backgroundColor: colors[0],
        borderColor: colors[0],
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
  }
};

function showChart(ses: Session): void {

  for (let i = 0; i < ses.phases; i++) {
    chartOptions.data.datasets.push({
      label: ses.headers[5 + i],
      backgroundColor: colors[1 + i],
      borderColor: colors[1 + i],
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

function toSeconds(time: string): string {
  const t = time.split(":");
  if (t.length <= 1) return time;

  const seconds = t[1].split(".");
  return `${parseInt(t[0]) * 60 + parseInt(seconds[0])}.${seconds[1]}`;
}
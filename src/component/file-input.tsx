import {Component, Fragment, h, JSX, render} from "preact";
import {calcAverageOfN, calcPercentile, calcStatistics} from "../model/session";
import {showChart} from "./chart";
import {SessionStatistics} from "./statistics";
import {fromCsTimer} from "../converter/cstimer-converter";
import {SessionSelector} from "./session-selector";

export class FileInput extends Component {
  async onInput(ev: JSX.TargetedEvent<HTMLInputElement, Event>) {
    console.log(ev);
    console.log(ev.currentTarget.files);
    let files = ev.currentTarget.files;
    if (files && files.length == 0) {
      console.log('No file selected');
      return;
    }
    const sessions = await fromCsTimer(files![0]);
    sessions.forEach(s => {
      calcAverageOfN(s, 5);
      calcAverageOfN(s, 12);
      calcPercentile(s, 50);
      calcPercentile(s, 10);
    })

    const stats = calcStatistics(sessions[0]);
    render(<SessionSelector sessions={sessions} />, document.getElementById("sessions")!);
    render(<SessionStatistics stats={stats} />, document.getElementById("statistics")!);
    showChart(sessions[0]);
  }

  render() {
    return (<Fragment>
      <label for="file">File: </label>
      <input id="file" type="file" accept="text/csv,text/plain" onInput={this.onInput} />
      {/*<label for="file">Choose a file or drag it here.</label>*/}
    </Fragment>);
  }
}
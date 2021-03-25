import {Component, Fragment, h, JSX, render} from "preact";
import {calcAverageOfN, calcPercentile, calcStatistics, Session} from "../model/session";
import {showChart} from "./chart";
import {toSeconds} from "../utils";
import {SessionStatistics} from "./statistics";

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
        solves: split
          .filter(l => l.length > 4)
          .map(l => {
            return {
              no: l[0],
              time: toSeconds(l[1]),
              // comment: l[2],
              // scramble: l[3],
              date: l[4],
              phases: l.slice(5).map(t => toSeconds(t)),
              ao: [],
              percentile: []
            }
          })
          .slice(1),
        ao: [],
        percentile: []
      };
      calcAverageOfN(session, 5);
      calcAverageOfN(session, 12);

      calcPercentile(session, 50);
      calcPercentile(session, 10);

      const stats = calcStatistics(session);

      render(<SessionStatistics stats={stats} />, document.getElementById("statistics")!);

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
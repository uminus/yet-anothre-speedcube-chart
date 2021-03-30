import {Component, h, JSX, render} from "preact";
import {calcStatistics, Session} from "../model/session";
import {SessionStatistics} from "./statistics";
import {showChart} from "./chart";

export class SessionSelector extends Component<SessionSelectorProps, State> {
  constructor(props: SessionSelectorProps) {
    super(props)
    this.state = {
      selected: ""
    }
  }

  onChange = (ev: JSX.TargetedEvent<HTMLSelectElement, Event>) => {
    const sessionName = ev.currentTarget.value;
    console.log(`selected: ${sessionName}`);
    this.setState({selected: sessionName});

    const session = this.props.sessions.filter(s => s.name === sessionName)[0];
    const stats = calcStatistics(session);
    render(<SessionStatistics stats={stats} />, document.getElementById("statistics")!);
    showChart(session);
  }

  render({sessions}: SessionSelectorProps, {selected}: State) {
    return (<select value={selected || sessions[0].name} onChange={this.onChange}>
      {sessions.map(s => <option key={s.name} value={s.name}>{s.name}</option>)}
    </select>);
  }
}

interface State {
  selected: string;
}

export interface SessionSelectorProps {
  sessions: Array<Session>;
}
import {Component, h} from "preact";
import {Statistics} from "../model/session";

export class SessionStatistics extends Component<SessionProps, unknown> {
  render({stats}: SessionProps) {
    return (<table>
      <thead>
      <tr>
        <th scope="col">name</th>
        <th scope="col">avg.</th>
        <th scope="col">deviation</th>
        <th scope="col">min</th>
        <th scope="col">max</th>
      </tr>
      </thead>
      <tbody>
      {
        stats.map(s => {
          return <tr>
            <td scope="row">{s.name}</td>
            <td>{s.avg.toFixed(3)}</td>
            <td><span className="pm">+/-</span> {s.deviation.toFixed(3)}</td>
            <td>{s.min.toFixed(3)}</td>
            <td>{s.max.toFixed(3)}</td>
          </tr>
        })
      }
      </tbody>
    </table>);
  }
}

export interface SessionProps {
  stats: Array<Statistics>;
}
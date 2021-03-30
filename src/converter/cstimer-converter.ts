import {Session} from "../model/session";
import {toSeconds} from "../utils";


export async function fromCsTimer(file: File): Promise<Array<Session>> {
  if (file.type === "text/plane" || file.name.endsWith(".txt")) {
    return fromCsTimerExportText(file);
  }
  if (file.type === "text/csv" || file.name.endsWith(".csv")) {
    return fromCsTimerSessionCSV(file);
  }
  throw new Error(`This file format is not supported. file: ${file.name}`);
}

export async function fromCsTimerSessionCSV(file: File): Promise<Array<Session>> {
  const ln = /\r?\n/
  const csv = /\s*(?:;|$)\s*/
  const raw = await file.text();
  const split = raw.split(ln).map(l => l.split(csv))
  if (split[0].length < 5) {
    alert("This file is not exported csv from csTimer.");
    throw new Error("This file is not exported csv from csTimer.");
  }
  const session: Session = {
    name: file.name,
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
  return [session];
}

export async function fromCsTimerExportText(file: File): Promise<Array<Session>> {
  const data = JSON.parse(await file.text()) as CsTimerExportType;
  const sessionData = JSON.parse(data.properties.sessionData) as Record<string, { name: string, opt: { phases: number } }>;

  return [...Array(data.properties.session)]
    .map((_, i) => {
      const num = (i + 1).toString();
      const session: Session = {
        name: sessionData[num].name,
        headers: ["No.", "Time", "Comment", "Scramble", "Date", ...[...Array(sessionData[num].opt.phases)].map((_, i) => `P.${i + 1}`)],
        phases: sessionData[num].opt.phases || 0,
        solves: data[`session${num}`]
          .map((v, i) => {
            return {
              no: i.toString(),
              time: toSeconds(v[0][1]),
              // comment: v[2],
              // scramble: v[1],
              date: new Date(v[3]).toString(),
              phases: arrayToPhases(v[0]),
              ao: [],
              percentile: []
            }
          }),
        ao: [],
        percentile: []
      };
      return session;
    });
}

function arrayToPhases(array: Array<number>): Array<string> {
  const phases = array.slice();
  phases.reverse();
  phases.pop();
  return phases.reduce((acc, val, i) => {
    if (i === 0) {
      acc.push(val);
    } else {
      acc.push(phases[i] - phases[i - 1]);
    }
    return acc;
  }, [] as Array<number>)
    .map(toSeconds);
}

type CsTimerExportType = {
  properties: {
    session: number;
    sessionData: string;
  },
} & Record<string, Array<[Array<number>, string, string, number]>>;

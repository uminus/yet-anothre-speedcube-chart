import {Solve} from "./solve";

export interface Session {
  headers: Array<string>;
  solves: Array<Solve>;
  phases: number;
  ao: Array<number>;
  percentile: Array<number>;
}

export function calcAverageOfN(ses: Session, n: number): Session {
  const num = Math.abs(n);
  const ignoreSize = Math.ceil(num * 0.1);

  const array: Array<string> = [];

  for (const s of ses.solves) {
    array.push(s.time);
    if (array.length >= n) {
      s.ao[n] = average(array.slice()
        .sort()
        .slice(ignoreSize, num - ignoreSize)
        .map(v => parseFloat(v)));
      array.shift();
    }
  }
  ses.ao.push(n);
  return ses;
}

function average(arr: Array<number>): number {
  return arr.reduce((acc, v) => acc + v, 0) / arr.length;
}

export function calcPercentile(ses: Session, n: number): Session {
  const num = Math.abs(n);
  const percent = n * 0.01;
  const array: Array<string> = [];

  for (const s of ses.solves) {
    array.push(s.time);
    array.sort();
    s.percentile[n] = array[Math.ceil(array.length * percent) - 1];
  }
  ses.percentile.push(n);
  return ses;
}
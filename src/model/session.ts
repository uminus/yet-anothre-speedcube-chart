import {Solve} from "./solve";

export interface Session {
  name: string;
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

export function calcStatistics(ses: Session): Array<Statistics> {
  const stats: Array<Statistics> = [];
  const stat = _statistics("session", ses.solves.map(s => parseFloat(s.time)));
  stats.push(stat);
  console.log(`${stat.name}: ${stat.avg.toFixed(3)}(+/-${stat.deviation.toFixed(3)}} min/max: ${stat.min}/${stat.max}`);
  for (let i = 0; i < ses.phases; i++) {
    const array = ses.solves.map(s => parseFloat(s.phases[i]));
    const stat = _statistics(`phase${i + 1}`, array);
    console.log(`${stat.name}: ${stat.avg.toFixed(3)}(+/-${stat.deviation.toFixed(3)}} min/max: ${stat.min}/${stat.max}`);
    stats.push(stat);
  }

  return stats;
}

function _statistics(name: string, array: Array<number>): Statistics {
  const normalized = array.filter(v => !isNaN(v));
  const avg = average(normalized);
  const deviation = Math.sqrt(normalized.reduce((acc, t) => acc + Math.pow(avg - t, 2), 0) / normalized.length);
  const min = Math.min(...normalized);
  const max = Math.max(...normalized);
  return {
    name,
    avg,
    deviation,
    min,
    max
  }
}

export interface Statistics {
  name: string;
  min: number;
  max: number;
  avg: number;
  deviation: number;
}
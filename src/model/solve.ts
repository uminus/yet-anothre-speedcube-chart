export interface Solve {
  no: string;
  time: string;
  // comment: string;
  // scramble: string;
  date: string;
  phases: Array<string>;
  ao: Record<number, number>;
  percentile: Record<number, string>;
}
import {Solve} from "./solve";

export interface Session {
  headers: Array<string>;
  solves: Array<Solve>;
  phases: number;
}
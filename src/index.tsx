import {h, render,} from "preact";
import {FileInput} from "./component/file-input";
import {loadGoogleCharts} from "./google-charts-loader";

render(<FileInput />, document.body);

// declare var google: any;
loadGoogleCharts(() => {
  google.charts.load('current', {'packages':['corechart']});
}, () => {
  throw new Error("Failed to load google charts");
});

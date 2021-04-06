import {Session} from "../model/session";


export function showChart(ses: Session): void {
  const data = new google.visualization.DataTable();
  // column
  data.addColumn("string", "No.");
  data.addColumn("number", "Time");
  array(ses.phases).forEach((_, i) => data.addColumn("number", `P.${i + 1}`));
  array(ses.ao.length).forEach((_, i) => {
    data.addColumn("number", `Ao${ses.ao[i]}`)
  });
  array(ses.percentile.length).map((_, i) => {
    data.addColumn("number", `${ses.percentile[i]}%`)
  });

  // rows
  data.addRows(ses.solves.map(s => {
    return [
      s.no,
      parseFloat(s.time),
      ...array(ses.phases).map((_, i) => parseFloat(s.phases[i])),
      ...ses.ao.map((k: any, i) => s.ao[k]),
      ...ses.percentile.map((k: any, i) => parseFloat(s.percentile[k]))
    ];
  }));

  const view = new google.visualization.DataView(data);

  const options = {
    title: 'Solves',
    vAxis: {title: 'Time'},
    hAxis: {title: 'No.'},
    seriesType: 'lines',
    interpolateNulls: true,
    chartArea: {'height': '80%'},
  };

  const chart = new google.visualization.ComboChart(document.getElementById('chart')!);
  google.visualization.events.addListener(chart, 'select', () => {
    const selection = chart.getSelection();
    if (!selection[0].row) {
      console.log(selection[0]);
      view.hideColumns([(view as any).columns[selection[0].column!]]);
      chart.draw(view, options);
    }
  });
  chart.draw(view, options);
}

function array<T>(length: number): Array<T> {
  return [...Array(length)];
}
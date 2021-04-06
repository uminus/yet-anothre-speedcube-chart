const GOOGLE_CHATS_URL = "https://www.gstatic.com/charts/loader.js?chof=validate";


export function loadGoogleCharts(onload: () => void, onerror: () => void) {
  if (document.querySelector(`script[src*="gstatic.com/charts/"]`)) {
    onload();
    return;
  }

  const charts = document.createElement("script");
  charts.type = "text/javascript";
  charts.src = GOOGLE_CHATS_URL;

  charts.onload = _ => {
    onload();
  };
  charts.onerror = _ => onerror();
  document.body.append(charts);
}



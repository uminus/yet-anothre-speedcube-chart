export function toSeconds(time: string | number): string {
  if (typeof time === "string") {
    const t = time.split(":");
    if (t.length <= 1) return time;

    const seconds = t[1].split(".");
    return `${parseInt(t[0]) * 60 + parseInt(seconds[0])}.${seconds[1]}`;
  }

  return (time / 1000).toString();
}
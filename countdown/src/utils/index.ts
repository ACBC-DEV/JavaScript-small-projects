export function formatTime(numberString: string) {
  const fullNumber = numberString.padStart(6, "0");

  const hours = fullNumber.slice(0, 2);
  const minutes = fullNumber.slice(2, 4);
  const seconds = fullNumber.slice(4, 6);

  return { hours, minutes, seconds };
}
export function timeFormat(count: string | number) {
  if (typeof count === "number") {
    count = secondsToTime(count);
  }
  const { hours, minutes, seconds } = formatTime(count);

  const formatted = `${hours}:${minutes}:${seconds}`;

  return formatted;
}
export function timeToSeconds(count: string) {
  const { hours, minutes, seconds } = formatTime(count);
  const totalSeconds =
    Number(hours) * 3600 + Number(minutes) * 60 + Number(seconds);

  return totalSeconds;
}
export function secondsToTime(seconds: number) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secondsLeft = (seconds % 3600) % 60;

  const formattedHours = hours.toString().padStart(2, "0");
  const formattedMinutes = minutes.toString().padStart(2, "0");
  const formattedSeconds = secondsLeft.toString().padStart(2, "0");

  return `${formattedHours}${formattedMinutes}${formattedSeconds}`;
}

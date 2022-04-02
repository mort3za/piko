export const getRelativeTime = (dateStr: string): string => {
  const unix = new Date(dateStr).getTime();

  type Periods = [string, number][];
  const second = 1000;
  const minute = 60 * second;
  const hour = 60 * minute;
  const day = 24 * hour;
  const week = 7 * day;
  const month = 30 * day;
  const year = 365 * day;

  const now = new Date().getTime();
  let diff = now - unix;

  if (diff > year) {
    return formatDateTime(dateStr);
  }

  const periods = [
    ["minute", minute],
    ["hour", hour],
    ["day", day],
    ["week", week],
    ["month", month],
    ["year", year],
  ] as Periods;

  let output_period: [Intl.RelativeTimeFormatUnit, number] = ["second", 1];

  for (const [unit, period] of periods) {
    if (diff < period) {
      break;
    }
    output_period = [unit, period] as [Intl.RelativeTimeFormatUnit, number];
  }
  diff = Math.round(diff / output_period[1]);

  const rtf = new Intl.RelativeTimeFormat("en", { style: "narrow", numeric: "auto" });
  return rtf.format(-diff, output_period[0]);
};

export const formatDateTime = (date: string): string => {
  const dateStr = new Date(date);
  return new Intl.DateTimeFormat("en-GB", { dateStyle: "medium", timeStyle: "medium" }).format(dateStr);
};

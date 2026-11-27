import { useEffect, useState } from "react";

const formatDate = (date: Date): string =>
  new Intl.DateTimeFormat("uk-UA", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(date);

const getMsUntilMidnight = (): number => {
  const now = new Date();
  const nextMidnight = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() + 1,
    0,
    0,
    1,
    0,
  );
  return nextMidnight.getTime() - now.getTime();
};

export const CurrentDate = () => {
  const [today, setToday] = useState<string>(() => formatDate(new Date()));

  useEffect(() => {
    const timerId = setTimeout(() => {
      setToday(formatDate(new Date()));
    }, getMsUntilMidnight());

    return () => clearTimeout(timerId);
  }, [today]);

  return <span className="text-xs text-slate-400 text-right">{today}</span>;
};

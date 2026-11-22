// Temperature
interface TemperatureProps {
  temperature: number | null;
}

export const Temperature = ({ temperature }: TemperatureProps) => {
  const getValue = (temperature: number | null) => {
    if (temperature === null) {
      return temperature;
    } else if (temperature < 18) {
      return (
        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-sky-400/12 text-sky-200 border border-sky-400/25">
          Прохолодно
        </span>
      );
    } else if (temperature >= 18 && temperature <= 24) {
      return (
        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-amber-400/12 text-amber-200 border border-amber-400/25">
          Комфортно
        </span>
      );
    } else {
      return (
        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-rose-400/12 text-rose-200 border border-rose-400/25">
          Спекотно
        </span>
      );
    }
  };
  return (
    <article className="rounded-2xl bg-surface-card border border-border-subtle p-4 relative overflow-hidden transition-opacity duration-200 shadow-sm mb-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-7 h-7 rounded-lg bg-amber-400/12 border border-amber-400/25 flex items-center justify-center text-amber-300 shrink-0">
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z" />
            </svg>
          </span>
          <span className="inline-flex items-center text-xs leading-none font-semibold tracking-wider uppercase text-slate-300">
            Температура
          </span>
        </div>
        {temperature === null ? null : getValue(temperature)}
      </div>

      <div className="my-4 flex items-baseline justify-center">
        <span className="text-[46px] leading-none font-bold tracking-tight text-slate-100 tabular-nums">
          {temperature === null ? "--" : temperature}
        </span>
        <span className="text-xl font-medium text-amber-300 ml-1.5">°C</span>
      </div>

      <div className="flex items-center justify-between text-xs text-slate-400 pt-2.5 border-t border-border-subtle/80">
        <span>Норма: 18..26 °C</span>
      </div>
    </article>
  );
};

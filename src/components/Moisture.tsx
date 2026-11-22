// Moisture
interface MoistureProps {
  moisture: null | number;
}
export const Moisture = ({ moisture }: MoistureProps) => {
  const getValue = (moisture: null | number) => {
    if (moisture === null) {
      return moisture;
    } else if (moisture < 35) {
      return (
        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-amber-400/12 text-amber-200 border border-amber-400/25 shrink-0">
          Сухо
        </span>
      );
    } else if (moisture <= 60) {
      return (
        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-indigo-400/12 text-indigo-200 border border-indigo-400/25 shrink-0">
          Волого
        </span>
      );
    } else if (moisture > 60) {
      return (
        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-indigo-400/12 text-indigo-200 border border-indigo-400/25 shrink-0">
          Підвищена вологість
        </span>
      );
    }
  };
  return (
    <article className="rounded-2xl bg-surface-card border border-border-subtle p-4 relative overflow-hidden transition-opacity duration-200 shadow-sm">
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="w-7 h-7 rounded-lg bg-blue-400/12 border border-blue-400/25 flex items-center justify-center text-blue-300 shrink-0">
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" />
            </svg>
          </span>
          <span className="text-xs leading-none font-semibold tracking-wider uppercase text-slate-300">
            Вологість
          </span>
        </div>

        {moisture === null ? null : getValue(moisture)}
      </div>

      <div className="my-4 flex items-baseline justify-center">
        <span className="text-[46px] leading-none font-bold tracking-tight text-slate-100 tabular-nums">
          {moisture === null ? "--" : moisture}
        </span>

        <span className="text-xl font-medium text-blue-300 ml-1.5">%</span>
      </div>

      <div className="flex items-center justify-between text-xs text-slate-400 pt-2.5 border-t border-border-subtle/80">
        <span>Норма: 45..65 %</span>
      </div>
    </article>
  );
};

// Moisture
export const Moisture = () => {
  return (
    <article className="rounded-2xl bg-surface-card border border-border-subtle p-4 relative overflow-hidden transition-opacity duration-200 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-7 h-7 rounded-lg bg-blue-400/12 border border-blue-400/25 flex items-center justify-center text-blue-300">
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" />
            </svg>
          </span>
          <span className="text-xs font-semibold tracking-wider uppercase text-slate-300">
            Вологість
          </span>
        </div>

        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-blue-400/12 text-blue-200 border border-blue-400/25">
          Оптимально
        </span>
      </div>

      <div className="my-4 flex items-baseline justify-center">
        <span className="text-[46px] leading-none font-bold tracking-tight text-slate-100 tabular-nums">
          55.8
        </span>
        <span className="text-xl font-medium text-blue-300 ml-1.5">%</span>
      </div>

      <div className="flex items-center justify-between text-xs text-slate-400 pt-2.5 border-t border-border-subtle/80">
        <span>Норма: 45..65 %</span>
      </div>
    </article>
  );
};

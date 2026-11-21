//
export const Header = () => {
  return (
    <header className="flex items-start justify-between gap-3 mb-5">
      <div>
        <div className="flex items-center gap-2">
          <h1 className="text-lg font-semibold tracking-tight text-slate-100">
            ESP32 Sensor
          </h1>
          <span className="text-[10px] font-mono uppercase tracking-wider px-1.5 py-0.5 rounded bg-surface-card text-slate-300 border border-border-subtle">
            v1.0
          </span>
        </div>
        <p className="text-xs text-slate-400 font-mono mt-1">
          192.168.1.120 · <span id="lastUpdated">2 с тому</span>
        </p>
      </div>

      <button
        type="button"
        title="Натисни, щоб перемкнути стан з'єднання"
        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-emerald-400/12 text-emerald-300 border border-emerald-400/25 transition-all active:scale-95 cursor-pointer shrink-0"
      >
        <span className="w-2 h-2 rounded-full bg-emerald-400 live-dot"></span>
        <span>Підключено</span>
      </button>
    </header>
  );
};

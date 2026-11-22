// Header
import { useEffect, useState } from "react";

interface HeaderProps {
  isConnected: boolean;
  deviceIp: string;
  lastUpdatedAt: number;
}

const formatElapsed = (seconds: number): string => {
  if (seconds < 60) {
    return `${seconds} с тому`;
  }

  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) {
    return `${minutes} хв тому`;
  }

  const hours = Math.floor(minutes / 60);
  return `${hours} год тому`;
};

export const Header = ({
  isConnected,
  deviceIp,
  lastUpdatedAt,
}: HeaderProps) => {
  const [now, setNow] = useState<number>(() => Date.now());

  useEffect(() => {
    setNow(Date.now());

    if (!isConnected) return;

    const id = setInterval(() => {
      setNow(Date.now());
    }, 1000);

    return () => clearInterval(id);
  }, [isConnected]);

  const elapsedSeconds = Math.max(0, Math.floor((now - lastUpdatedAt) / 1000));

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
          {deviceIp} · <span>{formatElapsed(elapsedSeconds)}</span>
        </p>
      </div>

      <button
        type="button"
        title="Натисни, щоб перемкнути стан з'єднання"
        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full transition-all active:scale-95 cursor-pointer shrink-0 border border-emerald-400/25"
      >
        {isConnected ? (
          <>
            <span className="w-2 h-2 rounded-full bg-emerald-400 live-dot"></span>
            <span className="text-xs font-medium text-emerald-300">
              Підключено
            </span>
          </>
        ) : (
          <>
            <span className="w-2 h-2 rounded-full bg-orange-500 live-dot"></span>
            <span className="text-xs font-medium text-orange-500">
              Відключено
            </span>
          </>
        )}
      </button>
    </header>
  );
};

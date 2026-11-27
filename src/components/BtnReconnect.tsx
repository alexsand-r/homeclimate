// BtnReconnect
interface BtnReconnectProps {
  handleConnect: () => void;
}

export const BtnReconnect = ({ handleConnect }: BtnReconnectProps) => {
  return (
    <button
      onClick={handleConnect}
      type="button"
      className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-surface-card hover:bg-surface-hover active:scale-[0.98] border border-border-subtle text-sm font-medium text-slate-200 transition-all cursor-pointer shadow-sm w-full"
    >
      <svg
        className="w-4 h-4 text-slate-400"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m17 2 4 4-4 4" />
        <path d="M3 11v-1a4 4 0 0 1 4-4h14" />
        <path d="m7 22-4-4 4-4" />
        <path d="M21 13v1a4 4 0 0 1-4 4H3" />
      </svg>
      <span>Перепідкл.</span>
    </button>
  );
};

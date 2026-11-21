// BtnUpdate

export const BtnUpdate = () => {
  return (
    <button
      id="updateBtn"
      type="button"
      className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-surface-card hover:bg-surface-hover active:scale-[0.98] border border-border-subtle text-sm font-medium text-slate-200 transition-all cursor-pointer shadow-sm w-full"
    >
      <svg
        className="w-4 h-4 text-slate-400"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
        <path d="M3 3v5h5" />
        <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
        <path d="M16 16h5v5" />
      </svg>
      <span>Оновити</span>
    </button>
  );
};

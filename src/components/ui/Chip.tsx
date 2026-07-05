export function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-border px-3.5 py-1.5 text-xs font-mono text-text-muted">
      {children}
    </span>
  );
}

import { cn } from "@/lib/utils";

interface StatusPillProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
}

export function StatusPill({ label, className, ...props }: StatusPillProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center justify-center gap-2.5 px-4 py-1.5 rounded-full border",
        className
      )}
      style={{ borderColor: 'var(--accent)', color: 'var(--accent)' }}
      {...props}
    >
      <div className="relative flex h-2 w-2 shrink-0">
        <span
          className="animate-ping absolute left-0 top-0 h-full w-full rounded-full opacity-40"
          style={{ backgroundColor: 'var(--accent)' }}
        />
        <span
          className="relative inline-flex rounded-full h-2 w-2"
          style={{ backgroundColor: 'var(--accent)' }}
        />
      </div>
      <span className="font-bold tracking-widest uppercase font-sans mt-0.5" style={{ fontSize: '0.7rem' }}>
        {label}
      </span>
    </div>
  );
}

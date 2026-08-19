"use client";

type SegmentedProps<T extends string> = {
  value: T;
  onChange: (value: T) => void;
  options: readonly { value: T; label: string }[];
  ariaLabel: string;
};

export default function Segmented<T extends string>({
  value,
  onChange,
  options,
  ariaLabel,
}: SegmentedProps<T>) {
  return (
    <div
      role="group"
      aria-label={ariaLabel}
      className="flex w-40 overflow-hidden rounded border border-foreground/20"
    >
      {options.map((opt, i) => (
        <button
          key={opt.value}
          type="button"
          onClick={() => onChange(opt.value)}
          aria-pressed={value === opt.value}
          className={`flex-1 px-2 py-1 text-xs ${
            i > 0 ? "border-l border-foreground/20" : ""
          } ${
            value === opt.value
              ? "bg-foreground text-background"
              : "text-foreground hover:bg-foreground/10"
          }`}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}
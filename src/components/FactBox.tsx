interface FactBoxProps {
  value: { _key: string; number: string; label: string };
  selected: boolean;
  onSelect: (key: string) => void;
}

export function FactBox({ value, selected, onSelect }: FactBoxProps) {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onSelect(value._key);
    }
  };

  const handleMouseUp = () => {
    const selection = window.getSelection();
    if (selection && selection.toString().length > 0) return;
    onSelect(value._key);
  };

  return (
    <div
      className={`fb${selected ? " sel" : ""}`}
      data-key={value._key}
      onMouseUp={handleMouseUp}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-pressed={selected}
      aria-label={`${value.number} — ${value.label}`}
    >
      <div className="fb-num">{value.number}</div>
      <div className="fb-label">{value.label}</div>
      <div className="fb-meta">{"{ _type: 'factBox' }"}</div>
    </div>
  );
}

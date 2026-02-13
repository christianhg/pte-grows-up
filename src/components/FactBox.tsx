interface FactBoxProps {
  value: { _key: string; number: string; label: string };
  selected: boolean;
  onSelect: (key: string) => void;
}

export function FactBox({ value, selected, onSelect }: FactBoxProps) {
  return (
    <div
      className={`fb${selected ? " sel" : ""}`}
      data-key={value._key}
      onClick={() => onSelect(value._key)}
    >
      <div className="fb-num">{value.number}</div>
      <div className="fb-label">{value.label}</div>
      <div className="fb-meta">{"{ _type: 'factBox' }"}</div>
    </div>
  );
}

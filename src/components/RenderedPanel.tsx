import { useRef, useEffect, useMemo } from "react";
import { PortableText } from "@portabletext/react";
import type { PortableTextComponents } from "@portabletext/react";
import type { PTBlock } from "../data";
import { FactBox } from "./FactBox";

interface RenderedPanelProps {
  blocks: PTBlock[];
  selectedKey: string | null;
  onSelect: (key: string) => void;
  hidden: boolean;
}

export function RenderedPanel({
  blocks,
  selectedKey,
  onSelect,
  hidden,
}: RenderedPanelProps) {
  const panelRef = useRef<HTMLDivElement>(null);

  // Scroll to selected block on hash change
  useEffect(() => {
    if (!selectedKey || hidden) return;
    const el = panelRef.current?.querySelector(
      `.ptb[data-key="${selectedKey}"], .fb[data-key="${selectedKey}"]`
    );
    if (!el) return;
    const panel = panelRef.current!;
    const panelRect = panel.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();
    const target =
      panel.scrollTop +
      (elRect.top - panelRect.top) -
      panelRect.height / 2 +
      elRect.height / 2;
    panel.scrollTo({ top: Math.max(0, target), behavior: "smooth" });
  }, [selectedKey, hidden]);

  const components: PortableTextComponents = useMemo(
    () => ({
      types: {
        factBox: ({ value }) => (
          <FactBox
            value={value}
            selected={selectedKey === value._key}
            onSelect={onSelect}
          />
        ),
      },
      block: {
        h1: ({ children, value }) => (
          <h1
            className={`ptb${selectedKey === value._key ? " sel" : ""}`}
            data-key={value._key}
            onClick={() => onSelect(value._key)}
          >
            {children}
          </h1>
        ),
        h2: ({ children, value }) => (
          <h2
            className={`ptb${selectedKey === value._key ? " sel" : ""}`}
            data-key={value._key}
            onClick={() => onSelect(value._key)}
          >
            {children}
          </h2>
        ),
        normal: ({ children, value }) => (
          <p
            className={`ptb${selectedKey === value._key ? " sel" : ""}`}
            data-key={value._key}
            onClick={() => onSelect(value._key)}
          >
            {children}
          </p>
        ),
      },
      marks: {
        strong: ({ children }) => <strong>{children}</strong>,
        em: ({ children }) => <em>{children}</em>,
        code: ({ children }) => <code>{children}</code>,
        highlight: ({ children }) => <mark className="hl">{children}</mark>,
        link: ({ children, value }) => (
          <a
            href={value?.href}
            className="lnk"
            target="_blank"
            rel="noopener"
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </a>
        ),
      },
    }),
    [selectedKey, onSelect]
  );

  return (
    <div
      ref={panelRef}
      className={`panel rp${hidden ? " hidden" : ""}`}
      id="rp"
    >
      <div className="plabel">rendered</div>
      <div className="rc">
        <PortableText value={blocks} components={components} />
      </div>
    </div>
  );
}

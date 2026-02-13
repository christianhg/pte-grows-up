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

  // Scroll to selected block when selection changes
  // Use offsetParent to check actual visibility (null when display:none on mobile)
  useEffect(() => {
    if (!selectedKey) return;
    const panel = panelRef.current;
    if (!panel || !panel.offsetParent) return;
    const el = panel.querySelector(
      `.ptb[data-key="${selectedKey}"], .fb[data-key="${selectedKey}"]`
    );
    if (!el) return;
    const panelRect = panel.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();
    const target =
      panel.scrollTop +
      (elRect.top - panelRect.top) -
      panelRect.height / 2 +
      elRect.height / 2;
    panel.scrollTo({ top: Math.max(0, target), behavior: "smooth" });
  }, [selectedKey]);

  const components: PortableTextComponents = useMemo(
    () => {
      // Helper: block _key is optional in PT types but always present in our data
      const isSel = (key: string | undefined) =>
        !!(selectedKey && key === selectedKey);
      const sel = (key: string | undefined) =>
        isSel(key) ? " sel" : "";
      const click = (key: string | undefined) => () => {
        if (key) onSelect(key);
      };

      return {
      types: {
        factBox: ({ value }) => (
          <FactBox
            value={value}
            selected={selectedKey === value._key}
            onSelect={onSelect}
          />
        ),
      },
      list: {
        bullet: ({ children }) => <ul className="pt-list">{children}</ul>,
      },
      listItem: {
        bullet: ({ children, value }) => (
          <li
            className={`ptb${sel(value._key)}`}
            data-key={value._key}
            onClick={click(value._key)}
            aria-current={isSel(value._key) || undefined}
          >
            {children}
          </li>
        ),
      },
      block: {
        h1: ({ children, value }) => (
          <h1
            className={`ptb${sel(value._key)}`}
            data-key={value._key}
            onClick={click(value._key)}
            aria-current={isSel(value._key) || undefined}
          >
            {children}
          </h1>
        ),
        h2: ({ children, value }) => (
          <h2
            className={`ptb${sel(value._key)}`}
            data-key={value._key}
            onClick={click(value._key)}
            aria-current={isSel(value._key) || undefined}
          >
            {children}
          </h2>
        ),
        normal: ({ children, value }) => (
          <p
            className={`ptb${sel(value._key)}`}
            data-key={value._key}
            onClick={click(value._key)}
            aria-current={isSel(value._key) || undefined}
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
    };
    },
    [selectedKey, onSelect]
  );

  return (
    <div
      ref={panelRef}
      className={`panel rp${hidden ? " hidden" : ""}`}
      id="rp"
      role="region"
      aria-label="Rendered article"
    >
      <div className="plabel">rendered</div>
      <div className="rc">
        <PortableText value={blocks} components={components} />
      </div>
    </div>
  );
}

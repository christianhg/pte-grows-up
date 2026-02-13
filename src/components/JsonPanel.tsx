import { useRef, useEffect } from "react";
import type { PTBlock } from "../data";

function esc(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function hj(obj: unknown, ind: number): string {
  const p1 = "  ".repeat(ind + 1);
  const p = "  ".repeat(ind);

  if (obj === null) return `<span class="jb">null</span>`;
  if (typeof obj === "boolean") return `<span class="jb">${obj}</span>`;
  if (typeof obj === "number") return `<span class="jn">${obj}</span>`;
  if (typeof obj === "string") {
    const e = esc(obj).replace(/"/g, "&quot;");
    return `<span class="js">"${e}"</span>`;
  }
  if (Array.isArray(obj)) {
    if (!obj.length) return `<span class="jbr">[]</span>`;
    if (
      obj.length <= 4 &&
      obj.every((v) => typeof v === "string" || typeof v === "number")
    ) {
      const items = obj
        .map((v) => hj(v, ind))
        .join(`<span class="jbr">, </span>`);
      return `<span class="jbr">[</span>${items}<span class="jbr">]</span>`;
    }
    const items = obj.map((v) => `${p1}${hj(v, ind + 1)}`).join(",\n");
    return `<span class="jbr">[</span>\n${items}\n${p}<span class="jbr">]</span>`;
  }
  if (typeof obj === "object") {
    const keys = Object.keys(obj as Record<string, unknown>);
    if (!keys.length) return `<span class="jbr">{}</span>`;
    const entries = keys
      .map((k) => {
        const v = hj((obj as Record<string, unknown>)[k], ind + 1);
        let kc = "jk";
        if (k === "_type") kc = "jt";
        else if (k === "marks" || k === "markDefs") kc = "jm";
        return `${p1}<span class="${kc}">"${esc(k)}"</span><span class="jbr">: </span>${v}`;
      })
      .join(",\n");
    return `<span class="jbr">{</span>\n${entries}\n${p}<span class="jbr">}</span>`;
  }
  return String(obj);
}

interface JsonPanelProps {
  blocks: PTBlock[];
  selectedKey: string | null;
  onSelect: (key: string) => void;
  hidden: boolean;
}

export function JsonPanel({
  blocks,
  selectedKey,
  onSelect,
  hidden,
}: JsonPanelProps) {
  const panelRef = useRef<HTMLDivElement>(null);

  // Scroll to selected block on hash change
  useEffect(() => {
    if (!selectedKey || hidden) return;
    const el = panelRef.current?.querySelector(
      `.jblk[data-key="${selectedKey}"]`
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

  const jsonBlocks = blocks.map((b, i) => {
    const json = hj(b, 1);
    const cl = `jblk${selectedKey === b._key ? " sel" : ""}`;
    return `<div class="${cl}" data-key="${b._key}">${json}${i < blocks.length - 1 ? "," : ""}</div>`;
  });

  const html = `<span class="jbr">[</span>\n${jsonBlocks.join("\n")}\n<span class="jbr">]</span>`;

  // Wire click handlers after render
  useEffect(() => {
    const panel = panelRef.current;
    if (!panel) return;
    const handler = (e: MouseEvent) => {
      const blk = (e.target as HTMLElement).closest(".jblk");
      if (blk) onSelect((blk as HTMLElement).dataset.key!);
    };
    panel.addEventListener("click", handler);
    return () => panel.removeEventListener("click", handler);
  }, [onSelect]);

  return (
    <div
      ref={panelRef}
      className={`panel jp${hidden ? " hidden" : ""}`}
      id="jp"
    >
      <div className="plabel">source</div>
      <div className="jc" dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}

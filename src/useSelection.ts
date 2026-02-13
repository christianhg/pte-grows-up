import { useState, useEffect, useCallback } from "react";
import { blockKeys } from "./data";

function getKeyFromHash(): string | null {
  const h = location.hash.slice(1);
  return h && blockKeys.includes(h) ? h : null;
}

function setHash(key: string | null) {
  if (key) {
    history.replaceState(null, "", "#" + key);
  } else {
    history.replaceState(null, "", location.pathname + location.search);
  }
  // Dispatch manually since replaceState doesn't fire hashchange
  window.dispatchEvent(new HashChangeEvent("hashchange"));
}

export function useSelection() {
  const [selectedKey, setSelectedKey] = useState<string | null>(getKeyFromHash);

  useEffect(() => {
    const onHash = () => setSelectedKey(getKeyFromHash());
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const select = useCallback(
    (key: string) => {
      setHash(selectedKey === key ? null : key);
    },
    [selectedKey]
  );

  const selectNext = useCallback(() => {
    const idx = selectedKey ? blockKeys.indexOf(selectedKey) : -1;
    const next = idx < blockKeys.length - 1 ? idx + 1 : 0;
    setHash(blockKeys[next]);
  }, [selectedKey]);

  const selectPrev = useCallback(() => {
    const idx = selectedKey ? blockKeys.indexOf(selectedKey) : -1;
    const next = idx > 0 ? idx - 1 : blockKeys.length - 1;
    setHash(blockKeys[next]);
  }, [selectedKey]);

  const deselect = useCallback(() => {
    setHash(null);
  }, []);

  // Keyboard nav
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        deselect();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        selectNext();
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        selectPrev();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [deselect, selectNext, selectPrev]);

  return { selectedKey, select };
}

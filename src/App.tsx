import { useState } from "react";
import { PT, blockText } from "./data";
import { useSelection } from "./useSelection";
import { useTheme } from "./useTheme";
import { JsonPanel } from "./components/JsonPanel";
import { RenderedPanel } from "./components/RenderedPanel";

export function App() {
  const { dark, toggle } = useTheme();
  const { selectedKey, select } = useSelection();
  const [mobileTab, setMobileTab] = useState<"source" | "rendered">(
    "rendered"
  );
  const [sourceVisible, setSourceVisible] = useState(true);

  return (
    <div
      id="ptv"
      className={`${dark ? "dark" : "light"}${!sourceVisible ? " source-hidden" : ""}`}
    >
      <a href="#rp" className="skip-link">
        Skip to article
      </a>

      <div className="hdr">
        <div className="hdr-left">
          <div className="hdr-title">
            <span className="cmd">$</span> pte-grows-up{" "}
            <span className="flag">--render</span>{" "}
            <span className="file">article.pt.json</span>
          </div>
        </div>
        <div className="hdr-right">
          <div className="hdr-badge">{PT.length} blocks</div>
          <button
            className="toggle toggle-source"
            onClick={() => setSourceVisible((v) => !v)}
            aria-label={sourceVisible ? "Hide source panel" : "Show source panel"}
            aria-pressed={sourceVisible}
            style={{ opacity: sourceVisible ? 1 : 0.5 }}
          >
            &lt;/&gt;
          </button>
          <button
            className="toggle"
            onClick={toggle}
            aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
          >
            {dark ? "\u2600\uFE0E" : "\u263E"}
          </button>
        </div>
      </div>

      <div className="tabs" role="tablist" aria-label="View mode">
        <button
          role="tab"
          aria-selected={mobileTab === "source"}
          aria-controls="jp"
          className={`tab${mobileTab === "source" ? " active" : ""}`}
          onClick={() => setMobileTab("source")}
        >
          // source
        </button>
        <button
          role="tab"
          aria-selected={mobileTab === "rendered"}
          aria-controls="rp"
          className={`tab${mobileTab === "rendered" ? " active" : ""}`}
          onClick={() => setMobileTab("rendered")}
        >
          // rendered
        </button>
      </div>

      <div className="panels">
        <JsonPanel
          blocks={PT}
          selectedKey={selectedKey}
          onSelect={select}
          hidden={mobileTab !== "source"}
        />
        <div className="divider" />
        <RenderedPanel
          blocks={PT}
          selectedKey={selectedKey}
          onSelect={select}
          hidden={mobileTab !== "rendered"}
        />
      </div>

      {/* Live region for screen reader selection announcements */}
      <div aria-live="polite" aria-atomic="true" className="sr-only">
        {selectedKey ? `Selected: ${blockText(selectedKey)}` : ""}
      </div>
    </div>
  );
}

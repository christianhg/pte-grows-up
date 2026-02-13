import { useState } from "react";
import { PT } from "./data";
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

  return (
    <div id="ptv" className={dark ? "dark" : "light"}>
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
          <button className="toggle" onClick={toggle} title="Toggle theme">
            {dark ? "\u2600\uFE0E" : "\u263E"}
          </button>
        </div>
      </div>

      <div className="tabs">
        <button
          className={`tab${mobileTab === "source" ? " active" : ""}`}
          onClick={() => setMobileTab("source")}
        >
          // source
        </button>
        <button
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
    </div>
  );
}

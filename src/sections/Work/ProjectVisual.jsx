import { ALERT_CODE, BRAND_FILES, DEVICE_SHARING_SCREENS } from "../../content/media.js";
import CodeBlock from "../../components/CodeBlock.jsx";
import ImageFrame from "../../components/ImageFrame.jsx";

// =====================================================================
// ProjectVisual — the picture area of a card. Which one is used depends on
// `layout` in content/projects.js: "web" | "screens" | "split" | "folder".
// =====================================================================

// browser window with one screenshot
function WebLayout({ project: p, onZoom }) {
  return (
    <div className="stage">
      <div className="bro">
        <div className="tb"><i /><i /><i /></div>
        <ImageFrame src={p.image || p.img || p.src} label={`${p.title} screenshot`} onZoom={onZoom} />
      </div>
    </div>
  );
}

// scrolling strip of phone screens (Device sharing feature)
function ScreensLayout({ onZoom }) {
  return (
    <div className="stage ph">
      <span className="ph-chip">{DEVICE_SHARING_SCREENS.length} screens · scroll →</span>
      <div className="strip">
        {DEVICE_SHARING_SCREENS.map(({ name, src }) => (
          <button key={name} className="scr" aria-label={`Open ${name}`} onClick={() => onZoom(src)}>
            <img src={src} alt={name} />
            <span>{name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

// code on the left + real alert on the right (Device alert automation)
function SplitLayout({ project: p, onZoom }) {
  return (
    <div className="play dc">
      <CodeBlock file="check-error.js" code={ALERT_CODE} specLabel="card · code view" />
      <div className="pane" data-spec="card · real alert">
        <h3>Real alert</h3>
        <p>What the team actually receives in Discord when a device reports a fault.</p>
        <ImageFrame src={p.image || p.img || p.src} label="Real alert screenshot" onZoom={onZoom} />
      </div>
    </div>
  );
}

// folder card that opens the popup gallery (Brochures + brand assets)
function FolderLayout({ onOpenFolder }) {
  return (
    <button className="folder" onClick={onOpenFolder} aria-label="Open brand-assets folder">
      <svg viewBox="0 0 200 150" aria-hidden="true">
        <path d="M10 30a8 8 0 0 1 8-8h52l14 14h98a8 8 0 0 1 8 8v82a8 8 0 0 1-8 8H18a8 8 0 0 1-8-8z" fill="var(--accent)" opacity=".7" />
        <g className="sheet a">
          <rect x="30" y="34" width="70" height="80" rx="4" fill="var(--panel)" stroke="var(--ink)" strokeWidth="2" />
          <rect x="38" y="44" width="40" height="6" rx="2" fill="var(--pink)" />
        </g>
        <g className="sheet b">
          <rect x="92" y="30" width="70" height="80" rx="4" fill="var(--panel)" stroke="var(--ink)" strokeWidth="2" />
          <rect x="100" y="40" width="30" height="30" rx="4" fill="var(--accent)" />
        </g>
        <path d="M10 56a8 8 0 0 1 8-8h164a8 8 0 0 1 8 8v70a8 8 0 0 1-8 8H18a8 8 0 0 1-8-8z" fill="var(--accent)" stroke="var(--ink)" strokeWidth="2" />
      </svg>
      <span>brand-assets/ · {BRAND_FILES.length} files · click to open</span>
    </button>
  );
}

export default function ProjectVisual({ project, onZoom, onOpenFolder }) {
  switch (project.layout) {
    case "web": return <WebLayout project={project} onZoom={onZoom} />;
    case "screens": return <ScreensLayout onZoom={onZoom} />;
    case "split": return <SplitLayout project={project} onZoom={onZoom} />;
    case "folder": return <FolderLayout onOpenFolder={onOpenFolder} />;
    default: return null;
  }
}

import { BRAND_FILES } from "../content/media.js";
import ImageFrame from "./ImageFrame.jsx";

// The popup that opens from the "Brochures + brand assets" folder card.
// The images fly out of the folder one by one. Files are listed in content/media.js.
export default function FolderPopup({ open, onClose, onZoom }) {
  return (
    <div
      className={`fold${open ? " on" : ""}`}
      role="dialog"
      aria-label="brand-assets folder"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="win">
        <div className="wt">
          <span>~/brand-assets/ · {BRAND_FILES.length} files</span>
          <button className="chip" onClick={onClose} aria-label="Close folder">esc ✕</button>
        </div>
        <div className="fgrid">
          {BRAND_FILES.map(({ name, src }, i) => {
            const col = i % 3, row = Math.floor(i / 3);
            return (
              <figure
                key={name}
                // where each image starts flying from (the middle of the grid)
                style={{ "--i": i, "--dx": `${(1 - col) * 200}px`, "--dy": `${(0.5 - row) * 150}px`, "--r": `${i % 2 ? 12 : -12}deg` }}
              >
                <ImageFrame className="sq" src={src} label={name} onZoom={onZoom} />
                <figcaption>{name}</figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </div>
  );
}

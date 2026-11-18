import { useState } from "react";

const EXTENSIONS = ["png", "jpg", "jpeg", "webp"];

// =====================================================================
// ImageFrame — a fixed 16:10 landscape frame that shows one picture.
//   src   path to the picture. Without an extension ("/assets/images/iot-dashboard")
//         it finds .png / .jpg / .jpeg / .webp by itself. With an extension it uses it as is.
//   If the file does not exist yet, a wireframe placeholder is shown instead
//   (while running `npm run dev` the expected file name is written on it).
//   Click a picture to open it full size (onZoom).
// =====================================================================
export default function ImageFrame({ src, label, className = "", symbol = "dash", viewBox = "0 0 160 100", onZoom }) {
  const hasExtension = !!src && /\.(png|jpe?g|webp|gif|svg)$/i.test(src);
  const encode = (u) => (u.includes("%") ? u : encodeURI(u)); // allows spaces in file names
  const candidates = !src ? [] : hasExtension ? [encode(src)] : EXTENSIONS.map((e) => encode(`${src}.${e}`));

  const [tried, setTried] = useState(0); // how many candidates failed to load
  const url = candidates[tried];

  const wireframe = (
    <svg viewBox={viewBox} preserveAspectRatio="xMidYMid slice"><use href={`#${symbol}`} /></svg>
  );

  if (!url) {
    return (
      <div className={`shot static ${className}`} role="img" aria-label={`${label} (image not added yet)`}>
        {wireframe}
        {import.meta.env.DEV && src && <span className="hint">add {src}.png</span>}
      </div>
    );
  }
  return (
    <button type="button" className={`shot has ${className}`} aria-label={label} onClick={() => onZoom?.(url)}>
      {wireframe}
      <img src={url} alt={label} onError={() => setTried((n) => n + 1)} />
    </button>
  );
}

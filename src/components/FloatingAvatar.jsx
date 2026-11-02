import { useEffect, useRef, useState } from "react";
import { PIXEL_AVATAR_SVG } from "../art/pixelAvatar.js";
import { AVATAR_SPEECH } from "../content/avatarSpeech.js";
import { useDrag } from "../hooks/useDrag.js";

// =====================================================================
// FloatingAvatar — the small pixel avatar at the bottom-left.
//   * says a different line for each section (content/avatarSpeech.js)
//   * can be dragged anywhere; the bubble flips to the other side near the right edge
//   * click it to hide / show the bubble
// =====================================================================
export default function FloatingAvatar({ mode, section }) {
  const box = useRef(null);
  const handle = useRef(null);
  const [bubbleHidden, setBubbleHidden] = useState(false);
  const [bubbleOnLeft, setBubbleOnLeft] = useState(false);
  const [text, setText] = useState("");
  const [fading, setFading] = useState(false);

  useDrag(box, handle, {
    onTap: () => setBubbleHidden((h) => !h),
    onMove: () => {
      const r = box.current.getBoundingClientRect();
      setBubbleOnLeft(r.left + r.width / 2 > innerWidth / 2);
    },
  });

  // fade the old line out, then show the new one
  const line = AVATAR_SPEECH[section]?.[mode] ?? "";
  useEffect(() => {
    if (!line || line === text) return;
    setFading(true);
    const t = setTimeout(() => { setText(line); setFading(false); }, text ? 180 : 0);
    return () => clearTimeout(t);
  }, [line]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <aside className={`guide${bubbleHidden ? " hide" : ""}${bubbleOnLeft ? " r" : ""}`} ref={box} aria-live="polite">
      <button className="gbtn" ref={handle} aria-label="Hide or show the guide">
        <span dangerouslySetInnerHTML={{ __html: PIXEL_AVATAR_SVG }} />
      </button>
      <div className={`bub${fading ? " sw" : ""}`}>{text}</div>
    </aside>
  );
}

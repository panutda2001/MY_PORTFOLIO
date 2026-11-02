import { useRef, useState } from "react";
import { PIXEL_AVATAR_SVG } from "../art/pixelAvatar.js";
import { useDrag } from "../hooks/useDrag.js";

// =====================================================================
// FIRST SCREEN — "What would you like to see?"
// The visitor picks UX/UI or Frontend. The avatar + bubble are one group:
// drag it around, it turns toward the drag direction, and the bubble flips above/below.
// =====================================================================
export default function FirstScreen({ onPick }) {
  const group = useRef(null);
  const avatar = useRef(null);
  const facing = useRef(1); // 1 = right, -1 = left
  const [bubbleAbove, setBubbleAbove] = useState(false);

  useDrag(group, group, {
    onTap: () => {
      const svg = avatar.current.querySelector("svg"); // little jump on click
      svg.classList.remove("hop");
      void svg.offsetWidth;
      svg.classList.add("hop");
    },
    onMove: () => {
      const r = group.current.getBoundingClientRect();
      setBubbleAbove(r.top + r.height / 2 > innerHeight * 0.55);
    },
    onDelta: (dx, ended) => {
      if (Math.abs(dx) > 1) facing.current = dx < 0 ? -1 : 1;
      const tilt = ended ? 0 : Math.max(-14, Math.min(14, dx * 1.4));
      avatar.current.style.transform = `rotate(${tilt}deg) scaleX(${facing.current})`;
    },
  });

  return (
    <div className="gate" role="dialog" aria-label="Choose portfolio view">
      <div
        ref={group}
        className={`gwrap${bubbleAbove ? " up" : ""}`}
        tabIndex={0}
        role="group"
        aria-label="Pixel avatar of Panutda with a speech bubble. Drag me around, arrow keys also work."
      >
        <div className="gav" ref={avatar} dangerouslySetInnerHTML={{ __html: PIXEL_AVATAR_SVG }} />
        <div className="bub">Hi, I'm Panutda! Pick a path and I'll show you around. (Psst, drag me and watch me turn!)</div>
      </div>

      <div className="mono" style={{ color: "var(--mute)", fontSize: 14 }}>~/panutda · choose your path</div>
      <h1>What would you like to see?</h1>
      <p>One person, two lenses. Pick the work that matches the role you are hiring for. You can switch any time.</p>

      <div className="paths">
        <button className="path" onClick={() => onPick("ux")}>
          <small>[1] ui.fig</small>
          <b>UX/UI Design</b>
          <span>Flows, wireframes, prototypes and design systems. EV app and dashboard design.</span>
        </button>
        <button className="path" onClick={() => onPick("fe")}>
          <small>[2] app.jsx</small>
          <b>Frontend Dev</b>
          <span>React work, real-time MQTT dashboards, Figma to reusable components.</span>
        </button>
      </div>
    </div>
  );
}

import { useEffect, useRef } from "react";
import { MODES } from "../content/modes.js";
import CodeBlock from "../components/CodeBlock.jsx";
import LiveChart from "../components/LiveChart.jsx";
import { prefersReducedMotion } from "../hooks/prefersReducedMotion.js";

// =====================================================================
// HERO — the top of the page: headline, intro, buttons, code card.
// Text comes from content/modes.js. The pink "Panutda" cursor follows your mouse.
// =====================================================================
export default function Hero({ mode }) {
  const m = MODES[mode];
  const hero = useRef(null);
  const cursor = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const area = hero.current, c = cursor.current;
    let x = 0, y = 0, targetX = 0, targetY = 0, raf;
    const onMove = (e) => {
      const r = area.getBoundingClientRect();
      targetX = e.clientX - r.left + 18;
      targetY = e.clientY - r.top + 18;
      c.classList.add("on");
    };
    const onLeave = () => c.classList.remove("on");
    const loop = () => {
      x += (targetX - x) * 0.12; // ease toward the mouse
      y += (targetY - y) * 0.12;
      c.style.transform = `translate(${x}px,${y}px)`;
      raf = requestAnimationFrame(loop);
    };
    area.addEventListener("mousemove", onMove);
    area.addEventListener("mouseleave", onLeave);
    loop();
    return () => {
      area.removeEventListener("mousemove", onMove);
      area.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <header className="hero" id="hero" ref={hero}>
      <div className="cur" ref={cursor}>
        <svg width="16" height="16" viewBox="0 0 16 16"><path d="M1 1l5 14 2-6 6-2z" fill="var(--pink)" /></svg>
        <b>Panutda</b>
      </div>

      <div>
        <div className="eyebrow">{m.eyebrow}</div>
        <div className="frame" data-spec="h1 · Doto 900 · clamp(46–104px)">
          <i /><i /><i /><i />
          <h1 dangerouslySetInnerHTML={{ __html: m.headline }} />
        </div>
        <p className="lede">{m.intro}</p>
        <div className="btns">
          <a className="btn p" href="#work" data-spec="button · radius 12 · pad 14/24">View work</a>
          <a className="btn" href="#contact">Say hi</a>
        </div>
      </div>

      <CodeBlock file="panutda.config.js" code={m.codeCard} specLabel="card · code block · radius 16" after={<LiveChart />} />
    </header>
  );
}

import { useEffect, useRef } from "react";
import { GIT_LOG } from "../content/experience.js";

// One "commit" that slides in when you scroll to it.
function Commit({ commit: c }) {
  const ref = useRef(null);
  useEffect(() => {
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { ref.current.classList.add("in"); io.disconnect(); }
    }, { threshold: 0.12 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className="commit rv">
      <div className="h"><b>{c.hash}</b> · {c.when} · {c.type}</div>
      <h3>{c.title}</h3>
      <ul>{c.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
    </div>
  );
}

// =====================================================================
// 03 GIT LOG — experience written like commits. Edit content/experience.js.
// =====================================================================
export default function GitLog() {
  return (
    <section id="log">
      <div className="wrap">
        <div className="sh"><span>03</span><h2>git log</h2></div>
        <div className="log">
          {GIT_LOG.map((c) => <Commit key={c.hash} commit={c} />)}
        </div>
      </div>
    </section>
  );
}

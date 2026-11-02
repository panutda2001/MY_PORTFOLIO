import { useEffect, useState } from "react";
import { prefersReducedMotion } from "../hooks/prefersReducedMotion.js";

// The small "live demo · kW" line under the hero code card (simulated numbers).
const POINTS = 40;
const clamp = (v) => Math.max(2.2, Math.min(4.8, v));

export default function LiveChart() {
  const [values, setValues] = useState(() => {
    let v = 3.4;
    return Array.from({ length: POINTS }, () => (v = clamp(v + (Math.random() - 0.5) * 0.3)));
  });

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const id = setInterval(
      () => setValues((p) => [...p.slice(1), clamp(p[p.length - 1] + (Math.random() - 0.5) * 0.35)]),
      900
    );
    return () => clearInterval(id);
  }, []);

  const line = values
    .map((v, i) => `${((i * 120) / (POINTS - 1)).toFixed(1)},${(30 - (v - 2) * 10).toFixed(1)}`)
    .join(" ");

  return (
    <div className="live">
      <span>live demo · kW</span>
      <strong>{values[POINTS - 1].toFixed(2)}</strong>
      <svg viewBox="0 0 120 34" preserveAspectRatio="none">
        <polyline fill="none" stroke="var(--s)" strokeWidth="2" points={line} />
      </svg>
    </div>
  );
}

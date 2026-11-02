// useDrag — lets an element be dragged by a handle (mouse, touch, arrow keys) and stays inside the screen.
import { useEffect, useRef } from "react";

/**
 * Makes `elRef` draggable by `handleRef` (mouse, touch, and arrow keys).
 * The element is kept inside the viewport.
 * opts: onTap(), onMove(), onDelta(dx, ended)
 */
export function useDrag(elRef, handleRef, opts = {}) {
  const cb = useRef(opts);
  cb.current = opts;

  useEffect(() => {
    const el = elRef.current;
    const h = handleRef.current;
    if (!el || !h) return;
    let ox = 0, oy = 0, sx = 0, sy = 0, bx = 0, by = 0, lx = 0, moved = false, on = false;

    const place = (nx, ny) => {
      el.style.transform = `translate(${nx}px,${ny}px)`;
      const r = el.getBoundingClientRect();
      let cx = 0, cy = 0;
      if (r.left < 4) cx = 4 - r.left;
      else if (r.right > innerWidth - 4) cx = innerWidth - 4 - r.right;
      if (r.top < 4) cy = 4 - r.top;
      else if (r.bottom > innerHeight - 4) cy = innerHeight - 4 - r.bottom;
      ox = nx + cx;
      oy = ny + cy;
      el.style.transform = `translate(${ox}px,${oy}px)`;
      cb.current.onMove?.();
    };
    const down = (e) => {
      on = true; moved = false; lx = e.clientX; sx = e.clientX; sy = e.clientY; bx = ox; by = oy;
      h.setPointerCapture(e.pointerId);
    };
    const move = (e) => {
      if (!on) return;
      const dx = e.clientX - sx, dy = e.clientY - sy, dd = e.clientX - lx;
      lx = e.clientX;
      if (!moved && Math.abs(dx) + Math.abs(dy) < 6) return;
      moved = true;
      h.classList.add("grab");
      place(bx + dx, by + dy);
      cb.current.onDelta?.(dd);
    };
    const up = () => {
      if (!on) return;
      on = false;
      h.classList.remove("grab");
      cb.current.onDelta?.(0, true);
      if (!moved) cb.current.onTap?.();
    };
    const cancel = () => { on = false; h.classList.remove("grab"); cb.current.onDelta?.(0, true); };
    const click = (e) => { if (e.detail === 0) cb.current.onTap?.(); }; // keyboard Enter/Space
    const key = (e) => {
      const d = { ArrowLeft: [-20, 0], ArrowRight: [20, 0], ArrowUp: [0, -20], ArrowDown: [0, 20] }[e.key];
      if (d) { e.preventDefault(); place(ox + d[0], oy + d[1]); }
    };
    const resize = () => place(ox, oy);

    h.addEventListener("pointerdown", down);
    h.addEventListener("pointermove", move);
    h.addEventListener("pointerup", up);
    h.addEventListener("pointercancel", cancel);
    h.addEventListener("click", click);
    h.addEventListener("keydown", key);
    window.addEventListener("resize", resize);
    return () => {
      h.removeEventListener("pointerdown", down);
      h.removeEventListener("pointermove", move);
      h.removeEventListener("pointerup", up);
      h.removeEventListener("pointercancel", cancel);
      h.removeEventListener("click", click);
      h.removeEventListener("keydown", key);
      window.removeEventListener("resize", resize);
    };
  }, [elRef, handleRef]);
}

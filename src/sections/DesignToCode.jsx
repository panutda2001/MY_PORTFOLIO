import { useEffect, useState } from "react";
import CodeBlock from "../components/CodeBlock.jsx";

// =====================================================================
// 02 DESIGN <-> CODE — pick a brand color; the button (design) and the CSS (code)
// change together. Add or change colors in COLORS.
// =====================================================================
const COLORS = ["#7C5CFF", "#FF3EA5", "#12B5A0", "#F5A524", "#2F6BFF"];

// choose dark or white text so it stays readable on the chosen color
function textColorFor(hex) {
  const n = parseInt(hex.slice(1), 16);
  const r = n >> 16, g = (n >> 8) & 255, b = n & 255;
  return 0.299 * r + 0.587 * g + 0.114 * b > 150 ? "#14142B" : "#fff";
}

export default function DesignToCode() {
  const [color, setColor] = useState(COLORS[0]);
  const textColor = textColorFor(color);

  // apply to the whole page (this is what makes every button change color)
  useEffect(() => {
    const root = document.documentElement.style;
    root.setProperty("--accent", color);
    root.setProperty("--accent-ink", textColor);
  }, [color, textColor]);

  return (
    <section id="tokens">
      <div className="wrap">
        <div className="sh"><span>02</span><h2>Design ↔ code</h2></div>

        <div className="play">
          {/* left: the design */}
          <div className="pane" data-spec="card · design view">
            <h3>The design</h3>
            <p>Pick a brand color. The component and its tokens update, the same way I hand off from Figma to code.</p>
            <div className="sw">
              {COLORS.map((c) => (
                <button key={c} style={{ background: c }} aria-label={`Accent ${c}`} aria-pressed={c === color} onClick={() => setColor(c)} />
              ))}
            </div>
            <div className="prev">
              <button className="btn p">Start charging</button>
              <button className="btn">Details</button>
            </div>
          </div>

          {/* right: the code */}
          <CodeBlock file="tokens.css" specLabel="card · code view">
            <span className="k">:root</span>{" {\n  "}
            <span className="c">--accent</span>{": "}<span className="n">{color}</span>{";\n  "}
            <span className="c">--radius</span>{": "}<span className="n">12px</span>{";\n}\n"}
            <span className="k">.btn.primary</span>{" {\n  background: "}
            <span className="k">var</span>{"("}<span className="c">--accent</span>{");\n  color: "}
            <span className="n">{textColor}</span>{";\n  border-radius: "}
            <span className="k">var</span>{"("}<span className="c">--radius</span>{");\n}"}
          </CodeBlock>
        </div>
      </div>
    </section>
  );
}

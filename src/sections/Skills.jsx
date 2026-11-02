import { MODES } from "../content/modes.js";
import { SKILLS } from "../content/skills.js";
import CodeBlock from "../components/CodeBlock.jsx";

// =====================================================================
// 04 SKILLS — shown as a code file. Edit the lists in content/skills.js.
// =====================================================================
export default function Skills({ mode }) {
  const { file, rows } = SKILLS[mode];
  const widest = Math.max(...rows.map((r) => r.key.length));

  return (
    <section id="stack">
      <div className="wrap">
        <div className="sh"><span>04</span><h2>{MODES[mode].skillsTitle}</h2></div>

        <CodeBlock file={file} className="pkg">
          {"{\n"}
          {rows.map((row, i) => (
            <span key={row.key}>
              {"  "}<span className="k">"{row.key}"</span>{":" + " ".repeat(widest - row.key.length + 1)}
              {"["}
              {row.items.map((item, j) => (
                <span key={item}>{j > 0 && ", "}<span className="s">"{item}"</span></span>
              ))}
              {"]" + (i < rows.length - 1 ? "," : "")}
              {row.note && <span className="c">{"  // " + row.note}</span>}
              {"\n"}
            </span>
          ))}
          {"}"}
        </CodeBlock>
      </div>
    </section>
  );
}

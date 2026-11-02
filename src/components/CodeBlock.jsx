import { highlight } from "../utils/highlight.js";

// =====================================================================
// CodeBlock — the dark "terminal" window with a file name on top.
//   <CodeBlock file="x.js" code={"plain text"} />   -> colors the text automatically
//   <CodeBlock file="x.css">{jsx}</CodeBlock>       -> you color it yourself
//   after = extra content under the code (e.g. the live chart)
// =====================================================================
export default function CodeBlock({ file, code, children, after, specLabel = "card · code block", className = "" }) {
  return (
    <div className={`term ${className}`} data-spec={specLabel}>
      <div className="tb"><i /><i /><i /><span>{file}</span></div>
      {code != null ? <pre dangerouslySetInnerHTML={{ __html: highlight(code) }} /> : <pre>{children}</pre>}
      {after}
    </div>
  );
}

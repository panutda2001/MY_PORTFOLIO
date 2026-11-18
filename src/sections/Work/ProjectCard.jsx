import ProjectVisual from "./ProjectVisual.jsx";

// One project card: [ picture area ] + title + tags + "cat case-study.md" (problem / what I did / outcome).
export default function ProjectCard({ project: p, mode, wide, onZoom, onOpenFolder }) {
  return (
    <article
      className={`card${wide ? " big" : ""}${p.layout === "split" ? " stack" : ""}`}
      data-spec="card · radius 22 · shadow on hover"
    >
      <ProjectVisual project={p} onZoom={onZoom} onOpenFolder={onOpenFolder} />

      <div className="body">
        <h3>{p.title}</h3>
        <div className="mono" style={{ fontSize: 13, color: "var(--mute)" }}>{p.subtitle}</div>

        <div className="tags">
          {p.tags[mode].map((tag) => <span key={tag}>{tag}</span>)}
        </div>

        <details>
          <summary>cat case-study.md</summary>
          <dl>
            <dt>problem</dt><dd>{p.problem}</dd>
            <dt>what I did</dt><dd>{p.whatIDid[mode]}</dd>
            <dt>outcome</dt><dd>{p.outcome}</dd>
          </dl>
          {p.links.length > 0 && (
            <div className="lk">
              {p.links.map(({ label, href }) => (
                <a key={href} href={href} target="_blank" rel="noopener noreferrer">{label} ↗</a>
              ))}
            </div>
          )}
        </details>
      </div>
    </article>
  );
}

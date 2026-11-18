import { PROJECTS, PROJECTS_BY_MODE, WIDE_CARDS } from "../../content/projects.js";
import { MODES } from "../../content/modes.js";
import ProjectCard from "./ProjectCard.jsx";

// =====================================================================
// 01 WORK — the grid of project cards.
//   which cards show on each path ........ content/projects.js (PROJECTS_BY_MODE)
//   which cards are full width ........... content/projects.js (WIDE_CARDS)
//   card text, tags, links ............... content/projects.js (PROJECTS)
// =====================================================================
export default function Work({ mode, onZoom, onOpenFolder }) {
  return (
    <section id="work">
      <div className="wrap">
        <div className="sh"><span>01</span><h2>{MODES[mode].workTitle}</h2></div>
        <div className="grid">
          {PROJECTS_BY_MODE[mode].map((id) => (
            <ProjectCard
              key={`${mode}-${id}`}
              project={PROJECTS.find((p) => p.id === id)}
              mode={mode}
              wide={WIDE_CARDS[mode].includes(id)}
              onZoom={onZoom}
              onOpenFolder={onOpenFolder}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

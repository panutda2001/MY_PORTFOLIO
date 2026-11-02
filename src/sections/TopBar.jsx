// =====================================================================
// TOP BAR — the menu that stays at the top while you scroll.
// Left: logo.  Middle: section links (the current one is underlined).
// Right: mode switch, dev mode (Frontend path only), light/dark theme.
// =====================================================================
const MENU = [
  { id: "work", label: "work/" },
  { id: "tokens", label: "tokens/" },
  { id: "log", label: "git log" },
  { id: "stack", label: "stack" },
  { id: "contact", label: "contact" },
];

export default function TopBar({ mode, currentSection, devMode, onSwitchMode, onToggleDevMode, onToggleTheme }) {
  return (
    <div className="topbar">
      <div className="wrap">
        <div className="bar">
          <a className="logo" href="#hero"><b>~/panutda</b></a>

          <nav>
            {MENU.map(({ id, label }) => (
              <a key={id} href={`#${id}`} className={currentSection === id ? "on" : ""}>{label}</a>
            ))}
          </nav>

          <div className="tools">
            <button className="chip" onClick={onSwitchMode} aria-label="Switch portfolio mode">
              mode: <span>{mode}</span> ⇄
            </button>
            {mode === "fe" && (
              <button className="chip" aria-pressed={devMode} onClick={onToggleDevMode} title="Show component specs, like Figma Dev Mode">
                dev mode
              </button>
            )}
            <button className="chip" onClick={onToggleTheme} aria-label="Toggle light and dark theme">◐</button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Small wireframe drawings used inside empty image frames ("dash" = dashboard, "app" = phone app).
// Define once here, then reused with <use href="#dash" /> elsewhere.
export default function PlaceholderArt() {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
      <defs>
        <symbol id="dash" viewBox="0 0 160 100">
          <rect width="160" height="100" fill="var(--bg)" />
          <rect x="8" y="8" width="144" height="10" rx="3" fill="var(--line)" />
          {[8, 58, 108].map((x) => (
            <rect key={x} x={x} y="26" width="44" height="22" rx="4" fill="var(--panel)" stroke="var(--line)" />
          ))}
          <rect x="8" y="54" width="144" height="38" rx="4" fill="var(--panel)" stroke="var(--line)" />
          <polyline points="14,84 38,70 60,78 84,62 108,70 130,58 146,64" fill="none" stroke="var(--accent)" strokeWidth="2.5" />
        </symbol>
        <symbol id="app" viewBox="0 0 90 180">
          <rect width="90" height="180" fill="var(--bg)" />
          <rect x="8" y="12" width="50" height="8" rx="3" fill="var(--line)" />
          <rect x="8" y="30" width="74" height="40" rx="8" fill="var(--accent)" opacity=".85" />
          <rect x="8" y="78" width="74" height="22" rx="6" fill="var(--panel)" stroke="var(--line)" />
          <rect x="8" y="106" width="74" height="22" rx="6" fill="var(--panel)" stroke="var(--line)" />
          <rect x="8" y="140" width="74" height="26" rx="13" fill="var(--pink)" />
        </symbol>
      </defs>
    </svg>
  );
}

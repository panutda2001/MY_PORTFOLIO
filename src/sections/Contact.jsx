import { MODES } from "../content/modes.js";
import { PROFILE } from "../content/profile.js";

// =====================================================================
// 05 CONTACT — "About me" card (text from content/modes.js) and
// "Say hello" card (email, phone, resume download from content/profile.js).
// The resume PDFs live in public/assets/.
// =====================================================================
export default function Contact({ mode }) {
  const about = MODES[mode].about;

  return (
    <section id="contact">
      <div className="wrap contact">
        <div className="sh"><span>05</span><h2>Let's build something</h2></div>

        <div className="about2">
          <div className="pane" data-spec="card · about me">
            <h3>About me</h3>
            <p id="ab">{about.text}</p>
            <dl>
              <dt>role</dt><dd>{about.role}</dd>
              <dt>focus</dt><dd>{about.focus}</dd>
              <dt>open to</dt><dd>{about.openTo}</dd>
            </dl>
          </div>

          <div className="pane" data-spec="card · contact">
            <h3>Say hello</h3>
            <p>Email me, or grab my resume.</p>
            <a className="mail2" href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>
            <p className="mono" style={{ margin: "16px 0 22px", fontSize: 14 }}>{PROFILE.phone}</p>
            <a className="btn p" href={`/assets/${about.resumeFile}`} download>{about.resumeLabel}</a>
          </div>
        </div>
      </div>
    </section>
  );
}

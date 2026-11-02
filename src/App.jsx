import { useEffect, useState } from "react";
import { PROFILE } from "./content/profile.js";

import PlaceholderArt from "./components/PlaceholderArt.jsx";
import FloatingAvatar from "./components/FloatingAvatar.jsx";
import FolderPopup from "./components/FolderPopup.jsx";
import Lightbox from "./components/Lightbox.jsx";

import FirstScreen from "./sections/FirstScreen.jsx"; // "What would you like to see?"
import TopBar from "./sections/TopBar.jsx"; // sticky menu
import Hero from "./sections/Hero.jsx"; // headline + code card
import Work from "./sections/Work/Work.jsx"; // 01 project cards
import DesignToCode from "./sections/DesignToCode.jsx"; // 02 color picker
import GitLog from "./sections/GitLog.jsx"; // 03 experience
import Skills from "./sections/Skills.jsx"; // 04 skills as code
import Contact from "./sections/Contact.jsx"; // 05 about + contact + resume

const SECTION_IDS = ["hero", "work", "tokens", "log", "stack", "contact"];

// =====================================================================
// App — puts the whole page together, top to bottom, and holds the page-wide state:
//   mode           "ux" or "fe" (the path the visitor chose)
//   onFirstScreen  true while the "choose your path" screen is showing
//   devMode        Figma-style spec outlines (Frontend path only)
//   zoomImage      picture currently open full-screen
//   folderOpen     brand-assets popup open?
//   currentSection which section is on screen (menu underline + avatar speech)
// =====================================================================
export default function App() {
  const [mode, setMode] = useState("fe");
  const [onFirstScreen, setOnFirstScreen] = useState(true);
  const [devMode, setDevMode] = useState(false);
  const [zoomImage, setZoomImage] = useState(null);
  const [folderOpen, setFolderOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState("hero");

  const choosePath = (m) => {
    setMode(m);
    setOnFirstScreen(false);
    window.scrollTo(0, 0);
  };

  // The CSS reads these flags from <body>
  useEffect(() => { document.body.dataset.mode = mode; if (mode === "ux") setDevMode(false); }, [mode]);
  useEffect(() => { document.body.classList.toggle("locked", onFirstScreen); }, [onFirstScreen]);
  useEffect(() => { document.body.classList.toggle("dev", devMode); }, [devMode]);

  // Keyboard: Esc closes popups; 1 / 2 choose a path on the first screen
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") { setZoomImage(null); setFolderOpen(false); }
      if (onFirstScreen && e.key === "1") choosePath("ux");
      if (onFirstScreen && e.key === "2") choosePath("fe");
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onFirstScreen]);

  // Track which section is in the middle of the screen
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setCurrentSection(e.target.id)),
      { rootMargin: "-40% 0px -50% 0px" }
    );
    SECTION_IDS.forEach((id) => { const el = document.getElementById(id); if (el) io.observe(el); });
    return () => io.disconnect();
  }, [onFirstScreen]);

  const toggleTheme = () => {
    const root = document.documentElement;
    const saved = root.getAttribute("data-theme");
    const isDark = saved ? saved === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
    root.setAttribute("data-theme", isDark ? "light" : "dark");
  };

  return (
    <>
      <PlaceholderArt />

      {/* 0. first screen (covers everything until a path is chosen) */}
      <FirstScreen onPick={choosePath} />

      {/* menu */}
      <TopBar
        mode={mode}
        currentSection={currentSection}
        devMode={devMode}
        onSwitchMode={() => setMode(mode === "ux" ? "fe" : "ux")}
        onToggleDevMode={() => setDevMode((d) => !d)}
        onToggleTheme={toggleTheme}
      />

      {/* the page, top to bottom */}
      <div className="wrap pt"><Hero mode={mode} /></div>
      <Work mode={mode} onZoom={setZoomImage} onOpenFolder={() => setFolderOpen(true)} />
      <DesignToCode />
      <GitLog />
      <Skills mode={mode} />
      <Contact mode={mode} />
      <div className="wrap"><footer>© {PROFILE.name} · designed in Figma, built by hand</footer></div>

      {/* floating things */}
      <FloatingAvatar mode={mode} section={currentSection} />
      <FolderPopup open={folderOpen} onClose={() => setFolderOpen(false)} onZoom={setZoomImage} />
      <Lightbox src={zoomImage} onClose={() => setZoomImage(null)} />
    </>
  );
}

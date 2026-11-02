// =====================================================================
// SKILLS — the "04" section, shown as a code file.
// One block per path. Each row = one line in the code: key + list (+ optional note).
// =====================================================================
export const SKILLS = {
  fe: {
    file: "package.json",
    rows: [
      { key: "design", items: ["Figma", "Wireframing", "Prototyping", "Design systems"] },
      { key: "frontend", items: ["React", "JavaScript ES6+", "HTML/CSS", "Responsive"] },
      { key: "realtime", items: ["MQTT", "Node-RED"] },
      { key: "workflow", items: ["Git", "GitHub", "Figma to code"] },
      // Keep only what you are really learning:
      { key: "nextUp", items: ["TypeScript", "Next.js", "Tailwind"], note: "edit to what you are learning" },
    ],
  },
  ux: {
    file: "skills.fig",
    rows: [
      { key: "design", items: ["Wireframing", "Prototyping", "User flow", "Design systems", "Component design"] },
      { key: "visual", items: ["Layout", "Typography", "Visual hierarchy", "Branding"] },
      { key: "tools", items: ["Figma", "Canva", "Photoshop", "Google Stitch"] },
      { key: "ai", items: ["ChatGPT", "Gemini", "Claude"] },
      { key: "handoff", items: ["HTML/CSS", "React"], note: "I can build what I design" },
    ],
  },
};

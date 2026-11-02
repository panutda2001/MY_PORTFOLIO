// =====================================================================
// MODES — text that changes depending on the path the visitor chose.
//   "ux" = UX/UI Design path      "fe" = Frontend Dev path
// Used by: Hero (eyebrow, headline, intro, code card), section titles,
//          and the "About me" card in Contact.
// =====================================================================

export const MODES = {
  // ---------------------------------------------------------- UX/UI path
  ux: {
    eyebrow: "// UX/UI Designer · Figma → handoff",
    headline: "Design for<br><em>real people.</em>", // <br> = new line, <em> = gradient text
    intro:
      "I turn complex, real-time data into clear flows, screens and design systems in Figma, then hand off components that engineers can build without guessing.",
    // Code card on the hero. {caret} = blinking cursor.
    codeCard: `const panutda = {
  role:    ["UX/UI Design", "Design Systems"],
  process: "flow → wireframe → prototype → handoff",
  since:   2023, // at KMCE
  status:  "open to work"{caret}
};`,
    workTitle: "UX/UI work", // title of the "01" section
    skillsTitle: "skills.fig", // title of the "04" section
    about: {
      text: "I sit between design and engineering at a smart-energy and EV-charging company, so I design with build limits in mind. I like making dense, real-time data feel simple.",
      role: "Junior UX/UI Designer",
      focus: "Flows, wireframes, prototypes, design handoff",
      openTo: "Junior UX/UI and product design roles",
      resumeLabel: "Download resume (UX/UI, PDF)",
      resumeFile: "Panutda_Wongsa_Resume_UXUI.pdf", // file in public/assets/
    },
  },

  // -------------------------------------------------------- Frontend path
  fe: {
    eyebrow: "// Frontend Developer · React + Angular",
    headline: "Build it.<br><em>Ship it.</em>",
    intro:
      "I build responsive web interfaces in React and Angular for real-time MQTT data, and turn Figma designs into reusable components. I design too, so handoff is easy.",
    codeCard: `const panutda = {
  role:      ["Frontend", "UI engineering"],
  worksWith: "engineers + designers",
  since:     2023, // at KMCE
  status:    "open to work"{caret}
};`,
    workTitle: "Frontend work",
    skillsTitle: "package.json",
    about: {
      text: "I work between design and engineering at a smart-energy and EV-charging company, so the UI code I write stays true to the design. I like making real-time data feel simple.",
      role: "Frontend Developer",
      focus: "React, Angular, responsive UI, MQTT data",
      openTo: "Junior frontend / UI developer roles",
      resumeLabel: "Download resume (Frontend, PDF)",
      resumeFile: "Panutda_Wongsa_Resume_Frontend.pdf",
    },
  },
};

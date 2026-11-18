// =====================================================================
// PROJECTS — the cards in section "01" (UX/UI work / Frontend work).
//
// Each project:
//   id        unique name (used in the two lists at the bottom)
//   title     card title                  subtitle   small grey line
//   layout    what the picture area looks like:
//               "web"     browser window with one screenshot
//               "screens" scrolling strip of phone screens (see media.js)
//               "split"   code on the left + real alert image on the right
//               "folder"  folder card that opens a popup gallery (see media.js)
//   image     screenshot path WITHOUT extension, e.g. "/assets/images/iot-dashboard"
//             -> put iot-dashboard.png (or .jpg / .webp) in public/assets/images/
//   tags      small chips, one list per path ("ux" / "fe")
//   problem / whatIDid / outcome   the text under "cat case-study.md"
//             (whatIDid can differ per path: { ux: "...", fe: "..." })
//   links     [{ label, href }]
// =====================================================================

export const PROJECTS = [
  {
    id: "iot",
    title: "Smart IoT Dashboard",
    subtitle: "EV charging + solar · web dashboard",
    layout: "web",
    image: "/assets/images/kmcemornitor.jpeg",
    tags: {
      ux: ["Dashboard UX", "Information hierarchy", "Figma"],
      fe: ["Angular", "MQTT", "Real-time UI"],
    },
    problem:
      "Engineers needed one screen to see which device, at which site, has a fault and how to fix it. Before, problems reached them only after a customer reported them.",
    whatIDid: {
      ux: "Designed the monitoring web pages and their functions: which device, where it is, what error occurred and how to fix it, laid out so a problem is visible at a glance.",
      fe: "Designed the web pages and features, and wrote parts of the Angular code alongside my team lead, who built the core.",
    },
    outcome:
      "Used by engineers and back-office admins to monitor 100+ devices across 10+ stations. The team says it makes daily work easier.",
    links: [],
  },
  {
    id: "sharing",
    title: "Device sharing feature",
    subtitle: "KIT-WISe mobile app · new feature",
    layout: "screens",
    tags: { ux: ["Mobile UX", "Feature design", "Figma", "Dev handoff"] },
    problem:
      "The mobile app already existed. My lead asked for a way to share a device with other users, with different permission levels.",
    whatIDid: {
      ux: "Designed the sharing flow in Figma: an entry in Settings, a shared-user list, a Can Control / Can View choice, and a time-limited QR code (15:00 minutes). Prepared the screens for developers to build.",
    },
    outcome: "Handed off to the dev team to implement on top of the existing app.",
    links: [
      // { label: "Open Figma", href: "https://www.figma.com/design/JmjuBDPxhBanpzzv9mLsUl/Smart-Energy-KMCE?node-id=0-1" },
    ],
  },
  {
    id: "web",
    title: "KIT-WISe website",
    subtitle: "Corporate site",
    layout: "web",
    image: "/assets/images/KWEnergy.png",
    tags: {
      ux: ["Layout", "Visual hierarchy", "Responsive"],
      fe: ["React", "Responsive CSS", "Vercel"],
    },
    problem: "The company needed a website to present its solutions and installations.",
    whatIDid: {
      ux: "Designed the page structure and hierarchy: solutions, project filters, awards and a one-tap LINE contact.",
      fe: "Built it in React with reusable section components, a filterable project gallery and responsive layouts.",
    },
    outcome: "A live site customers can browse and contact us from.",
    links: [{ label: "View live site", href: "https://kit-wi-se-energy.vercel.app/" }],
  },
  {
    id: "alerts",
    title: "Device alert automation",
    subtitle: "Ops tooling",
    layout: "split",
    image: "/assets/images/alertdiscord.png", // the real alert screenshot (right side)
    tags: { fe: ["Node-RED", "MQTT", "Discord / LINE"] },
    problem: "The team needed to know when a device went offline or reported a fault.",
    whatIDid: {
      fe: "Built flows that watch device messages and post clear alerts with links to docs and dashboards.",
    },
    outcome: "Alerts reach the team automatically, so nobody has to check devices one by one.",
    links: [],
  },
  {
    id: "brand",
    title: "Brochures + Design Dasboard",
    subtitle: "Graphic design",
    layout: "folder",
    tags: { ux: ["Photoshop", "Canva", "Branding"] },
    problem: "Print and digital materials were needed to present the products.",
    whatIDid: {
      ux: "Designed brochures, product stickers and brand assets that share one visual language with the UI.",
    },
    outcome: "A consistent look across product, print and web.",
    links: [],
  },
];

// Which cards appear on each path, in this order:
export const PROJECTS_BY_MODE = {
  ux: ["sharing", "iot", "web", "brand"],
  fe: ["iot", "web", "alerts"],
};

// Cards that take the full width (the rest sit two per row):
export const WIDE_CARDS = {
  ux: ["sharing", "iot"],
  fe: ["iot", "web", "alerts"],
};

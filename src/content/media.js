// =====================================================================
// MEDIA — images and code samples used inside the project cards.
// =====================================================================

// "Device sharing feature" card: the strip of phone screens (files in public/assets/screens/)
export const DEVICE_SHARING_SCREENS = [
  { name: "Settings: entry point", src: "/assets/screens/01-settings.png" },
  { name: "Share user list", src: "/assets/screens/02-share-user-list.png" },
  { name: "Choose permission", src: "/assets/screens/03-choose-permission.png" },
  { name: "QR · can control", src: "/assets/screens/04-qr-can-control.png" },
  { name: "QR · can view", src: "/assets/screens/05-qr-can-view.png" },
  { name: "Recipient confirms", src: "/assets/screens/06-recipient-confirms.png" },
];

// "Brochures + brand assets" card: the popup folder.
// Put the files in public/assets/images/ with these names (png, jpg or webp).
export const BRAND_FILES = [
  { name: "Brochure Insurance in the chip page1", src: "/assets/Brochure/page1ver.3.png" },
  { name: "Brochure Insurance in the chip page2", src: "/assets/Brochure/page2 ver.3.png" },
  { name: "Design Smart Office page", src: "/assets/Brochure/Smart office design V-3.png" },
  { name: "Design Smart Factory Dashboard", src: "/assets/Brochure/Factory Dashboard.png" },
  { name: "Solar 3.5", src: "/assets/Brochure/BrochureSolar.png" },
  { name: "Branding B", src: "/assets/images/brand-branding-b" },
];

// "Device alert automation" card: the code shown on the left.
// (Simplified — no tokens, channel IDs or customer data.)
export const ALERT_CODE = [
  "// Node-RED function: fault code → alert message",
  "const FAULTS = {",
  '  1: "ARC",  2: "LEAKAGE CURRENT",',
  '  4: "UNDER VOLTAGE",  8: "OVER VOLTAGE",',
  '  16: "OVER CURRENT",  32: "SHORT CIRCUIT",',
  '  64: "OVER TEMP"',
  "};",
  "const COOLDOWN = 10 * 60 * 1000; // max 1 alert / 10 min",
  "",
  "if (known && fault !== 0 && now - last >= COOLDOWN) {",
  "  msg.payload = `### 📍 HOME SPEAK",
  "**📌 N :** ${name}",
  "**🔌 U :** ${uid}",
  "**⚠️ E :** ${FAULTS[fault]}",
  "**🔗 L :** [Grafana](${dashboardUrl})`;",
  "  return msg; // → Discord",
  "}",
].join("\n");

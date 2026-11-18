# Panutda Wongsa – Portfolio (React + Vite)

```bash
npm install
npm run dev       # local dev server (http://localhost:5173)
npm run build     # production build in /dist  -> deploy to Vercel / Netlify
```

## The big idea: 3 folders to know

| Folder | What it is | Do you edit it? |
|---|---|---|
| `src/content/` | **All the words, links and lists** on the page | **Yes, mostly here** |
| `src/sections/` | **One file per part of the page**, named in page order | Only to change layout/behavior |
| `src/styles/` | **One CSS file per part of the page** (same names as the sections) | To change looks |

Everything else (`components/`, `hooks/`, `utils/`, `art/`) is shared building blocks.

## "I want to change ..." quick finder

| I want to change... | Open this file |
|---|---|
| Hero headline / intro / code card | `src/content/modes.js` |
| "About me" text, resume file name | `src/content/modes.js` (`about`) |
| Project cards (text, tags, links, which show on each path) | `src/content/projects.js` |
| Project screenshots | drop files in `public/assets/images/` (see its `README.txt`) |
| Device-sharing phone screens, brand folder files, alert code sample | `src/content/media.js` |
| Experience timeline (git log) | `src/content/experience.js` |
| Skills lists | `src/content/skills.js` |
| What the small avatar says | `src/content/avatarSpeech.js` |
| Email, phone, name | `src/content/profile.js` |
| Colors, dark/light theme | `src/styles/base.css` (top of the file) |
| Look of one section | the CSS file with the same name (e.g. hero -> `styles/hero.css`) |
| The pixel character | `src/art/pixelAvatar.js` |
| Resume PDFs | replace the files in `public/assets/` |

## Page map (top to bottom -> file)

```
FirstScreen   sections/FirstScreen.jsx      "What would you like to see?" + draggable avatar
TopBar        sections/TopBar.jsx           sticky menu (mode / dev mode / theme)
Hero          sections/Hero.jsx             headline, intro, code card, live kW demo
01 Work       sections/Work/Work.jsx        grid of cards
                 ProjectCard.jsx            one card (title, tags, case study)
                 ProjectVisual.jsx          the picture area: web / screens / split / folder
02 Design<->code  sections/DesignToCode.jsx color picker
03 git log    sections/GitLog.jsx           experience
04 Skills     sections/Skills.jsx           skills shown as code
05 Contact    sections/Contact.jsx          about me + email + resume download
(floating)    components/FloatingAvatar.jsx small avatar that follows you
(popups)      components/FolderPopup.jsx, components/Lightbox.jsx
```
`src/App.jsx` puts these together and holds the page-wide state (read its top comment).

## Project card fields (src/content/projects.js)
`layout` decides the picture area: `"web"` (browser + screenshot), `"screens"` (phone-screen strip),
`"split"` (code + real alert), `"folder"` (popup gallery).
`image` is the screenshot path **without** extension, e.g. `"/assets/images/iot-dashboard"`.
The file is found automatically (png / jpg / jpeg / webp). Without a file, a wireframe placeholder shows.
Frames are fixed 16:10 landscape and crop pictures to fill.

## Before you publish
- Add GitHub / LinkedIn in `src/content/profile.js` and show them in `src/sections/Contact.jsx`.
- Mask customer names, UUIDs and channel names in alert screenshots.
- `nextUp` in `src/content/skills.js`: keep only what you are really learning.
- Replace the resume PDFs when your resume changes.
# MY_PORTFOLIO
# MY_PORTFOLIO

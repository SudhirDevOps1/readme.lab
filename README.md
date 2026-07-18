<div align="center">

# ∞ readme.lab

### Craft a GitHub profile that *breathes* — not one that bores.

**1500+ real, working assets** · a live **Profile Builder** · animated SVG banners · live-editable pets · mermaid diagrams · playable games · badges · stat cards · README templates
Every item previews live, edits inline, renames, copies & drops straight into your `README.md`. A built-in **live SVG code editor** lets you tweak any banner or pet's code and see it render instantly.

🔗 **Live:** [readme-lab.pages.dev](https://readme-lab.pages.dev/) · **Repo:** [github.com/SudhirDevOps1/readme.lab](https://github.com/SudhirDevOps1/readme.lab)

![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)

</div>

---

## ✨ What's inside

| Section | Count | What each item is |
|---------|-------|-------------------|
| ⚡ **Profile Builder** | 1 | Toggle 14 sections · assembles a full README live from your identity fields |
| ◼ **SVG Banners** | 208 | Real animated SVG (SMIL) · **live code editor** · fills name/role/handle live |
| § **READMEs** | 24 | Full markdown templates · live preview / edit / source view |
| ✂ **Snippets** | 637 | Real shields.io / skillicons / capsule / workflow markdown · README builder |
| 🐾 **Pets** | 126 | Animated SVGs · **live code editor** + color / speed / size + rename |
| 🧜 **Mermaid** | 39 | Live-rendered diagrams (flowchart, pie, mindmap, sequence…) · edit + preview |
| ▶ **Games** | 24 | Fully playable React mini-games · searchable |
| ▦ **Stats** | 80 | Real themes with live GitHub image previews |
| ▤ **Stat Cards** | 400 | 80 themes × 5 card types · each copyable with thumbnail |
| ◉ **Badges** | 45 | Live shields.io badge maker with color swatches |

> Every number above is computed at runtime from real data — **zero fakes**. Total **1500+**.

## 🎛️ Full customization

- **Live SVG code editor** — open any banner/pet, edit the raw SVG (colors, shapes, animation timing) in a split code+preview view, then copy or download
- **Live Mermaid editor** — edit diagram code, see it render instantly (GitHub renders `` ```mermaid `` natively)
- **Identity fields** — name, role, handle, **location, email, company, website** all flow into every asset
- **Accent picker** — 5 accent themes (amber, violet, cyan, rose, emerald)
- **GitHub loader** — pull any user's real profile (name, bio, location, company, blog) via the API
- **Profile Builder** — check/uncheck 14 sections, live rendered preview + syntax-highlighted source
- **Snippet README builder** — stack any snippets, reorder, assemble a custom README
- **Per-item editing** — rename files, edit markdown/SVG live, tweak pet colors/speed/size

---

## 🚀 Quick start

```bash
# clone
git clone https://github.com/SudhirDevOps1/readme.lab.git
cd readme.lab

# install
npm install

# dev
npm run dev

# build for production
npm run build
```

The production build outputs a single self-contained `dist/index.html` you can host anywhere
(GitHub Pages, Vercel, Netlify).

---

## 🧭 How to use it

1. **Set your identity** — type your name, role & GitHub handle at the top. Everything updates live.
2. **Browse a tab** — banners, pets, snippets, games, stat cards, badges, READMEs.
3. **Customize** — pets have color/speed/size sliders, templates have a live markdown editor with
   syntax highlighting, everything is renamable.
4. **Copy or download** — one click copies markdown, or downloads an `.svg` / `.md` file.
5. **Paste into your profile README** — create a repo named exactly like your username
   (`SudhirDevOps1/SudhirDevOps1`) so its README shows on your GitHub profile.

### Embedding an SVG

```markdown
<!-- relative path (file uploaded to the repo) -->
![banner](./banner.svg)

<!-- raw URL -->
<img src="https://raw.githubusercontent.com/USER/USER/main/pet.svg" />
```

---

## 🗂 Project structure — where to edit & add content

```
src/
├─ App.tsx                 # main app shell, tabs, identity inputs
├─ components/
│  ├─ CodeBlock.tsx        # syntax-highlighted code viewer (copy/download)
│  ├─ SvgEditor.tsx        # live SVG code editor (edit + instant preview)
│  ├─ MermaidView.tsx      # live mermaid diagram renderer
│  └─ SiteFooter.tsx       # animated footer
├─ lib/
│  └─ highlight.ts         # markdown + xml/svg syntax highlighter
├─ data/
│  ├─ banners.ts           # ← add SVG banner templates here (t01..t32)
│  ├─ pets.ts              # ← add animated pets here
│  ├─ templates.ts         # ← add README templates here
│  ├─ snippets.ts          # ← add markdown snippets here
│  └─ mermaid.ts           # ← add mermaid diagram templates here
├─ games.tsx               # ← add playable games here (React components)
└─ index.css               # fonts, theme tokens, animations
```

### Add a new pet

```ts
// src/data/pets.ts  →  add to premiumPets[]
{
  id: 'myPet', name: 'Cutie', emoji: '🐾', vibe: 'happy · bouncy',
  svg: ({ color = '#f59e0b', speed = 2, scale = 1 } = {}) => petFrame(`
    <g transform="translate(${'${w/2*scale}'} ${'${h/2*scale}'}) scale(${'${scale}'})">
      <!-- your SVG shapes here, use ${'${color}'} and ${'${speed}'} -->
    </g>`, '#0f172a'),
}
```

### Add a new banner (SVG template)

```ts
// src/data/banners.ts  →  write a t## function, then add to TEMPLATES[]
const t33 = (p: Pal, n: string, r: string, h: string) =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 200" width="800" height="200">
     <rect width="800" height="200" fill="${'${p.bg1}'}" rx="16"/>
     <text x="40" y="90" font-size="42" fill="${'${p.tx}'}">${'${n}'}</text>
     <text x="40" y="125" fill="${'${p.ac1}'}">${'${r}'}</text>
   </svg>`;
// then: const TEMPLATES = [...existing, t33];
// each template auto-generates 6 palette variants
```

### Add a new snippet

```ts
// src/data/snippets.ts
s('widget', 'My Badge', '![My Badge](https://img.shields.io/badge/Label-Value-blue)'),
```

### Add a new Mermaid diagram

```ts
// src/data/mermaid.ts  →  add via m(category, name, code)
m('flowchart', 'My Flow', `flowchart LR
  A[Start] --> B[Middle] --> C[End]`),
// GitHub renders ```mermaid blocks natively — no image upload needed
```

### Add a new README template

```ts
// src/data/templates.ts  →  push into TEMPLATES[]
{
  id: 'my-template', name: 'My Template', persona: 'developer',
  emoji: '🚀', accent: 'violet',
  md: `# Hi, I'm {{NAME}}\n\n{{ROLE}} · @{{HANDLE}}`,
}
```

### Add a new game

```tsx
// src/games.tsx  →  export a component, then add to GAMES_META[]
export function MyGame() { /* React state + JSX */ }
// ...
{ id: 'mygame', name: 'My Game', emoji: '🎮', cmp: MyGame },
```

---

## 🎨 Features

- **Live SVG code editor** — split code + preview, edit any banner/pet's raw SVG
- **Live Mermaid editor** — 39 diagram templates, edit code, render instantly
- **Live editing** everywhere — sliders, color pickers, inline markdown editor
- **Syntax highlighting** for Markdown & SVG/XML (custom, zero-dependency)
- **Three view modes** for templates & mermaid: preview · edit · source
- **Rename** files before download
- **Search & filter** in every large tab
- **Fully responsive** — mobile, tablet, desktop
- **Animated footer** with waves + floating particles
- **GitHub API loader** — pull any user's name/bio/handle/location/company instantly
- **Transparent backgrounds** — banners & pets blend into any GitHub theme

---

## 📦 Tech

- **React 19** + **Vite 7** + **Tailwind CSS 4**
- Single-file production bundle via `vite-plugin-singlefile`
- Fraunces (display) · Space Grotesk (body) · JetBrains Mono (code)

---

<div align="center">

Made with ❤ by [SudhirDevOps1](https://github.com/SudhirDevOps1) · MIT License · 2026

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&height=100&section=footer" />

</div>

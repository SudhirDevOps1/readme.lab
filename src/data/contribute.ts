// ===== CONTRIBUTE GUIDE — how to add/edit every asset type =====
// Detailed, beginner-friendly, copy-paste ready. Production-grade docs in-app.

export const APP_VERSION = 'v3.1.0';
export const APP_BUILD_DATE = 'February 2026';

export type AddGuide = {
  id: string;
  icon: string;
  title: string;
  file: string;
  arrayName: string;
  difficulty: 'Easy' | 'Medium' | 'Advanced';
  time: string;
  intro: string;
  steps: string[];
  code: string;
  fields: Array<{ key: string; desc: string; example: string }>;
  tips: string[];
};

export const ADD_GUIDES: AddGuide[] = [
  {
    id: 'banner',
    icon: '◼',
    title: 'Add an SVG Banner',
    file: 'src/data/banners.ts',
    arrayName: 'TEMPLATES[]',
    difficulty: 'Medium',
    time: '5 min',
    intro: 'Banners are 800×200 SVGs that auto-generate 6 color variants each. Write ONE function, get 6 banners.',
    steps: [
      'Open the file src/data/banners.ts',
      'Scroll to where t01, t02... functions are defined',
      'Copy an existing t## function and rename it (e.g. t33)',
      'Change the SVG shapes/text inside the template literal',
      'Add your new function name to the TEMPLATES = [...] array at the bottom',
      'Save — refresh the app — your banner appears in all 6 palettes',
    ],
    code: `// 1. Write a template function (p = palette, n = name, r = role, h = handle)
const t33 = (p: Pal, n: string, r: string, h: string) =>
  \`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 200" width="800" height="200">
     <rect width="800" height="200" fill="\${p.bg1}" rx="16"/>
     <circle cx="700" cy="100" r="60" fill="\${p.ac1}" opacity=".3">
       <animate attributeName="r" values="60;70;60" dur="3s" repeatCount="indefinite"/>
     </circle>
     <text x="40" y="90" font-size="42" font-weight="700" fill="\${p.tx}">\${n}</text>
     <text x="40" y="130" font-size="18" fill="\${p.ac1}">\${r}</text>
     <text x="40" y="165" font-size="12" fill="\${p.sub}">@\${h}</text>
   </svg>\`;

// 2. Register it (auto-generates 6 palette variants)
const TEMPLATES = [t01, t02, /* ... */ t32, t33];`,
    fields: [
      { key: 'p.bg1 / p.bg2', desc: 'Background colors', example: '#0f0d1a' },
      { key: 'p.tx', desc: 'Main text color', example: '#f8fafc' },
      { key: 'p.ac1 / p.ac2 / p.ac3', desc: 'Accent colors', example: '#a78bfa' },
      { key: 'p.sub', desc: 'Subtle/muted text', example: '#94a3b8' },
      { key: 'n / r / h', desc: 'Name / Role / Handle placeholders', example: 'Sudhir Singh' },
    ],
    tips: [
      'Use <animate> and <animateTransform> for motion — GitHub renders the static frame but the SVG plays elsewhere.',
      'Keep viewBox "0 0 800 200" so it fits the gallery grid.',
      'Test in the Banners tab — click your banner → live SVG editor lets you tweak instantly.',
    ],
  },
  {
    id: 'premium-banner',
    icon: '🎬',
    title: 'Add a Premium Cinematic Banner',
    file: 'src/data/premiumBanners.ts',
    arrayName: 'RAW[]',
    difficulty: 'Advanced',
    time: '15 min',
    intro: 'Premium banners are large 1000×600 cinematic scenes (like the owl, butterfly, space station). Full gradients, filters & particles.',
    steps: [
      'Open src/data/premiumBanners.ts',
      'Copy a full const svg string (e.g. the owl or butterfly) as a template',
      'Rename the const and edit shapes, gradients, animations',
      'Use __NAME__ __ROLE__ __HANDLE__ as placeholders (they get filled live)',
      'Add an entry to the RAW[] array at the bottom with id, name, style, palette, svg',
      'Save — it appears in the Banners gallery with a "premium-" prefix',
    ],
    code: `// 1. Author a rich scene (use __NAME__ placeholders)
const auroraScene = \`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 600" width="100%" height="100%">
  <defs>
    <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#0a0a1a"/>
      <stop offset="100%" stop-color="#1a1a3e"/>
    </linearGradient>
  </defs>
  <rect width="1000" height="600" fill="url(#sky)"/>
  <text x="500" y="300" text-anchor="middle" font-size="56" fill="#fff">__NAME__</text>
  <text x="500" y="350" text-anchor="middle" font-size="20" fill="#60a5fa">__ROLE__</text>
</svg>\`;

// 2. Register in RAW[]
{ id: 'aurora', name: 'Aurora Night', style: 'cinematic · calm',
  palette: 'blue/purple', svg: auroraScene },`,
    fields: [
      { key: 'id', desc: 'Unique slug (auto-prefixed "premium-")', example: 'aurora' },
      { key: 'name', desc: 'Display name in gallery', example: 'Aurora Night' },
      { key: 'style', desc: 'Short description tags', example: 'cinematic · calm' },
      { key: 'palette', desc: 'Color theme label', example: 'blue/purple' },
      { key: 'svg', desc: 'Full SVG string with __NAME__ etc.', example: '`<svg>…</svg>`' },
    ],
    tips: [
      'For transparent background: skip the full-size <rect> fill, or use fill-opacity.',
      'Add <animate> loops for particles, stars, wing-flaps — see the butterfly example.',
      'Big scenes work at 1000×600. Keep text near center or bottom for README readability.',
    ],
  },
  {
    id: 'pet',
    icon: '🐾',
    title: 'Add an Animated Pet',
    file: 'src/data/pets.ts',
    arrayName: 'morePets[]',
    difficulty: 'Medium',
    time: '8 min',
    intro: 'Pets are 240×240 animated SVG mascots. They support live color, speed & size editing in the app.',
    steps: [
      'Open src/data/pets.ts',
      'Find the morePets[] array (or premiumPets in premiumPets.ts)',
      'Copy an existing pet object and rename id/name/emoji/vibe',
      'Edit the svg function body — it receives { color, speed, scale }',
      'Use petFrame(`...inner svg...`, bgColor) helper wrapper',
      'Save — your pet shows in the Pets tab with full customization',
    ],
    code: `// Pet object: svg is a function receiving customization opts
{
  id: 'axolotl', name: 'Pinky', emoji: '🦎', vibe: 'cute · aquatic',
  svg: ({ color = '#f9a8d4', speed = 2, scale = 1 } = {}) => petFrame(\`
    <g transform="translate(\${w/2*scale} \${h/2*scale}) scale(\${scale})">
      <animateTransform attributeName="transform" type="translate"
        values="\${w/2*scale} \${h/2*scale};\${w/2*scale} \${h/2*scale-4};\${w/2*scale} \${h/2*scale}"
        dur="\${speed}s" repeatCount="indefinite"/>
      <ellipse cx="0" cy="0" rx="50" ry="45" fill="\${color}"/>
      <circle cx="-15" cy="-8" r="5" fill="#0f172a"/>
      <circle cx="15" cy="-8" r="5" fill="#0f172a"/>
    </g>\`, '#2a0a1a'),
}`,
    fields: [
      { key: 'id', desc: 'Unique slug', example: 'axolotl' },
      { key: 'name', desc: 'Pet name', example: 'Pinky' },
      { key: 'emoji', desc: 'Emoji shown in picker', example: '🦎' },
      { key: 'vibe', desc: 'Two-word mood tag', example: 'cute · aquatic' },
      { key: 'color / speed / scale', desc: 'Live-editable in app', example: '#f9a8d4, 2, 1' },
    ],
    tips: [
      'The petFrame helper centers content — draw around origin (0,0).',
      'w and h are 240. Use w/2, h/2 for center positioning.',
      'Add blinking eyes with <animate attributeName="r" .../> for realism.',
    ],
  },
  {
    id: 'readme',
    icon: '§',
    title: 'Add a README Template',
    file: 'src/data/templates.ts',
    arrayName: 'TEMPLATES[]',
    difficulty: 'Easy',
    time: '3 min',
    intro: 'Full profile README markdown templates. Users pick, preview, edit & copy them instantly.',
    steps: [
      'Open src/data/templates.ts',
      'Copy an existing template object',
      'Change id, name, persona, emoji, accent',
      'Write the md field — it is plain markdown with {{NAME}} {{ROLE}} {{HANDLE}} placeholders',
      'Save — appears in the READMEs tab with live rendered preview',
    ],
    code: `{
  id: 'minimalist',
  name: 'Minimalist Pro',
  persona: 'Clean & simple developer profile',
  emoji: '✨',
  accent: 'slate',
  md: \`# Hi, I'm {{NAME}} 👋

**{{ROLE}}** · building things that matter.

- 🔭 Currently working on cool projects
- 🌱 Learning something new every day
- 📫 Reach me: @{{HANDLE}}

![Stats](https://github-readme-stats.vercel.app/api?username={{HANDLE}}&theme=dark)\`
}`,
    fields: [
      { key: 'id', desc: 'Unique slug', example: 'minimalist' },
      { key: 'name', desc: 'Template name', example: 'Minimalist Pro' },
      { key: 'persona', desc: 'Who it suits', example: 'Clean developer profile' },
      { key: 'emoji / accent', desc: 'Icon + color theme', example: '✨ / slate' },
      { key: 'md', desc: 'Full markdown with {{NAME}} etc.', example: '`# Hi…`' },
    ],
    tips: [
      'Placeholders {{NAME}}, {{ROLE}}, {{HANDLE}} auto-fill from identity inputs.',
      'Test in the READMEs tab — preview / edit / source views all work.',
      'Include stat cards, badges & snippets to make it rich.',
    ],
  },
  {
    id: 'snippet',
    icon: '✂',
    title: 'Add a Markdown Snippet',
    file: 'src/data/snippets.ts',
    arrayName: 'SNIPPETS[]',
    difficulty: 'Easy',
    time: '2 min',
    intro: 'Single copy-paste markdown blocks — badges, headers, stat cards, dividers, GIFs.',
    steps: [
      'Open src/data/snippets.ts',
      'Find the category array (headers, badges, stats…) or SNIPPETS[]',
      'Add a new object with cat, label, md',
      'Use {{HANDLE}} {{NAME}} placeholders where needed',
      'Save — appears in the Snippets tab, filterable by category',
    ],
    code: `{
  cat: 'badge',
  label: 'Buy Me A Coffee',
  md: '[![Coffee](https://img.shields.io/badge/Buy_Me_A_Coffee-FFDD00?style=for-the-badge&logo=buymeacoffee&logoColor=black)](https://buymeacoffee.com/{{HANDLE}})'
}`,
    fields: [
      { key: 'cat', desc: 'Category for filtering', example: 'badge' },
      { key: 'label', desc: 'Name shown on the card', example: 'Buy Me A Coffee' },
      { key: 'md', desc: 'Markdown/HTML to copy', example: '[![…](…)](…)' },
    ],
    tips: [
      'Categories: header, badge, stat, divider, social, gif, section...',
      'Use shields.io for badges — customizable colors & logos.',
      'The README Builder lets users stack multiple snippets together.',
    ],
  },
  {
    id: 'mermaid',
    icon: '🧜',
    title: 'Add a Mermaid Diagram',
    file: 'src/data/mermaid.ts',
    arrayName: 'MERMAID_TEMPLATES[]',
    difficulty: 'Easy',
    time: '3 min',
    intro: 'Mermaid diagrams (flowcharts, mindmaps, sequences). GitHub renders them natively in markdown.',
    steps: [
      'Open src/data/mermaid.ts',
      'Add a new object with id, name, category, code',
      'Write mermaid syntax in the code field',
      'Save — appears in the Mermaid tab with LIVE rendering',
    ],
    code: `{
  id: 'ci-flow',
  name: 'CI/CD Pipeline',
  category: 'flowchart',
  code: \`flowchart LR
    A[Push Code] --> B[Run Tests]
    B --> C{Pass?}
    C -->|Yes| D[Deploy]
    C -->|No| E[Fix Bugs]
    E --> A\`
}`,
    fields: [
      { key: 'id', desc: 'Unique slug', example: 'ci-flow' },
      { key: 'name', desc: 'Diagram name', example: 'CI/CD Pipeline' },
      { key: 'category', desc: 'flowchart, mindmap, sequence, pie…', example: 'flowchart' },
      { key: 'code', desc: 'Mermaid syntax', example: 'flowchart LR…' },
    ],
    tips: [
      'GitHub renders ```mermaid blocks automatically — no image needed.',
      'Test live in the Mermaid tab — edit view re-renders instantly.',
      'Categories: flowchart, sequence, class, state, pie, mindmap, gitgraph, timeline.',
    ],
  },
  {
    id: 'library',
    icon: '📦',
    title: 'Add a Library / Tool',
    file: 'src/data/libraries.ts',
    arrayName: 'LIBRARIES[]',
    difficulty: 'Easy',
    time: '2 min',
    intro: 'Open-source libraries with what/when/why/how. Helps devs pick the right tool.',
    steps: [
      'Open src/data/libraries.ts',
      'Add an object to LIBRARIES[]',
      'Fill lang, cat, name, what, when, install, stars',
      'Save — appears in the Learn → Libraries tab, filterable by language',
    ],
    code: `{
  id: 64,
  lang: 'Python',
  cat: 'ML',
  name: 'Scikit-learn',
  what: 'The gold standard for classic machine learning in Python',
  when: 'When you need SVM, RandomForest, k-means without deep learning complexity.',
  install: 'pip install scikit-learn',
  stars: '60k+'
}`,
    fields: [
      { key: 'lang', desc: 'Language/ecosystem', example: 'Python' },
      { key: 'cat', desc: 'Category', example: 'ML' },
      { key: 'name', desc: 'Library name', example: 'Scikit-learn' },
      { key: 'what', desc: 'One-line description', example: 'ML gold standard' },
      { key: 'when', desc: 'When to use it', example: 'When you need classic ML…' },
      { key: 'install', desc: 'Install command', example: 'pip install scikit-learn' },
    ],
    tips: [
      'Only add real, open-source libraries.',
      'The "when" field is the most valuable — explain the use case clearly.',
      'Get star counts from the GitHub repo page.',
    ],
  },
  {
    id: 'liveproject',
    icon: '🚀',
    title: 'Add a Live Project (real repo)',
    file: 'src/data/libraries.ts',
    arrayName: 'LIVE_PROJECTS[]',
    difficulty: 'Easy',
    time: '2 min',
    intro: 'Real open-source repos to study. Great for learning production patterns.',
    steps: [
      'Open src/data/libraries.ts',
      'Add an object to LIVE_PROJECTS[]',
      'Fill title, tech, stars, repo (GitHub URL), learn',
      'Save — appears in the Learn → Live Projects tab',
    ],
    code: `{
  id: 25,
  title: 'Pocketbase (single-file backend)',
  tech: 'Go + SQLite',
  stars: '40k+',
  repo: 'https://github.com/pocketbase/pocketbase',
  learn: 'Single-binary backend: auth, realtime, file storage in one Go exe'
}`,
    fields: [
      { key: 'title', desc: 'Project name', example: 'Pocketbase' },
      { key: 'tech', desc: 'Tech stack', example: 'Go + SQLite' },
      { key: 'stars', desc: 'GitHub stars', example: '40k+' },
      { key: 'repo', desc: 'Full GitHub URL', example: 'https://github.com/…' },
      { key: 'learn', desc: 'What you learn from it', example: 'Single-binary backend…' },
    ],
    tips: [
      'Only link real, active repositories.',
      'The "learn" field explains what pattern/skill the repo teaches.',
      'Prefer well-documented projects for beginners.',
    ],
  },
  {
    id: 'roadmap',
    icon: '🛤',
    title: 'Add a Roadmap',
    file: 'src/data/guides.ts',
    arrayName: 'ROADMAPS[]',
    difficulty: 'Medium',
    time: '10 min',
    intro: 'Role-based ordered learning paths (Web Dev, ML, Mobile...).',
    steps: [
      'Open src/data/guides.ts',
      'Add an object to ROADMAPS[]',
      'Set id, role, desc, and a steps[] array',
      'Each step has title, detail, tag',
      'Save — appears in the Learn → Roadmaps tab as a timeline',
    ],
    code: `{
  id: 'rust-dev',
  role: 'Rust Developer',
  desc: 'From zero to production Rust, 3-6 months.',
  steps: [
    { title: 'Rust Core', detail: 'Ownership, borrowing, lifetimes', tag: 'Fundamentals' },
    { title: 'Cargo & Crates', detail: 'Package manager, dependencies', tag: 'Tooling' },
    { title: 'Async', detail: 'tokio, channels, futures', tag: 'Advanced' },
  ]
}`,
    fields: [
      { key: 'id', desc: 'Unique slug', example: 'rust-dev' },
      { key: 'role', desc: 'Career/role name', example: 'Rust Developer' },
      { key: 'desc', desc: 'Path summary + timeframe', example: 'From zero…3-6 months' },
      { key: 'steps[]', desc: 'Ordered {title, detail, tag}', example: '{ title, detail, tag }' },
    ],
    tips: [
      'Order steps from beginner to advanced.',
      'Keep 6-10 steps per roadmap for a clean timeline.',
      'Tags group step types: Fundamentals, Tooling, Advanced...',
    ],
  },
  {
    id: 'teacher',
    icon: '👨‍🏫',
    title: 'Add a Teacher / Channel',
    file: 'src/data/guides.ts',
    arrayName: 'TEACHERS[]',
    difficulty: 'Easy',
    time: '2 min',
    intro: 'YouTube educators (English + Hindi) with teaching style notes.',
    steps: [
      'Open src/data/guides.ts',
      'Add an object to TEACHERS[]',
      'Fill name, channel, lang, explic, subjects[]',
      'Save — appears in the Learn → Teachers tab, filterable by language',
    ],
    code: `{
  id: 29,
  name: 'Bro Code',
  channel: 'https://youtube.com/@BroCodez',
  lang: 'English',
  explic: 'Full-length beginner tutorials, calm pacing, lots of examples.',
  subjects: ['Java', 'Python', 'JavaScript']
}`,
    fields: [
      { key: 'name', desc: 'Teacher/channel name', example: 'Bro Code' },
      { key: 'channel', desc: 'YouTube URL', example: 'https://youtube.com/@…' },
      { key: 'lang', desc: 'English or Hindi', example: 'English' },
      { key: 'explic', desc: 'Teaching style note', example: 'Calm pacing, examples' },
      { key: 'subjects[]', desc: 'Topics they cover', example: "['Java', 'Python']" },
    ],
    tips: [
      'Add both English and Hindi teachers for wider reach.',
      'The "explic" field helps learners pick the right teacher.',
      'List 2-4 subjects for good filtering.',
    ],
  },
  {
    id: 'project-idea',
    icon: '💡',
    title: 'Add a Project Idea',
    file: 'src/data/guides.ts',
    arrayName: 'PROJECT_IDEAS[]',
    difficulty: 'Easy',
    time: '1 min',
    intro: 'Build-ready project ideas by language & difficulty.',
    steps: [
      'Open src/data/guides.ts',
      'Add an object to PROJECT_IDEAS[]',
      'Fill title, tech, level, desc',
      'Save — appears in the Learn → Project Ideas tab',
    ],
    code: `{
  id: 315,
  title: 'Voice Assistant',
  tech: 'Python + Vosk + Silero',
  level: 'Advanced',
  desc: 'Offline voice command recognition with smart-home control'
}`,
    fields: [
      { key: 'title', desc: 'Project name', example: 'Voice Assistant' },
      { key: 'tech', desc: 'Tech stack', example: 'Python + Vosk' },
      { key: 'level', desc: 'Beginner / Intermediate / Advanced / Expert', example: 'Advanced' },
      { key: 'desc', desc: 'One-line description', example: 'Offline voice control…' },
    ],
    tips: [
      'Level colors are automatic (green→red by difficulty).',
      'Be specific with tech so learners know what to use.',
      'Keep descriptions to one clear sentence.',
    ],
  },
  {
    id: 'game',
    icon: '▶',
    title: 'Add a Playable Game',
    file: 'src/games.tsx',
    arrayName: 'GAMES_META[]',
    difficulty: 'Advanced',
    time: '20 min',
    intro: 'Fully playable React mini-games rendered in the Games tab.',
    steps: [
      'Open src/games.tsx',
      'Write a new React component using useState/useEffect',
      'Export it and add to GAMES_META[]',
      'Set id, name, emoji, and the component reference',
      'Save — playable instantly in the Games tab',
    ],
    code: `// 1. Build the game component
export function CoinFlip() {
  const [side, setSide] = useState<'H'|'T'|null>(null);
  return (
    <div className="text-center">
      <div className="text-5xl mb-3">{side === 'H' ? '🪙' : side === 'T' ? '💰' : '❓'}</div>
      <button onClick={() => setSide(Math.random() > 0.5 ? 'H' : 'T')}
        className="rounded bg-cyan-500 px-4 py-2">Flip</button>
    </div>
  );
}

// 2. Register it
export const GAMES_META = [
  /* ...existing games... */
  { id: 'coinflip', name: 'Coin Flip', emoji: '🪙', component: CoinFlip },
];`,
    fields: [
      { key: 'id', desc: 'Unique slug', example: 'coinflip' },
      { key: 'name', desc: 'Game name', example: 'Coin Flip' },
      { key: 'emoji', desc: 'Icon in the card', example: '🪙' },
      { key: 'component', desc: 'The React component', example: 'CoinFlip' },
    ],
    tips: [
      'Keep games self-contained with local useState.',
      'Use Tailwind classes for styling consistency.',
      'Games are fully interactive — test by clicking in the Games tab.',
    ],
  },
];

// Quick-reference: which file to edit for what
export const FILE_MAP = [
  { file: 'src/data/banners.ts', holds: 'Standard 800×200 SVG banner templates (t01..t32)' },
  { file: 'src/data/premiumBanners.ts', holds: 'Cinematic 1000×600 premium banners (owl, butterfly...)' },
  { file: 'src/data/pets.ts', holds: 'Standard animated pets (morePets array)' },
  { file: 'src/data/premiumPets.ts', holds: 'Premium ornate pets' },
  { file: 'src/data/templates.ts', holds: 'Full README markdown templates' },
  { file: 'src/data/snippets.ts', holds: 'Copy-paste markdown snippets (badges, headers...)' },
  { file: 'src/data/mermaid.ts', holds: 'Mermaid diagram templates' },
  { file: 'src/data/libraries.ts', holds: 'Libraries (LIBRARIES) + real repos (LIVE_PROJECTS)' },
  { file: 'src/data/guides.ts', holds: 'Resources, roadmaps, teachers, project ideas' },
  { file: 'src/games.tsx', holds: 'Playable React mini-games' },
  { file: 'src/App.tsx', holds: 'Main app, tabs, layout (rarely need to touch)' },
];

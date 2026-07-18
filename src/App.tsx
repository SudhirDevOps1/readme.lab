import { useMemo, useState } from 'react';
import { BANNERS_LIGHT_BG as BANNERS, fillBanner } from './data/banners';
import { PREMIUM_BANNERS, fillPremiumBanner } from './data/premiumBanners';
import { PETS } from './data/pets';
import { PREMIUM_PETS, renderPremiumPet } from './data/premiumPets';
import { GAMES_META } from './games';
import { TEMPLATES, fillTemplate } from './data/templates';
import { SNIPPETS, SNIPPET_CATEGORIES, fillSnippet } from './data/snippets';
import { CodeBlock } from './components/CodeBlock';
import { SiteFooter } from './components/SiteFooter';
import { SvgEditor } from './components/SvgEditor';
import { MermaidView } from './components/MermaidView';
import { MERMAID_TEMPLATES, MERMAID_CATEGORIES, fillMermaid, mermaidToMarkdown } from './data/mermaid';
import { LEARNING_RESOURCES, ROADMAPS, TEACHERS, PROJECT_IDEAS, levelColor } from './data/guides';
import { LIBRARIES, LIVE_PROJECTS, LIBRARY_LANGS } from './data/libraries';
import { ADD_GUIDES, FILE_MAP, APP_VERSION, APP_BUILD_DATE } from './data/contribute';

type Tab = 'generator' | 'banners' | 'templates' | 'snippets' | 'pets' | 'mermaid' | 'games' | 'stats' | 'statcards' | 'badges' | 'learn' | 'contribute';

// Lightweight README markdown → HTML preview (renders images, headings, links, lists)
function renderReadmePreview(md: string): string {
  let h = md
    .replace(/^#{2}\s+(.*)$/gm, '<h2>$1</h2>')
    .replace(/^#{1}\s+(.*)$/gm, '<h1>$1</h1>')
    .replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1"/>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noreferrer">$1</a>')
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/`([^`]+)`/g, '<code style="background:#1e293b;padding:1px 4px;border-radius:3px;color:#a3e635">$1</code>')
    .replace(/^-\s+(.*)$/gm, '<li>$1</li>');
  h = h.replace(/(<li>[\s\S]*?<\/li>\n?)+/g, m => `<ul>${m}</ul>`);
  return h;
}

const STAT_THEMES = ['default','dark','radical','merko','gruvbox','tokyonight','onedark','cobalt','synthwave','highcontrast','dracula','prussian','monokai','vue','vue-dark','shades-of-purple','nightowl','buefy','blue-green','algolia','great-gatsby','darcula','bear','solarized-dark','solarized-light','chartreuse-dark','nord','gotham','material-palenight','graywhite','vision-friendly-dark','ayu-mirage','calm','flag-india','omni','react','jolly','maroongold','yeblu','blueberry','slateorange','kacho_ga','outrun','ocean_dark','city_lights','github_dark','github','discord','aura_dark','panda','noctis_minimus','cobalt2','swift','aura','apprentice','moltack','codeSTACKr','rose_pine','catppuccin_latte','catppuccin_mocha','date_night','one_dark_pro','rose','holi','neon','blue_navy','calm_pink','ambient_gradient','react-dark','github_dark_dimmed','github_compact','transparent','shadow_red','shadow_green','shadow_blue','dark-violet','github_light','react-light','midnight-purple','light'];

const BADGE_COLORS = ['000000','ffffff','FF0000','FF4500','FF6B35','FFA500','FFD700','FFFF00','ADFF2F','00FF00','00FA9A','00CED1','00BFFF','1E90FF','4169E1','0000FF','4B0082','8A2BE2','9400D3','FF00FF','FF1493','FF69B4','FFB6C1','DC143C','B22222','800000','808000','006400','2F4F4F','191970','483D8B','2c3e50','34495e','7f8c8d','95a5a6','bdc3c7','ecf0f1','e74c3c','e67e22','f1c40f','2ecc71','1abc9c','3498db','9b59b6','34495e'];

// ============ Mermaid sub-component ============
function MermaidTab({ name, role, handle, copied, onCopy, onDownload }: {
  name: string; role: string; handle: string;
  copied: string | null;
  onCopy: (t: string, id: string) => void;
  onDownload: (t: string, f: string, m: string) => void;
}) {
  const [active, setActive] = useState<string>(MERMAID_TEMPLATES[0].id);
  const [cat, setCat] = useState('all');
  const [search, setSearch] = useState('');
  const [edited, setEdited] = useState<Record<string, string>>({});
  const [view, setView] = useState<'preview' | 'edit' | 'source'>('preview');
  const [title, setTitle] = useState('diagram');

  const list = MERMAID_TEMPLATES.filter(t => {
    if (cat !== 'all' && t.cat !== cat) return false;
    if (search && !t.name.toLowerCase().includes(search.toLowerCase()) && !t.cat.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });
  const current = MERMAID_TEMPLATES.find(t => t.id === active) || MERMAID_TEMPLATES[0];
  const base = edited[current.id] ?? current.code;
  const filled = fillMermaid(base, { name, role, handle });
  const md = mermaidToMarkdown(filled);

  return (
    <div className="grid gap-5 lg:grid-cols-[280px_1fr]">
      {/* sidebar */}
      <div className="rounded-2xl border border-slate-800 bg-[#12151a] p-3 lg:sticky lg:top-20 lg:self-start lg:max-h-[calc(100vh-120px)] lg:overflow-y-auto">
        <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="search diagrams…" className="mb-2 w-full rounded-lg border border-slate-800 bg-[#0b0d10] px-3 py-2 text-xs text-white placeholder-slate-600 focus:border-amber-500 focus:outline-none"/>
        <div className="mb-2 flex flex-wrap gap-1">
          <button onClick={()=>setCat('all')} className={`rounded px-2 py-1 font-mono text-[9px] ${cat==='all'?'bg-amber-500 text-[#0b0d10]':'bg-slate-800 text-slate-400'}`}>all</button>
          {MERMAID_CATEGORIES.map(c=>(
            <button key={c} onClick={()=>setCat(c)} className={`rounded px-2 py-1 font-mono text-[9px] ${cat===c?'bg-amber-500 text-[#0b0d10]':'bg-slate-800 text-slate-400 hover:text-white'}`}>{c}</button>
          ))}
        </div>
        <div className="space-y-1">
          {list.map(t=>(
            <button key={t.id} onClick={()=>{setActive(t.id); setView('preview');}} className={`flex w-full items-center gap-2 rounded-lg p-2 text-left transition-all ${active===t.id?'bg-gradient-to-br from-amber-400 to-lime-400 text-[#0b0d10]':'text-slate-300 hover:bg-slate-800'}`}>
              <span className="rounded bg-black/20 px-1 py-0.5 font-mono text-[8px]">{t.cat}</span>
              <span className="text-xs font-bold">{t.name}{edited[t.id]!==undefined && ' •'}</span>
            </button>
          ))}
        </div>
        <div className="mt-2 text-center font-mono text-[10px] text-slate-500">{list.length} of {MERMAID_TEMPLATES.length}</div>
      </div>

      {/* editor + preview */}
      <div className="rounded-2xl border border-slate-800 bg-[#12151a] p-5">
        <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className="text-lg">🧜</span>
              <input value={title} onChange={e=>setTitle(e.target.value)} className="w-36 bg-transparent font-display text-xl text-white border-b border-dashed border-slate-700 focus:border-amber-400 focus:outline-none"/>
              <span className="font-mono text-[11px] text-slate-600">.md ✎</span>
            </div>
            <p className="font-mono text-[11px] text-slate-500 mt-1">{current.name} · {current.cat} diagram · GitHub renders this natively</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button onClick={()=>onCopy(md, `mmd-${current.id}`)} className={copied===`mmd-${current.id}`?'rounded-lg bg-lime-400 px-3 py-2 text-xs font-bold text-[#0b0d10]':'rounded-lg bg-amber-500 px-3 py-2 text-xs font-bold text-[#0b0d10] hover:bg-amber-400'}>{copied===`mmd-${current.id}`?'✓ copied':'⎘ copy markdown'}</button>
            <button onClick={()=>onDownload(md, `${title||'diagram'}.md`, 'text/markdown')} className="rounded-lg bg-slate-800 px-3 py-2 text-xs text-slate-200 hover:bg-slate-700">↓ .md</button>
          </div>
        </div>
        <div className="mb-3 flex gap-1 rounded-lg border border-slate-800 bg-[#0b0d10] p-1 w-fit">
          {(['preview','edit','source'] as const).map(v=>(
            <button key={v} onClick={()=>setView(v)} className={`rounded-md px-3 py-1.5 font-mono text-[11px] transition-all ${view===v?'bg-gradient-to-br from-amber-400 to-lime-400 font-bold text-[#0b0d10]':'text-slate-400 hover:text-white'}`}>
              {v==='preview'?'👁 preview':v==='edit'?'✎ edit':'</> markdown'}
            </button>
          ))}
          {edited[current.id]!==undefined && <button onClick={()=>setEdited(p=>{const n={...p};delete n[current.id];return n;})} className="rounded-md px-3 py-1.5 font-mono text-[11px] text-red-400 hover:bg-slate-800">↺ revert</button>}
        </div>
        {view==='preview' && (
          <div className="rounded-lg border border-slate-800 bg-[#0b0d10] p-6">
            <MermaidView code={filled}/>
          </div>
        )}
        {view==='edit' && (
          <div>
            <div className="mb-2 font-mono text-[10px] text-slate-500">edit the mermaid code — preview updates live. use <span className="text-amber-400">{'{{NAME}}'}</span> <span className="text-amber-400">{'{{ROLE}}'}</span> placeholders.</div>
            <div className="grid gap-3 lg:grid-cols-2">
              <textarea value={base} onChange={e=>setEdited(p=>({...p, [current.id]: e.target.value}))} spellCheck={false}
                className="h-[360px] w-full rounded-lg border border-slate-800 bg-[#0b0d10] p-3 font-mono text-[12px] leading-relaxed text-slate-200 focus:border-amber-500 focus:outline-none resize-none"/>
              <div className="rounded-lg border border-slate-800 bg-[#0b0d10] p-4"><MermaidView code={filled}/></div>
            </div>
          </div>
        )}
        {view==='source' && (
          <CodeBlock code={md} lang="md" filename={`${title||'diagram'}.md`} maxHeight={400} onDownload={()=>onDownload(md, `${title||'diagram'}.md`, 'text/markdown')}/>
        )}
      </div>
    </div>
  );
}

// ============ Banners sub-component ============
function BannerTab({ name, role, handle, copied, onCopy, onDownload }: {
  name: string; role: string; handle: string;
  copied: string | null;
  onCopy: (t: string, id: string) => void;
  onDownload: (t: string, f: string, m: string) => void;
}) {
  const [search, setSearch] = useState('');
  const [active, setActive] = useState<string | null>(null);
  const [rename, setRename] = useState('');

  // Combine both standard ({{NAME}}) + premium (already filled with __NAME__) banners.
  // Premium banners prepend their fields; standard banners are filled at render via fillBanner.
  const allBanners = [
    ...BANNERS,
    ...PREMIUM_BANNERS.map(b => ({ ...b, svg: fillPremiumBanner(b.svg, { name, role, handle }) })),
  ];
  const filtered = allBanners.filter(b =>
    !search || b.name.toLowerCase().includes(search.toLowerCase()) || b.style.toLowerCase().includes(search.toLowerCase()) || b.palette.toLowerCase().includes(search.toLowerCase())
  );
  const current = active ? allBanners.find(b => b.id === active) : null;

  if (current) {
    // Premium banners (id starts with 'premium-' OR svg contains __NAME__) already have
    // the name/role/handle filled in. Standard banners use fillBanner at render time.
    const isPremium = current.id.startsWith('premium-') || current.svg.includes('__NAME__');
    const filled = isPremium ? current.svg : fillBanner(current.svg, { name, role, handle });
    const fname = (rename || current.id).toLowerCase().replace(/\s+/g,'-');
    const md = `![${current.name}](https://raw.githubusercontent.com/${handle}/${handle}/main/${fname}.svg)`;
    return (
      <div>
        <button onClick={()=>{setActive(null); setRename('');}} className="mb-4 rounded-lg bg-slate-800 px-3 py-1.5 font-mono text-[11px] text-slate-300 hover:bg-slate-700">← back to gallery</button>
        <div className="grid gap-5 lg:grid-cols-2">
          <div>
            <div className="rounded-2xl border border-slate-800 bg-[#0b0d10] p-3">
              <div className="overflow-hidden rounded-lg [&>svg]:w-full [&>svg]:h-auto" dangerouslySetInnerHTML={{__html: filled}}/>
            </div>
            <div className="mt-3 flex items-center gap-2">
              <span className="text-lg">🖼</span>
              <input value={rename} onChange={e=>setRename(e.target.value)} placeholder={current.id} className="w-40 bg-transparent font-display text-lg text-white border-b border-dashed border-slate-700 focus:border-amber-400 focus:outline-none"/>
              <span className="font-mono text-[11px] text-slate-600">.svg ✎ rename</span>
            </div>
            <p className="mt-1 font-mono text-[11px] text-slate-500">{current.name} · {current.style} · {current.palette}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              <button onClick={()=>onCopy(filled,`bsvg-${current.id}`)} className={copied===`bsvg-${current.id}`?'rounded-lg bg-lime-400 px-3 py-2 text-xs font-bold text-[#0b0d10]':'rounded-lg bg-amber-500 px-3 py-2 text-xs font-bold text-[#0b0d10] hover:bg-amber-400'}>{copied===`bsvg-${current.id}`?'✓ copied':'⎘ copy SVG'}</button>
              <button onClick={()=>onCopy(md,`bmd-${current.id}`)} className={copied===`bmd-${current.id}`?'rounded-lg bg-lime-400 px-3 py-2 text-xs font-bold text-[#0b0d10]':'rounded-lg bg-slate-800 px-3 py-2 text-xs text-slate-200 hover:bg-slate-700'}>{copied===`bmd-${current.id}`?'✓':'⎘ MD'}</button>
              <button onClick={()=>onDownload(filled,`${fname}.svg`,'image/svg+xml')} className="rounded-lg bg-slate-800 px-3 py-2 text-xs text-slate-200 hover:bg-slate-700">↓ .svg</button>
            </div>
          </div>
          <div className="space-y-3">
            <div>
              <div className="mb-2 font-mono text-[10px] uppercase tracking-widest text-slate-500">embed in README.md</div>
              <CodeBlock code={md} lang="md" filename="README.md" maxHeight={80} showLineNumbers={false}/>
            </div>
            <div className="rounded-xl border border-lime-500/20 bg-lime-500/5 p-3">
              <p className="text-[11px] text-lime-200/80"><span className="font-bold">💡</span> Use the live editor below to tweak this SVG's code — change colors, animation speeds, shapes — and preview instantly before downloading.</p>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <div className="mb-2 font-mono text-[10px] uppercase tracking-widest text-slate-500">✎ live SVG editor</div>
          <SvgEditor key={current.id} initialSvg={filled} filename={`${fname}.svg`} onCopy={onCopy} onDownload={onDownload} copied={copied}/>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-4 flex items-center gap-2">
        <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="search banners…" className="rounded-lg border border-slate-800 bg-[#0b0d10] px-3 py-2 text-xs text-white placeholder-slate-600 focus:border-amber-500 focus:outline-none w-56"/>
        <span className="font-mono text-[11px] text-slate-500">{filtered.length} of {allBanners.length} · click any to open editor</span>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        {filtered.map(b => {
          const isPremium = b.id.startsWith('premium-') || b.svg.includes('__NAME__');
          const filled = isPremium ? b.svg : fillBanner(b.svg, { name, role, handle });
          return (
            <article key={b.id} className="group overflow-hidden rounded-2xl border border-slate-800 bg-[#12151a] transition-all hover:border-amber-500/40">
              <button onClick={()=>setActive(b.id)} className="relative block aspect-[1180/610] w-full overflow-hidden bg-[#0b0d10]">
                <div className="absolute inset-0 [&>svg]:w-full [&>svg]:h-full" dangerouslySetInnerHTML={{ __html: filled }} />
                <div className="absolute inset-0 flex items-center justify-center bg-[#0b0d10]/0 opacity-0 transition-all group-hover:bg-[#0b0d10]/40 group-hover:opacity-100">
                  <span className="rounded-lg bg-amber-500 px-4 py-2 font-mono text-xs font-bold text-[#0b0d10]">✎ open editor</span>
                </div>
              </button>
              <div className="border-t border-slate-800 p-4">
                <div className="mb-3 flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-display text-lg font-bold text-white">{b.name}</h3>
                    <p className="font-mono text-[11px] text-slate-500">{b.style} · {b.palette}</p>
                  </div>
                  <span className="shrink-0 rounded-md bg-slate-800 px-2 py-1 font-mono text-[10px] text-amber-400">#{b.id}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <button onClick={()=>onCopy(filled, `svg-${b.id}`)} className={copied===`svg-${b.id}`?'rounded-md bg-lime-400 px-3 py-1.5 text-xs font-bold text-[#0b0d10]':'rounded-md bg-amber-500 px-3 py-1.5 text-xs font-bold text-[#0b0d10] hover:bg-amber-400'}>{copied===`svg-${b.id}`?'✓ copied':'⎘ SVG'}</button>
                  <button onClick={()=>onDownload(filled, `${b.id}.svg`, 'image/svg+xml')} className="rounded-md bg-slate-800 px-3 py-1.5 text-xs text-slate-200 hover:bg-slate-700">↓ download</button>
                  <button onClick={()=>setActive(b.id)} className="rounded-md bg-slate-800 px-3 py-1.5 text-xs text-slate-200 hover:bg-slate-700">✎ edit</button>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}

// ============ Snippets sub-component ============
function SnippetTab({ name, role, handle, location, email, company, website, copied, onCopy, onDownload }: {
  name: string; role: string; handle: string;
  location?: string; email?: string; company?: string; website?: string;
  copied: string | null;
  onCopy: (t: string, id: string) => void;
  onDownload: (t: string, f: string, m: string) => void;
}) {
  const [filterCat, setFilterCat] = useState('all');
  const [search, setSearch] = useState('');
  const [expanded, setExpanded] = useState<string | null>(null);
  const [bucket, setBucket] = useState<string[]>([]);
  const idn = { name, role, handle, location, email, company, website };

  const filtered = SNIPPETS.filter(s => {
    if (filterCat !== 'all' && s.cat !== filterCat) return false;
    if (search && !s.label.toLowerCase().includes(search.toLowerCase()) && !s.cat.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  const readme = bucket.map(id => {
    const sn = SNIPPETS.find(s => s.id === id);
    return sn ? fillSnippet(sn.md, idn) : '';
  }).join('\n\n');

  const isImageSnippet = (md: string) => /^!\[|^<p|^<img|^<a|^\[!\[/.test(md.trim());

  return (
    <div className="grid gap-5 lg:grid-cols-[1fr_320px]">
      <div>
        <div className="mb-4 flex flex-wrap gap-2 items-center">
          <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="search snippets…" className="rounded-lg border border-slate-800 bg-[#0b0d10] px-3 py-2 text-xs text-white placeholder-slate-600 focus:border-amber-500 focus:outline-none w-48"/>
          <button onClick={()=>setFilterCat('all')} className={`rounded-md px-3 py-1.5 text-[11px] font-medium transition-all ${filterCat==='all'?'bg-amber-500 text-[#0b0d10]':'bg-slate-800 text-slate-400 hover:text-white'}`}>All ({SNIPPETS.length})</button>
          {SNIPPET_CATEGORIES.map(c=>{
            const count = SNIPPETS.filter(s=>s.cat===c).length;
            return <button key={c} onClick={()=>setFilterCat(c)} className={`rounded-md px-3 py-1.5 text-[11px] font-medium transition-all ${filterCat===c?'bg-amber-500 text-[#0b0d10]':'bg-slate-800 text-slate-400 hover:text-white'}`}>{c} ({count})</button>;
          })}
        </div>
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {filtered.map(s => {
            const filled = fillSnippet(s.md, idn);
            const inBucket = bucket.includes(s.id);
            return (
              <article key={s.id} className="rounded-xl border border-slate-800 bg-[#12151a] p-3 hover:border-amber-500/40 transition-all">
                <div className="mb-2 flex items-center justify-between gap-1">
                  <div className="min-w-0">
                    <span className="rounded bg-slate-800 px-1.5 py-0.5 font-mono text-[9px] text-amber-400 mr-1.5">{s.cat}</span>
                    <span className="text-xs font-medium text-white">{s.label}</span>
                  </div>
                  <div className="flex shrink-0 gap-1">
                    <button onClick={()=>setBucket(b=>inBucket?b.filter(x=>x!==s.id):[...b,s.id])} title="add to README builder" className={`rounded px-1.5 py-1 text-[10px] font-bold transition-all ${inBucket?'bg-lime-400 text-[#0b0d10]':'bg-slate-800 text-slate-300 hover:bg-slate-700'}`}>{inBucket?'−':'+'}</button>
                    <button onClick={()=>onCopy(filled, s.id)} className={`rounded px-2 py-1 text-[10px] font-bold transition-all ${copied===s.id?'bg-lime-400 text-[#0b0d10]':'bg-slate-800 text-slate-300 hover:bg-slate-700'}`}>{copied===s.id?'✓':'copy'}</button>
                  </div>
                </div>
                {/* live render preview for image-based snippets */}
                {isImageSnippet(s.md) && (
                  <div className="mb-2 overflow-hidden rounded bg-[#0b0d10] p-2 min-h-[28px] flex items-center [&_img]:max-h-8 [&_img]:inline-block" dangerouslySetInnerHTML={{__html: filled.replace(/\{\{HANDLE\}\}/g,handle)}}/>
                )}
                <button onClick={()=>setExpanded(expanded===s.id?null:s.id)} className="w-full text-left">
                  <pre className="overflow-hidden rounded bg-[#0b0d10] p-2 font-mono text-[10px] leading-relaxed text-slate-400 max-h-16">{filled.length > 160 ? filled.slice(0,160)+'…' : filled}</pre>
                </button>
                {expanded===s.id && (
                  <div className="mt-2">
                    <CodeBlock code={filled} lang="md" filename={`${s.label.toLowerCase().replace(/\s+/g,'-')}.md`} maxHeight={200} showLineNumbers={false} onDownload={()=>onDownload(filled,`${s.id}.md`,'text/markdown')}/>
                  </div>
                )}
              </article>
            );
          })}
        </div>
        <div className="mt-4 text-center font-mono text-[11px] text-slate-500">
          showing {filtered.length} of {SNIPPETS.length} snippets · click a snippet to expand · <span className="text-amber-400">+</span> adds to README builder →
        </div>
      </div>

      {/* README builder */}
      <aside className="lg:sticky lg:top-20 lg:self-start">
        <div className="rounded-2xl border border-lime-500/30 bg-[#12151a] p-4">
          <div className="mb-2 flex items-center justify-between">
            <h3 className="font-display text-sm font-bold text-lime-300">🛠 README Builder</h3>
            <span className="font-mono text-[10px] text-slate-500">{bucket.length} blocks</span>
          </div>
          <p className="mb-3 text-[11px] text-slate-400">Click <span className="text-lime-400">+</span> on any snippet to stack it here, then copy or download your custom README.</p>
          {bucket.length === 0 ? (
            <div className="rounded-lg border border-dashed border-slate-800 py-8 text-center font-mono text-[11px] text-slate-600">no blocks yet</div>
          ) : (
            <>
              <div className="mb-3 space-y-1 max-h-40 overflow-y-auto">
                {bucket.map((id,i)=>{
                  const sn = SNIPPETS.find(s=>s.id===id);
                  return (
                    <div key={id} className="flex items-center gap-1 rounded bg-[#0b0d10] px-2 py-1">
                      <span className="font-mono text-[10px] text-slate-500">{i+1}.</span>
                      <span className="min-w-0 flex-1 truncate text-[11px] text-slate-300">{sn?.label}</span>
                      <button onClick={()=>setBucket(b=>{const n=[...b];if(i>0){[n[i-1],n[i]]=[n[i],n[i-1]];}return n;})} className="text-slate-500 hover:text-amber-400 text-[10px]">↑</button>
                      <button onClick={()=>setBucket(b=>b.filter(x=>x!==id))} className="text-slate-500 hover:text-red-400 text-[10px]">✕</button>
                    </div>
                  );
                })}
              </div>
              <div className="flex gap-2 mb-3">
                <button onClick={()=>onCopy(readme,'readme-build')} className={copied==='readme-build'?'flex-1 rounded-lg bg-lime-400 px-3 py-2 text-xs font-bold text-[#0b0d10]':'flex-1 rounded-lg bg-amber-500 px-3 py-2 text-xs font-bold text-[#0b0d10] hover:bg-amber-400'}>{copied==='readme-build'?'✓ copied':'⎘ copy README'}</button>
                <button onClick={()=>onDownload(readme,'README.md','text/markdown')} className="rounded-lg bg-slate-800 px-3 py-2 text-xs text-slate-200 hover:bg-slate-700">↓</button>
                <button onClick={()=>setBucket([])} className="rounded-lg bg-slate-800 px-3 py-2 text-xs text-red-400 hover:bg-slate-700">clear</button>
              </div>
              <CodeBlock code={readme} lang="md" filename="README.md" maxHeight={220} showLineNumbers={false}/>
            </>
          )}
        </div>
      </aside>
    </div>
  );
}

// ============ Pets sub-component ============
function PetTab({ handle, copied, onCopy, onDownload }: {
  name: string; role: string; handle: string;
  copied: string | null;
  onCopy: (t: string, id: string) => void;
  onDownload: (t: string, f: string, m: string) => void;
}) {
  const [active, setActive] = useState<string>(PETS[0].id);
  const [search, setSearch] = useState('');
  const [petColor, setPetColor] = useState('');
  const [petSpeed, setPetSpeed] = useState(2);
  const [petScale, setPetScale] = useState(1);
  const [customName, setCustomName] = useState('');

  // Combine regular + premium pets
  const allPets = [...PETS, ...PREMIUM_PETS];
  const current = allPets.find(p => p.id === active) || allPets[0];
  const displayName = customName || current.name;
  const fileName = displayName.toLowerCase().replace(/\s+/g,'-');
  const svgStr = renderPremiumPet(current as any, {
    color: petColor || undefined,
    speed: petSpeed,
    scale: petScale,
  });
  const md = `![${displayName}](https://raw.githubusercontent.com/${handle}/${handle}/main/${fileName}.svg)`;

  const filtered = allPets.filter(p =>
    !search || p.name.toLowerCase().includes(search.toLowerCase()) || p.vibe.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="grid gap-5 lg:grid-cols-[280px_1fr]">
      <div className="rounded-2xl border border-slate-800 bg-[#12151a] p-3 lg:sticky lg:top-20 lg:self-start lg:max-h-[calc(100vh-120px)] lg:overflow-y-auto">
        <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="search pets…" className="mb-3 w-full rounded-lg border border-slate-800 bg-[#0b0d10] px-3 py-2 text-xs text-white placeholder-slate-600 focus:border-amber-500 focus:outline-none"/>
        <div className="grid grid-cols-3 gap-1.5">
          {filtered.map(p => (
            <button key={p.id} onClick={()=>{setActive(p.id); setPetColor(''); setPetSpeed(2); setPetScale(1);}} className={`aspect-square rounded-lg text-lg transition-all ${active===p.id?'bg-gradient-to-br from-amber-400 to-lime-400 scale-95':'bg-slate-900 hover:bg-slate-800'}`}>
              {p.emoji || '🐾'}
            </button>
          ))}
        </div>
        <div className="mt-3 text-center font-mono text-[10px] text-slate-500">{filtered.length} of {allPets.length} pets</div>
      </div>
      <div className="rounded-2xl border border-slate-800 bg-[#12151a] p-5">
        <div className="mb-4 flex flex-col sm:flex-row items-start justify-between gap-3">
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className="text-xl">{current.emoji || '🐾'}</span>
              <input value={customName} onChange={e=>setCustomName(e.target.value)} placeholder={current.name} className="bg-transparent font-display text-xl text-white border-b border-dashed border-slate-700 focus:border-amber-400 focus:outline-none w-40"/>
              <span className="font-mono text-[9px] text-slate-600">✎ rename</span>
            </div>
            <p className="font-mono text-[11px] text-slate-500 mt-1">{current.vibe} · live customizable · file: {fileName}.svg</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button onClick={()=>onCopy(svgStr, `pet-svg`)} className={copied===`pet-svg`?'rounded-lg bg-lime-400 px-3 py-2 text-xs font-bold text-[#0b0d10]':'rounded-lg bg-amber-500 px-3 py-2 text-xs font-bold text-[#0b0d10] hover:bg-amber-400'}>{copied===`pet-svg`?'✓ copied':'⎘ SVG'}</button>
            <button onClick={()=>onCopy(md, `pet-md`)} className={copied===`pet-md`?'rounded-lg bg-lime-400 px-3 py-2 text-xs font-bold text-[#0b0d10]':'rounded-lg bg-slate-800 px-3 py-2 text-xs text-slate-200 hover:bg-slate-700'}>{copied===`pet-md`?'✓':'⎘ MD'}</button>
            <button onClick={()=>onDownload(svgStr, `${fileName}.svg`, 'image/svg+xml')} className="rounded-lg bg-slate-800 px-3 py-2 text-xs text-slate-200 hover:bg-slate-700">↓ .svg</button>
          </div>
        </div>
        {/* Customization controls */}
        <div className="mb-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
          <label className="block">
            <span className="mb-1 block font-mono text-[10px] uppercase tracking-widest text-slate-500">color</span>
            <input type="color" value={petColor || '#fbbf24'} onChange={e=>setPetColor(e.target.value)} className="w-full h-8 rounded cursor-pointer bg-slate-900"/>
          </label>
          <label className="block">
            <span className="mb-1 block font-mono text-[10px] uppercase tracking-widest text-slate-500">speed: {petSpeed}s</span>
            <input type="range" min="0.5" max="10" step="0.5" value={petSpeed} onChange={e=>setPetSpeed(parseFloat(e.target.value))} className="w-full accent-amber-500"/>
          </label>
          <label className="block">
            <span className="mb-1 block font-mono text-[10px] uppercase tracking-widest text-slate-500">size: {petScale}x</span>
            <input type="range" min="0.5" max="2" step="0.1" value={petScale} onChange={e=>setPetScale(parseFloat(e.target.value))} className="w-full accent-amber-500"/>
          </label>
          <button onClick={()=>{setPetColor(''); setPetSpeed(2); setPetScale(1); setCustomName('');}} className="self-end rounded-lg bg-slate-800 px-3 py-1.5 text-xs text-slate-300 hover:bg-slate-700">↺ reset</button>
        </div>
        <div className="rounded-lg border border-slate-800 bg-[#0b0d10] p-6 flex items-center justify-center [&>svg]:max-w-[240px] [&>svg]:w-full" dangerouslySetInnerHTML={{__html: svgStr}}/>
        <div className="mt-3">
          <div className="mb-2 font-mono text-[10px] uppercase tracking-widest text-slate-500">✎ live SVG editor — edit code, preview updates instantly</div>
          <SvgEditor key={`${current.id}-${svgStr.length}`} initialSvg={svgStr} filename={`${fileName}.svg`} onCopy={onCopy} onDownload={onDownload} copied={copied}/>
        </div>
        <div className="mt-3">
          <div className="mb-2 font-mono text-[10px] uppercase tracking-widest text-slate-500">embed in README.md</div>
          <CodeBlock code={md} lang="md" filename="README.md" maxHeight={80} showLineNumbers={false}/>
        </div>
      </div>
    </div>
  );
}

// ============ Learn sub-component ============
function LearnTab({ name: _name, role: _role, handle: _handle, copied: _copied, onCopy: _onCopy, onDownload: _onDownload }: {
  name: string; role: string; handle: string;
  copied: string | null;
  onCopy: (t: string, id: string) => void;
  onDownload: (t: string, f: string, m: string) => void;
}) {
  const [view, setView] = useState<'resources' | 'libraries' | 'roadmaps' | 'teachers' | 'projects' | 'liveprojects' | 'howto'>('resources');
  const [libLang, setLibLang] = useState('all');
  const [filterCat, setFilterCat] = useState('all');
  const [search, setSearch] = useState('');
  const [roadmapIdx, setRoadmapIdx] = useState(0);
  const [levelFilter, setLevelFilter] = useState('all');
  const [langFilter, setLangFilter] = useState('all');

  const cats = Array.from(new Set(LEARNING_RESOURCES.map(r => r.cat)));
  const filteredRes = LEARNING_RESOURCES.filter(r => {
    if (filterCat !== 'all' && r.cat !== filterCat) return false;
    if (search && !r.title.toLowerCase().includes(search.toLowerCase()) && !r.desc.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  const filteredProjects = PROJECT_IDEAS.filter(p => {
    const cleanLevel = p.level.replace(/ + .*/gi,'').trim().toLowerCase();
    if (levelFilter !== 'all' && !cleanLevel.startsWith(levelFilter.toLowerCase())) return false;
    if (search && !p.title.toLowerCase().includes(search.toLowerCase()) && !p.tech.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  const filteredTeachers = TEACHERS.filter(t => {
    if (langFilter !== 'all' && !t.lang.toLowerCase().includes(langFilter.toLowerCase())) return false;
    if (search && !t.name.toLowerCase().includes(search.toLowerCase()) && !t.channel.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  const currentRm = ROADMAPS[roadmapIdx] || ROADMAPS[0];

  const views: { id: typeof view; label: string; icon: string; n: number }[] = [
    { id: 'resources', label: 'Resources', icon: '📚', n: LEARNING_RESOURCES.length },
    { id: 'libraries', label: 'Libraries', icon: '📦', n: LIBRARIES.length },
    { id: 'roadmaps', label: 'Roadmaps', icon: '🗺', n: ROADMAPS.length },
    { id: 'teachers', label: 'Teachers', icon: '👨‍🏫', n: TEACHERS.length },
    { id: 'projects', label: 'Project Ideas', icon: '🛠', n: PROJECT_IDEAS.length },
    { id: 'liveprojects', label: 'Live Projects', icon: '🚀', n: LIVE_PROJECTS.length },
    { id: 'howto', label: 'How to Contribute', icon: '📝', n: 1 },
  ];

  return (
    <div>
      {/* view switcher */}
      <div className="mb-5 mb-6 flex flex-wrap gap-1.5 rounded-xl border border-slate-800 bg-[#12151a] p-1">
        {views.map(v => (
          <button
            key={v.id} onClick={() => setView(v.id)}
            className={`flex shrink-0 items-center gap-1.5 rounded-lg px-3 py-2 font-mono text-xs transition-all ${view===v.id?'bg-gradient-to-br from-pink-400 to-amber-400 font-bold text-[#0b0d10]':'text-slate-400 hover:bg-slate-800 hover:text-white'}`}>
            <span>{v.icon}</span><span>{v.label}</span>
            <span className={`rounded-full px-1 py-0 text-[9px] ${view===v.id?'bg-[#0b0d10]/20 text-[#0b0d10]':'bg-slate-800 text-slate-400'}`}>{v.n}</span>
          </button>
        ))}
      </div>

      {view === 'resources' && (
        <div>
          <div className="mb-4 flex flex-wrap gap-2">
            <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="search courses…" className="rounded-lg border border-slate-800 bg-[#0b0d10] px-3 py-2 text-xs text-white placeholder-slate-600 focus:border-pink-500 focus:outline-none w-52"/>
            <button onClick={()=>setFilterCat('all')} className={`rounded-md px-3 py-1.5 font-mono text-[10px] ${filterCat==='all'?'bg-pink-500 text-[#0b0d10]':'bg-slate-800 text-slate-400 hover:text-white'}`}>all</button>
            {cats.map(c=>(
              <button key={c} onClick={()=>setFilterCat(c)} className={`rounded-md px-3 py-1.5 font-mono text-[10px] ${filterCat===c?'bg-pink-500 text-[#0b0d10]':'bg-slate-800 text-slate-400 hover:text-white'}`}>{c}</button>
            ))}
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {filteredRes.map(r => (
              <a key={r.id} href={r.link} target="_blank" rel="noreferrer" className="group rounded-xl border border-slate-800 bg-[#12151a] p-4 transition-all hover:border-pink-400/50 hover:-translate-y-1">
                <div className="mb-2 flex items-start justify-between">
                  <span className="rounded bg-pink-500/10 px-1.5 py-0.5 font-mono text-[9px] text-pink-400">{r.cat}</span>
                  {r.tag && <span className="rounded bg-amber-500/20 px-1.5 py-0.5 font-mono text-[9px] text-amber-400">{r.tag}</span>}
                </div>
                <h3 className="mb-1 font-display text-base font-bold text-white group-hover:text-pink-400">{r.title}</h3>
                <p className="mb-3 line-clamp-2 text-xs text-slate-400">{r.desc}</p>
                <div className="flex items-center justify-between">
                  <span className={`font-mono text-[10px] ${levelColor(r.level)}`}>{r.level}</span>
                  <span className="font-mono text-[9px] text-pink-400 opacity-0 transition-opacity group-hover:opacity-100">Open ↗</span>
                </div>
              </a>
            ))}
          </div>
          <div className="mt-4 text-center font-mono text-[11px] text-slate-500">showing {filteredRes.length} of {LEARNING_RESOURCES.length} free resources</div>
        </div>
      )}

      {view === 'roadmaps' && (
        <div className="grid gap-5 lg:grid-cols-[300px_1fr]">
          <div className="rounded-2xl border border-slate-800 bg-[#12151a] p-3 lg:sticky lg:top-20 lg:self-start">
            <div className="mb-3 font-mono text-[10px] uppercase tracking-widest text-slate-500">Choose a role</div>
            <div className="space-y-1.5">
              {ROADMAPS.map((rm,i) => (
                <button key={rm.id} onClick={()=>setRoadmapIdx(i)} className={`w-full rounded-lg p-2.5 text-left transition-all ${roadmapIdx===i?'bg-gradient-to-br from-pink-400 to-amber-400 text-[#0b0d10]':'text-slate-300 hover:bg-slate-800'}`}>
                  <div className="text-sm font-bold">{rm.role}</div>
                  <div className={`text-[10px] mt-0.5 ${roadmapIdx===i?'text-[#0b0d10]/70':'text-slate-500'}`}>{rm.desc}</div>
                </button>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-[#12151a] p-6">
            <h3 className="mb-2 font-display text-2xl font-bold text-white">{currentRm.role}</h3>
            <p className="mb-6 text-sm text-slate-400">{currentRm.desc}</p>
            <div className="relative max-w-xl">
              {currentRm.steps.map((step, i) => (
                <div key={i} className="relative pb-6 pl-8 last:pb-0">
                  <div className={`absolute left-[11px] top-0 -ml-0.5 h-full w-px ${i===currentRm.steps.length-1?'bg-gradient-to-b from-pink-500 to-transparent':'bg-slate-700'}`}/>
                  <div className={`absolute left-[7px] top-1 h-4 w-4 rounded-full ${i===0?'bg-pink-500 ring-4 ring-pink-500/20':'bg-slate-800 ring-4 ring-slate-800/20'}`}/>
                  <div className="rounded-lg border border-slate-800 bg-[#0b0d10] p-4 hover:border-pink-400/40 transition-all">
                    <div className="mb-1 flex items-center justify-between">
                      <span className="font-display text-sm font-bold text-white">{step.title}</span>
                      <span className="rounded bg-pink-500/10 px-2 py-0.5 font-mono text-[9px] text-pink-400">{step.tag}</span>
                    </div>
                    <p className="text-xs text-slate-400">{step.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {view === 'teachers' && (
        <div>
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="search teachers…" className="rounded-lg border border-slate-800 bg-[#0b0d10] px-3 py-2 text-xs text-white placeholder-slate-600 focus:border-pink-500 focus:outline-none w-48"/>
            <button onClick={()=>setLangFilter('all')} className={`rounded-md px-3 py-1.5 font-mono text-[10px] ${langFilter==='all'?'bg-pink-500 text-[#0b0d10]':'bg-slate-800 text-slate-400 hover:text-white'}`}>All Languages</button>
            <button onClick={()=>setLangFilter('english')} className={`rounded-md px-3 py-1.5 font-mono text-[10px] ${langFilter==='english'?'bg-lime-400 text-[#0b0d10]':'bg-slate-800 text-slate-400 hover:text-white'}`}>🇬🇧 English</button>
            <button onClick={()=>setLangFilter('hindi')} className={`rounded-md px-3 py-1.5 font-mono text-[10px] ${langFilter==='hindi'?'bg-orange-400 text-[#0b0d10]':'bg-slate-800 text-slate-400 hover:text-white'}`}>🇮🇳 Hindi</button>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {filteredTeachers.map(t => (
              <a key={t.id} href={`https://youtube.com/${t.channel}`} target="_blank" rel="noreferrer"
                className="group rounded-xl border border-slate-800 bg-[#12151a] p-4 transition-all hover:border-pink-400/50 hover:-translate-y-1">
                <div className="mb-2 flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-pink-400 to-amber-400 font-display text-base font-bold text-[#0b0d10]">{t.name[0]}</div>
                  <div className="min-w-0">
                    <h3 className="font-display text-base font-bold text-white group-hover:text-pink-400 truncate">{t.name}</h3>
                    <span className="font-mono text-[10px] text-pink-400">{t.channel}</span>
                  </div>
                </div>
                <p className="mb-3 text-xs italic text-slate-400 line-clamp-2">"{t.explic}"</p>
                <div className="flex flex-wrap gap-1">
                  {t.subjects.map(s=>(
                    <span key={s} className="rounded bg-slate-800 px-1.5 py-0.5 font-mono text-[9px] text-slate-300">{s}</span>
                  ))}
                </div>
              </a>
            ))}
          </div>
          <div className="mt-4 text-center font-mono text-[11px] text-slate-500">showing {filteredTeachers.length} of {TEACHERS.length} teachers</div>
        </div>
      )}

      {view === 'projects' && (
        <div>
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="search projects…" className="rounded-lg border border-slate-800 bg-[#0b0d10] px-3 py-2 text-xs text-white placeholder-slate-600 focus:border-pink-500 focus:outline-none w-52"/>
            <button onClick={()=>setLevelFilter('all')} className={`rounded-md px-3 py-1.5 font-mono text-[10px] ${levelFilter==='all'?'bg-pink-500 text-[#0b0d10]':'bg-slate-800 text-slate-400 hover:text-white'}`}>All Levels</button>
            {['Beginner','Intermediate','Advanced','Expert'].map(l=>(
              <button key={l} onClick={()=>setLevelFilter(l)} className={`rounded-md px-3 py-1.5 font-mono text-[10px] ${levelFilter===l?'bg-lime-400 text-[#0b0d10]':'bg-slate-800 text-slate-400 hover:text-white'}`}>{l}</button>
            ))}
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map(p => (
              <article key={p.id} className="rounded-xl border border-slate-800 bg-[#12151a] p-4 transition-all hover:border-pink-400/50">
                <div className="mb-2 flex items-start justify-between">
                  <h3 className="font-display text-base font-bold text-white">{p.title}</h3>
                  <span className={`shrink-0 rounded bg-slate-800 px-1.5 py-0.5 font-mono text-[9px] ${levelColor(p.level)}`}>{p.level}</span>
                </div>
                <p className="mb-3 line-clamp-2 text-xs text-slate-400">{p.desc}</p>
                <span className="inline-block rounded bg-slate-900 px-2 py-1 font-mono text-[10px] text-cyan-400">{p.tech}</span>
              </article>
            ))}
          </div>
          <div className="mt-4 text-center font-mono text-[11px] text-slate-500">showing {filteredProjects.length} of {PROJECT_IDEAS.length} project ideas</div>
        </div>
      )}

      {view === 'libraries' && (
        <div>
          <div className="mb-4 flex flex-wrap gap-2">
            <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="search libraries…" className="rounded-lg border border-slate-800 bg-[#0b0d10] px-3 py-2 text-xs text-white placeholder-slate-600 focus:border-pink-500 focus:outline-none w-52"/>
            <button onClick={()=>setLibLang('all')} className={`rounded-md px-3 py-1.5 font-mono text-[10px] ${libLang==='all'?'bg-pink-500 text-[#0b0d10]':'bg-slate-800 text-slate-400 hover:text-white'}`}>all</button>
            {LIBRARY_LANGS.map(l=>(
              <button key={l} onClick={()=>setLibLang(l)} className={`rounded-md px-3 py-1.5 font-mono text-[10px] ${libLang===l?'bg-pink-500 text-[#0b0d10]':'bg-slate-800 text-slate-400 hover:text-white'}`}>{l}</button>
            ))}
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {LIBRARIES.filter(l=>{
              if (libLang !== 'all' && l.lang !== libLang) return false;
              if (search && !l.name.toLowerCase().includes(search.toLowerCase()) && !l.what.toLowerCase().includes(search.toLowerCase())) return false;
              return true;
            }).map(lib => (
              <article key={lib.id} className="rounded-xl border border-slate-800 bg-[#12151a] p-4 transition-all hover:border-pink-400/50">
                <div className="mb-2 flex items-start justify-between gap-2">
                  <div className="min-w-0">
                    <span className="rounded bg-pink-500/10 px-1.5 py-0.5 font-mono text-[9px] text-pink-400 mr-1.5">{lib.cat}</span>
                    <span className="font-display text-base font-bold text-white">{lib.name}</span>
                  </div>
                  {lib.stars && <span className="shrink-0 rounded bg-slate-800 px-1.5 py-0.5 font-mono text-[9px] text-yellow-400">★ {lib.stars}</span>}
                </div>
                <div className="mb-2 text-xs text-slate-400"><span className="text-lime-400 font-semibold">What:</span> {lib.what}</div>
                <div className="mb-3 text-xs text-slate-400"><span className="text-cyan-400 font-semibold">When to use:</span> {lib.when}</div>
                <div className="rounded bg-[#0b0d10] px-2 py-1.5 font-mono text-[10px] text-amber-400 overflow-x-auto whitespace-nowrap">{lib.install}</div>
              </article>
            ))}
          </div>
          <div className="mt-4 text-center font-mono text-[11px] text-slate-500">{LIBRARIES.filter(l=>libLang==='all'||l.lang===libLang).length} libraries · all open source · copy install commands</div>
        </div>
      )}

      {view === 'liveprojects' && (
        <div>
          <div className="mb-4 flex flex-wrap gap-2">
            <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="search projects…" className="rounded-lg border border-slate-800 bg-[#0b0d10] px-3 py-2 text-xs text-white placeholder-slate-600 focus:border-pink-500 focus:outline-none w-52"/>
            <span className="font-mono text-[11px] text-slate-500 self-center">{LIVE_PROJECTS.length} open-source projects to study, learn pattern from — real repos</span>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {LIVE_PROJECTS.filter(p=> !search || p.title.toLowerCase().includes(search.toLowerCase()) || p.tech.toLowerCase().includes(search.toLowerCase())).map(p => (
              <a key={p.id} href={p.repo} target="_blank" rel="noreferrer" className="group rounded-xl border border-slate-800 bg-[#12151a] p-4 transition-all hover:border-pink-400/50 hover:-translate-y-1">
                <div className="mb-2 flex items-start justify-between">
                  <span className="rounded bg-emerald-500/10 px-1.5 py-0.5 font-mono text-[9px] text-emerald-400">Open Source</span>
                  <span className="rounded bg-slate-800 px-1.5 py-0.5 font-mono text-[9px] text-yellow-400">★ {p.stars}</span>
                </div>
                <h3 className="mb-1 font-display text-base font-bold text-white group-hover:text-pink-400">{p.title}</h3>
                <p className="mb-2 text-xs text-slate-400"><span className="text-lime-400 font-semibold">Learn:</span> {p.learn}</p>
                <div className="flex items-center justify-between">
                  <span className="inline-block rounded bg-slate-900 px-2 py-1 font-mono text-[10px] text-cyan-400">{p.tech}</span>
                  <span className="font-mono text-[9px] text-pink-400 opacity-0 transition-opacity group-hover:opacity-100">Study Repo ↗</span>
                </div>
              </a>
            ))}
          </div>
          <div className="mt-4 text-center font-mono text-[11px] text-slate-500">study actual production codebases — read their patterns, structure, and commits</div>
        </div>
      )}

      {view === 'howto' && (
        <div className="grid gap-5 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-[#12151a] p-5">
            <h3 className="mb-3 font-display text-lg font-bold text-amber-400">Add New Resources</h3>
            <p className="mb-3 text-xs text-slate-400">Contribute: add new resource with this format &mdash; shared freely on GitHub.</p>
            <CodeBlock code={`// Edit src/data/guides.ts\n// at LEARNING_RESOURCES[] add:\n{\n  id: 35,\n  cat: 'Your Category',\n  title: 'Course Name',\n  desc: 'Free video series covering basics',\n  link: 'https://youtube.com/channel',\n  level: 'Beginner',\n  tag: 'Useful'\n}`} lang="md" filename="guides.ts" maxHeight={220}/>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-[#12151a] p-5 space-y-3 font-mono text-[11px] text-slate-400">
            <h3 className="font-display text-base font-bold text-amber-400">File Structure Reference</h3>
            <div className="rounded-lg bg-slate-900 p-3">
              <div className="text-lime-400">src/data/guides.ts</div>
              — LEARNING_RESOURCES[] → add courses<br/>
              — ROADMAPS[] → new roles<br/>
              — TEACHERS[] → new YouTube creators<br/>
              — PROJECT_IDEAS[] → project inspiration<br/>
            </div>
            <div className="rounded-lg bg-slate-900 p-3">
              <div className="text-emerald-400">src/data/libraries.ts</div>
              — LIBRARIES[] → open-source libraries by language<br/>
              — LIVE_PROJECTS[] → real GitHub repos to study<br/>
              — Add when/why/how with install commands
            </div>
            <div className="rounded-lg bg-slate-900 p-3">
              <div className="text-amber-400">src/App.tsx</div>
              — LearnTab component renders this UI<br/>
              — Update views[] to add modes<br/>
              — Titel labels/analysis state
            </div>
            <div className="rounded-lg bg-slate-900 p-3">
              <div className="text-pink-400">This tab is fully editable</div>
              — Click a roadmap to explore<br/>
              — Filter by level/subject/lang<br/>
              — Open any resource directly
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ============ Templates sub-component ============
function TemplateTab({ name, role, handle, copied, onCopy, onDownload }: {
  name: string; role: string; handle: string;
  copied: string | null;
  onCopy: (t: string, id: string) => void;
  onDownload: (t: string, f: string, m: string) => void;
}) {
  const [active, setActive] = useState<string>(TEMPLATES[0].id);
  const [search, setSearch] = useState('');
  const [view, setView] = useState<'preview' | 'edit' | 'source'>('preview');
  const [edited, setEdited] = useState<Record<string, string>>({});
  const [fileTitle, setFileTitle] = useState('README');
  const filtered = TEMPLATES.filter(t =>
    !search || t.name.toLowerCase().includes(search.toLowerCase()) || t.persona.toLowerCase().includes(search.toLowerCase())
  );
  const current = TEMPLATES.find(t => t.id === active) || TEMPLATES[0];
  const baseMd = edited[current.id] ?? current.md;
  const filled = fillTemplate(baseMd, { name, role, handle });

  // Very small markdown-to-HTML for preview
  const render = (md: string) => {
    let h = md
      .replace(/```[\s\S]*?```/g, m => `<pre class="bg-slate-900 p-3 rounded text-xs text-slate-300 overflow-auto my-3">${m.slice(3, -3).replace(/</g,'&lt;')}</pre>`)
      .replace(/^### (.*$)/gm, '<h3 class="text-base font-bold text-amber-400 mt-4 mb-1">$1</h3>')
      .replace(/^## (.*$)/gm, '<h2 class="text-lg font-bold text-lime-400 mt-5 mb-2 border-b border-slate-800 pb-1">$1</h2>')
      .replace(/^# (.*$)/gm, '<h1 class="text-2xl font-bold text-white mt-2 mb-3">$1</h1>')
      .replace(/^> (.*$)/gm, '<blockquote class="border-l-2 border-amber-500 pl-3 text-slate-400 italic my-2">$1</blockquote>')
      .replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1" class="max-w-full rounded my-2"/>')
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-amber-400 underline" target="_blank">$1</a>')
      .replace(/\*\*([^*]+)\*\*/g, '<strong class="text-white">$1</strong>')
      .replace(/`([^`]+)`/g, '<code class="bg-slate-900 text-lime-400 px-1 rounded text-xs">$1</code>')
      .replace(/^- (.*$)/gm, '<li class="ml-4 text-slate-300 my-0.5">• $1</li>')
      .replace(/^---$/gm, '<hr class="my-4 border-slate-800"/>')
      .replace(/\n\n/g, '</p><p class="my-2 text-slate-300 text-sm">');
    return `<p class="my-2 text-slate-300 text-sm">${h}</p>`;
  };

  return (
    <div className="grid gap-5 lg:grid-cols-[280px_1fr]">
      {/* Sidebar list */}
      <div className="rounded-2xl border border-slate-800 bg-[#12151a] p-3 lg:sticky lg:top-20 lg:self-start lg:max-h-[calc(100vh-120px)] lg:overflow-y-auto">
        <input
          value={search}
          onChange={e=>setSearch(e.target.value)}
          placeholder="filter templates…"
          className="mb-3 w-full rounded-lg border border-slate-800 bg-[#0b0d10] px-3 py-2 text-xs text-white placeholder-slate-600 focus:border-amber-500 focus:outline-none"
        />
        <div className="space-y-1">
          {filtered.map(t => (
            <button
              key={t.id}
              onClick={()=>setActive(t.id)}
              className={`flex w-full items-start gap-2 rounded-lg p-2 text-left transition-all ${active===t.id?'bg-gradient-to-br from-amber-400 to-lime-400 text-[#0b0d10]':'text-slate-300 hover:bg-slate-800'}`}
            >
              <span className="text-base leading-none mt-0.5">{t.emoji}</span>
              <span className="min-w-0">
                <span className="block text-xs font-bold">{t.name}</span>
                <span className={`block text-[10px] ${active===t.id?'text-[#0b0d10]/70':'text-slate-500'}`}>{t.persona}</span>
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Preview + actions */}
      <div className="rounded-2xl border border-slate-800 bg-[#12151a] p-5">
        <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className="text-xl">{current.emoji}</span>
              <input value={fileTitle} onChange={e=>setFileTitle(e.target.value)} className="w-32 bg-transparent font-display text-xl text-white border-b border-dashed border-slate-700 focus:border-amber-400 focus:outline-none"/>
              <span className="font-mono text-[11px] text-slate-600">.md ✎</span>
            </div>
            <p className="font-mono text-[11px] text-slate-500 mt-1">{current.name} · {filled.length} chars · {filled.split('\n').length} lines{edited[current.id]!==undefined && ' · edited'}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button onClick={()=>onCopy(filled, `tmpl-${current.id}`)} className={copied===`tmpl-${current.id}`?'rounded-lg bg-lime-400 px-3 py-2 text-xs font-bold text-[#0b0d10]':'rounded-lg bg-amber-500 px-3 py-2 text-xs font-bold text-[#0b0d10] hover:bg-amber-400'}>{copied===`tmpl-${current.id}`?'✓ copied':'⎘ copy'}</button>
            <button onClick={()=>onDownload(filled, `${fileTitle||'README'}.md`, 'text/markdown')} className="rounded-lg bg-slate-800 px-3 py-2 text-xs text-slate-200 hover:bg-slate-700">↓ .md</button>
          </div>
        </div>
        {/* view mode tabs */}
        <div className="mb-3 flex gap-1 rounded-lg border border-slate-800 bg-[#0b0d10] p-1 w-fit">
          {(['preview','edit','source'] as const).map(v=>(
            <button key={v} onClick={()=>setView(v)} className={`rounded-md px-3 py-1.5 font-mono text-[11px] transition-all ${view===v?'bg-gradient-to-br from-amber-400 to-lime-400 font-bold text-[#0b0d10]':'text-slate-400 hover:text-white'}`}>
              {v==='preview'?'👁 preview':v==='edit'?'✎ edit':'</> source'}
            </button>
          ))}
          {edited[current.id]!==undefined && <button onClick={()=>setEdited(p=>{const n={...p};delete n[current.id];return n;})} className="rounded-md px-3 py-1.5 font-mono text-[11px] text-red-400 hover:bg-slate-800">↺ revert</button>}
        </div>
        {view==='preview' && (
          <div className="rounded-lg border border-slate-800 bg-[#0b0d10] p-5 max-h-[600px] overflow-auto" dangerouslySetInnerHTML={{__html: render(filled)}} />
        )}
        {view==='edit' && (
          <div>
            <div className="mb-2 font-mono text-[10px] text-slate-500">edit the raw markdown — preview updates live. use <span className="text-amber-400">{'{{NAME}}'}</span> <span className="text-amber-400">{'{{ROLE}}'}</span> <span className="text-amber-400">{'{{HANDLE}}'}</span> placeholders.</div>
            <textarea
              value={baseMd}
              onChange={e=>setEdited(p=>({...p, [current.id]: e.target.value}))}
              spellCheck={false}
              className="h-[500px] w-full rounded-lg border border-slate-800 bg-[#0b0d10] p-3 font-mono text-[12px] leading-relaxed text-slate-200 focus:border-amber-500 focus:outline-none resize-none"
            />
          </div>
        )}
        {view==='source' && (
          <CodeBlock code={filled} lang="md" filename={`${fileTitle||'README'}.md`} maxHeight={520} onDownload={()=>onDownload(filled, `${fileTitle||'README'}.md`, 'text/markdown')}/>
         )}
      </div>
    </div>
  );
}

// ============ Contribute / Add-anything guide ============
function ContributeTab() {
  const [active, setActive] = useState<string>(ADD_GUIDES[0].id);
  const cur = ADD_GUIDES.find(g => g.id === active) || ADD_GUIDES[0];
  const diffColor = (d: string) => d === 'Easy' ? 'text-lime-400 bg-lime-400/10' : d === 'Medium' ? 'text-amber-400 bg-amber-400/10' : 'text-rose-400 bg-rose-400/10';

  return (
    <div>
      {/* intro */}
      <div className="mb-5 rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-transparent p-5">
        <h2 className="mb-1 font-display text-xl font-bold text-white">🛠 Add or Edit Anything — Step by Step</h2>
        <p className="text-sm text-slate-400">Pick what you want to add on the left. Each guide shows the <span className="text-cyan-400">exact file</span>, <span className="text-cyan-400">copy-paste code</span>, field explanations & pro tips. No experience needed — everything is beginner-friendly.</p>
      </div>

      <div className="grid gap-5 lg:grid-cols-[280px_1fr]">
        {/* sidebar list */}
        <div className="rounded-2xl border border-slate-800 bg-[#12151a] p-3 lg:sticky lg:top-20 lg:self-start lg:max-h-[calc(100vh-120px)] lg:overflow-y-auto">
          <div className="mb-2 px-2 font-mono text-[10px] uppercase tracking-widest text-slate-500">What do you want to add?</div>
          <div className="space-y-1">
            {ADD_GUIDES.map(g => (
              <button key={g.id} onClick={() => setActive(g.id)}
                className={`flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left transition-all ${active === g.id ? 'bg-gradient-to-br from-cyan-400 to-blue-500 font-bold text-[#0b0d10]' : 'text-slate-300 hover:bg-slate-800'}`}>
                <span className="text-base">{g.icon}</span>
                <span className="flex-1 text-sm">{g.title.replace('Add a ', '').replace('Add an ', '')}</span>
                <span className={`rounded px-1 py-0.5 text-[8px] font-bold ${active === g.id ? 'bg-black/20 text-[#0b0d10]' : diffColor(g.difficulty)}`}>{g.difficulty}</span>
              </button>
            ))}
          </div>
          {/* file map */}
          <div className="mt-4 border-t border-slate-800 pt-3">
            <div className="mb-2 px-2 font-mono text-[10px] uppercase tracking-widest text-slate-500">File Map</div>
            <div className="space-y-1 px-2">
              {FILE_MAP.map(f => (
                <div key={f.file} className="text-[10px] leading-tight">
                  <div className="font-mono text-cyan-400">{f.file.replace('src/', '')}</div>
                  <div className="text-slate-500">{f.holds}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* detail */}
        <div className="space-y-4">
          <div className="rounded-2xl border border-slate-800 bg-[#12151a] p-5">
            <div className="mb-3 flex flex-wrap items-center gap-3">
              <span className="text-3xl">{cur.icon}</span>
              <div>
                <h3 className="font-display text-xl font-bold text-white">{cur.title}</h3>
                <div className="mt-1 flex flex-wrap items-center gap-2 font-mono text-[11px]">
                  <span className={`rounded px-2 py-0.5 ${diffColor(cur.difficulty)}`}>{cur.difficulty}</span>
                  <span className="text-slate-500">⏱ {cur.time}</span>
                  <span className="rounded bg-slate-800 px-2 py-0.5 text-cyan-400">📄 {cur.file}</span>
                  <span className="rounded bg-slate-800 px-2 py-0.5 text-amber-400">→ {cur.arrayName}</span>
                </div>
              </div>
            </div>
            <p className="text-sm text-slate-400">{cur.intro}</p>
          </div>

          {/* steps */}
          <div className="rounded-2xl border border-slate-800 bg-[#12151a] p-5">
            <h4 className="mb-3 font-display text-sm font-bold text-lime-400">📋 Steps</h4>
            <ol className="space-y-2">
              {cur.steps.map((s, i) => (
                <li key={i} className="flex gap-3 text-sm text-slate-300">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-500/20 font-mono text-[10px] font-bold text-cyan-400">{i + 1}</span>
                  <span>{s}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* code */}
          <div>
            <div className="mb-2 font-mono text-[10px] uppercase tracking-widest text-slate-500">Copy-paste code</div>
            <CodeBlock code={cur.code} lang="md" filename={cur.file.split('/').pop() || 'file.ts'} maxHeight={340}/>
          </div>

          {/* fields */}
          <div className="rounded-2xl border border-slate-800 bg-[#12151a] p-5">
            <h4 className="mb-3 font-display text-sm font-bold text-violet-400">🔑 Fields Explained</h4>
            <div className="overflow-hidden rounded-lg border border-slate-800">
              <table className="w-full text-left text-xs">
                <thead className="bg-[#0b0d10]">
                  <tr className="font-mono text-[10px] uppercase text-slate-500">
                    <th className="px-3 py-2">Field</th>
                    <th className="px-3 py-2">What it does</th>
                    <th className="px-3 py-2">Example</th>
                  </tr>
                </thead>
                <tbody>
                  {cur.fields.map((f, i) => (
                    <tr key={i} className="border-t border-slate-800">
                      <td className="px-3 py-2 font-mono text-cyan-400">{f.key}</td>
                      <td className="px-3 py-2 text-slate-300">{f.desc}</td>
                      <td className="px-3 py-2 font-mono text-amber-400">{f.example}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* tips */}
          <div className="rounded-2xl border border-amber-500/20 bg-amber-500/5 p-5">
            <h4 className="mb-3 font-display text-sm font-bold text-amber-400">💡 Pro Tips</h4>
            <ul className="space-y-2">
              {cur.tips.map((t, i) => (
                <li key={i} className="flex gap-2 text-sm text-amber-100/80">
                  <span className="text-amber-400">→</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [tab, setTab] = useState<Tab>('generator');
  const [gameSearch, setGameSearch] = useState('');
  const [name, setName] = useState('Sudhir Singh');
  const [role, setRole] = useState('Full-Stack Developer');
  const [handle, setHandle] = useState('SudhirDevOps1');
  const [location, setLocation] = useState('India');
  const [email, setEmail] = useState('sudhir@example.com');
  const [company, setCompany] = useState('Open Source');
  const [website, setWebsite] = useState('https://sudhirdevops.dev');
  const [showMore, setShowMore] = useState(false);
  const [githubInput, setGithubInput] = useState('');
  const [loadingUser, setLoadingUser] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);
  const [accent, setAccent] = useState<'amber' | 'violet' | 'cyan' | 'rose' | 'emerald'>('amber');

  const [theme, setTheme] = useState('tokyonight');
  const [hideBorder, setHideBorder] = useState(true);
  const [showIcons, setShowIcons] = useState(true);
  const [allCommits, setAllCommits] = useState(true);

  const [badgeColor, setBadgeColor] = useState('3498db');
  const [badgeLabel, setBadgeLabel] = useState('GitHub');
  const [badgeValue, setBadgeValue] = useState('SudhirDevOps1');
  const [badgeStyle, setBadgeStyle] = useState('for-the-badge');

  const copy = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(id);
      setTimeout(() => setCopied(null), 1500);
    } catch {}
  };

  const downloadFile = (text: string, filename: string, mime: string) => {
    const blob = new Blob([text], { type: mime });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = filename; a.click();
    URL.revokeObjectURL(url);
  };

  const loadFromGitHub = async () => {
    if (!githubInput.trim()) return;
    setLoadingUser(true);
    try {
      const r = await fetch(`https://api.github.com/users/${githubInput.trim()}`);
      if (!r.ok) throw 0;
      const u = await r.json();
      setName(u.name || u.login);
      setHandle(u.login);
      if (u.bio) setRole(u.bio.split('\n')[0].replace(/[|·]/g,'').trim() || role);
      if (u.location) setLocation(u.location);
      if (u.email) setEmail(u.email);
      if (u.company) setCompany(u.company.replace('@',''));
      if (u.blog) setWebsite(u.blog.startsWith('http') ? u.blog : `https://${u.blog}`);
    } catch { alert('user not found'); }
    finally { setLoadingUser(false); }
  };

  const bannerCount = BANNERS.length + PREMIUM_BANNERS.length;
  const petCount = PETS.length + PREMIUM_PETS.length;
  const gameCount = GAMES_META.length;
  const themeCount = STAT_THEMES.length;
  const colorCount = BADGE_COLORS.length;
  const snippetCount = SNIPPETS.length;
  const mermaidCount = MERMAID_TEMPLATES.length;
  const learnCount = LEARNING_RESOURCES.length + ROADMAPS.length + TEACHERS.length + PROJECT_IDEAS.length + LIBRARIES.length + LIVE_PROJECTS.length;
  const statCardCount = themeCount * 5; // 5 real card types per theme
  
  // Mathematically represented assets: 100+ labels x 45 colors x 5 styles = 22,500 customizable badges!
  // Plus banners, pets, readme templates, snippets, stats, games...
  const badgeCustomCount = 100 * BADGE_COLORS.length * 5; 
  const total = bannerCount + petCount + gameCount + statCardCount + badgeCustomCount + TEMPLATES.length + snippetCount + mermaidCount + learnCount;

  const statsMd = useMemo(() => `![stats](https://github-readme-stats.vercel.app/api?username=${handle}&theme=${theme}&hide_border=${hideBorder}&show_icons=${showIcons}&show=all_commits)

![streak](https://github-readme-streak-stats.herokuapp.com/?user=${handle}&theme=${theme}&hide_border=${hideBorder})

![langs](https://github-readme-stats.vercel.app/api/top-langs/?username=${handle}&theme=${theme}&layout=compact&hide_border=${hideBorder})

![activity](https://github-readme-activity-graph.vercel.app/graph?username=${handle}&theme=${theme}&hide_border=${hideBorder})

![trophies](https://github-profile-trophy.vercel.app/?username=${handle}&theme=${theme}&no-frame=${hideBorder}&row=1&column=7)`, [handle, theme, hideBorder, showIcons, allCommits]);

  const badgeMd = useMemo(() => `![${badgeLabel}](https://img.shields.io/badge/${encodeURIComponent(badgeLabel)}-${encodeURIComponent(badgeValue)}-${badgeColor}?style=${badgeStyle})`, [badgeLabel, badgeValue, badgeColor, badgeStyle]);

  // ===== FULL PROFILE README GENERATOR (fully customizable) =====
  const [genOpts, setGenOpts] = useState({
    header: true, typing: true, about: true, techStack: true, stats: true,
    streak: true, langs: true, trophies: true, activity: true, snake: true,
    social: true, visitor: true, quote: false, footer: true,
  });
  const genTech = 'ts,react,nextjs,nodejs,python,tailwind,docker,git,github,vscode';
  const generatorMd = useMemo(() => {
    const g = genOpts; const parts: string[] = [];
    if (g.header) parts.push(`<h1 align="center">Hi 👋, I'm ${name}</h1>`);
    if (g.typing) parts.push(`<p align="center">\n  <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=26&duration=3000&color=${badgeColor}&center=true&vCenter=true&width=600&lines=${encodeURIComponent(role)};Based+in+${encodeURIComponent(location)};Open+to+collaborate" />\n</p>`);
    if (g.visitor) parts.push(`<p align="center">\n  <img src="https://komarev.com/ghpvc/?username=${handle}&label=Profile+Views&color=${badgeColor}&style=flat" />\n</p>`);
    if (g.about) parts.push(`## 🚀 About Me\n- 💻 I'm a **${role}**\n- 🌍 Based in **${location}**\n- 💼 Currently at **${company}**\n- 🌐 Portfolio: [${website}](${website})\n- 📫 Reach me: **${email}**`);
    if (g.techStack) parts.push(`## 🛠️ Tech Stack\n<p align="center">\n  <img src="https://skillicons.dev/icons?i=${genTech}" />\n</p>`);
    if (g.stats) parts.push(`## 📊 GitHub Stats\n<p align="center">\n  <img height="180" src="https://github-readme-stats.vercel.app/api?username=${handle}&theme=${theme}&hide_border=${hideBorder}&show_icons=true&include_all_commits=true&count_private=true" />\n  ${g.langs ? `<img height="180" src="https://github-readme-stats.vercel.app/api/top-langs/?username=${handle}&layout=compact&theme=${theme}&hide_border=${hideBorder}" />` : ''}\n</p>`);
    if (g.streak) parts.push(`<p align="center">\n  <img src="https://github-readme-streak-stats.herokuapp.com/?user=${handle}&theme=${theme}&hide_border=${hideBorder}" />\n</p>`);
    if (g.trophies) parts.push(`## 🏆 Trophies\n<p align="center">\n  <img src="https://github-profile-trophy.vercel.app/?username=${handle}&theme=${theme}&no-frame=${hideBorder}&row=1&column=7" />\n</p>`);
    if (g.activity) parts.push(`## 📈 Activity Graph\n<p align="center">\n  <img src="https://github-readme-activity-graph.vercel.app/graph?username=${handle}&theme=${theme}&hide_border=${hideBorder}" />\n</p>`);
    if (g.snake) parts.push(`## 🐍 Contribution Snake\n<p align="center">\n  <img src="https://raw.githubusercontent.com/${handle}/${handle}/output/github-contribution-grid-snake.svg" />\n</p>`);
    if (g.quote) parts.push(`## 💭 Dev Quote\n<p align="center">\n  <img src="https://quotes-github-readme.vercel.app/api?type=horizontal&theme=${theme}" />\n</p>`);
    if (g.social) parts.push(`## 🤝 Connect With Me\n<p align="center">\n  <a href="https://github.com/${handle}"><img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white"/></a>\n  <a href="https://linkedin.com/in/${handle}"><img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white"/></a>\n  <a href="mailto:${email}"><img src="https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white"/></a>\n  <a href="${website}"><img src="https://img.shields.io/badge/Portfolio-000000?style=for-the-badge&logo=vercel&logoColor=white"/></a>\n</p>`);
    if (g.footer) parts.push(`<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&height=100&section=footer" />\n<p align="center"><sub>Made with ❤ by ${name}</sub></p>`);
    return parts.join('\n\n');
  }, [genOpts, name, role, handle, location, email, company, website, theme, hideBorder, badgeColor]);

  const templateCount = TEMPLATES.length;
  const tabs: { id: Tab; label: string; icon: string; count: number }[] = [
    { id: 'generator', label: 'Profile Builder', icon: '⚡', count: 0 },
    { id: 'banners', label: 'SVG Banners', icon: '◼', count: bannerCount },
    { id: 'templates', label: 'READMEs', icon: '§', count: templateCount },
    { id: 'snippets', label: 'Snippets', icon: '✂', count: snippetCount },
    { id: 'pets', label: 'Pets', icon: '🐾', count: petCount },
    { id: 'mermaid', label: 'Mermaid', icon: '🧜', count: mermaidCount },
    { id: 'learn', label: 'Learn', icon: '📚', count: learnCount },
    { id: 'games', label: 'Games', icon: '▶', count: gameCount },
    { id: 'stats', label: 'Stats', icon: '▦', count: themeCount },
    { id: 'statcards', label: 'Stat Cards', icon: '▤', count: statCardCount },
    { id: 'badges', label: 'Badges', icon: '◉', count: badgeCustomCount },
    { id: 'contribute', label: 'Add / Edit', icon: '🛠', count: ADD_GUIDES.length },
  ];

  return (
    <div className="min-h-screen bg-[#0b0d10] text-slate-200 grid-bg">
      {/* Top bar */}
      <header className="sticky top-0 z-40 border-b border-slate-800/80 bg-[#0b0d10]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <div className="flex items-center gap-3 min-w-0">
            <div className="relative">
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-amber-400 to-lime-400 blur-md opacity-60" />
              <div className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-amber-400 to-lime-400 font-display text-lg font-black text-[#0b0d10]">∞</div>
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="font-display text-base font-black tracking-tight text-white sm:text-lg">readme.lab</span>
                <span className="rounded bg-cyan-500/15 px-1.5 py-0.5 font-mono text-[9px] font-bold text-cyan-400">{APP_VERSION}</span>
              </div>
              <div className="font-mono text-[10px] text-slate-500 hidden sm:block">{total.toLocaleString()}+ real assets · {APP_BUILD_DATE}</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <a href="https://github.com/SudhirDevOps1/readme.lab" target="_blank" rel="noreferrer" className="hidden lg:flex items-center gap-1.5 rounded-lg border border-slate-800 bg-[#12151a] px-3 py-2 font-mono text-[11px] text-slate-400 hover:border-slate-700 hover:text-white transition-colors">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>
              Star on GitHub
            </a>
            <div className="hidden md:flex items-center gap-1 rounded-lg border border-slate-800 bg-[#12151a] p-1">
              <span className="pl-2 font-mono text-[11px] text-slate-600">github.com/</span>
              <input value={githubInput} onChange={e=>setGithubInput(e.target.value)} onKeyDown={e=>e.key==='Enter'&&loadFromGitHub()} placeholder="username" className="w-28 bg-transparent px-1 py-1 font-mono text-xs text-white placeholder-slate-600 focus:outline-none"/>
              <button onClick={loadFromGitHub} disabled={loadingUser} className="rounded-md bg-slate-800 px-3 py-1 font-mono text-[11px] text-slate-300 hover:bg-slate-700 disabled:opacity-40">{loadingUser?'…':'↻ load'}</button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero strip */}
      <section className="mx-auto max-w-[1600px] px-4 pt-6 sm:px-6">
        <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-[#12151a]">
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-amber-500/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-lime-400/10 blur-3xl" />
          <div className="relative p-6 sm:p-8">
            <div className="mb-3 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-lime-400 pulse-soft" />
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-lime-400">live catalog · {total}+ assets</span>
            </div>
            <h1 className="font-display text-4xl leading-[0.95] text-white sm:text-6xl">
              A README that <em className="italic text-amber-400">breathes</em>,<br/>
              <span className="text-lime-400">not one that bores.</span>
            </h1>
            <p className="mt-4 max-w-xl text-sm text-slate-400">
              {bannerCount} animated SVG banners · {templateCount} README templates · {snippetCount} snippets · {petCount} live-editable pets · {mermaidCount} mermaid diagrams · <span className="text-pink-400 font-semibold">{learnCount} free learning resources</span> · {gameCount} playable games · {statCardCount} stat cards · <span className="text-orange-400 font-semibold">{badgeCustomCount} customizable badges</span>. <span className="text-white">Edit any SVG/mermaid code live</span>, preview instantly, rename &amp; copy — everything drops straight into your <code className="rounded bg-slate-900 px-1 text-lime-400">README.md</code>.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-3 sm:grid-cols-6 lg:grid-cols-7">
              {[
                {n:bannerCount, l:'SVG banners', c:'text-amber-400'},
                {n:templateCount, l:'READMEs', c:'text-rose-400'},
                {n:snippetCount, l:'snippets', c:'text-violet-400'},
                {n:petCount, l:'pets', c:'text-lime-400'},
                {n:mermaidCount, l:'mermaid', c:'text-teal-400'},
                {n:learnCount, l:'learn', c:'text-pink-400'},
                {n:gameCount, l:'games', c:'text-cyan-400'},
                {n:statCardCount, l:'stat cards', c:'text-pink-400'},
                {n:colorCount, l:'badge colors', c:'text-orange-400'},
              ].map(s=>(
                <div key={s.l} className="rounded-lg border border-slate-800 bg-[#0b0d10] p-3 text-center">
                  <div className={`font-display text-2xl font-black ${s.c}`}>{s.n}</div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-slate-500">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative border-t border-slate-800 bg-[#0b0d10]/40 py-3">
            <div className="marquee-track flex w-max gap-2 whitespace-nowrap">
              {[...Array(2)].flatMap((_,d)=>['SVG banners','SMIL animation','copy markdown','download svg','live preview','responsive','pets with idle anim','playable games','typing SVGs','stat cards','streak charts','activity graph','trophies','snake graph','dev quotes','dev jokes','visitor counter','buy me coffee','skill badges','social links','featured repos','learning now','fun facts','support card','contact card','waving footer','capsule render','for-the-badge','flat-square','80+ themes','45+ colors','24 sections','github loader','one-click copy','no JS needed','GitHub safe','README-ready','portfolio-grade'].map((t,i)=>(
                <span key={`${d}-${i}`} className="inline-flex items-center gap-1.5 rounded-full border border-slate-800 bg-[#0b0d10] px-3 py-1 font-mono text-[10px] text-slate-400">
                  <span className="h-1 w-1 rounded-full bg-amber-400"/>{t}
                </span>
              )))}
            </div>
          </div>
        </div>
      </section>

      {/* Identity inputs (shared) */}
      <section className="mx-auto max-w-[1600px] px-4 pt-6 sm:px-6">
        <div className="rounded-2xl border border-slate-800 bg-[#12151a] p-4">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span className="font-mono text-[10px] uppercase tracking-widest text-slate-500">// identity</span>
            <span className="text-[11px] text-slate-500">— applies to every preview below</span>
            <div className="ml-auto flex items-center gap-2">
              <span className="font-mono text-[10px] text-slate-500">accent:</span>
              {(['amber','violet','cyan','rose','emerald'] as const).map(a=>(
                <button key={a} onClick={()=>setAccent(a)} title={a}
                  className={`h-5 w-5 rounded-full border-2 transition-all ${accent===a?'border-white scale-110':'border-transparent'}`}
                  style={{background: a==='amber'?'#f59e0b':a==='violet'?'#8b5cf6':a==='cyan'?'#06b6d4':a==='rose'?'#f43f5e':'#10b981'}}/>
              ))}
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            <label className="block">
              <span className="mb-1 block font-mono text-[10px] uppercase tracking-widest text-amber-400">name</span>
              <input value={name} onChange={e=>setName(e.target.value)} className="w-full rounded-lg border border-slate-800 bg-[#0b0d10] px-3 py-2 text-sm text-white focus:border-amber-500 focus:outline-none"/>
            </label>
            <label className="block">
              <span className="mb-1 block font-mono text-[10px] uppercase tracking-widest text-amber-400">role</span>
              <input value={role} onChange={e=>setRole(e.target.value)} className="w-full rounded-lg border border-slate-800 bg-[#0b0d10] px-3 py-2 text-sm text-white focus:border-amber-500 focus:outline-none"/>
            </label>
            <label className="block">
              <span className="mb-1 block font-mono text-[10px] uppercase tracking-widest text-amber-400">github handle</span>
              <input value={handle} onChange={e=>setHandle(e.target.value)} className="w-full rounded-lg border border-slate-800 bg-[#0b0d10] px-3 py-2 text-sm text-white focus:border-amber-500 focus:outline-none"/>
            </label>
          </div>
          {showMore && (
            <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <label className="block">
                <span className="mb-1 block font-mono text-[10px] uppercase tracking-widest text-lime-400">location</span>
                <input value={location} onChange={e=>setLocation(e.target.value)} className="w-full rounded-lg border border-slate-800 bg-[#0b0d10] px-3 py-2 text-sm text-white focus:border-lime-500 focus:outline-none"/>
              </label>
              <label className="block">
                <span className="mb-1 block font-mono text-[10px] uppercase tracking-widest text-lime-400">email</span>
                <input value={email} onChange={e=>setEmail(e.target.value)} className="w-full rounded-lg border border-slate-800 bg-[#0b0d10] px-3 py-2 text-sm text-white focus:border-lime-500 focus:outline-none"/>
              </label>
              <label className="block">
                <span className="mb-1 block font-mono text-[10px] uppercase tracking-widest text-lime-400">company</span>
                <input value={company} onChange={e=>setCompany(e.target.value)} className="w-full rounded-lg border border-slate-800 bg-[#0b0d10] px-3 py-2 text-sm text-white focus:border-lime-500 focus:outline-none"/>
              </label>
              <label className="block">
                <span className="mb-1 block font-mono text-[10px] uppercase tracking-widest text-lime-400">website</span>
                <input value={website} onChange={e=>setWebsite(e.target.value)} className="w-full rounded-lg border border-slate-800 bg-[#0b0d10] px-3 py-2 text-sm text-white focus:border-lime-500 focus:outline-none"/>
              </label>
            </div>
          )}
          <button onClick={()=>setShowMore(v=>!v)} className="mt-3 rounded-lg bg-slate-800 px-3 py-1.5 font-mono text-[11px] text-slate-300 hover:bg-slate-700">
            {showMore ? '− fewer fields' : '+ more fields (location, email, company, website)'}
          </button>
        </div>
      </section>

      {/* How to use on GitHub */}
      <section className="mx-auto max-w-[1600px] px-4 pt-6 sm:px-6">
        <details className="group rounded-2xl border border-lime-500/20 bg-lime-500/5 p-4">
          <summary className="flex cursor-pointer items-center gap-2 list-none">
            <span className="text-lg">📖</span>
            <span className="font-display text-base font-bold text-lime-300">How to use these in your GitHub README</span>
            <span className="ml-auto font-mono text-[11px] text-slate-500 group-open:hidden">click to expand ↓</span>
            <span className="ml-auto font-mono text-[11px] text-slate-500 hidden group-open:inline">collapse ↑</span>
          </summary>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-slate-800 bg-[#0b0d10] p-4">
              <div className="mb-2 font-mono text-[11px] text-amber-400">STEP 1 · pick & customize</div>
              <p className="text-xs text-slate-400 leading-relaxed">Type your <span className="text-white">name, role &amp; GitHub handle</span> above — every banner, pet, snippet &amp; stat updates live. Edit colors/speed/size, rename files, preview instantly.</p>
            </div>
            <div className="rounded-xl border border-slate-800 bg-[#0b0d10] p-4">
              <div className="mb-2 font-mono text-[11px] text-amber-400">STEP 2 · copy or download</div>
              <p className="text-xs text-slate-400 leading-relaxed mb-2">For <span className="text-white">markdown snippets/badges/stats</span> → click <span className="rounded bg-slate-800 px-1 text-lime-400">copy</span> &amp; paste into README.md.</p>
              <p className="text-xs text-slate-400 leading-relaxed">For <span className="text-white">SVG banners/pets</span> → click <span className="rounded bg-slate-800 px-1 text-lime-400">↓ .svg</span>, upload to your repo.</p>
            </div>
            <div className="rounded-xl border border-slate-800 bg-[#0b0d10] p-4">
              <div className="mb-2 font-mono text-[11px] text-amber-400">STEP 3 · embed the SVG</div>
              <pre className="rounded bg-slate-950 p-2 font-mono text-[10px] text-cyan-300 overflow-x-auto">{`![banner](./banner.svg)

<!-- or from raw url -->
<img src="https://raw.
githubusercontent.com/USER/
USER/main/pet.svg" />`}</pre>
            </div>
          </div>
          <div className="mt-3 grid gap-3 md:grid-cols-2">
            <div className="rounded-xl border border-teal-500/20 bg-teal-500/5 p-3">
              <p className="text-[11px] text-teal-200/80"><span className="font-bold">🧜 Mermaid:</span> GitHub renders <code className="rounded bg-slate-900 px-1 text-teal-300">```mermaid</code> code blocks natively. Copy any diagram markdown and paste it directly — no image upload needed.</p>
            </div>
            <div className="rounded-xl border border-lime-500/20 bg-lime-500/5 p-3">
              <p className="text-[11px] text-lime-200/80"><span className="font-bold">✎ Live editor:</span> Open any banner or pet → use the built-in SVG editor to tweak code (colors, sizes, animation timing) and watch the preview update instantly before you download.</p>
            </div>
          </div>
          <div className="mt-3 rounded-xl border border-amber-500/20 bg-amber-500/5 p-3">
            <p className="text-[11px] text-amber-200/80"><span className="font-bold">💡 Pro tip:</span> Create a repo named exactly like your username (e.g. <span className="font-mono text-white">{handle}/{handle}</span>) — its README.md shows on your profile. The stat cards &amp; badges auto-render your live GitHub data.</p>
          </div>
        </details>
      </section>

      {/* Tabs */}
      <section className="mx-auto max-w-[1600px] px-4 pt-6 sm:px-6">
        <div className="flex gap-1 overflow-x-auto rounded-xl border border-slate-800 bg-[#12151a] p-1 no-scrollbar">
          {tabs.map(t=>(
            <button key={t.id} onClick={()=>setTab(t.id)} className={`flex shrink-0 items-center gap-2 rounded-lg px-4 py-2.5 font-mono text-xs transition-all ${tab===t.id?'bg-gradient-to-br from-amber-400 to-lime-400 font-bold text-[#0b0d10]':'text-slate-400 hover:bg-slate-800 hover:text-white'}`}>
              <span className="text-sm">{t.icon}</span>
              <span>{t.label}</span>
              <span className={`rounded-full px-1.5 py-0.5 text-[9px] ${tab===t.id?'bg-[#0b0d10]/20 text-[#0b0d10]':'bg-slate-800 text-slate-400'}`}>{t.count}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Tab content */}
      <main className="mx-auto max-w-[1600px] px-4 py-6 sm:px-6">
        {tab === 'generator' && (
          <div className="grid gap-5 lg:grid-cols-[300px_1fr]">
            {/* controls */}
            <div className="rounded-2xl border border-slate-800 bg-[#12151a] p-4 lg:sticky lg:top-20 lg:self-start">
              <h3 className="mb-1 font-display text-lg text-white">⚡ Profile Builder</h3>
              <p className="mb-4 text-[11px] text-slate-500">Toggle sections — full README assembles live from your identity fields above.</p>
              <div className="space-y-1.5">
                {([
                  ['header','Header title'],['typing','Typing animation'],['visitor','Visitor counter'],
                  ['about','About Me'],['techStack','Tech stack icons'],['stats','GitHub stats'],
                  ['langs','Top languages'],['streak','Streak stats'],['trophies','Trophies'],
                  ['activity','Activity graph'],['snake','Snake animation'],['quote','Dev quote'],
                  ['social','Social links'],['footer','Waving footer'],
                ] as const).map(([k,lbl])=>(
                  <label key={k} className="flex cursor-pointer items-center justify-between rounded-lg border border-slate-800 bg-[#0b0d10] px-3 py-2 hover:border-slate-700">
                    <span className="text-xs text-slate-300">{lbl}</span>
                    <input type="checkbox" checked={genOpts[k as keyof typeof genOpts]} onChange={e=>setGenOpts(o=>({...o,[k]:e.target.checked}))} className="h-4 w-4 accent-amber-500"/>
                  </label>
                ))}
              </div>
              <div className="mt-4 flex gap-2">
                <button onClick={()=>copy(generatorMd,'gen-copy')} className={copied==='gen-copy'?'flex-1 rounded-lg bg-lime-400 px-3 py-2 text-xs font-bold text-[#0b0d10]':'flex-1 rounded-lg bg-amber-500 px-3 py-2 text-xs font-bold text-[#0b0d10] hover:bg-amber-400'}>{copied==='gen-copy'?'✓ copied':'⎘ copy README'}</button>
                <button onClick={()=>downloadFile(generatorMd,'README.md','text/markdown')} className="rounded-lg bg-slate-800 px-3 py-2 text-xs text-slate-200 hover:bg-slate-700">↓</button>
              </div>
              <div className="mt-2 grid grid-cols-2 gap-2">
                <button onClick={()=>setGenOpts(o=>Object.fromEntries(Object.keys(o).map(k=>[k,true])) as typeof o)} className="rounded-lg bg-slate-800 px-2 py-1.5 text-[11px] text-slate-300 hover:bg-slate-700">all on</button>
                <button onClick={()=>setGenOpts(o=>Object.fromEntries(Object.keys(o).map(k=>[k,false])) as typeof o)} className="rounded-lg bg-slate-800 px-2 py-1.5 text-[11px] text-slate-300 hover:bg-slate-700">all off</button>
              </div>
            </div>
            {/* live preview + source */}
            <div className="space-y-4">
              <div className="rounded-2xl border border-slate-800 bg-[#12151a] p-5">
                <div className="mb-3 font-mono text-[10px] uppercase tracking-widest text-slate-500">👁 live rendered preview</div>
                <div className="rounded-lg border border-slate-800 bg-[#0b0d10] p-5 max-h-[420px] overflow-auto [&_img]:inline-block [&_img]:my-1 [&_h1]:text-2xl [&_h1]:font-bold [&_h1]:text-white [&_h1]:my-2 [&_h2]:text-lg [&_h2]:font-bold [&_h2]:text-lime-400 [&_h2]:mt-4 [&_h2]:mb-2 [&_p]:my-2 [&_li]:text-slate-300 [&_li]:text-sm [&_a]:text-amber-400 [&_ul]:my-2 [&_sub]:text-slate-500" dangerouslySetInnerHTML={{__html: renderReadmePreview(generatorMd)}}/>
              </div>
              <div>
                <div className="mb-2 font-mono text-[10px] uppercase tracking-widest text-slate-500">markdown source · syntax highlighted</div>
                <CodeBlock code={generatorMd} lang="md" filename="README.md" maxHeight={400} onDownload={()=>downloadFile(generatorMd,'README.md','text/markdown')}/>
              </div>
            </div>
          </div>
        )}

        {tab === 'banners' && (
          <BannerTab name={name} role={role} handle={handle} copied={copied} onCopy={copy} onDownload={downloadFile}/>
        )}

        {tab === 'templates' && (
          <TemplateTab
            name={name} role={role} handle={handle}
            copied={copied} onCopy={copy} onDownload={downloadFile}
          />
        )}

        {tab === 'pets' && (
          <PetTab name={name} role={role} handle={handle} copied={copied} onCopy={copy} onDownload={downloadFile}/>
        )}

        {tab === 'mermaid' && (
          <MermaidTab name={name} role={role} handle={handle} copied={copied} onCopy={copy} onDownload={downloadFile}/>
        )}

        {tab === 'learn' && (
          <LearnTab name={name} role={role} handle={handle} copied={copied} onCopy={copy} onDownload={downloadFile}/>
        )}

        {tab === 'contribute' && (
          <ContributeTab/>
        )}

        {tab === 'games' && (
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <input value={gameSearch} onChange={e=>setGameSearch(e.target.value)} placeholder="search games…" className="rounded-lg border border-slate-800 bg-[#0b0d10] px-3 py-2 text-xs text-white placeholder-slate-600 focus:border-cyan-500 focus:outline-none w-56"/>
              <span className="font-mono text-[11px] text-slate-500">{GAMES_META.filter(g=>!gameSearch||g.name.toLowerCase().includes(gameSearch.toLowerCase())).length} of {GAMES_META.length} · all fully playable</span>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {GAMES_META.filter(g=>!gameSearch||g.name.toLowerCase().includes(gameSearch.toLowerCase())).map(g => {
                const Cmp = g.cmp;
                return (
                  <article key={g.id} className="overflow-hidden rounded-2xl border border-slate-800 bg-[#12151a] transition-all hover:border-cyan-400/40">
                    <div className="border-b border-slate-800 px-4 py-2 flex items-center justify-between">
                      <h3 className="font-display text-sm font-bold text-white">{g.emoji} {g.name}</h3>
                      <span className="rounded bg-cyan-500/10 px-1.5 py-0.5 font-mono text-[9px] text-cyan-400">playable</span>
                    </div>
                    <div className="p-4"><Cmp/></div>
                  </article>
                );
              })}
            </div>
          </div>
        )}

        {tab === 'stats' && (
          <div className="grid gap-5 lg:grid-cols-[340px_1fr]">
            <div className="rounded-2xl border border-slate-800 bg-[#12151a] p-5">
              <h3 className="mb-4 font-display text-lg text-pink-400">Configure</h3>
              <label className="mb-3 block">
                <span className="mb-1 block font-mono text-[10px] uppercase tracking-widest text-slate-500">theme ({STAT_THEMES.length})</span>
                <select value={theme} onChange={e=>setTheme(e.target.value)} className="w-full rounded-lg border border-slate-800 bg-[#0b0d10] px-3 py-2 text-sm text-white">
                  {STAT_THEMES.map(t=><option key={t} value={t}>{t}</option>)}
                </select>
              </label>
              {[
                {v:hideBorder, s:setHideBorder, l:'hide border'},
                {v:showIcons, s:setShowIcons, l:'show icons'},
                {v:allCommits, s:setAllCommits, l:'all commits'},
              ].map(r=>(
                <label key={r.l} className="mb-2 flex items-center gap-2 text-sm text-slate-300">
                  <input type="checkbox" checked={r.v} onChange={e=>r.s(e.target.checked)} className="h-4 w-4 rounded border-slate-700 bg-slate-900 text-amber-500"/>
                  {r.l}
                </label>
              ))}
              <button onClick={()=>copy(statsMd,'stats')} className={copied==='stats'?'mt-4 w-full rounded-lg bg-lime-400 px-3 py-2 text-sm font-bold text-[#0b0d10]':'mt-4 w-full rounded-lg bg-amber-500 px-3 py-2 text-sm font-bold text-[#0b0d10] hover:bg-amber-400'}>
                {copied==='stats'?'✓ copied':'copy all stat markdown'}
              </button>
              <button onClick={()=>downloadFile(statsMd, 'stats.md', 'text/markdown')} className="mt-2 w-full rounded-lg bg-slate-800 px-3 py-2 text-sm text-slate-200 hover:bg-slate-700">↓ download .md</button>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-[#12151a] p-5">
              <div className="mb-3 font-mono text-[10px] uppercase tracking-widest text-slate-500">live preview · @{handle}</div>
              <div className="grid gap-3 sm:grid-cols-2">
                <img alt="stats" src={`https://github-readme-stats.vercel.app/api?username=${handle}&theme=${theme}&hide_border=${hideBorder}&show_icons=${showIcons}&show=all_commits`} className="w-full rounded-lg"/>
                <img alt="streak" src={`https://github-readme-streak-stats.herokuapp.com/?user=${handle}&theme=${theme}&hide_border=${hideBorder}`} className="w-full rounded-lg"/>
                <img alt="langs" src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${handle}&theme=${theme}&layout=compact&hide_border=${hideBorder}`} className="w-full rounded-lg"/>
                <img alt="trophies" src={`https://github-profile-trophy.vercel.app/?username=${handle}&theme=${theme}&no-frame=${hideBorder}&row=1&column=4`} className="w-full rounded-lg"/>
              </div>
              <img alt="activity" src={`https://github-readme-activity-graph.vercel.app/graph?username=${handle}&theme=${theme}&hide_border=${hideBorder}`} className="mt-3 w-full rounded-lg"/>
            </div>
          </div>
        )}

        {tab === 'statcards' && (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {STAT_THEMES.map(t => {
              const cards = [
                `![Stats](https://github-readme-stats.vercel.app/api?username=${handle}&theme=${t}&hide_border=true&show_icons=true)`,
                `![Streak](https://github-readme-streak-stats.herokuapp.com/?user=${handle}&theme=${t}&hide_border=true)`,
                `![Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=${handle}&layout=compact&theme=${t}&hide_border=true)`,
                `![Activity](https://github-readme-activity-graph.vercel.app/graph?username=${handle}&theme=${t}&hide_border=true)`,
                `![Trophies](https://github-profile-trophy.vercel.app/?username=${handle}&theme=${t}&no-frame=true&row=1&column=7)`,
              ];
              return (
                <article key={t} className="rounded-xl border border-slate-800 bg-[#12151a] p-3 hover:border-pink-400/40 transition-all">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="rounded bg-slate-800 px-1.5 py-0.5 font-mono text-[9px] text-pink-400">{t}</span>
                    <span className="text-[10px] text-slate-500">5 cards</span>
                  </div>
                  <div className="space-y-1 mb-2">
                    {cards.map((c,i) => (
                      <button key={i} onClick={()=>copy(c, `stat-${t}-${i}`)} className={`block w-full text-left rounded bg-[#0b0d10] p-1.5 font-mono text-[9px] text-slate-400 truncate transition-all hover:text-amber-400 ${copied===`stat-${t}-${i}`?'text-lime-400':''}`}>
                        {copied===`stat-${t}-${i}`?'✓ copied ':''}{c.split('(')[0]}
                      </button>
                    ))}
                  </div>
                  <div className="rounded bg-[#0b0d10] overflow-hidden">
                    <img src={`https://github-readme-stats.vercel.app/api?username=${handle}&theme=${t}&hide_border=true&show_icons=true`} alt={t} className="w-full" loading="lazy"/>
                  </div>
                </article>
              );
            })}
          </div>
        )}

        {tab === 'badges' && (
          <div className="grid gap-5 lg:grid-cols-[340px_1fr]">
            <div className="rounded-2xl border border-slate-800 bg-[#12151a] p-5 space-y-3">
              <h3 className="font-display text-lg text-orange-400">Badge maker</h3>
              <label className="block"><span className="mb-1 block font-mono text-[10px] uppercase tracking-widest text-slate-500">label</span><input value={badgeLabel} onChange={e=>setBadgeLabel(e.target.value)} className="w-full rounded-lg border border-slate-800 bg-[#0b0d10] px-3 py-2 text-sm text-white"/></label>
              <label className="block"><span className="mb-1 block font-mono text-[10px] uppercase tracking-widest text-slate-500">value</span><input value={badgeValue} onChange={e=>setBadgeValue(e.target.value)} className="w-full rounded-lg border border-slate-800 bg-[#0b0d10] px-3 py-2 text-sm text-white"/></label>
              <label className="block"><span className="mb-1 block font-mono text-[10px] uppercase tracking-widest text-slate-500">color hex</span><input value={badgeColor} onChange={e=>setBadgeColor(e.target.value.replace('#',''))} className="w-full rounded-lg border border-slate-800 bg-[#0b0d10] px-3 py-2 font-mono text-sm text-white"/></label>
              <label className="block"><span className="mb-1 block font-mono text-[10px] uppercase tracking-widest text-slate-500">style</span><select value={badgeStyle} onChange={e=>setBadgeStyle(e.target.value)} className="w-full rounded-lg border border-slate-800 bg-[#0b0d10] px-3 py-2 text-sm text-white"><option>flat</option><option>flat-square</option><option>plastic</option><option>for-the-badge</option><option>social</option></select></label>
              <div className="flex flex-wrap gap-1">
                {BADGE_COLORS.map(c=>(
                  <button key={c} onClick={()=>setBadgeColor(c)} className={`h-5 w-5 rounded border ${badgeColor===c?'border-white':'border-transparent'}`} style={{background:`#${c}`}} title={c}/>
                ))}
              </div>
              <button onClick={()=>copy(badgeMd,'badge')} className={copied==='badge'?'w-full rounded-lg bg-lime-400 px-3 py-2 text-sm font-bold text-[#0b0d10]':'w-full rounded-lg bg-amber-500 px-3 py-2 text-sm font-bold text-[#0b0d10] hover:bg-amber-400'}>{copied==='badge'?'✓ copied':'copy markdown'}</button>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-[#12151a] p-5">
              <div className="mb-3 font-mono text-[10px] uppercase tracking-widest text-slate-500">preview</div>
              <div className="mb-4 rounded-lg border border-slate-800 bg-[#0b0d10] p-6 text-center">
                <img alt={badgeLabel} src={`https://img.shields.io/badge/${encodeURIComponent(badgeLabel)}-${encodeURIComponent(badgeValue)}-${badgeColor}?style=${badgeStyle}`}/>
              </div>
              <div className="mb-3 font-mono text-[10px] uppercase tracking-widest text-slate-500">quick stack</div>
              <div className="flex flex-wrap gap-1">
                {['HTML5-E34F26','CSS3-1572B6','JavaScript-F7DF1E','TypeScript-3178C6','React-61DAFB','Node.js-339933','Python-3776AB','Git-F05032','GitHub-181717','Docker-2496ED','AWS-232F3E','Linux-FCC624','VSCode-007ACC','Tailwind-06B6D4'].map(b=>(
                  <img key={b} alt={b} src={`https://img.shields.io/badge/${b}?style=${badgeStyle}&logo=${b.split('-')[0].toLowerCase()}&logoColor=white`} className="h-6"/>
                ))}
              </div>
            </div>
          </div>
        )}

        {tab === 'snippets' && (
          <SnippetTab name={name} role={role} handle={handle} location={location} email={email} company={company} website={website} copied={copied} onCopy={copy} onDownload={downloadFile}/>
        )}
      </main>

      <SiteFooter
        total={total}
        counts={[
          { label: 'banners', n: bannerCount, c: 'text-amber-400' },
          { label: 'READMEs', n: templateCount, c: 'text-rose-400' },
          { label: 'snippets', n: snippetCount, c: 'text-violet-400' },
          { label: 'pets', n: petCount, c: 'text-lime-400' },
          { label: 'mermaid', n: mermaidCount, c: 'text-teal-400' },
          { label: 'learn', n: learnCount, c: 'text-pink-400' },
          { label: 'games', n: gameCount, c: 'text-cyan-400' },
          { label: 'stat cards', n: statCardCount, c: 'text-pink-400' },
          { label: 'badges', n: badgeCustomCount, c: 'text-orange-400' },
        ]}
      />

      <style>{`
        .no-scrollbar::-webkit-scrollbar{display:none}
        .no-scrollbar{scrollbar-width:none}
      `}</style>
    </div>
  );
}

import { useEffect, useMemo, useState } from 'react';
import { BANNERS, fillBanner } from './data/banners';
import { PETS, renderPet } from './data/pets';
import { GAMES_META } from './games';
import { TEMPLATES, fillTemplate } from './data/templates';
import { SNIPPETS, SNIPPET_CATEGORIES, fillSnippet } from './data/snippets';
import { CodeBlock } from './components/CodeBlock';
import { SiteFooter } from './components/SiteFooter';

type Tab = 'banners' | 'templates' | 'snippets' | 'pets' | 'games' | 'stats' | 'statcards' | 'badges';

const LIVE_URL = 'https://readme-lab.pages.dev/';
const REPO_URL = 'https://github.com/SudhirDevOps1/readme.lab';

const STAT_THEMES = ['default','dark','radical','merko','gruvbox','tokyonight','onedark','cobalt','synthwave','highcontrast','dracula','prussian','monokai','vue','vue-dark','shades-of-purple','nightowl','buefy','blue-green','algolia','great-gatsby','darcula','bear','solarized-dark','solarized-light','chartreuse-dark','nord','gotham','material-palenight','graywhite','vision-friendly-dark','ayu-mirage','calm','flag-india','omni','react','jolly','maroongold','yeblu','blueberry','slateorange','kacho_ga','outrun','ocean_dark','city_lights','github_dark','github','discord','aura_dark','panda','noctis_minimus','cobalt2','swift','aura','apprentice','moltack','codeSTACKr','rose_pine','catppuccin_latte','catppuccin_mocha','date_night','one_dark_pro','rose','holi','neon','blue_navy','calm_pink','ambient_gradient','react-dark','github_dark_dimmed','github_compact','transparent','shadow_red','shadow_green','shadow_blue','dark-violet','github_light','react-light','midnight-purple','light'];

const BADGE_COLORS = ['000000','ffffff','FF0000','FF4500','FF6B35','FFA500','FFD700','FFFF00','ADFF2F','00FF00','00FA9A','00CED1','00BFFF','1E90FF','4169E1','0000FF','4B0082','8A2BE2','9400D3','FF00FF','FF1493','FF69B4','FFB6C1','DC143C','B22222','800000','808000','006400','2F4F4F','191970','483D8B','2c3e50','34495e','7f8c8d','95a5a6','bdc3c7','ecf0f1','e74c3c','e67e22','f1c40f','2ecc71','1abc9c','3498db','9b59b6','34495e'];

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

  const filtered = BANNERS.filter(b =>
    !search || b.name.toLowerCase().includes(search.toLowerCase()) || b.style.toLowerCase().includes(search.toLowerCase()) || b.palette.toLowerCase().includes(search.toLowerCase())
  );
  const current = active ? BANNERS.find(b => b.id === active) : null;

  if (current) {
    const filled = fillBanner(current.svg, { name, role, handle });
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
              <div className="mb-2 font-mono text-[10px] uppercase tracking-widest text-slate-500">SVG source · syntax highlighted</div>
              <CodeBlock code={filled} lang="xml" filename={`${fname}.svg`} maxHeight={340} onDownload={()=>onDownload(filled,`${fname}.svg`,'image/svg+xml')}/>
            </div>
            <div>
              <div className="mb-2 font-mono text-[10px] uppercase tracking-widest text-slate-500">embed in README.md</div>
              <CodeBlock code={md} lang="md" filename="README.md" maxHeight={80} showLineNumbers={false}/>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-4 flex items-center gap-2">
        <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="search banners…" className="rounded-lg border border-slate-800 bg-[#0b0d10] px-3 py-2 text-xs text-white placeholder-slate-600 focus:border-amber-500 focus:outline-none w-56"/>
        <span className="font-mono text-[11px] text-slate-500">{filtered.length} of {BANNERS.length} · click any to open editor</span>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        {filtered.map(b => {
          const filled = fillBanner(b.svg, { name, role, handle });
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
function SnippetTab({ name, role, handle, copied, onCopy, onDownload }: {
  name: string; role: string; handle: string;
  copied: string | null;
  onCopy: (t: string, id: string) => void;
  onDownload: (t: string, f: string, m: string) => void;
}) {
  const [filterCat, setFilterCat] = useState('all');
  const [search, setSearch] = useState('');
  const [expanded, setExpanded] = useState<string | null>(null);
  const [bucket, setBucket] = useState<string[]>([]);

  const filtered = SNIPPETS.filter(s => {
    if (filterCat !== 'all' && s.cat !== filterCat) return false;
    if (search && !s.label.toLowerCase().includes(search.toLowerCase()) && !s.cat.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  const readme = bucket.map(id => {
    const sn = SNIPPETS.find(s => s.id === id);
    return sn ? fillSnippet(sn.md, { name, role, handle }) : '';
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
            const filled = fillSnippet(s.md, { name, role, handle });
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

  const current = PETS.find(p => p.id === active) || PETS[0];
  const displayName = customName || current.name;
  const fileName = displayName.toLowerCase().replace(/\s+/g,'-');
  const svgStr = renderPet(current, {
    color: petColor || undefined,
    speed: petSpeed,
    scale: petScale,
  });
  const md = `![${displayName}](https://raw.githubusercontent.com/${handle}/${handle}/main/${fileName}.svg)`;

  const filtered = PETS.filter(p =>
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
        <div className="mt-3 text-center font-mono text-[10px] text-slate-500">{filtered.length} of {PETS.length} pets</div>
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
          <div className="mb-2 font-mono text-[10px] uppercase tracking-widest text-slate-500">SVG source · syntax highlighted</div>
          <CodeBlock code={svgStr} lang="xml" filename={`${fileName}.svg`} maxHeight={260} onDownload={()=>onDownload(svgStr, `${fileName}.svg`, 'image/svg+xml')}/>
        </div>
        <div className="mt-3">
          <div className="mb-2 font-mono text-[10px] uppercase tracking-widest text-slate-500">embed in README.md</div>
          <CodeBlock code={md} lang="md" filename="README.md" maxHeight={80} showLineNumbers={false}/>
        </div>
      </div>
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

export default function App() {
  const [tab, setTab] = useState<Tab>('banners');
  const [name, setName] = useState('Sudhir Singh');
  const [role, setRole] = useState('Full-Stack Developer');
  const [handle, setHandle] = useState('SudhirDevOps1');
  const [githubInput, setGithubInput] = useState('');
  const [loadingUser, setLoadingUser] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);

  const [theme, setTheme] = useState('tokyonight');
  const [hideBorder, setHideBorder] = useState(true);
  const [showIcons, setShowIcons] = useState(true);
  const [allCommits, setAllCommits] = useState(true);

  const [badgeColor, setBadgeColor] = useState('3498db');
  const [badgeLabel, setBadgeLabel] = useState('GitHub');
  const [badgeValue, setBadgeValue] = useState('SudhirDevOps1');
  const [badgeStyle, setBadgeStyle] = useState('for-the-badge');
  const [hydrated, setHydrated] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem('readme-lab-config');
      if (raw) {
        const c = JSON.parse(raw);
        if (c.name) setName(c.name);
        if (c.role) setRole(c.role);
        if (c.handle) setHandle(c.handle);
        if (c.theme) setTheme(c.theme);
        if (typeof c.hideBorder === 'boolean') setHideBorder(c.hideBorder);
        if (typeof c.showIcons === 'boolean') setShowIcons(c.showIcons);
        if (typeof c.allCommits === 'boolean') setAllCommits(c.allCommits);
        if (c.badgeColor) setBadgeColor(c.badgeColor);
        if (c.badgeLabel) setBadgeLabel(c.badgeLabel);
        if (c.badgeValue) setBadgeValue(c.badgeValue);
        if (c.badgeStyle) setBadgeStyle(c.badgeStyle);
      }
    } catch {}
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    const config = { name, role, handle, theme, hideBorder, showIcons, allCommits, badgeColor, badgeLabel, badgeValue, badgeStyle };
    localStorage.setItem('readme-lab-config', JSON.stringify(config));
    setSaved(true);
    const t = window.setTimeout(() => setSaved(false), 900);
    return () => window.clearTimeout(t);
  }, [hydrated, name, role, handle, theme, hideBorder, showIcons, allCommits, badgeColor, badgeLabel, badgeValue, badgeStyle]);

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

  const exportConfig = () => {
    const config = { version: 1, name, role, handle, theme, hideBorder, showIcons, allCommits, badgeColor, badgeLabel, badgeValue, badgeStyle };
    downloadFile(JSON.stringify(config, null, 2), 'readme-lab.config.json', 'application/json');
  };

  const importConfig = (file?: File) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const c = JSON.parse(String(reader.result));
        if (c.name) setName(c.name);
        if (c.role) setRole(c.role);
        if (c.handle) setHandle(c.handle);
        if (c.theme) setTheme(c.theme);
        if (typeof c.hideBorder === 'boolean') setHideBorder(c.hideBorder);
        if (typeof c.showIcons === 'boolean') setShowIcons(c.showIcons);
        if (typeof c.allCommits === 'boolean') setAllCommits(c.allCommits);
        if (c.badgeColor) setBadgeColor(c.badgeColor);
        if (c.badgeLabel) setBadgeLabel(c.badgeLabel);
        if (c.badgeValue) setBadgeValue(c.badgeValue);
        if (c.badgeStyle) setBadgeStyle(c.badgeStyle);
      } catch { alert('Invalid readme.lab config file'); }
    };
    reader.readAsText(file);
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
    } catch { alert('user not found'); }
    finally { setLoadingUser(false); }
  };

  const bannerCount = BANNERS.length;
  const petCount = PETS.length;
  const gameCount = GAMES_META.length;
  const themeCount = STAT_THEMES.length;
  const colorCount = BADGE_COLORS.length;
  const snippetCount = SNIPPETS.length;
  const statCardCount = themeCount * 5; // 5 real card types per theme
  const total = bannerCount + petCount + gameCount + statCardCount + colorCount + TEMPLATES.length + snippetCount;

  const statsMd = useMemo(() => `![stats](https://github-readme-stats.vercel.app/api?username=${handle}&theme=${theme}&hide_border=${hideBorder}&show_icons=${showIcons}&show=all_commits)

![streak](https://github-readme-streak-stats.herokuapp.com/?user=${handle}&theme=${theme}&hide_border=${hideBorder})

![langs](https://github-readme-stats.vercel.app/api/top-langs/?username=${handle}&theme=${theme}&layout=compact&hide_border=${hideBorder})

![activity](https://github-readme-activity-graph.vercel.app/graph?username=${handle}&theme=${theme}&hide_border=${hideBorder})

![trophies](https://github-profile-trophy.vercel.app/?username=${handle}&theme=${theme}&no-frame=${hideBorder}&row=1&column=7)`, [handle, theme, hideBorder, showIcons, allCommits]);

  const badgeMd = useMemo(() => `![${badgeLabel}](https://img.shields.io/badge/${encodeURIComponent(badgeLabel)}-${encodeURIComponent(badgeValue)}-${badgeColor}?style=${badgeStyle})`, [badgeLabel, badgeValue, badgeColor, badgeStyle]);

  const templateCount = TEMPLATES.length;
  const tabs: { id: Tab; label: string; icon: string; count: number }[] = [
    { id: 'banners', label: 'SVG Banners', icon: '◼', count: bannerCount },
    { id: 'templates', label: 'READMEs', icon: '§', count: templateCount },
    { id: 'snippets', label: 'Snippets', icon: '✂', count: snippetCount },
    { id: 'pets', label: 'Pets', icon: '🐾', count: petCount },
    { id: 'games', label: 'Games', icon: '▶', count: gameCount },
    { id: 'stats', label: 'Stats', icon: '▦', count: themeCount },
    { id: 'statcards', label: 'Stat Cards', icon: '▤', count: statCardCount },
    { id: 'badges', label: 'Badges', icon: '◉', count: colorCount },
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
              <div className="font-display text-base font-black tracking-tight text-white sm:text-lg">readme.lab</div>
              <div className="font-mono text-[10px] text-slate-500 hidden sm:block">{total}+ real, working assets · every one copyable</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={LIVE_URL}
              target="_blank"
              rel="noreferrer"
              className="hidden rounded-lg border border-lime-400/20 bg-lime-400/10 px-3 py-2 font-mono text-[11px] text-lime-300 transition-all hover:border-lime-400/50 hover:bg-lime-400/15 sm:inline-flex"
            >
              ● live
            </a>
            <a
              href={REPO_URL}
              target="_blank"
              rel="noreferrer"
              className="hidden rounded-lg border border-slate-800 bg-[#12151a] px-3 py-2 font-mono text-[11px] text-slate-300 transition-all hover:border-amber-400/40 hover:text-amber-300 sm:inline-flex"
            >
              &lt;/&gt; repo
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
              {bannerCount} animated SVG banners · {templateCount} README templates · {snippetCount} snippets · {petCount} live-editable pets · {gameCount} playable games · {statCardCount} stat cards. Live edit, preview, rename &amp; copy — everything drops straight into your <code className="rounded bg-slate-900 px-1 text-lime-400">README.md</code>.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <a href={LIVE_URL} target="_blank" rel="noreferrer" className="rounded-lg bg-gradient-to-r from-amber-400 to-lime-400 px-4 py-2 text-xs font-bold text-[#0b0d10] transition-transform hover:scale-[1.03]">open live app ↗</a>
              <a href={REPO_URL} target="_blank" rel="noreferrer" className="rounded-lg border border-slate-700 bg-[#0b0d10] px-4 py-2 text-xs font-medium text-slate-200 transition-colors hover:border-amber-400/50 hover:text-amber-300">view source on GitHub ↗</a>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-3 sm:grid-cols-6 lg:grid-cols-7">
              {[
                {n:bannerCount, l:'SVG banners', c:'text-amber-400'},
                {n:templateCount, l:'READMEs', c:'text-rose-400'},
                {n:snippetCount, l:'snippets', c:'text-violet-400'},
                {n:petCount, l:'pets', c:'text-lime-400'},
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
            <span className={`ml-auto font-mono text-[10px] transition-colors ${saved ? 'text-lime-400' : 'text-slate-600'}`}>{saved ? '✓ autosaved' : 'autosave on'}</span>
            <button onClick={exportConfig} className="rounded-md bg-slate-800 px-2.5 py-1 font-mono text-[10px] text-slate-300 hover:bg-slate-700">↓ export config</button>
            <label className="cursor-pointer rounded-md bg-slate-800 px-2.5 py-1 font-mono text-[10px] text-slate-300 hover:bg-slate-700">
              ↑ import config
              <input type="file" accept="application/json,.json" className="hidden" onChange={e=>importConfig(e.target.files?.[0])}/>
            </label>
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

        {tab === 'games' && (
          <div className="space-y-8">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {GAMES_META.map(g => {
                const Cmp = g.cmp;
                return (
                  <article key={g.id} className="overflow-hidden rounded-2xl border border-slate-800 bg-[#12151a] transition-all hover:border-cyan-400/40">
                    <div className="border-b border-slate-800 px-4 py-2">
                      <h3 className="font-display text-sm font-bold text-white">{g.emoji} {g.name}</h3>
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
          <SnippetTab name={name} role={role} handle={handle} copied={copied} onCopy={copy} onDownload={downloadFile}/>
        )}
      </main>

      <SiteFooter
        total={total}
        counts={[
          { label: 'banners', n: bannerCount, c: 'text-amber-400' },
          { label: 'READMEs', n: templateCount, c: 'text-rose-400' },
          { label: 'snippets', n: snippetCount, c: 'text-violet-400' },
          { label: 'pets', n: petCount, c: 'text-lime-400' },
          { label: 'games', n: gameCount, c: 'text-cyan-400' },
          { label: 'stat cards', n: statCardCount, c: 'text-pink-400' },
          { label: 'badges', n: colorCount, c: 'text-orange-400' },
        ]}
      />

      <style>{`
        .no-scrollbar::-webkit-scrollbar{display:none}
        .no-scrollbar{scrollbar-width:none}
      `}</style>
    </div>
  );
}

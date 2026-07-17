export function SiteFooter({ total, counts }: {
  total: number;
  counts: { label: string; n: number; c: string }[];
}) {
  return (
    <footer className="relative mt-16 overflow-hidden border-t border-slate-800">
      {/* animated wave backdrop */}
      <svg
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 w-full opacity-30"
        viewBox="0 0 1440 200"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="footWave" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#f59e0b" />
            <stop offset="0.5" stopColor="#a3e635" />
            <stop offset="1" stopColor="#22d3ee" />
          </linearGradient>
        </defs>
        <path fill="url(#footWave)" opacity="0.35">
          <animate
            attributeName="d"
            dur="8s"
            repeatCount="indefinite"
            values="
              M0,120 C240,80 480,160 720,120 C960,80 1200,160 1440,120 L1440,200 L0,200 Z;
              M0,140 C240,120 480,120 720,140 C960,160 1200,120 1440,140 L1440,200 L0,200 Z;
              M0,120 C240,80 480,160 720,120 C960,80 1200,160 1440,120 L1440,200 L0,200 Z"
          />
        </path>
        <path fill="url(#footWave)" opacity="0.2">
          <animate
            attributeName="d"
            dur="6s"
            repeatCount="indefinite"
            values="
              M0,150 C360,110 720,180 1080,140 C1260,120 1440,160 1440,160 L1440,200 L0,200 Z;
              M0,160 C360,150 720,140 1080,160 C1260,170 1440,150 1440,150 L1440,200 L0,200 Z;
              M0,150 C360,110 720,180 1080,140 C1260,120 1440,160 1440,160 L1440,200 L0,200 Z"
          />
        </path>
      </svg>

      {/* floating particles */}
      <div className="pointer-events-none absolute inset-0">
        {[
          { l: '10%', d: '0s', dur: '7s' },
          { l: '25%', d: '1s', dur: '9s' },
          { l: '45%', d: '2s', dur: '6s' },
          { l: '65%', d: '0.5s', dur: '8s' },
          { l: '82%', d: '1.5s', dur: '7.5s' },
          { l: '92%', d: '2.5s', dur: '10s' },
        ].map((p, i) => (
          <span
            key={i}
            className="absolute bottom-0 h-1.5 w-1.5 rounded-full bg-lime-400/60"
            style={{ left: p.l, animation: `floatUp ${p.dur} ${p.d} ease-in infinite` }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-[1600px] px-4 py-12 sm:px-6">
        {/* top: brand + stats */}
        <div className="grid gap-10 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <div className="mb-3 flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-amber-400 to-lime-400 blur-md opacity-60" />
                <div className="relative flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-amber-400 to-lime-400 font-display text-xl font-black text-[#0b0d10]">
                  ∞
                </div>
              </div>
              <div>
                <div className="font-display text-xl font-black text-white">readme.lab</div>
                <div className="font-mono text-[10px] text-slate-500">craft a profile that breathes</div>
              </div>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-slate-400">
              {total} real, working assets — animated SVG banners, live-editable pets, playable games,
              badges, stat cards &amp; README templates. Every item previews live &amp; copies straight
              into your GitHub profile.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {['live edit', 'preview', 'rename', 'copy', 'render', 'download', 'syntax hi'].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-slate-800 bg-[#0b0d10]/60 px-2.5 py-1 font-mono text-[10px] text-slate-400"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* stat grid */}
          <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-7">
            {counts.map((s) => (
              <div
                key={s.label}
                className="rounded-xl border border-slate-800 bg-[#0b0d10]/70 p-3 text-center backdrop-blur transition-all hover:border-slate-700 hover:-translate-y-0.5"
              >
                <div className={`font-display text-2xl font-black ${s.c}`}>{s.n}</div>
                <div className="font-mono text-[9px] uppercase tracking-widest text-slate-500">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* links row */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-slate-800/70 pt-6 sm:flex-row">
          <div className="flex flex-wrap items-center gap-4 font-mono text-[11px] text-slate-500">
            <a href="https://github.com/SudhirDevOps1/readme.lab" target="_blank" rel="noreferrer" className="transition-colors hover:text-amber-400">Repository</a>
            <span className="text-slate-700">·</span>
            <a href="https://readme-lab.pages.dev/" target="_blank" rel="noreferrer" className="transition-colors hover:text-amber-400">Live app</a>
            <span className="text-slate-700">·</span>
            <a href="https://github.com/SudhirDevOps1/readme.lab#how-to-use-it" target="_blank" rel="noreferrer" className="transition-colors hover:text-amber-400">Docs</a>
            <span className="text-slate-700">·</span>
            <a href="https://github.com/SudhirDevOps1/readme.lab/issues" target="_blank" rel="noreferrer" className="transition-colors hover:text-amber-400">Report bug</a>
          </div>
          <div className="flex items-center gap-2 font-mono text-[11px] text-slate-600">
            <span className="inline-flex h-1.5 w-1.5 rounded-full bg-lime-400" style={{ animation: 'pulseSoft 2s infinite' }} />
            built with React + Vite + Tailwind · 2026
          </div>
        </div>

        <div className="mt-6 text-center font-mono text-[10px] text-slate-700">
          made with <span className="text-red-400">❤</span> · every asset is real, none are fake · MIT
        </div>
      </div>

      <style>{`
        @keyframes floatUp {
          0% { transform: translateY(0); opacity: 0; }
          15% { opacity: 1; }
          100% { transform: translateY(-180px); opacity: 0; }
        }
        @keyframes pulseSoft {
          0%,100% { opacity: 1; }
          50% { opacity: 0.35; }
        }
      `}</style>
    </footer>
  );
}

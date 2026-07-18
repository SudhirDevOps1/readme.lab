import { useState } from 'react';
import { highlight } from '../lib/highlight';

// Live SVG code editor: edit raw SVG, see it render instantly, copy / download / reset.
export function SvgEditor({
  initialSvg,
  filename,
  onCopy,
  onDownload,
  copied,
}: {
  initialSvg: string;
  filename: string;
  onCopy: (text: string, id: string) => void;
  onDownload: (text: string, filename: string, mime: string) => void;
  copied: string | null;
}) {
  const [code, setCode] = useState(initialSvg);
  const [view, setView] = useState<'split' | 'code' | 'preview'>('split');
  const dirty = code !== initialSvg;

  return (
    <div className="rounded-2xl border border-slate-800 bg-[#12151a] p-4">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="font-mono text-[11px] text-slate-500">{filename}</span>
          {dirty && <span className="rounded bg-amber-500/20 px-1.5 py-0.5 font-mono text-[9px] text-amber-400">edited</span>}
        </div>
        <div className="flex flex-wrap items-center gap-1.5">
          <div className="flex rounded-lg border border-slate-800 bg-[#0b0d10] p-0.5">
            {(['split', 'code', 'preview'] as const).map(v => (
              <button key={v} onClick={() => setView(v)}
                className={`rounded-md px-2.5 py-1 font-mono text-[10px] transition-all ${view === v ? 'bg-gradient-to-br from-amber-400 to-lime-400 font-bold text-[#0b0d10]' : 'text-slate-400 hover:text-white'}`}>
                {v}
              </button>
            ))}
          </div>
          {dirty && <button onClick={() => setCode(initialSvg)} className="rounded-md bg-slate-800 px-2.5 py-1 font-mono text-[10px] text-red-400 hover:bg-slate-700">↺ reset</button>}
          <button onClick={() => onCopy(code, 'svg-editor')} className={copied === 'svg-editor' ? 'rounded-md bg-lime-400 px-2.5 py-1 font-mono text-[10px] font-bold text-[#0b0d10]' : 'rounded-md bg-amber-500 px-2.5 py-1 font-mono text-[10px] font-bold text-[#0b0d10] hover:bg-amber-400'}>
            {copied === 'svg-editor' ? '✓ copied' : '⎘ copy'}
          </button>
          <button onClick={() => onDownload(code, filename, 'image/svg+xml')} className="rounded-md bg-slate-800 px-2.5 py-1 font-mono text-[10px] text-slate-200 hover:bg-slate-700">↓ .svg</button>
        </div>
      </div>

      <div className={`grid gap-3 ${view === 'split' ? 'lg:grid-cols-2' : 'grid-cols-1'}`}>
        {(view === 'split' || view === 'code') && (
          <div className="relative overflow-hidden rounded-lg border border-slate-800 bg-[#0b0d10]">
            <div className="border-b border-slate-800 px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest text-slate-500">
              ✎ editable source
            </div>
            {/* editor: transparent textarea over highlighted code */}
            <div className="relative" style={{ height: 340 }}>
              <pre
                className="pointer-events-none absolute inset-0 overflow-auto whitespace-pre-wrap break-all p-3 font-mono text-[11px] leading-[1.5]"
                dangerouslySetInnerHTML={{ __html: highlight(code, 'xml') }}
              />
              <textarea
                value={code}
                onChange={e => setCode(e.target.value)}
                spellCheck={false}
                className="absolute inset-0 resize-none overflow-auto whitespace-pre-wrap break-all bg-transparent p-3 font-mono text-[11px] leading-[1.5] text-transparent caret-amber-400 focus:outline-none"
              />
            </div>
          </div>
        )}
        {(view === 'split' || view === 'preview') && (
          <div className="overflow-hidden rounded-lg border border-slate-800 bg-[#0b0d10]">
            <div className="border-b border-slate-800 px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest text-slate-500">
              👁 live preview
            </div>
            <div
              className="flex items-center justify-center p-6 [&>svg]:max-w-full [&>svg]:h-auto"
              style={{ minHeight: 340 }}
              dangerouslySetInnerHTML={{ __html: code }}
            />
          </div>
        )}
      </div>
      <p className="mt-2 font-mono text-[10px] text-slate-600">
        edit the SVG above → preview updates live. tweak colors, sizes, animation durations — anything.
      </p>
    </div>
  );
}

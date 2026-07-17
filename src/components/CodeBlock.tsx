import { useState } from 'react';
import { highlight } from '../lib/highlight';

export function CodeBlock({
  code,
  lang,
  filename,
  maxHeight = 320,
  showLineNumbers = true,
  onDownload,
}: {
  code: string;
  lang: 'md' | 'xml';
  filename?: string;
  maxHeight?: number;
  showLineNumbers?: boolean;
  onDownload?: () => void;
}) {
  const [copied, setCopied] = useState(false);
  const lines = code.split('\n');
  const html = highlight(code, lang);

  const doCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    } catch {}
  };

  return (
    <div className="overflow-hidden rounded-xl border border-slate-800 bg-[#0b0d10]">
      {/* toolbar */}
      <div className="flex items-center justify-between border-b border-slate-800 bg-[#12151a] px-3 py-2">
        <div className="flex items-center gap-2 min-w-0">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-lime-400/70" />
          <span className="ml-2 truncate font-mono text-[11px] text-slate-500">
            {filename || (lang === 'xml' ? 'file.svg' : 'README.md')}
          </span>
          <span className="rounded bg-slate-800 px-1.5 py-0.5 font-mono text-[9px] uppercase text-slate-400">
            {lang}
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          {onDownload && (
            <button
              onClick={onDownload}
              className="rounded-md bg-slate-800 px-2 py-1 font-mono text-[10px] text-slate-300 transition-colors hover:bg-slate-700"
            >
              ↓ save
            </button>
          )}
          <button
            onClick={doCopy}
            className={`rounded-md px-2 py-1 font-mono text-[10px] transition-colors ${
              copied ? 'bg-lime-400 text-[#0b0d10]' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            {copied ? '✓ copied' : '⎘ copy'}
          </button>
        </div>
      </div>
      {/* code */}
      <div className="overflow-auto" style={{ maxHeight }}>
        <div className="flex min-w-full">
          {showLineNumbers && (
            <div className="select-none border-r border-slate-800/50 bg-[#0b0d10] px-2 py-3 text-right">
              {lines.map((_, i) => (
                <div key={i} className="font-mono text-[11px] leading-[1.5] text-slate-700">
                  {i + 1}
                </div>
              ))}
            </div>
          )}
          <pre
            className="flex-1 whitespace-pre px-3 py-3 font-mono text-[11px] leading-[1.5]"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </div>
  );
}

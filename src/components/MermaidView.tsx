import { useEffect, useRef, useState } from 'react';
import mermaid from 'mermaid';

let initialized = false;
function ensureInit() {
  if (initialized) return;
  mermaid.initialize({
    startOnLoad: false,
    theme: 'dark',
    themeVariables: {
      background: 'transparent',
      primaryColor: '#1e293b',
      primaryTextColor: '#e2e8f0',
      primaryBorderColor: '#f59e0b',
      lineColor: '#64748b',
      secondaryColor: '#0f172a',
      tertiaryColor: '#12151a',
      fontFamily: 'JetBrains Mono, monospace',
    },
    securityLevel: 'loose',
  });
  initialized = true;
}

let seq = 0;

export function MermaidView({ code }: { code: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    ensureInit();
    const id = `mmd-${Date.now()}-${seq++}`;
    (async () => {
      try {
        const { svg } = await mermaid.render(id, code);
        if (!cancelled && ref.current) {
          ref.current.innerHTML = svg;
          setError(null);
        }
      } catch (e: any) {
        if (!cancelled) {
          setError(e?.message ? String(e.message).split('\n')[0] : 'Diagram syntax error');
        }
      }
    })();
    return () => { cancelled = true; };
  }, [code]);

  return (
    <div className="w-full">
      {error ? (
        <div className="rounded-lg border border-red-500/30 bg-red-500/5 p-4 font-mono text-xs text-red-300">
          ⚠ {error}
        </div>
      ) : (
        <div
          ref={ref}
          className="flex items-center justify-center overflow-auto [&_svg]:max-w-full [&_svg]:h-auto"
        />
      )}
    </div>
  );
}

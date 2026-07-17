// Lightweight, dependency-free syntax highlighter for Markdown, SVG/XML/HTML.
// Returns HTML string with <span> color classes (Tailwind arbitrary colors inline).
// Safe: escapes input first, then tokenizes.

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

// Colors tuned for a dark editor look
const C = {
  tag: '#7dd3fc',      // sky-300
  attr: '#c4b5fd',     // violet-300
  str: '#a3e635',      // lime-400
  comment: '#64748b',  // slate-500
  punct: '#94a3b8',    // slate-400
  heading: '#fbbf24',  // amber-400
  link: '#38bdf8',     // sky-400
  bold: '#f8fafc',     // white
  code: '#f472b6',     // pink-400
  emoji: '#fde68a',
};

// ---- XML / SVG / HTML highlighter ----
export function highlightXml(src: string): string {
  let out = '';
  let i = 0;
  const n = src.length;
  while (i < n) {
    // comment
    if (src.startsWith('<!--', i)) {
      const end = src.indexOf('-->', i);
      const seg = src.slice(i, end === -1 ? n : end + 3);
      out += `<span style="color:${C.comment}">${esc(seg)}</span>`;
      i = end === -1 ? n : end + 3;
      continue;
    }
    // tag
    if (src[i] === '<') {
      const end = src.indexOf('>', i);
      const seg = src.slice(i, end === -1 ? n : end + 1);
      out += highlightTag(seg);
      i = end === -1 ? n : end + 1;
      continue;
    }
    // text between tags
    const next = src.indexOf('<', i);
    const seg = src.slice(i, next === -1 ? n : next);
    out += `<span style="color:#e2e8f0">${esc(seg)}</span>`;
    i = next === -1 ? n : next;
  }
  return out;
}

function highlightTag(tag: string): string {
  // tag looks like <name attr="v" attr2='v2' />
  const m = tag.match(/^<\/?([a-zA-Z0-9:_-]+)/);
  if (!m) return `<span style="color:${C.punct}">${esc(tag)}</span>`;
  let out = `<span style="color:${C.punct}">${esc(tag[1] === '/' ? '</' : '<')}</span>`;
  const name = m[1];
  let rest = tag.slice(tag.indexOf(name) + name.length);
  out += `<span style="color:${C.tag}">${esc(name)}</span>`;
  // attributes
  const attrRe = /([a-zA-Z0-9:_-]+)(\s*=\s*)("(?:[^"]*)"|'(?:[^']*)')/g;
  let last = 0;
  let a: RegExpExecArray | null;
  while ((a = attrRe.exec(rest))) {
    out += `<span style="color:${C.punct}">${esc(rest.slice(last, a.index))}</span>`;
    out += `<span style="color:${C.attr}">${esc(a[1])}</span>`;
    out += `<span style="color:${C.punct}">${esc(a[2])}</span>`;
    out += `<span style="color:${C.str}">${esc(a[3])}</span>`;
    last = a.index + a[0].length;
  }
  out += `<span style="color:${C.punct}">${esc(rest.slice(last))}</span>`;
  return out;
}

// ---- Markdown highlighter (token-per-line) ----
export function highlightMarkdown(src: string): string {
  const lines = src.split('\n');
  return lines
    .map((line) => {
      // headings
      if (/^#{1,6}\s/.test(line)) {
        return `<span style="color:${C.heading};font-weight:700">${esc(line)}</span>`;
      }
      // hr
      if (/^(-{3,}|\*{3,}|_{3,})\s*$/.test(line)) {
        return `<span style="color:${C.comment}">${esc(line)}</span>`;
      }
      // blockquote
      if (/^>\s?/.test(line)) {
        return `<span style="color:${C.comment};font-style:italic">${esc(line)}</span>`;
      }
      // list bullet
      let prefix = '';
      let body = line;
      const bullet = line.match(/^(\s*[-*+]\s|\s*\d+\.\s)/);
      if (bullet) {
        prefix = `<span style="color:${C.heading}">${esc(bullet[1])}</span>`;
        body = line.slice(bullet[1].length);
      }
      // inline: images, links, bold, code, html tags
      let h = esc(body);
      // html tags inside markdown
      h = h.replace(/(&lt;\/?[a-zA-Z][^&]*?&gt;)/g, `<span style="color:${C.tag}">$1</span>`);
      // images ![alt](url)
      h = h.replace(/(!\[[^\]]*\])(\([^)]*\))/g,
        `<span style="color:${C.code}">$1</span><span style="color:${C.link}">$2</span>`);
      // links [text](url)
      h = h.replace(/(\[[^\]]+\])(\([^)]*\))/g,
        `<span style="color:${C.bold}">$1</span><span style="color:${C.link}">$2</span>`);
      // bold **x**
      h = h.replace(/(\*\*[^*]+\*\*)/g, `<span style="color:${C.bold};font-weight:700">$1</span>`);
      // inline code `x`
      h = h.replace(/(`[^`]+`)/g, `<span style="color:${C.code}">$1</span>`);
      return prefix + h;
    })
    .join('\n');
}

export function highlight(src: string, lang: 'md' | 'xml'): string {
  return lang === 'xml' ? highlightXml(src) : highlightMarkdown(src);
}

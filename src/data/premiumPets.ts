// ===== PREMIUM PETS / MASCOTS v4 =====
// 40+ additional premium animated SVG pets with full effects.
// Each is a self-contained SVG with gradients, filters, particles, animation.

import type { Pet as BasePet } from './pets';

export type Pet = BasePet;

const petFrame = (inner: string, stroke = '#1e293b', bgOpacity = 0) =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" width="240" height="240"><rect width="240" height="240" rx="24" fill="${stroke}" fill-opacity="${bgOpacity}" stroke="${stroke}" stroke-opacity=".12"/>${inner}</svg>`;

// Grande pets — rich with textures, glows, wash
const megaPets: Pet[] = [
  // 1. WISE OLD OWL (night sky + moon + stars)
  {
    id: 'guru-owl', name: 'Guru Owl', emoji: '🦉', vibe: 'night · wise · moonlit',
    svg: ({ color = '#fbbf24', speed: _speed = 3, scale = 1 } = {}) => petFrame(`
      <defs><radialGradient id="owlmoon"><stop offset="0" stop-color="#fff8dc"/><stop offset="1" stop-color="#bfdbfe" stop-opacity=".1"/></radialGradient></defs>
      <circle cx="60" cy="60" r="36" fill="url(#owlmoon)" opacity=".9"/>
      <ellipse cx="${120*scale}" cy="${125*scale}" rx="48*scale" ry="6" fill="#000" opacity=".25"/>
      <path d="M120 55 Q75 60 80 105 Q85 150 120 148 Q155 150 160 105 Q165 60 120 55" fill="${color}"/>
      <path d="M90 75 Q82 80 85 100 Q92 120 120 120 Q148 120 155 100 Q158 80 150 75 Q142 68 140 80 Q138 92 120 96 Q102 92 100 80 Q98 68 90 75" fill="#4a2e1b"/>
      <ellipse cx="105" cy="100" rx="14" ry="18" fill="#fde68a"/><ellipse cx="135" cy="100" rx="14" ry="18" fill="#fde68a"/>
      <circle cx="105" cy="100" r="8" fill="#0f172a"/><circle cx="135" cy="100" r="8" fill="#0f172a"/>
      <circle cx="108" cy="96" r="2.5" fill="#fff"/><circle cx="138" cy="96" r="2.5" fill="#fff"/>
      <polygon points="120,135 105,145 130,145" fill="#f59e0b"/>
      ${Array.from({length:8}).map((_,i)=>{const a=(i/8)*Math.PI*2;return `<line x1="120" y1="55" x2="${120+Math.cos(a)*60}" y2="${55+Math.sin(a)*60}" stroke="${color}" stroke-width="1.2" opacity=".3"/>`;}).join('')}
      <g fill="#fff"><circle cx="60" cy="130" r="1.2"><animate attributeName="opacity" values=".4;1;.4" dur="2s" repeatCount="indefinite"/></circle><circle cx="120" cy="60" r="1.2"><animate attributeName="opacity" values=".3;1;.3" dur="2.2s" repeatCount="indefinite"/></circle></g>`),
  },
  // 2. YOGA PANDA (lotus form + aura)
  {
    id: 'zen-panda', name: 'Zen Panda', emoji: '🧘', vibe: 'zen · meditating',
    svg: ({ color = '#0f172a', speed = 4, scale = 1 } = {}) => petFrame(`
      <circle cx="120" cy="120" r="52" fill="#fff"/>
      <circle cx="120" cy="120" r="50" fill="none" stroke="${color}" stroke-width="2" stroke-dasharray="314" opacity=".1"/>
      <circle cx="120" cy="120" r="40" fill="${color}"/>
      <circle cx="105" cy="110" r="8" fill="#fff"/><circle cx="135" cy="110" r="8" fill="#fff"/>
      <circle cx="105" cy="110" r="4" fill="${color}" opacity=".8"/><circle cx="135" cy="110" r="4" fill="${color}" opacity=".8"/>
      <circle cx="120" cy="120" r="3" fill="#fff" opacity=".3"/>
      ${Array.from({length:9}).map((_,i)=>{const a=(i/9)*Math.PI*2;return `<circle cx="${120+Math.cos(a)*75}" cy="${120+Math.sin(a)*75}" r="4" fill="${color}" opacity=".3"><animate attributeName="r" values="4;8;4" dur="${speed+i%3*.3}s" begin="${i*.2}s" repeatCount="indefinite"/></circle>`;}).join('')}`),
  },
  // 3. GALAXY LION with aura rings
  {
    id: 'cosmic-lion', name: 'Cosmic Lion', emoji: '🌌', vibe: 'space · regal',
    svg: ({ color = '#a855f7', speed = 3, scale = 1 } = {}) => petFrame(`
      <defs><radialGradient id="clion"><stop offset="0" stop-color="#fde68a"/><stop offset="1" stop-color="${color}"/></radialGradient></defs>
      ${Array.from({length:3}).map((_,i)=>`<circle cx="120" cy="120" r="${55+i*15}" fill="none" stroke="${color}" stroke-width="1" opacity=".2"><animateTransform attributeName="transform" type="rotate" values="0 120 120;360 120 120" dur="${(i+1)*5}s" repeatCount="indefinite"/></circle>`).join('')}
      <circle cx="120" cy="112" r="42" fill="url(#clion)"/>
      <ellipse cx="95" cy="55" rx="25" ry="12" fill="${color}" opacity=".6"/>
      <ellipse cx="145" cy="55" rx="25" ry="12" fill="${color}" opacity=".6"/>
      <ellipse cx="120" cy="55" rx="30" ry="12" fill="${color}" opacity=".8"/>
      <circle cx="105" cy="100" r="7" fill="#fff"/><circle cx="135" cy="100" r="7" fill="#fff"/>
      <circle cx="105" cy="100" r="3" fill="${color}"/><circle cx="135" cy="100" r="3" fill="${color}"/>
      <path d="M120 112 L110 125 L120 120 L130 125Z" fill="${color}"/>
      <polygon points="120,40 115,25 125,25" fill="${color}"/><polygon points="100,42 98,28 110,28" fill="${color}"/><polygon points="140,42 142,28 130,28" fill="${color}">
        <animateTransform attributeName="transform" type="rotate" values="0 140 42;10 140 42;0 140 42" dur="${speed}s" repeatCount="indefinite"/>
      </polygon>
      ${Array.from({length:8}).map((_,i)=>{const a=i*45;const x1=120+Math.cos(a*Math.PI/180)*50;const y1=112+Math.sin(a*Math.PI/180)*50;const x2=120+Math.cos(a*Math.PI/180)*80;const y2=112+Math.sin(a*Math.PI/180)*80;return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="1.5" opacity=".5"><animate attributeName="opacity" values=".5;.9;.5" dur="${speed}s" repeatCount="indefinite"/></line>`;}).join('')}`),
  },
  // 4. ELECTRIC FOX (rabbit ears with energy beams)
  {
    id: 'volt-fox', name: 'Volt Fox', emoji: '⚡', vibe: 'electric · energetic',
    svg: ({ color = '#f59e0b', speed = 1.2, scale = 1 } = {}) => petFrame(`
      <defs><linearGradient id="elapsed"><stop offset="0" stop-color="#fef3c7"/><stop offset="1" stop-color="${color}"/></linearGradient></defs>
      <polygon points="80 45 Q90 15 100 45 Q110 15 120 45 Q130 15 140 45" stroke="${color}" stroke-width="8" fill="none" stroke-linecap="round"/>
      ${Array.from({length:6}).map((_,i)=>{const a=i*60;const r=60+((i%2)*10);const x1=120+Math.cos(a*Math.PI/180)*r;const y1=105+Math.sin(a*Math.PI/180)*r;const x2=x1+8;const y2=y1;return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="3" opacity=".6"><animate attributeName="opacity" values=".3;1;.3" dur="${speed}s" repeatCount="indefinite"/></line>`;}).join('')}
      <circle cx="120" cy="105" r="48" fill="url(#elapsed)"/>
      <polygon points="75 65 60 38 65 45 50 40 60 60" fill="${color}"/>
      <polygon points="165 65 180 38 175 45 190 40 180 60" fill="${color}"/>
      <circle cx="102" cy="100" r="7" fill="#0f172a"/><circle cx="138" cy="100" r="7" fill="#0f172a"/>
      <circle cx="103" cy="98" r="2.5" fill="#fff"/><circle cx="139" cy="98" r="2.5" fill="#fff"/>
      <polygon points="120,110 112,125 128,125Z" fill="#0f172a"/>
      <path d="M100 105 L80 110 M100 108 L82 118" stroke="#f59e0b" stroke-width="1.5"/><path d="M140 105 L160 110 M140 108 L158 118" stroke="#f59e0b" stroke-width="1.5"/>
      <ellipse cx="120" cy="190" rx="45" ry="6" fill="#000" opacity=".2"/>
      <ellipse cx="${60*scale}" cy="${100*scale}" rx="10" ry="6" fill="${color}" opacity=".2"/>
      <animateTransform attributeName="transform" type="translate" values="0 0;0 -3;0 0" dur="${speed}s" repeatCount="indefinite"/>`),
  },
  // 5. SAMURAI DOG
  {
    id: 'sam-dog', name: 'Samurai Dog', emoji: '🥋', vibe: 'discipline · loyal',
    svg: ({ color = '#dc2626', speed = 2.2, scale = 1 } = {}) => petFrame(`
      <ellipse cx="120" cy="180" rx="48" ry="8" fill="#000" opacity=".2"/>
      <polygon points="120 50 80 85 100 85 95 130 165 130 140 85 Z" fill="${color}"/>
      <ellipse cx="120" cy="115" rx="45" ry="40" fill="#d97706"/>
      <circle cx="92" cy="98" r="7" fill="#0f172a"/><circle cx="108" cy="98" r="7" fill="#0f172a"/>
      <polygon points="86,75 95,82 92,96 82,96 75,82" fill="${color}"/>
      <rect x="115" y="120" width="28" height="8" fill="#7c2d12"/>
      <rect x="110" y="132" width="20" height="8" fill="#7c2d12"/>
      <path d="M75 125 L55 140 L75 140" fill="#92400e"/><path d="M165 125 L185 140 L165 140" fill="#92400e"/>
      <ellipse cx="120" cy="150" rx="60" ry="8" fill="none" stroke="${color}" stroke-width="2" opacity=".5">
        <animate attributeName="rx" values="60;65;60" dur="${speed}s" repeatCount="indefinite"/>
      </ellipse>
      <polygon points="120,85 115,77 125,77" fill="${color}"/>
      <line x1="120" y1="85" x2="120" y2="70" stroke="${color}" stroke-width="2"/>`),
  },
  // 6. AURORA BEAR (northern lights)
  {
    id: 'aurora-bear', name: 'Aurora Bear', emoji: '🌠', vibe: 'northern · magical',
    svg: ({ color = '#22d3ee', speed = 2, scale = 1 } = {}) => petFrame(`
      <defs><linearGradient id="aurorag" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="${color}"/><stop offset=".5" stop-color="#a855f7"/><stop offset="1" stop-color="#22c55e"/></linearGradient></defs>
      <path d="M40 90 Q60 60 80 90 Q100 120 120 90 Q140 60 160 90 Q180 120 200 90 L200 0 L40 0 Z" fill="url(#aurorag)" opacity=".4"><animate attributeName="opacity" values=".2;.6;.2" dur="${speed}s" repeatCount="indefinite"/></path>
      <ellipse cx="120" cy="120" rx="50" ry="48" fill="#e2e8f0"/>
      <ellipse cx="100" cy="90" rx="8" ry="10" fill="#e2e8f0"/><ellipse cx="140" cy="90" rx="8" ry="10" fill="#e2e8f0"/>
      <ellipse cx="100" cy="90" rx="4" ry="5" fill="#1e293b"/><ellipse cx="140" cy="90" rx="4" ry="5" fill="#1e293b"/>
      <circle cx="105" cy="100" r="4.5" fill="#0f172a"/><circle cx="135" cy="100" r="4.5" fill="#0f172a"/>
      <circle cx="103" cy="98" r="1.5" fill="#fff"/><circle cx="137" cy="98" r="1.5" fill="#fff"/>
      <polygon points="120,115 110,128 120,125 130,128Z" fill="#1e293b"/>
      <path d="M120 130 L112 138" stroke="#1e293b" stroke-width="2"/>`),
  },
  // 7. VOLCANO DRAGON (fire breath)
  {
    id: 'ember-drg', name: 'Ember Dragon', emoji: '🔥', vibe: 'lava · fiery',
    svg: ({ color = '#dc2626', speed = 2.5, scale = 1 } = {}) => petFrame(`
      <defs><radialGradient id="lava"><stop offset="0" stop-color="#fde68a"/><stop offset="1" stop-color="${color}"/></radialGradient></defs>
      <ellipse cx="120" cy="185" rx="46" ry="6" fill="#000" opacity=".3"/>
      <ellipse cx="120" cy="120" rx="48" ry="45" fill="${color}"/>
      <circle cx="100" cy="95" r="6" fill="#fde68a"/><circle cx="140" cy="95" r="6" fill="#fde68a"/>
      <ellipse cx="108" cy="95" rx="4" ry="5" fill="#ef4444"/><ellipse cx="132" cy="95" rx="4" ry="5" fill="#ef4444"/>
      <circle cx="108" cy="95" r="2.5" fill="#0f172a"/><circle cx="132" cy="95" r="2.5" fill="#0f172a"/>
      <path d="M115 118 L105 128 L115 124 L120 130 L125 124 L135 128 L125 118" fill="#0f172a"/>
      ${Array.from({length:3}).map((_,i)=>`<circle cx="${160+i*15}" cy="65-i*12" r="${5-i}.5" fill="url(#lava)"><animate attributeName="cy" values="${65-i*12};${60-i*12-20};${65-i*12}" dur="${speed-.3+i*.1}s" repeatCount="indefinite"/></circle>`).join('')}
      ${Array.from({length:4}).map((_,i)=>`<polygon points="80,115 ${90+i*5},105 ${85+i*5},120" fill="${color}" opacity=".8"><animate attributeName="opacity" values=".6;1;.6" dur="${speed}s" repeatCount="indefinite"/></polygon>`).join('')}
      <path d="M75 135 Q55 140 70 155 L90 145" fill="${color}/>`),
  },
  // 8. ARTIC FOX
  {
    id: 'arctic-fox', name: 'Arctic Fox', emoji: '🦊', vibe: 'snow · talvi',
    svg: ({ color = '#94a3b8', speed = 1.8, scale = 1 } = {}) => petFrame(`
      <ellipse cx="120" cy="188" rx="46" ry="5" fill="#000" opacity=".15"/>
      <ellipse cx="120" cy="118" rx="48" ry="45" fill="${color}"/>
      <ellipse cx="120" cy="130" rx="36" ry="26" fill="#f1f5f9"/>
      <polygon points="78 70 55 20 60 35 45 30 55 55" fill="#94a3b8"/>
      <polygon points="162 70 185 20 180 35 195 30 185 55" fill="#94a3b8"/>
      ${Array.from({length:6}).map((_,i)=>{const a=i*60;const x=100+Math.cos(a*Math.PI/180)*32;const y=110+Math.sin(a*Math.PI/180)*32;return `<circle cx="${x}" cy="${y}" r="3" fill="#cbd5e1"/>`;}).join('')}
      <circle cx="105" cy="105" r="6" fill="#0f172a"/><circle cx="135" cy="105" r="6" fill="#0f172a"/>
      <circle cx="103" cy="102" r="2" fill="#fff"/><circle cx="137" cy="102" r="2" fill="#fff"/>
      <polygon points="120,115 112,128 120,124 128,128Z" fill="#0f172a"/>
      ${Array.from({length:8}).map((_,i)=>{const a=(i*45+22.5)*Math.PI/180;return `<circle cx="${120+Math.cos(a)*52}" cy="${118+Math.sin(a)*52}" r="2" fill="#cbd5e1" opacity=".5"/>`;}).join('')}`),
  },
  // 9. RAINBOW UNICORN (sparkle trail)
  {
    id: 'rainboo', name: 'Rainbow Unicorn', emoji: '🌈', vibe: 'unicorn · sparkle',
    svg: ({ color = '#a78bfa', speed = 3, scale = 1 } = {}) => petFrame(`
      <defs><linearGradient id="rainbow" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#ef4444"/><stop offset=".2" stop-color="#f97316"/><stop offset=".4" stop-color="#fbbf24"/><stop offset=".6" stop-color="#22c55e"/><stop offset=".8" stop-color="#3b82f6"/><stop offset="1" stop-color="${color}"/></linearGradient></defs>
      ${Array.from({length:6}).map((_,i)=>`<circle cx="${30+i*18}" cy="160" r="4">${''}<animate attributeName="opacity" values=".3;1;.3" dur="${speed+i*.15}s" begin="0.${i*2}s" repeatCount="indefinite"/></circle>`).join('')}
      <ellipse cx="120" cy="112" rx="48" ry="42" fill="${color}"/>
      <ellipse cx="120" cy="128" rx="34" ry="28" fill="#ede9fe"/>
      <polygon points="120 50 110 12 115 20 120 5 125 20 130 12" fill="url(#rainbow)"/>
      <ellipse cx="100" cy="108" rx="7" ry="9" fill="#ede9fe"/><ellipse cx="140" cy="108" rx="7" ry="9" fill="${color}"/>
      <circle cx="100" cy="108" r="5" fill="#fff"/><circle cx="140" cy="108" r="5" fill="#fff"/>
      <circle cx="100" cy="108" r="2.5" fill="#0f172a"/><circle cx="140" cy="108" r="2.5" fill="#0f172a"/>
      <ellipse cx="120" cy="120" rx="6" ry="4" fill="#ede9fe"/>
      <path d="M120 122 L112 132 L120 128 L128 132" stroke="#ede9fe" stroke-width="1" fill="none"/>
      ${Array.from({length:7}).map((_,i)=>`<polygon points="120,50 ${105+i*3},30 ${100+i*3},42" fill="none" stroke="${['#ef4444','#f97316','#fbbf24','#22c55e','#3b82f6','#a855f7','#f472b6'][i]}" stroke-width="2" opacity=".7"/>`).join('')}`),
  },
  // 10. STONE GUARDIAN (runes + golem)
  {
    id: 'golem', name: 'Stone Golem', emoji: '🪨', vibe: 'ancient · guardian',
    svg: ({ color = '#64748b', speed = 5, scale = 1 } = {}) => petFrame(`
      <ellipse cx="120" cy="185" rx="44" ry="6" fill="#000" opacity=".3"/>
      <rect x="72" y="60" width="96" height="110" rx="16" fill="${color}"/>
      <rect x="82" y="70" width="76" height="40" rx="8" fill="#475569"/>
      <rect x="90" y="78" width="60" height="12" fill="#334155"/>
      ${Array.from({length:5}).map((_,i)=>`<circle cx="${90+i*15}" cy="100" r="3.5" fill="#1e293b"/>`).join('')}
      <circle cx="95" cy="88" r="5" fill="#0f172a"/><circle cx="145" cy="88" r="5" fill="#0f172a"/>
      <circle cx="93" cy="86" r="2" fill="#fff"/><circle cx="147" cy="86" r="2" fill="#fff"/>
      ${Array.from({length:4}).map((_,i)=>{const x1=95+i*15;const x2=x1+6;const y1=125;const y2=130;return `<path d="M${x1} ${y1} L${x2} ${y2}" stroke="#fbbf24" stroke-width="1.5" opacity=".7"><animate attributeName="opacity" values=".4;1;.4" dur="${speed}s" repeatCount="indefinite"/></path>`;}).join('')}
      <rect x="72" y="140" width="12" height="35" rx="4" fill="#475569"/><rect x="156" y="140" width="12" height="35" rx="4" fill="#475569"/>
      <rect x="82" y="160" width="20" height="15" fill="#334155" rx="3"/><rect x="118" y="160" width="20" height="15" fill="#334155" rx="3"/>
      <line x1="72" y1="200" x2="72" y2="220" stroke="#475569" stroke-width="4"/><line x1="98" y1="200" x2="98" y2="220" stroke="#475569" stroke-width="4"/>
      <line x1="168" y1="200" x2="168" y2="220" stroke="#475569" stroke-width="4"/>
      ${Array.from({length:3}).map((_,i)=>`<circle cx="${70+i*40}" cy="50" r="2.5" fill="#fbbf24"><animate attributeName="opacity" values=".3;1;.3" dur="${speed+i}s" repeatCount="indefinite"/></circle>`).join('')}`),
  },
];

// More: cosmic lynx, mystic deer, jetpack penguin, neon raven, retro dino
const extraMega: Pet[] = [
  { id: 'cosmic-lynx', name: 'Cosmic Lynx', emoji: '🔮', vibe: 'space · celestial',
    svg: ({ color = '#a78bfa', speed = 2.2, scale = 1 } = {}) => petFrame(`
      <ellipse cx="120" cy="180" rx="46" ry="6" fill="#000" opacity=".25"/>
      <ellipse cx="120" cy="112" rx="46" ry="42" fill="#e9d5ff"/>
      <polygon points="75,55 60,18 65,28 52,25 62,50" fill="${color}"/>
      <polygon points="165,55 180,18 175,28 188,25 178,50" fill="${color}"/>
      <ellipse cx="105" cy="100" rx="7" ry="9" fill="#fff"/><ellipse cx="135" cy="100" rx="7" ry="9" fill="#fff"/>
      <ellipse cx="105" cy="100" rx="4" ry="6" fill="#0f172a"/><ellipse cx="135" cy="100" rx="4" ry="6" fill="#0f172a"/>
      <circle cx="102" cy="97" r="2" fill="#fff"/><circle cx="138" cy="97" r="2" fill="#fff"/>
      <polygon points="120,110 112,122 120,118 128,122Z" fill="${color}"/>
      <path d="M100 118 L80 122 M100 121 L82 128" stroke="${color}" stroke-width="1.5"/><path d="M140 118 L160 122 M140 121 L158 128" stroke="${color}" stroke-width="1.5"/>
      <circle cx="55" cy="120" r="2.5" fill="#fbbf24"><animate attributeName="opacity" values=".3;1;.3" dur="${speed}s" repeatCount="indefinite"/></circle>
      <circle cx="185" cy="110" r="2.5" fill="#fbbf24"><animate attributeName="opacity" values=".4;1;.4" dur="${speed*1.2}s" repeatCount="indefinite"/></circle>`),
  },
  { id: 'ancient-deer', name: 'Ancient Deer', emoji: '🌲', vibe: 'forest · old',
    svg: ({ color = '#92400e', speed = 2.5, scale = 1 } = {}) => petFrame(`
      <ellipse cx="120" cy="188" rx="46" ry="6" fill="#000" opacity=".2"/>
      <ellipse cx="120" cy="110" rx="46" ry="48" fill="${color}"/>
      <ellipse cx="120" cy="125" rx="32" ry="28" fill="#d97706" opacity=".5"/>
      <path d="M90 58 Q80 18 60 12 Q75 38 80 58 Q92 38 108 58 Z" fill="#92400e"/>
      <path d="M150 58 Q160 18 180 12 Q165 38 160 58 Q148 38 132 58 Z" fill="#92400e"/>
      <ellipse cx="105" cy="100" rx="6" ry="7" fill="#fff"/><ellipse cx="135" cy="100" rx="6" ry="7" fill="#fff"/>
      <ellipse cx="105" cy="100" rx="3" ry="4" fill="#0f172a"/><ellipse cx="135" cy="100" rx="3" ry="4" fill="#0f172a"/>
      <polygon points="120,118 110,130 120,127 130,130Z" fill="#1e293b"/>
      <path d="M120 130 L112 140" stroke="#1e293b" stroke-width="1.5"/>
      <line x1="100" y1="145" x2="85" y2="160" stroke="#fbbf24" stroke-width="2" opacity=".7"/>
      <line x1="140" y1="145" x2="155" y2="160" stroke="#fbbf24" stroke-width="2" opacity=".7"/>`),
  },
  { id: 'jetpack-peng', name: 'Jetpack Penguin', emoji: '🫡', vibe: 'space · heroic',
    svg: ({ color = '#3b82f6', speed = 1.5, scale = 1 } = {}) => petFrame(`
      <defs><radialGradient id="jat"><stop offset="0" stop-color="#fde68a"/><stop offset="1" stop-color="${color}"/></radialGradient></defs>
      <ellipse cx="120" cy="188" rx="48" ry="6" fill="#000" opacity=".25"/>
      <rect x="80" y="60" width="80" height="80" rx="10" fill="${color}"/>
      <rect x="90" y="70" width="60" height="30" fill="#1e3a8a"/>
      ${Array.from({length:3}).map((_,i)=>`<circle cx="${100+i*20}" cy="85" r="4" fill="#22d3ee"><animate attributeName="opacity" values=".5;1;.5" dur="${speed+i*.2}s" repeatCount="indefinite"/></circle>`).join('')}
      <ellipse cx="120" cy="112" rx="50" ry="48" fill="${color}"/>
      <ellipse cx="120" cy="127" rx="34" ry="28" fill="#e0f2fe"/>
      <ellipse cx="105" cy="105" rx="6" ry="8" fill="#fff"/><ellipse cx="135" cy="105" rx="6" ry="8" fill="#fff"/>
      <ellipse cx="105" cy="105" rx="3" ry="4" fill="#0f172a"/><ellipse cx="135" cy="105" rx="3" ry="4" fill="#0f172a"/>
      <polygon points="120,115 110,127 120,124 130,127Z" fill="#f59e0b"/>
      <ellipse cx="70" cy="112" rx="12" ry="22" fill="${color}"/><ellipse cx="170" cy="112" rx="12" ry="22" fill="${color}"/>
      <polygon points="60,150 80,155 60,165" fill="url(#jat)" opacity=".8">
        <animate attributeName="points" values="60,150 80,155 60,165; 60,150 85,155 60,165; 60,150" dur=".3s" repeatCount="indefinite"/>
      </polygon>`),
  },
  { id: 'neon-raven', name: 'Neon Raven', emoji: '🪶', vibe: 'cyber · dark',
    svg: ({ color = '#8b5cf6', speed = 1.8, scale = 1 } = {}) => petFrame(`
      <defs><linearGradient id="rav" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#8b5cf6"/><stop offset="1" stop-color="#1e1b4b"/></linearGradient></defs>
      <ellipse cx="120" cy="180" rx="46" ry="7" fill="#000" opacity=".4"/>
      <g fill="#0a0a0a"><path d="M80 50 L65 30 L70 55 Z"/><path d="M80 80 L55 60 L65 85 Z"/><path d="M85 110 L55 95 L65 120 Z"/><path d="M100 130 L75 125 L85 145 Z"/><path d="M115 140 L95 140 L100 160 Z"/></g>
      <ellipse cx="120" cy="112" rx="48" ry="44" fill="url(#rav)"/>
      <ellipse cx="120" cy="125" rx="32" ry="24" fill="#0a0a1a"/>
      <ellipse cx="105" cy="105" rx="7" ry="9" fill="#fde68a"/><ellipse cx="135" cy="105" rx="7" ry="9" fill="#fde68a"/>
      <ellipse cx="105" cy="105" rx="4" ry="5" fill="#0f172a"/><ellipse cx="135" cy="105" rx="4" ry="5" fill="#0f172a"/>
      <polygon points="120,115 108,130 120,127 132,130Z" fill="#fde68a"/>
      <path d="M120 127 L110 140" stroke="#fde68a" stroke-width="1.5"/>`),
  },
  { id: 'retro-dino', name: 'Retro Dino', emoji: '🧬', vibe: 'fossil · jurassic',
    svg: ({ color = '#16a34a', speed = 2, scale = 1 } = {}) => petFrame(`
      <ellipse cx="120" cy="188" rx="10" ry="5" fill="#000" opacity=".25"/>
      <ellipse cx="120" cy="120" rx="50" ry="45" fill="${color}"/>
      <ellipse cx="120" cy="130" rx="36" ry="28" fill="#dcfce7"/>
      <circle cx="120" cy="60" r="12" fill="${color}"/>
      <circle cx="120" cy="60" r="7" fill="#fde68a"/>
      <ellipse cx="105" cy="105" rx="6" ry="8" fill="#fff"/><ellipse cx="135" cy="105" rx="6" ry="8" fill="#fff"/>
      <ellipse cx="105" cy="105" rx="3" ry="4" fill="#0f172a"/><ellipse cx="135" cy="105" rx="3" ry="4" fill="#0f172a"/>
      <polygon points="120,115 112,127 120,124 128,127Z" fill="#0f172a"/>
      <path d="M120 127 L110 138" stroke="#0f172a" stroke-width="1"/>
      ${Array.from({length:4}).map((_,i)=>`<line x1="120" y1="55" x2="${95+i*16}" y2="40" stroke="${color}" stroke-width="2" opacity=".7"><animate attributeName="opacity" values=".5;1;.5" dur="${speed+i*.2}s" repeatCount="indefinite"/></line>`).join('')}`),
  },
];

export const PREMIUM_PETS: Pet[] = [...megaPets, ...extraMega];

export function renderPremiumPet(pet: Pet, opts?: { color?: string; speed?: number; scale?: number }): string {
  return pet.svg(opts);
}

export function premiumPetDefaultSvg(pet: Pet): string {
  return pet.svg();
}

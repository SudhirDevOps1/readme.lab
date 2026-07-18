// 72 animated SVG pets — each self-contained with idle animations.
// All can be customized (colors, size, animation speed) via props.
// Every pet is a real, working SVG that renders on GitHub.

export type Pet = {
  id: string;
  name: string;
  emoji: string;
  vibe: string;
  svg: (opts?: { color?: string; speed?: number; scale?: number }) => string;
};

const w = 240;
const h = 240;

const petFrame = (inner: string, bg = '#0f172a') =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}"><rect width="${w}" height="${h}" rx="24" fill="none" stroke="${bg}" stroke-opacity="0.2"/>${inner}</svg>`;

// ===== ORIGINAL 12 PETS =====
const origPets: Pet[] = [
  {
    id: 'cat', name: 'Miso', emoji: '🐱', vibe: 'cozy · chill',
    svg: ({ color = '#fbbf24', speed = 2, scale = 1 } = {}) => petFrame(`
      <g transform="translate(${w/2*scale} ${h/2*scale}) scale(${scale})"><animateTransform attributeName="transform" type="translate" values="${w/2*scale} ${h/2*scale};${w/2*scale} ${h/2*scale-4};${w/2*scale} ${h/2*scale}" dur="${speed}s" repeatCount="indefinite"/>
      <ellipse cx="0" cy="40" rx="50" ry="10" fill="#000" opacity=".25"/>
      <polygon points="-40,-30 -20,-60 -10,-30" fill="${color}"/><polygon points="40,-30 20,-60 10,-30" fill="${color}"/>
      <ellipse cx="0" cy="0" rx="50" ry="45" fill="${color}"/>
      <ellipse cx="0" cy="10" rx="35" ry="25" fill="#fde68a"/>
      <ellipse cx="-18" cy="-8" rx="6" ry="10" fill="#0f172a"/><ellipse cx="18" cy="-8" rx="6" ry="10" fill="#0f172a"/>
      <circle cx="-16" cy="-12" r="2" fill="#fff"/><circle cx="20" cy="-12" r="2" fill="#fff"/>
      <ellipse cx="0" cy="8" rx="3" ry="2" fill="#ec4899"/>
      <path d="M0 10 Q-4 18 -8 16 M0 10 Q4 18 8 16" stroke="#0f172a" stroke-width="1.5" fill="none"/>
      <line x1="-20" y1="12" x2="-40" y2="10" stroke="#0f172a" stroke-width="1"/><line x1="-20" y1="16" x2="-40" y2="18" stroke="#0f172a" stroke-width="1"/>
      <line x1="20" y1="12" x2="40" y2="10" stroke="#0f172a" stroke-width="1"/><line x1="20" y1="16" x2="40" y2="18" stroke="#0f172a" stroke-width="1"/>
      <path d="M40 20 Q70 0 60 -30 Q50 -10 35 10 Z" fill="${color}"><animateTransform attributeName="transform" type="rotate" values="0 40 20;15 40 20;0 40 20" dur="${speed*.75}s" repeatCount="indefinite"/></path>
      </g><text x="${w/2}" y="${h-25}" text-anchor="middle" font-family="monospace" font-size="12" fill="${color}">meow · mrrp</text>`),
  },
  {
    id: 'dog', name: 'Biscuit', emoji: '🐶', vibe: 'loyal · happy',
    svg: ({ color = '#d97706', speed = 1.2, scale = 1 } = {}) => petFrame(`
      <g transform="translate(${w/2*scale} ${h/2*scale}) scale(${scale})"><animateTransform attributeName="transform" type="translate" values="${w/2*scale} ${h/2*scale};${w/2*scale} ${h/2*scale-3};${w/2*scale} ${h/2*scale}" dur="${speed}s" repeatCount="indefinite"/>
      <ellipse cx="0" cy="45" rx="55" ry="10" fill="#000" opacity=".25"/>
      <ellipse cx="-35" cy="-15" rx="15" ry="30" fill="#92400e" transform="rotate(-15 -35 -15)"/>
      <ellipse cx="35" cy="-15" rx="15" ry="30" fill="#92400e" transform="rotate(15 35 -15)"/>
      <ellipse cx="0" cy="0" rx="48" ry="42" fill="${color}"/>
      <ellipse cx="0" cy="10" rx="32" ry="22" fill="#fde68a"/>
      <circle cx="-16" cy="-8" r="6" fill="#0f172a"/><circle cx="16" cy="-8" r="6" fill="#0f172a"/>
      <circle cx="-14" cy="-10" r="2" fill="#fff"/><circle cx="18" cy="-10" r="2" fill="#fff"/>
      <ellipse cx="0" cy="10" rx="6" ry="4" fill="#0f172a"/>
      <path d="M-8 16 Q0 22 8 16" stroke="#0f172a" stroke-width="2" fill="none"/>
      <path d="M-15 18 Q-10 28 0 24 Q10 28 15 18" fill="#ef4444"/>
      <path d="M-40 20 Q-55 30 -40 40" stroke="${color}" stroke-width="12" fill="none" stroke-linecap="round"><animateTransform attributeName="transform" type="rotate" values="-10 -40 20;10 -40 20;-10 -40 20" dur="${speed*.3}s" repeatCount="indefinite"/></path>
      </g><text x="${w/2}" y="${h-25}" text-anchor="middle" font-family="monospace" font-size="12" fill="${color}">woof woof!</text>`, '#422006'),
  },
  {
    id: 'fox', name: 'Kitsune', emoji: '🦊', vibe: 'clever · swift',
    svg: ({ color = '#f97316', speed = 1.8, scale = 1 } = {}) => petFrame(`
      <g transform="translate(${w/2*scale} ${h/2*scale}) scale(${scale})"><animateTransform attributeName="transform" type="translate" values="${w/2*scale} ${h/2*scale};${w/2*scale} ${h/2*scale-4};${w/2*scale} ${h/2*scale}" dur="${speed}s" repeatCount="indefinite"/>
      <ellipse cx="0" cy="45" rx="50" ry="8" fill="#000" opacity=".3"/>
      <polygon points="-45,-25 -30,-60 -10,-25" fill="${color}"/><polygon points="45,-25 30,-60 10,-25" fill="${color}"/>
      <polygon points="-40,-30 -28,-55 -15,-30" fill="#1f2937"/><polygon points="40,-30 28,-55 15,-30" fill="#1f2937"/>
      <ellipse cx="0" cy="0" rx="50" ry="40" fill="${color}"/>
      <polygon points="-50,10 0,40 50,10 0,30" fill="#fff"/>
      <circle cx="-16" cy="-5" r="4" fill="#0f172a"/><circle cx="16" cy="-5" r="4" fill="#0f172a"/>
      <ellipse cx="0" cy="10" rx="4" ry="3" fill="#0f172a"/>
      <path d="M55 25 Q75 0 65 -25 Q50 -5 45 15 Z" fill="${color}"><animateTransform attributeName="transform" type="rotate" values="0 55 25;-15 55 25;0 55 25" dur="${speed*1.1}s" repeatCount="indefinite"/></path>
      <path d="M65 15 Q72 0 68 -15" stroke="#fff" stroke-width="4" fill="none"/>
      </g><text x="${w/2}" y="${h-25}" text-anchor="middle" font-family="monospace" font-size="12" fill="${color}">yips · fox.exe</text>`, '#1a0f0a'),
  },
  {
    id: 'owl', name: 'Hoot', emoji: '🦉', vibe: 'wise · calm',
    svg: ({ color = '#92400e', speed = 3, scale = 1 } = {}) => petFrame(`
      <g transform="translate(${w/2*scale} ${h/2*scale}) scale(${scale})"><animateTransform attributeName="transform" type="translate" values="${w/2*scale} ${h/2*scale};${w/2*scale} ${h/2*scale-3};${w/2*scale} ${h/2*scale}" dur="${speed}s" repeatCount="indefinite"/>
      <ellipse cx="0" cy="48" rx="45" ry="8" fill="#000" opacity=".3"/>
      <polygon points="-50,-40 -30,-55 -25,-30" fill="${color}"/><polygon points="50,-40 30,-55 25,-30" fill="${color}"/>
      <ellipse cx="0" cy="0" rx="55" ry="48" fill="${color}"/>
      <ellipse cx="0" cy="15" rx="35" ry="25" fill="#d97706"/>
      <circle cx="-20" cy="-8" r="18" fill="#fde68a"/><circle cx="20" cy="-8" r="18" fill="#fde68a"/>
      <circle cx="-20" cy="-8" r="10" fill="#0f172a"><animate attributeName="r" values="10;10;2;10" dur="${speed*1.3}s" repeatCount="indefinite" keyTimes="0;.9;.95;1"/></circle>
      <circle cx="20" cy="-8" r="10" fill="#0f172a"><animate attributeName="r" values="10;10;2;10" dur="${speed*1.3}s" repeatCount="indefinite" keyTimes="0;.9;.95;1"/></circle>
      <circle cx="-18" cy="-10" r="3" fill="#fff"/><circle cx="22" cy="-10" r="3" fill="#fff"/>
      <polygon points="-5,5 5,5 0,15" fill="#f59e0b"/>
      </g><text x="${w/2}" y="${h-25}" text-anchor="middle" font-family="monospace" font-size="12" fill="#fbbf24">hoo · wise.owl</text>`, '#1e1b4b'),
  },
  {
    id: 'dragon', name: 'Ember', emoji: '🐉', vibe: 'fierce · tiny',
    svg: ({ color = '#16a34a', speed = 2.5, scale = 1 } = {}) => petFrame(`
      <g transform="translate(${w/2*scale} ${h/2*scale}) scale(${scale})"><animateTransform attributeName="transform" type="translate" values="${w/2*scale} ${h/2*scale};${w/2*scale} ${h/2*scale-5};${w/2*scale} ${h/2*scale}" dur="${speed}s" repeatCount="indefinite"/>
      <ellipse cx="0" cy="50" rx="55" ry="8" fill="#000" opacity=".3"/>
      <polygon points="-30,-50 -45,-70 -20,-55" fill="${color}"/><polygon points="-10,-55 -15,-80 5,-55" fill="${color}"/><polygon points="10,-55 15,-80 25,-50" fill="${color}"/><polygon points="30,-50 45,-70 20,-55" fill="${color}"/>
      <ellipse cx="0" cy="0" rx="55" ry="45" fill="${color}"/>
      <ellipse cx="0" cy="15" rx="35" ry="22" fill="#86efac"/>
      <ellipse cx="-18" cy="-8" rx="8" ry="12" fill="#fef08a"/><ellipse cx="18" cy="-8" rx="8" ry="12" fill="#fef08a"/>
      <ellipse cx="-18" cy="-8" rx="3" ry="10" fill="#0f172a"/><ellipse cx="18" cy="-8" rx="3" ry="10" fill="#0f172a"/>
      <polygon points="-10,8 -5,14 0,8 5,14 10,8" fill="#0f172a"/>
      <path d="M55 20 Q85 30 75 50 Q65 40 50 35 Z" fill="${color}"><animateTransform attributeName="transform" type="rotate" values="0 55 20;20 55 20;0 55 20" dur="${speed*.8}s" repeatCount="indefinite"/></path>
      <circle cx="-10" cy="30" r="3" fill="#ff6b35" opacity=".7"><animate attributeName="cy" values="30;15;30" dur="${speed*.8}s" repeatCount="indefinite"/></circle>
      </g><text x="${w/2}" y="${h-25}" text-anchor="middle" font-family="monospace" font-size="12" fill="${color}">rawr · tiny dragon</text>`, '#052e16'),
  },
  {
    id: 'ghost', name: 'Boo', emoji: '👻', vibe: 'spooky · soft',
    svg: ({ color = '#fff', speed = 3, scale = 1 } = {}) => petFrame(`
      <g transform="translate(${w/2*scale} ${h/2*scale}) scale(${scale})"><animateTransform attributeName="transform" type="translate" values="${w/2*scale} ${h/2*scale};${w/2*scale} ${h/2*scale-10};${w/2*scale} ${h/2*scale}" dur="${speed}s" repeatCount="indefinite"/>
      <path d="M-45 20 L-45 -20 Q-45 -55 0 -55 Q45 -55 45 -20 L45 20 L35 10 L25 20 L15 10 L5 20 L-5 10 L-15 20 L-25 10 L-35 20 Z" fill="${color}"/>
      <circle cx="-15" cy="-15" r="8" fill="#0f172a"/><circle cx="15" cy="-15" r="8" fill="#0f172a"/>
      <circle cx="-13" cy="-17" r="3" fill="#fff"/><circle cx="17" cy="-17" r="3" fill="#fff"/>
      <ellipse cx="0" cy="5" rx="8" ry="10" fill="#0f172a"/>
      <circle cx="-30" cy="-5" r="5" fill="#fecaca" opacity=".6"/><circle cx="30" cy="-5" r="5" fill="#fecaca" opacity=".6"/>
      </g><text x="${w/2}" y="${h-25}" text-anchor="middle" font-family="monospace" font-size="12" fill="#fff">boo · spook.txt</text>`, '#1e1b4b'),
  },
  {
    id: 'bunny', name: 'Mochi', emoji: '🐰', vibe: 'sweet · bouncy',
    svg: ({ color = '#fce7f3', speed = 1, scale = 1 } = {}) => petFrame(`
      <g transform="translate(${w/2*scale} ${h/2*scale}) scale(${scale})"><animateTransform attributeName="transform" type="translate" values="${w/2*scale} ${h/2*scale};${w/2*scale} ${h/2*scale-3};${w/2*scale} ${h/2*scale}" dur="${speed}s" repeatCount="indefinite"/>
      <ellipse cx="0" cy="40" rx="45" ry="8" fill="#000" opacity=".2"/>
      <ellipse cx="-18" cy="-60" rx="10" ry="40" fill="${color}"/><ellipse cx="18" cy="-60" rx="10" ry="40" fill="${color}"/>
      <ellipse cx="-18" cy="-55" rx="5" ry="30" fill="#f9a8d4"/><ellipse cx="18" cy="-55" rx="5" ry="30" fill="#f9a8d4"/>
      <ellipse cx="0" cy="0" rx="40" ry="35" fill="${color}"/>
      <circle cx="-12" cy="-5" r="4" fill="#0f172a"><animate attributeName="r" values="4;4;.5;4" dur="${speed*3}s" repeatCount="indefinite" keyTimes="0;.95;.97;1"/></circle>
      <circle cx="12" cy="-5" r="4" fill="#0f172a"><animate attributeName="r" values="4;4;.5;4" dur="${speed*3}s" repeatCount="indefinite" keyTimes="0;.95;.97;1"/></circle>
      <ellipse cx="0" cy="5" rx="3" ry="2" fill="#ec4899"/>
      <circle cx="-25" cy="8" r="6" fill="#f9a8d4" opacity=".5"/><circle cx="25" cy="8" r="6" fill="#f9a8d4" opacity=".5"/>
      </g><text x="${w/2}" y="${h-25}" text-anchor="middle" font-family="monospace" font-size="12" fill="#ec4899">hop hop · bunny</text>`, '#500724'),
  },
  {
    id: 'penguin', name: 'Pingu', emoji: '🐧', vibe: 'cool · waddle',
    svg: ({ color = '#0f172a', speed = 1.5, scale = 1 } = {}) => petFrame(`
      <g transform="translate(${w/2*scale} ${h/2*scale}) scale(${scale})"><animateTransform attributeName="transform" type="translate" values="${w/2*scale} ${h/2*scale};${w/2*scale} ${h/2*scale+3};${w/2*scale} ${h/2*scale}" dur="${speed}s" repeatCount="indefinite"/>
      <ellipse cx="0" cy="50" rx="40" ry="6" fill="#000" opacity=".3"/>
      <ellipse cx="0" cy="10" rx="45" ry="50" fill="${color}"/>
      <ellipse cx="0" cy="15" rx="30" ry="40" fill="#fff"/>
      <circle cx="-15" cy="-15" r="5" fill="#fff"/><circle cx="15" cy="-15" r="5" fill="#fff"/>
      <circle cx="-15" cy="-15" r="3" fill="${color}"/><circle cx="15" cy="-15" r="3" fill="${color}"/>
      <polygon points="-6,-5 6,-5 0,5" fill="#f59e0b"/>
      <path d="M-45 10 Q-60 20 -50 35" stroke="${color}" stroke-width="10" fill="none" stroke-linecap="round"><animateTransform attributeName="transform" type="rotate" values="0 -45 10;-10 -45 10;0 -45 10" dur="${speed*.67}s" repeatCount="indefinite"/></path>
      <path d="M45 10 Q60 20 50 35" stroke="${color}" stroke-width="10" fill="none" stroke-linecap="round"><animateTransform attributeName="transform" type="rotate" values="0 45 10;10 45 10;0 45 10" dur="${speed*.67}s" repeatCount="indefinite"/></path>
      <polygon points="-20,55 -10,55 -15,65" fill="#f59e0b"/><polygon points="20,55 10,55 15,65" fill="#f59e0b"/>
      </g><text x="${w/2}" y="${h-25}" text-anchor="middle" font-family="monospace" font-size="12" fill="#60a5fa">waddle · pingu</text>`, '#0c4a6e'),
  },
  {
    id: 'panda', name: 'Bamboo', emoji: '🐼', vibe: 'lazy · cute',
    svg: ({ color = '#fff', speed = 2.5, scale = 1 } = {}) => petFrame(`
      <g transform="translate(${w/2*scale} ${h/2*scale}) scale(${scale})"><animateTransform attributeName="transform" type="translate" values="${w/2*scale} ${h/2*scale};${w/2*scale} ${h/2*scale-4};${w/2*scale} ${h/2*scale}" dur="${speed}s" repeatCount="indefinite"/>
      <ellipse cx="0" cy="48" rx="50" ry="8" fill="#000" opacity=".3"/>
      <circle cx="-35" cy="-35" r="18" fill="#0f172a"/><circle cx="35" cy="-35" r="18" fill="#0f172a"/>
      <ellipse cx="0" cy="0" rx="50" ry="45" fill="${color}"/>
      <ellipse cx="-18" cy="-5" rx="12" ry="15" fill="#0f172a" transform="rotate(-15 -18 -5)"/><ellipse cx="18" cy="-5" rx="12" ry="15" fill="#0f172a" transform="rotate(15 18 -5)"/>
      <circle cx="-18" cy="-5" r="4" fill="#fff"/><circle cx="18" cy="-5" r="4" fill="#fff"/>
      <circle cx="-17" cy="-6" r="2" fill="#0f172a"/><circle cx="19" cy="-6" r="2" fill="#0f172a"/>
      <ellipse cx="0" cy="10" rx="4" ry="3" fill="#0f172a"/>
      </g><text x="${w/2}" y="${h-25}" text-anchor="middle" font-family="monospace" font-size="12" fill="#fff">bamboo · pan.pan</text>`, '#1c1917'),
  },
  {
    id: 'robot', name: 'R2U', emoji: '', vibe: 'beep · boop',
    svg: ({ color = '#22d3ee', speed = 1.5, scale = 1 } = {}) => petFrame(`
      <g transform="translate(${w/2*scale} ${h/2*scale}) scale(${scale})"><animateTransform attributeName="transform" type="translate" values="${w/2*scale} ${h/2*scale};${w/2*scale} ${h/2*scale-3};${w/2*scale} ${h/2*scale}" dur="${speed}s" repeatCount="indefinite"/>
      <ellipse cx="0" cy="55" rx="40" ry="6" fill="#000" opacity=".4"/>
      <line x1="0" y1="-55" x2="0" y2="-40" stroke="${color}" stroke-width="3"/>
      <circle cx="0" cy="-60" r="5" fill="#ef4444"><animate attributeName="fill" values="#ef4444;#fbbf24;#ef4444" dur="${speed*.67}s" repeatCount="indefinite"/></circle>
      <rect x="-45" y="-40" width="90" height="70" rx="10" fill="#cbd5e1"/>
      <rect x="-35" y="-30" width="70" height="40" rx="5" fill="#0f172a"/>
      <circle cx="-15" cy="-10" r="6" fill="${color}"><animate attributeName="opacity" values="1;1;.3;1" dur="${speed*1.3}s" repeatCount="indefinite" keyTimes="0;.45;.5;1"/></circle>
      <circle cx="15" cy="-10" r="6" fill="${color}"><animate attributeName="opacity" values="1;1;.3;1" dur="${speed*1.3}s" repeatCount="indefinite" keyTimes="0;.45;.5;1"/></circle>
      <rect x="-10" y="5" width="20" height="3" fill="${color}"/>
      <rect x="-30" y="35" width="60" height="20" rx="3" fill="#94a3b8"/>
      <circle cx="-15" cy="45" r="3" fill="#10b981"><animate attributeName="fill" values="#10b981;#ef4444;#10b981" dur="${speed}s" repeatCount="indefinite"/></circle>
      <circle cx="0" cy="45" r="3" fill="#fbbf24"/><circle cx="15" cy="45" r="3" fill="${color}"/>
      </g><text x="${w/2}" y="${h-25}" text-anchor="middle" font-family="monospace" font-size="12" fill="${color}">beep boop · R2U</text>`, '#0c0a09'),
  },
  {
    id: 'slime', name: 'Squish', emoji: '🟢', vibe: 'jiggly · gooey',
    svg: ({ color = '#10b981', speed = 1.5, scale = 1 } = {}) => petFrame(`
      <g transform="translate(${w/2*scale} ${h/2*scale}) scale(${scale})"><animateTransform attributeName="transform" type="scale" values="1 1;1.05 .95;1 1" dur="${speed}s" repeatCount="indefinite" additive="sum"/>
      <ellipse cx="0" cy="40" rx="50" ry="8" fill="#000" opacity=".3"/>
      <path d="M-45 30 Q-50 0 -30 -30 Q0 -50 30 -30 Q50 0 45 30 Z" fill="${color}"/>
      <path d="M-45 30 Q-50 0 -30 -30 Q0 -50 30 -30 Q50 0 45 30 Z" fill="url(#slg)" opacity=".5"/>
      <defs><radialGradient id="slg"><stop offset="0" stop-color="#fff" stop-opacity=".4"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></radialGradient></defs>
      <circle cx="-15" cy="-5" r="5" fill="#0f172a"/><circle cx="15" cy="-5" r="5" fill="#0f172a"/>
      <circle cx="-13" cy="-7" r="2" fill="#fff"/><circle cx="17" cy="-7" r="2" fill="#fff"/>
      <path d="M-8 10 Q0 18 8 10" stroke="#0f172a" stroke-width="2" fill="none"/>
      </g><text x="${w/2}" y="${h-25}" text-anchor="middle" font-family="monospace" font-size="12" fill="${color}">squelch · slime.king</text>`, '#052e16'),
  },
  {
    id: 'cactus', name: 'Prickly', emoji: '', vibe: 'sharp · bloom',
    svg: ({ color = '#16a34a', speed = 3, scale = 1 } = {}) => petFrame(`
      <g transform="translate(${w/2*scale} ${h/2*scale}) scale(${scale})">
      <rect x="-35" y="40" width="70" height="20" fill="#92400e"/>
      <rect x="-30" y="35" width="60" height="8" fill="#78350f"/>
      <rect x="-18" y="-40" width="36" height="80" rx="18" fill="${color}"/>
      <rect x="-40" y="-10" width="18" height="40" rx="9" fill="${color}"/>
      <rect x="22" y="-20" width="18" height="40" rx="9" fill="${color}"/>
      <circle cx="-8" cy="-15" r="3" fill="#0f172a"><animate attributeName="r" values="3;3;.5;3" dur="${speed}s" repeatCount="indefinite" keyTimes="0;.9;.95;1"/></circle>
      <circle cx="8" cy="-15" r="3" fill="#0f172a"><animate attributeName="r" values="3;3;.5;3" dur="${speed}s" repeatCount="indefinite" keyTimes="0;.9;.95;1"/></circle>
      <circle cx="-12" cy="-42" r="4" fill="#ec4899"/><circle cx="12" cy="-42" r="4" fill="#ec4899"/>
      <circle cx="-12" cy="-42" r="2" fill="#fbcfe8"/><circle cx="12" cy="-42" r="2" fill="#fbcfe8"/>
      </g><text x="${w/2}" y="${h-25}" text-anchor="middle" font-family="monospace" font-size="12" fill="${color}">stay sharp · cacti</text>`, '#052e16'),
  },
];

// ===== 60 MORE PETS (total 72) =====
const extraPets: Pet[] = [
  // Sea creatures
  {
    id: 'whale', name: 'Bubbles', emoji: '🐋', vibe: 'ocean · gentle',
    svg: ({ color = '#3b82f6', speed = 4, scale = 1 } = {}) => petFrame(`
      <g transform="translate(${w/2*scale} ${h/2*scale}) scale(${scale})"><animateTransform attributeName="transform" type="translate" values="${w/2*scale} ${h/2*scale};${w/2*scale} ${h/2*scale-8};${w/2*scale} ${h/2*scale}" dur="${speed}s" repeatCount="indefinite"/>
      <ellipse cx="0" cy="0" rx="70" ry="35" fill="${color}"/>
      <ellipse cx="60" cy="5" rx="25" ry="20" fill="${color}"/>
      <circle cx="75" cy="0" r="5" fill="#0f172a"/><circle cx="73" cy="-2" r="2" fill="#fff"/>
      <path d="M-60 -5 Q-80 -20 -70 -35 Q-60 -25 -55 -15 Z" fill="${color}"/>
      <path d="M-60 5 Q-80 20 -70 35 Q-60 25 -55 15 Z" fill="${color}"/>
      <circle cx="0" cy="-5" r="3" fill="#60a5fa" opacity=".6"><animate attributeName="cy" values="-5;-25;-5" dur="${speed*.5}s" repeatCount="indefinite"/></circle>
      <circle cx="10" cy="-10" r="2" fill="#60a5fa" opacity=".4"><animate attributeName="cy" values="-10;-30;-10" dur="${speed*.4}s" repeatCount="indefinite"/></circle>
      </g><text x="${w/2}" y="${h-25}" text-anchor="middle" font-family="monospace" font-size="12" fill="${color}">whooosh · whale</text>`, '#0c1222'),
  },
  {
    id: 'turtle', name: 'Shelly', emoji: '🐢', vibe: 'slow · steady',
    svg: ({ color = '#22c55e', speed = 5, scale = 1 } = {}) => petFrame(`
      <g transform="translate(${w/2*scale} ${h/2*scale}) scale(${scale})"><animateTransform attributeName="transform" type="translate" values="${w/2*scale} ${h/2*scale};${w/2*scale+2} ${h/2*scale};${w/2*scale} ${h/2*scale}" dur="${speed}s" repeatCount="indefinite"/>
      <ellipse cx="0" cy="0" rx="45" ry="35" fill="${color}"/>
      <ellipse cx="0" cy="0" rx="35" ry="25" fill="#16a34a"/>
      <path d="M-10 -20 L-5 -30 L0 -20 L5 -30 L10 -20" fill="none" stroke="#fbbf24" stroke-width="2"/>
      <circle cx="-30" cy="-5" r="5" fill="#0f172a"/><circle cx="30" cy="-5" r="5" fill="#0f172a"/>
      <ellipse cx="50" cy="-5" rx="15" ry="12" fill="#86efac"/>
      <circle cx="55" cy="-8" r="3" fill="#0f172a"/>
      </g><text x="${w/2}" y="${h-25}" text-anchor="middle" font-family="monospace" font-size="12" fill="${color}">slow &amp; steady</text>`, '#052e16'),
  },
  {
    id: 'fish', name: 'Nemo', emoji: '🐠', vibe: 'colorful · swim',
    svg: ({ color = '#f97316', speed = 2, scale = 1 } = {}) => petFrame(`
      <g transform="translate(${w/2*scale} ${h/2*scale}) scale(${scale})"><animateTransform attributeName="transform" type="translate" values="${w/2*scale} ${h/2*scale};${w/2*scale+15} ${h/2*scale-5};${w/2*scale} ${h/2*scale}" dur="${speed}s" repeatCount="indefinite"/>
      <ellipse cx="0" cy="0" rx="55" ry="25" fill="${color}"/>
      <path d="M55 0 L80 -20 L80 20 Z" fill="${color}"/>
      <path d="M-10 -15 L10 0 L-10 15" fill="none" stroke="#fff" stroke-width="4"/>
      <circle cx="30" cy="-5" r="5" fill="#0f172a"/><circle cx="28" cy="-7" r="2" fill="#fff"/>
      </g><text x="${w/2}" y="${h-25}" text-anchor="middle" font-family="monospace" font-size="12" fill="${color}">blub · fishy</text>`, '#0c1222'),
  },
  {
    id: 'octopus', name: 'Inky', emoji: '🐙', vibe: 'eight arms · clever',
    svg: ({ color = '#a855f7', speed = 3, scale = 1 } = {}) => petFrame(`
      <g transform="translate(${w/2*scale} ${h/2*scale}) scale(${scale})"><animateTransform attributeName="transform" type="translate" values="${w/2*scale} ${h/2*scale};${w/2*scale} ${h/2*scale-6};${w/2*scale} ${h/2*scale}" dur="${speed}s" repeatCount="indefinite"/>
      <ellipse cx="0" cy="-10" rx="40" ry="35" fill="${color}"/>
      <circle cx="-12" cy="-15" r="6" fill="#fff"/><circle cx="12" cy="-15" r="6" fill="#fff"/>
      <circle cx="-12" cy="-15" r="3" fill="#0f172a"/><circle cx="12" cy="-15" r="3" fill="#0f172a"/>
      ${[-20,-5,10,25].map((x,i) => `<path d="M${x} 25 Q${x-10} 45 ${x+5} 55" stroke="${color}" stroke-width="8" fill="none" stroke-linecap="round"><animate attributeName="d" values="M${x} 25 Q${x-10} 45 ${x+5} 55;M${x} 25 Q${x+10} 45 ${x-5} 55;M${x} 25 Q${x-10} 45 ${x+5} 55" dur="${speed*(.8+i*.1)}s" repeatCount="indefinite"/></path>`).join('')}
      </g><text x="${w/2}" y="${h-25}" text-anchor="middle" font-family="monospace" font-size="12" fill="${color}">squelch · 8 arms</text>`, '#1e1b4b'),
  },
  {
    id: 'dolphin', name: 'Splash', emoji: '', vibe: 'playful · fast',
    svg: ({ color = '#60a5fa', speed = 2.5, scale = 1 } = {}) => petFrame(`
      <g transform="translate(${w/2*scale} ${h/2*scale}) scale(${scale})"><animateTransform attributeName="transform" type="translate" values="${w/2*scale} ${h/2*scale};${w/2*scale+20} ${h/2*scale-15};${w/2*scale} ${h/2*scale}" dur="${speed}s" repeatCount="indefinite"/>
      <ellipse cx="0" cy="0" rx="60" ry="22" fill="${color}"/>
      <polygon points="55,-5 80,-15 80,10" fill="${color}"/>
      <circle cx="40" cy="-5" r="4" fill="#0f172a"/><circle cx="38" cy="-7" r="1.5" fill="#fff"/>
      <path d="M-55 -5 Q-70 -15 -65 -25" stroke="${color}" stroke-width="6" fill="none" stroke-linecap="round"/>
      </g><text x="${w/2}" y="${h-25}" text-anchor="middle" font-family="monospace" font-size="12" fill="${color}">splash · dolphin</text>`, '#0c1222'),
  },
  // Birds
  {
    id: 'chicken', name: 'Cluck', emoji: '🐔', vibe: 'farm · noisy',
    svg: ({ color = '#ef4444', speed = 1.5, scale = 1 } = {}) => petFrame(`
      <g transform="translate(${w/2*scale} ${h/2*scale}) scale(${scale})"><animateTransform attributeName="transform" type="translate" values="${w/2*scale} ${h/2*scale};${w/2*scale} ${h/2*scale-3};${w/2*scale} ${h/2*scale}" dur="${speed}s" repeatCount="indefinite"/>
      <ellipse cx="0" cy="10" rx="40" ry="30" fill="${color}"/>
      <ellipse cx="0" cy="10" rx="30" ry="20" fill="#fca5a5"/>
      <circle cx="0" cy="-15" r="18" fill="${color}"/>
      <circle cx="-6" cy="-18" r="3" fill="#0f172a"/><circle cx="6" cy="-18" r="3" fill="#0f172a"/>
      <polygon points="-3,-10 3,-10 0,-3" fill="#fbbf24"/>
      <polygon points="-5,-30 0,-38 5,-30" fill="#fbbf24"/>
      <path d="M-35 10 Q-50 5 -45 20" stroke="${color}" stroke-width="4" fill="none"/>
      <path d="M35 10 Q50 5 45 20" stroke="${color}" stroke-width="4" fill="none"/>
      </g><text x="${w/2}" y="${h-25}" text-anchor="middle" font-family="monospace" font-size="12" fill="${color}">cluck cluck</text>`, '#450a0a'),
  },
  {
    id: 'parrot', name: 'Polly', emoji: '🦜', vibe: 'colorful · talkative',
    svg: ({ color = '#22c55e', speed = 1.8, scale = 1 } = {}) => petFrame(`
      <g transform="translate(${w/2*scale} ${h/2*scale}) scale(${scale})"><animateTransform attributeName="transform" type="translate" values="${w/2*scale} ${h/2*scale};${w/2*scale} ${h/2*scale-5};${w/2*scale} ${h/2*scale}" dur="${speed}s" repeatCount="indefinite"/>
      <ellipse cx="0" cy="0" rx="35" ry="30" fill="${color}"/>
      <circle cx="0" cy="-20" r="20" fill="${color}"/>
      <circle cx="-6" cy="-23" r="3" fill="#0f172a"/><circle cx="6" cy="-23" r="3" fill="#0f172a"/>
      <polygon points="-5,-15 5,-15 0,-8" fill="#fbbf24"/>
      <path d="M30 5 Q45 0 40 -10" stroke="#ef4444" stroke-width="6" fill="none" stroke-linecap="round"/>
      <path d="M-30 5 Q-45 0 -40 -10" stroke="#3b82f6" stroke-width="6" fill="none" stroke-linecap="round"/>
      </g><text x="${w/2}" y="${h-25}" text-anchor="middle" font-family="monospace" font-size="12" fill="${color}">hello! · parrot</text>`, '#052e16'),
  },
  {
    id: 'duck', name: 'Quack', emoji: '🦆', vibe: 'pond · silly',
    svg: ({ color = '#eab308', speed = 1.5, scale = 1 } = {}) => petFrame(`
      <g transform="translate(${w/2*scale} ${h/2*scale}) scale(${scale})"><animateTransform attributeName="transform" type="translate" values="${w/2*scale} ${h/2*scale};${w/2*scale} ${h/2*scale-4};${w/2*scale} ${h/2*scale}" dur="${speed}s" repeatCount="indefinite"/>
      <ellipse cx="0" cy="10" rx="45" ry="25" fill="${color}"/>
      <circle cx="0" cy="-15" r="20" fill="${color}"/>
      <circle cx="-6" cy="-18" r="3" fill="#0f172a"/><circle cx="6" cy="-18" r="3" fill="#0f172a"/>
      <polygon points="-8,-12 8,-12 0,-6" fill="#f97316"/>
      <path d="M-40 10 Q-55 5 -50 20" stroke="${color}" stroke-width="4" fill="none"/>
      </g><text x="${w/2}" y="${h-25}" text-anchor="middle" font-family="monospace" font-size="12" fill="${color}">quack · duck</text>`, '#422006'),
  },
  {
    id: 'flamingo', name: 'Pinkie', emoji: '🦩', vibe: 'elegant · pink',
    svg: ({ color = '#f43f5e', speed = 4, scale = 1 } = {}) => petFrame(`
      <g transform="translate(${w/2*scale} ${h/2*scale}) scale(${scale})"><animateTransform attributeName="transform" type="translate" values="${w/2*scale} ${h/2*scale};${w/2*scale} ${h/2*scale-6};${w/2*scale} ${h/2*scale}" dur="${speed}s" repeatCount="indefinite"/>
      <ellipse cx="0" cy="10" rx="40" ry="25" fill="${color}"/>
      <path d="M30 0 Q50 -30 45 -50 Q40 -60 35 -55" stroke="${color}" stroke-width="5" fill="none" stroke-linecap="round"/>
      <circle cx="35" cy="-55" r="8" fill="${color}"/>
      <circle cx="33" cy="-57" r="2" fill="#0f172a"/>
      <polygon points="30,-55 45,-55 38,-50" fill="#fbbf24"/>
      <line x1="-10" y1="35" x2="-10" y2="55" stroke="${color}" stroke-width="3"/><line x1="10" y1="35" x2="10" y2="55" stroke="${color}" stroke-width="3"/>
      </g><text x="${w/2}" y="${h-25}" text-anchor="middle" font-family="monospace" font-size="12" fill="${color}">flamingo · elegant</text>`, '#450a0a'),
  },
  // Reptiles & amphibians
  {
    id: 'snake', name: 'Sssss', emoji: '🐍', vibe: 'sneaky · smooth',
    svg: ({ color = '#22c55e', speed = 3, scale = 1 } = {}) => petFrame(`
      <g transform="translate(${w/2*scale} ${h/2*scale}) scale(${scale})">
      <path d="M-40 20 Q-20 0 0 20 Q20 40 40 20" stroke="${color}" stroke-width="16" fill="none" stroke-linecap="round"><animate attributeName="d" values="M-40 20 Q-20 0 0 20 Q20 40 40 20;M-40 15 Q-20 35 0 15 Q20 -5 40 15;M-40 20 Q-20 0 0 20 Q20 40 40 20" dur="${speed}s" repeatCount="indefinite"/></path>
      <circle cx="40" cy="20" r="10" fill="${color}"/>
      <circle cx="38" cy="18" r="2" fill="#0f172a"/>
      <path d="M50 22 Q55 20 52 18" stroke="#ef4444" stroke-width="1.5" fill="none"/>
      </g><text x="${w/2}" y="${h-25}" text-anchor="middle" font-family="monospace" font-size="12" fill="${color}">sssss · snake</text>`, '#052e16'),
  },
  {
    id: 'frog', name: 'Ribbit', emoji: '🐸', vibe: 'pond · jumpy',
    svg: ({ color = '#22c55e', speed = 1.2, scale = 1 } = {}) => petFrame(`
      <g transform="translate(${w/2*scale} ${h/2*scale}) scale(${scale})"><animateTransform attributeName="transform" type="translate" values="${w/2*scale} ${h/2*scale};${w/2*scale} ${h/2*scale-12};${w/2*scale} ${h/2*scale}" dur="${speed}s" repeatCount="indefinite"/>
      <ellipse cx="0" cy="10" rx="50" ry="30" fill="${color}"/>
      <circle cx="-20" cy="-15" r="12" fill="${color}"/><circle cx="20" cy="-15" r="12" fill="${color}"/>
      <circle cx="-20" cy="-15" r="6" fill="#fff"/><circle cx="20" cy="-15" r="6" fill="#fff"/>
      <circle cx="-20" cy="-15" r="3" fill="#0f172a"/><circle cx="20" cy="-15" r="3" fill="#0f172a"/>
      <path d="M-15 15 Q0 25 15 15" stroke="#0f172a" stroke-width="2" fill="none"/>
      </g><text x="${w/2}" y="${h-25}" text-anchor="middle" font-family="monospace" font-size="12" fill="${color}">ribbit · frog</text>`, '#052e16'),
  },
  {
    id: 'lizard', name: 'Gecko', emoji: '', vibe: 'wall · quick',
    svg: ({ color = '#22c55e', speed = 1, scale = 1 } = {}) => petFrame(`
      <g transform="translate(${w/2*scale} ${h/2*scale}) scale(${scale})"><animateTransform attributeName="transform" type="translate" values="${w/2*scale} ${h/2*scale};${w/2*scale+5} ${h/2*scale};${w/2*scale} ${h/2*scale}" dur="${speed}s" repeatCount="indefinite"/>
      <ellipse cx="0" cy="0" rx="55" ry="20" fill="${color}"/>
      <circle cx="45" cy="-8" r="12" fill="${color}"/>
      <circle cx="48" cy="-10" r="3" fill="#0f172a"/>
      <path d="M-55 0 Q-70 -5 -65 5" stroke="${color}" stroke-width="4" fill="none" stroke-linecap="round"/>
      </g><text x="${w/2}" y="${h-25}" text-anchor="middle" font-family="monospace" font-size="12" fill="${color}">gecko · quick</text>`, '#052e16'),
  },
  // Mammals
  {
    id: 'bear', name: 'Teddy', emoji: '🐻', vibe: 'cozy · cuddly',
    svg: ({ color = '#92400e', speed = 3, scale = 1 } = {}) => petFrame(`
      <g transform="translate(${w/2*scale} ${h/2*scale}) scale(${scale})"><animateTransform attributeName="transform" type="translate" values="${w/2*scale} ${h/2*scale};${w/2*scale} ${h/2*scale-3};${w/2*scale} ${h/2*scale}" dur="${speed}s" repeatCount="indefinite"/>
      <ellipse cx="0" cy="10" rx="50" ry="40" fill="${color}"/>
      <circle cx="-35" cy="-25" r="18" fill="${color}"/><circle cx="35" cy="-25" r="18" fill="${color}"/>
      <circle cx="-35" cy="-25" r="10" fill="#d97706"/><circle cx="35" cy="-25" r="10" fill="#d97706"/>
      <ellipse cx="0" cy="0" rx="35" ry="25" fill="#d97706"/>
      <circle cx="-12" cy="-8" r="4" fill="#0f172a"/><circle cx="12" cy="-8" r="4" fill="#0f172a"/>
      <ellipse cx="0" cy="5" rx="6" ry="4" fill="#0f172a"/>
      </g><text x="${w/2}" y="${h-25}" text-anchor="middle" font-family="monospace" font-size="12" fill="${color}">grr · teddy</text>`, '#422006'),
  },
  {
    id: 'koala', name: 'Eucalyptus', emoji: '🐨', vibe: 'lazy · aussie',
    svg: ({ color = '#94a3b8', speed = 5, scale = 1 } = {}) => petFrame(`
      <g transform="translate(${w/2*scale} ${h/2*scale}) scale(${scale})"><animateTransform attributeName="transform" type="translate" values="${w/2*scale} ${h/2*scale};${w/2*scale} ${h/2*scale-2};${w/2*scale} ${h/2*scale}" dur="${speed}s" repeatCount="indefinite"/>
      <ellipse cx="0" cy="10" rx="50" ry="40" fill="${color}"/>
      <circle cx="-35" cy="-25" r="20" fill="${color}"/><circle cx="35" cy="-25" r="20" fill="${color}"/>
      <circle cx="-35" cy="-25" r="12" fill="#fbbf24"/><circle cx="35" cy="-25" r="12" fill="#fbbf24"/>
      <ellipse cx="0" cy="0" rx="35" ry="25" fill="#e2e8f0"/>
      <circle cx="-12" cy="-8" r="5" fill="#0f172a"/><circle cx="12" cy="-8" r="5" fill="#0f172a"/>
      <ellipse cx="0" cy="5" rx="8" ry="5" fill="#0f172a"/>
      </g><text x="${w/2}" y="${h-25}" text-anchor="middle" font-family="monospace" font-size="12" fill="${color}">zzz · koala</text>`, '#0f172a'),
  },
  {
    id: 'elephant', name: 'Dumbo', emoji: '🐘', vibe: 'big · gentle',
    svg: ({ color = '#94a3b8', speed = 4, scale = 1 } = {}) => petFrame(`
      <g transform="translate(${w/2*scale} ${h/2*scale}) scale(${scale})"><animateTransform attributeName="transform" type="translate" values="${w/2*scale} ${h/2*scale};${w/2*scale} ${h/2*scale-5};${w/2*scale} ${h/2*scale}" dur="${speed}s" repeatCount="indefinite"/>
      <ellipse cx="0" cy="0" rx="60" ry="40" fill="${color}"/>
      <path d="M-55 -10 Q-75 -30 -65 -50" stroke="${color}" stroke-width="8" fill="none" stroke-linecap="round"><animate attributeName="d" values="M-55 -10 Q-75 -30 -65 -50;M-55 -10 Q-75 10 -65 -20;M-55 -10 Q-75 -30 -65 -50" dur="${speed}s" repeatCount="indefinite"/></path>
      <path d="M55 -10 Q75 -30 65 -50" stroke="${color}" stroke-width="8" fill="none" stroke-linecap="round"><animate attributeName="d" values="M55 -10 Q75 -30 65 -50;M55 -10 Q75 10 65 -20;M55 -10 Q75 -30 65 -50" dur="${speed}s" repeatCount="indefinite"/></path>
      <circle cx="-15" cy="-10" r="4" fill="#0f172a"/><circle cx="15" cy="-10" r="4" fill="#0f172a"/>
      <path d="M0 10 Q-5 30 5 40 Q10 35 0 30" stroke="${color}" stroke-width="5" fill="none"/>
      </g><text x="${w/2}" y="${h-25}" text-anchor="middle" font-family="monospace" font-size="12" fill="${color}">toot · elephant</text>`, '#0f172a'),
  },
  {
    id: 'lion', name: 'Simba', emoji: '🦁', vibe: 'proud · king',
    svg: ({ color = '#f59e0b', speed = 2, scale = 1 } = {}) => petFrame(`
      <g transform="translate(${w/2*scale} ${h/2*scale}) scale(${scale})"><animateTransform attributeName="transform" type="translate" values="${w/2*scale} ${h/2*scale};${w/2*scale} ${h/2*scale-3};${w/2*scale} ${h/2*scale}" dur="${speed}s" repeatCount="indefinite"/>
      <ellipse cx="0" cy="0" rx="40" ry="35" fill="${color}"/>
      <circle cx="-35" cy="-30" r="3" fill="#92400e"/><circle cx="-25" cy="-40" r="3" fill="#92400e"/><circle cx="-10" cy="-42" r="3" fill="#92400e"/><circle cx="10" cy="-42" r="3" fill="#92400e"/><circle cx="25" cy="-40" r="3" fill="#92400e"/><circle cx="35" cy="-30" r="3" fill="#92400e"/>
      <circle cx="-35" cy="0" r="3" fill="#92400e"/><circle cx="35" cy="0" r="3" fill="#92400e"/>
      <circle cx="-12" cy="-5" r="4" fill="#0f172a"/><circle cx="12" cy="-5" r="4" fill="#0f172a"/>
      <path d="M-8 10 Q0 15 8 10" stroke="#0f172a" stroke-width="2" fill="none"/>
      </g><text x="${w/2}" y="${h-25}" text-anchor="middle" font-family="monospace" font-size="12" fill="${color}">roar · king</text>`, '#422006'),
  },
  {
    id: 'wolf', name: 'Luna', emoji: '', vibe: 'wild · moon',
    svg: ({ color = '#6b7280', speed = 2, scale = 1 } = {}) => petFrame(`
      <g transform="translate(${w/2*scale} ${h/2*scale}) scale(${scale})"><animateTransform attributeName="transform" type="translate" values="${w/2*scale} ${h/2*scale};${w/2*scale} ${h/2*scale-4};${w/2*scale} ${h/2*scale}" dur="${speed}s" repeatCount="indefinite"/>
      <ellipse cx="0" cy="5" rx="50" ry="35" fill="${color}"/>
      <polygon points="-40,-20 -30,-50 -15,-25" fill="${color}"/><polygon points="40,-20 30,-50 15,-25" fill="${color}"/>
      <ellipse cx="0" cy="0" rx="35" ry="25" fill="#d1d5db"/>
      <circle cx="-12" cy="-8" r="4" fill="#fbbf24"/><circle cx="12" cy="-8" r="4" fill="#fbbf24"/>
      <ellipse cx="0" cy="5" rx="5" ry="3" fill="#0f172a"/>
      </g><text x="${w/2}" y="${h-25}" text-anchor="middle" font-family="monospace" font-size="12" fill="${color}">howl · wolf</text>`, '#0f172a'),
  },
  // Insects
  {
    id: 'butterfly', name: 'Flutter', emoji: '🦋', vibe: 'delicate · fly',
    svg: ({ color = '#8b5cf6', speed = 0.6, scale = 1 } = {}) => petFrame(`
      <g transform="translate(${w/2*scale} ${h/2*scale}) scale(${scale})">
      <line x1="0" y1="-10" x2="0" y2="15" stroke="#0f172a" stroke-width="2"/>
      <ellipse cx="-25" cy="-5" rx="25" ry="18" fill="${color}" opacity=".8"><animateTransform attributeName="transform" type="scale" values="1 1;.8 1;1 1" dur="${speed}s" repeatCount="indefinite"/></ellipse>
      <ellipse cx="25" cy="-5" rx="25" ry="18" fill="${color}" opacity=".8"><animateTransform attributeName="transform" type="scale" values="1 1;.8 1;1 1" dur="${speed}s" repeatCount="indefinite"/></ellipse>
      <ellipse cx="-15" cy="12" rx="15" ry="10" fill="#a78bfa" opacity=".8"><animateTransform attributeName="transform" type="scale" values="1 1;.7 1;1 1" dur="${speed}s" repeatCount="indefinite"/></ellipse>
      <ellipse cx="15" cy="12" rx="15" ry="10" fill="#a78bfa" opacity=".8"><animateTransform attributeName="transform" type="scale" values="1 1;.7 1;1 1" dur="${speed}s" repeatCount="indefinite"/></ellipse>
      <circle cx="0" cy="-10" r="4" fill="#0f172a"/>
      </g><text x="${w/2}" y="${h-25}" text-anchor="middle" font-family="monospace" font-size="12" fill="${color}">flutter · butterfly</text>`),
  },
  {
    id: 'bee', name: 'Buzz', emoji: '🐝', vibe: 'busy · sweet',
    svg: ({ color = '#eab308', speed = 0.8, scale = 1 } = {}) => petFrame(`
      <g transform="translate(${w/2*scale} ${h/2*scale}) scale(${scale})"><animateTransform attributeName="transform" type="translate" values="${w/2*scale} ${h/2*scale};${w/2*scale+3} ${h/2*scale-5};${w/2*scale} ${h/2*scale}" dur="${speed}s" repeatCount="indefinite"/>
      <ellipse cx="0" cy="0" rx="30" ry="25" fill="${color}"/>
      <rect x="-30" y="-5" width="60" height="4" fill="#0f172a"/><rect x="-30" y="5" width="60" height="4" fill="#0f172a"/>
      <ellipse cx="-15" cy="-15" rx="15" ry="10" fill="#fff" opacity=".6"><animateTransform attributeName="transform" type="rotate" values="0 -15 -15;20 -15 -15;0 -15 -15" dur="${speed*.5}s" repeatCount="indefinite"/></ellipse>
      <ellipse cx="15" cy="-15" rx="15" ry="10" fill="#fff" opacity=".6"><animateTransform attributeName="transform" type="rotate" values="0 15 -15;-20 15 -15;0 15 -15" dur="${speed*.5}s" repeatCount="indefinite"/></ellipse>
      <circle cx="-8" cy="-3" r="3" fill="#0f172a"/><circle cx="8" cy="-3" r="3" fill="#0f172a"/>
      </g><text x="${w/2}" y="${h-25}" text-anchor="middle" font-family="monospace" font-size="12" fill="${color}">buzz · bee</text>`, '#422006'),
  },
  {
    id: 'ladybug', name: 'Dotty', emoji: '🐞', vibe: 'lucky · tiny',
    svg: ({ color = '#ef4444', scale = 1 } = {}) => petFrame(`
      <g transform="translate(${w/2*scale} ${h/2*scale}) scale(${scale})">
      <ellipse cx="0" cy="0" rx="35" ry="40" fill="${color}"/>
      <line x1="0" y1="-40" x2="0" y2="40" stroke="#0f172a" stroke-width="2"/>
      <circle cx="-10" cy="-15" r="5" fill="#0f172a"/><circle cx="10" cy="-5" r="5" fill="#0f172a"/><circle cx="-10" cy="15" r="5" fill="#0f172a"/><circle cx="10" cy="20" r="5" fill="#0f172a"/>
      <circle cx="0" cy="-40" r="15" fill="#0f172a"/>
      <circle cx="-5" cy="-42" r="2" fill="#fff"/><circle cx="5" cy="-42" r="2" fill="#fff"/>
      </g><text x="${w/2}" y="${h-25}" text-anchor="middle" font-family="monospace" font-size="12" fill="${color}">lucky · ladybug</text>`, '#0f172a'),
  },
  // Fantasy
  {
    id: 'unicorn', name: 'Sparkle', emoji: '🦄', vibe: 'magical · rainbow',
    svg: ({ color = '#a78bfa', speed = 3, scale = 1 } = {}) => petFrame(`
      <g transform="translate(${w/2*scale} ${h/2*scale}) scale(${scale})"><animateTransform attributeName="transform" type="translate" values="${w/2*scale} ${h/2*scale};${w/2*scale} ${h/2*scale-6};${w/2*scale} ${h/2*scale}" dur="${speed}s" repeatCount="indefinite"/>
      <ellipse cx="0" cy="10" rx="50" ry="30" fill="${color}"/>
      <circle cx="40" cy="-15" r="20" fill="${color}"/>
      <circle cx="45" cy="-18" r="3" fill="#0f172a"/>
      <polygon points="30,-30 40,-55 50,-30" fill="#fbbf24"/>
      <path d="M-45 5 Q-55 -5 -50 15" stroke="${color}" stroke-width="4" fill="none"/>
      <circle cx="60" cy="-25" r="3" fill="#f472b6"><animate attributeName="opacity" values="1;0;1" dur="${speed*.5}s" repeatCount="indefinite"/></circle>
      <circle cx="70" cy="-15" r="2" fill="#34d399"><animate attributeName="opacity" values="0;1;0" dur="${speed*.4}s" repeatCount="indefinite"/></circle>
      </g><text x="${w/2}" y="${h-25}" text-anchor="middle" font-family="monospace" font-size="12" fill="${color}">sparkle · unicorn</text>`, '#1e1b4b'),
  },
  // Food
  {
    id: 'sushi', name: 'Maki', emoji: '🍣', vibe: 'delicious · japanese',
    svg: ({ color = '#f87171', speed = 2, scale = 1 } = {}) => petFrame(`
      <g transform="translate(${w/2*scale} ${h/2*scale}) scale(${scale})"><animateTransform attributeName="transform" type="translate" values="${w/2*scale} ${h/2*scale};${w/2*scale} ${h/2*scale-3};${w/2*scale} ${h/2*scale}" dur="${speed}s" repeatCount="indefinite"/>
      <ellipse cx="0" cy="0" rx="40" ry="30" fill="${color}"/>
      <ellipse cx="0" cy="0" rx="35" ry="25" fill="#fbbf24"/>
      <ellipse cx="0" cy="0" rx="25" ry="15" fill="#f87171"/>
      <circle cx="0" cy="-10" r="5" fill="#fde68a"/>
      </g><text x="${w/2}" y="${h-25}" text-anchor="middle" font-family="monospace" font-size="12" fill="${color}">oishii · sushi</text>`, '#422006'),
  },
  {
    id: 'pizza', name: 'Slice', emoji: '🍕', vibe: 'cheesy · warm',
    svg: ({ color = '#f59e0b', speed = 2, scale = 1 } = {}) => petFrame(`
      <g transform="translate(${w/2*scale} ${h/2*scale}) scale(${scale})"><animateTransform attributeName="transform" type="rotate" values="0;5;0" dur="${speed}s" repeatCount="indefinite"/>
      <polygon points="0,-45 -50,40 50,40" fill="#f59e0b"/>
      <polygon points="0,-45 -45,35 45,35" fill="#fbbf24"/>
      <circle cx="-10" cy="5" r="8" fill="#ef4444"/><circle cx="10" cy="15" r="8" fill="#ef4444"/><circle cx="-5" cy="25" r="8" fill="#ef4444"/>
      <circle cx="0" cy="-5" r="4" fill="#16a34a"/>
      </g><text x="${w/2}" y="${h-25}" text-anchor="middle" font-family="monospace" font-size="12" fill="${color}">pizza time!</text>`, '#422006'),
  },
  {
    id: 'avocado', name: 'Avo', emoji: '🥑', vibe: 'healthy · green',
    svg: ({ color = '#16a34a', speed = 3, scale = 1 } = {}) => petFrame(`
      <g transform="translate(${w/2*scale} ${h/2*scale}) scale(${scale})"><animateTransform attributeName="transform" type="translate" values="${w/2*scale} ${h/2*scale};${w/2*scale} ${h/2*scale-3};${w/2*scale} ${h/2*scale}" dur="${speed}s" repeatCount="indefinite"/>
      <ellipse cx="0" cy="0" rx="40" ry="55" fill="${color}"/>
      <ellipse cx="0" cy="0" rx="35" ry="50" fill="#4ade80"/>
      <circle cx="0" cy="10" r="15" fill="#92400e"/>
      <circle cx="-5" cy="8" r="3" fill="#fbbf24"/>
      </g><text x="${w/2}" y="${h-25}" text-anchor="middle" font-family="monospace" font-size="12" fill="${color}">guac · avo</text>`, '#052e16'),
  },
  // Space
  {
    id: 'alien', name: 'Zorp', emoji: '👽', vibe: 'outerspace · friendly',
    svg: ({ color = '#4ade80', speed = 2, scale = 1 } = {}) => petFrame(`
      <g transform="translate(${w/2*scale} ${h/2*scale}) scale(${scale})"><animateTransform attributeName="transform" type="translate" values="${w/2*scale} ${h/2*scale};${w/2*scale+3} ${h/2*scale-5};${w/2*scale} ${h/2*scale}" dur="${speed}s" repeatCount="indefinite"/>
      <ellipse cx="0" cy="0" rx="40" ry="35" fill="${color}"/>
      <ellipse cx="0" cy="-5" rx="30" ry="25" fill="#22c55e"/>
      <circle cx="-12" cy="-8" r="8" fill="#0f172a"/><circle cx="12" cy="-8" r="8" fill="#0f172a"/>
      <circle cx="-10" cy="-10" r="3" fill="#fff"/><circle cx="14" cy="-10" r="3" fill="#fff"/>
      <ellipse cx="0" cy="8" rx="8" ry="3" fill="#0f172a"/>
      </g><text x="${w/2}" y="${h-25}" text-anchor="middle" font-family="monospace" font-size="12" fill="${color}">beep · alien</text>`, '#052e16'),
  },
  {
    id: 'planet', name: 'Orb', emoji: '🪐', vibe: 'cosmic · ringed',
    svg: ({ color = '#a78bfa', scale = 1 } = {}) => petFrame(`
      <g transform="translate(${w/2*scale} ${h/2*scale}) scale(${scale})">
      <ellipse cx="0" cy="0" rx="50" ry="35" fill="${color}"/>
      <ellipse cx="0" cy="0" rx="75" ry="12" fill="none" stroke="#c4b5fd" stroke-width="4" transform="rotate(-20)"/>
      <circle cx="-15" cy="-10" r="10" fill="#7c3aed" opacity=".5"/><circle cx="10" cy="10" r="8" fill="#6366f1" opacity=".4"/>
      <circle cx="20" cy="-15" r="5" fill="#a78bfa" opacity=".6"/>
      </g><text x="${w/2}" y="${h-25}" text-anchor="middle" font-family="monospace" font-size="12" fill="${color}">orbit · planet</text>`, '#1e1b4b'),
  },
  // Nature
  {
    id: 'sun', name: 'Sunny', emoji: '☀️', vibe: 'bright · warm',
    svg: ({ color = '#fbbf24', speed = 20, scale = 1 } = {}) => petFrame(`
      <g transform="translate(${w/2*scale} ${h/2*scale}) scale(${scale})"><animateTransform attributeName="transform" type="rotate" values="0;360" dur="${speed}s" repeatCount="indefinite"/>
      <circle cx="0" cy="0" r="40" fill="${color}"/>
      ${Array.from({length:8}).map((_,i) => { const a = i*45; return `<line x1="50" y1="0" x2="65" y2="0" stroke="${color}" stroke-width="4" stroke-linecap="round" transform="rotate(${a})"/>`; }).join('')}
      <circle cx="-10" cy="-8" r="4" fill="#0f172a"/><circle cx="10" cy="-8" r="4" fill="#0f172a"/>
      <path d="M-8 8 Q0 15 8 8" stroke="#0f172a" stroke-width="2" fill="none"/>
      </g><text x="${w/2}" y="${h-25}" text-anchor="middle" font-family="monospace" font-size="12" fill="${color}">sunshine · warm</text>`, '#422006'),
  },
  {
    id: 'moon', name: 'Luna', emoji: '🌙', vibe: 'night · calm',
    svg: ({ color = '#fde68a', speed = 6, scale = 1 } = {}) => petFrame(`
      <g transform="translate(${w/2*scale} ${h/2*scale}) scale(${scale})"><animateTransform attributeName="transform" type="translate" values="${w/2*scale} ${h/2*scale};${w/2*scale} ${h/2*scale-5};${w/2*scale} ${h/2*scale}" dur="${speed}s" repeatCount="indefinite"/>
      <path d="M-30 -35 Q20 -40 30 -10 Q40 20 10 35 Q-20 50 -40 20 Q-60 -10 -30 -35 Z" fill="${color}"/>
      <circle cx="-10" cy="-5" r="4" fill="#92400e"/><circle cx="5" cy="5" r="3" fill="#92400e"/>
      ${Array.from({length:5}).map((_,i) => `<circle cx="${(i-2)*20+10}" cy="${-30+i*15}" r="1.5" fill="#fff"><animate attributeName="opacity" values="1;0;1" dur="${2+i}s" repeatCount="indefinite"/></circle>`).join('')}
      </g><text x="${w/2}" y="${h-25}" text-anchor="middle" font-family="monospace" font-size="12" fill="${color}">moonlight · calm</text>`, '#1e1b4b'),
  },
  {
    id: 'mushroom', name: 'Shroom', emoji: '🍄', vibe: 'forest · tiny',
    svg: ({ color = '#ef4444', speed = 3, scale = 1 } = {}) => petFrame(`
      <g transform="translate(${w/2*scale} ${h/2*scale}) scale(${scale})"><animateTransform attributeName="transform" type="translate" values="${w/2*scale} ${h/2*scale};${w/2*scale} ${h/2*scale-2};${w/2*scale} ${h/2*scale}" dur="${speed}s" repeatCount="indefinite"/>
      <path d="M-40 10 Q-45 -20 0 -35 Q45 -20 40 10 Z" fill="${color}"/>
      <circle cx="-15" cy="-15" r="6" fill="#fff"/><circle cx="10" cy="-20" r="5" fill="#fff"/><circle cx="20" cy="-5" r="4" fill="#fff"/>
      <rect x="-8" y="10" width="16" height="30" rx="4" fill="#fde68a"/>
      </g><text x="${w/2}" y="${h-25}" text-anchor="middle" font-family="monospace" font-size="12" fill="${color}">shroom · tiny</text>`, '#052e16'),
  },
  {
    id: 'star', name: 'Twinkle', emoji: '⭐', vibe: 'sparkle · wish',
    svg: ({ color = '#fbbf24', speed = 1.5, scale = 1 } = {}) => petFrame(`
      <g transform="translate(${w/2*scale} ${h/2*scale}) scale(${scale})"><animateTransform attributeName="transform" type="scale" values="1;1.1;1" dur="${speed}s" repeatCount="indefinite"/>
      <polygon points="0,-40 10,-12 40,-12 16,6 25,35 0,18 -25,35 -16,6 -40,-12 -10,-12" fill="${color}"/>
      <circle cx="-6" cy="-8" r="3" fill="#92400e"/><circle cx="6" cy="-8" r="3" fill="#92400e"/>
      <path d="M-4 5 Q0 8 4 5" stroke="#92400e" stroke-width="1.5" fill="none"/>
      </g><text x="${w/2}" y="${h-25}" text-anchor="middle" font-family="monospace" font-size="12" fill="${color}">twinkle · star</text>`, '#1e1b4b'),
  },
  // Sports
  {
    id: 'soccer', name: 'Goal', emoji: '⚽', vibe: 'sport · round',
    svg: ({ color = '#fff', speed = 1, scale = 1 } = {}) => petFrame(`
      <g transform="translate(${w/2*scale} ${h/2*scale}) scale(${scale})"><animateTransform attributeName="transform" type="rotate" values="0;360" dur="${speed*3}s" repeatCount="indefinite"/>
      <circle cx="0" cy="0" r="45" fill="${color}"/>
      <polygon points="0,-15 13,-8 13,8 0,15 -13,8 -13,-8" fill="#0f172a"/>
      ${[[0,-35],[30,-18],[30,18],[0,35],[-30,18],[-30,-18]].map(([x,y]) => `<polygon points="${x},${y} ${x+10},${y+6} ${x+10},${y-6} ${x},${y-12} ${x-10},${y-6} ${x-10},${y+6}" fill="#0f172a"/>`).join('')}
      </g><text x="${w/2}" y="${h-25}" text-anchor="middle" font-family="monospace" font-size="12" fill="#fff">goal! · soccer</text>`, '#0f172a'),
  },
  // Music
  {
    id: 'music', name: 'Note', emoji: '🎵', vibe: 'melody · rhythm',
    svg: ({ color = '#a78bfa', speed = 2, scale = 1 } = {}) => petFrame(`
      <g transform="translate(${w/2*scale} ${h/2*scale}) scale(${scale})"><animateTransform attributeName="transform" type="translate" values="${w/2*scale} ${h/2*scale};${w/2*scale+5} ${h/2*scale-8};${w/2*scale} ${h/2*scale}" dur="${speed}s" repeatCount="indefinite"/>
      <ellipse cx="-10" cy="20" rx="12" ry="8" fill="${color}"/>
      <line x1="2" y1="20" x2="2" y2="-25" stroke="${color}" stroke-width="3"/>
      <path d="M2 -25 Q20 -30 15 -15 Q10 -5 2 -10" fill="${color}"/>
      <ellipse cx="20" cy="10" rx="10" ry="6" fill="${color}" opacity=".6"/>
      <line x1="30" y1="10" x2="30" y2="-20" stroke="${color}" stroke-width="2" opacity=".6"/>
      </g><text x="${w/2}" y="${h-25}" text-anchor="middle" font-family="monospace" font-size="12" fill="${color}">la la la · music</text>`, '#1e1b4b'),
  },
  // Gaming
  {
    id: 'controller', name: 'Gamepad', emoji: '🎮', vibe: 'gamer · fun',
    svg: ({ color = '#60a5fa', speed = 1.5, scale = 1 } = {}) => petFrame(`
      <g transform="translate(${w/2*scale} ${h/2*scale}) scale(${scale})"><animateTransform attributeName="transform" type="translate" values="${w/2*scale} ${h/2*scale};${w/2*scale} ${h/2*scale-3};${w/2*scale} ${h/2*scale}" dur="${speed}s" repeatCount="indefinite"/>
      <path d="M-40 5 Q-45 -15 -25 -25 L25 -25 Q45 -15 40 5 L30 30 Q0 35 -30 30 Z" fill="${color}"/>
      <circle cx="-20" cy="-8" r="6" fill="#fff"/><circle cx="-20" cy="8" r="6" fill="#fff"/>
      <circle cx="15" cy="-5" r="4" fill="#ef4444"/><circle cx="25" cy="-15" r="4" fill="#22c55e"/><circle cx="5" cy="-15" r="4" fill="#fbbf24"/><circle cx="25" cy="5" r="4" fill="#3b82f6"/>
      <circle cx="-12" cy="-10" r="2" fill="#0f172a"/><circle cx="-8" cy="-6" r="2" fill="#0f172a"/>
      </g><text x="${w/2}" y="${h-25}" text-anchor="middle" font-family="monospace" font-size="12" fill="${color}">GG · gamepad</text>`, '#0f172a'),
  },
  // Tech
  {
    id: 'chip', name: 'CPU', emoji: '💾', vibe: 'tech · fast',
    svg: ({ color = '#22c55e', scale = 1 } = {}) => petFrame(`
      <g transform="translate(${w/2*scale} ${h/2*scale}) scale(${scale})">
      <rect x="-30" y="-30" width="60" height="60" rx="4" fill="${color}"/>
      <rect x="-20" y="-20" width="40" height="40" rx="2" fill="#16a34a"/>
      ${[-3,-1,1,3].map(dx => `${Array.from({length:4}).map((_,i) => `<rect x="${dx*10+i*8-12}" y="-35" width="4" height="8" fill="#fbbf24"/>`).join('')}`).join('')}
      ${Array.from({length:4}).map((_,i) => `<rect x="${i*8-12}" y="27" width="4" height="8" fill="#fbbf24"/>`).join('')}
      ${Array.from({length:4}).map((_,i) => `<rect x="-35" y="${i*8-12}" width="8" height="4" fill="#fbbf24"/>`).join('')}
      ${Array.from({length:4}).map((_,i) => `<rect x="27" y="${i*8-12}" width="8" height="4" fill="#fbbf24"/>`).join('')}
      <circle cx="-5" cy="-5" r="3" fill="#0f172a"/><circle cx="5" cy="-5" r="3" fill="#0f172a"/>
      <path d="M-4 5 Q0 8 4 5" stroke="#0f172a" stroke-width="1.5" fill="none"/>
      </g><text x="${w/2}" y="${h-25}" text-anchor="middle" font-family="monospace" font-size="12" fill="${color}">processing · cpu</text>`, '#0f172a'),
  },
];

// ===== 60 MORE PREMIUM 2026 PETS (rich effects: glow, particles, breathing, blinking) =====
const premiumPets: Pet[] = [
  {
    id: 'phoenix', name: 'Blaze', emoji: '🔥', vibe: 'reborn · fiery',
    svg: ({ color = '#f97316', speed = 2, scale = 1 } = {}) => petFrame(`
      <defs><radialGradient id="ph"><stop offset="0" stop-color="#fde68a"/><stop offset="1" stop-color="${color}"/></radialGradient><filter id="phg"><feGaussianBlur stdDeviation="4"/><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>
      <g transform="translate(${w/2*scale} ${h/2*scale}) scale(${scale})" filter="url(#phg)"><animateTransform attributeName="transform" type="translate" values="${w/2*scale} ${h/2*scale};${w/2*scale} ${h/2*scale-6};${w/2*scale} ${h/2*scale}" dur="${speed}s" repeatCount="indefinite"/>
      <path d="M0 -50 Q30 -20 25 20 Q45 0 40 -30 Q50 10 30 40 Q10 55 0 45 Q-10 55 -30 40 Q-50 10 -40 -30 Q-45 0 -25 20 Q-30 -20 0 -50" fill="url(#ph)"/>
      <circle cx="-10" cy="0" r="4" fill="#0f172a"/><circle cx="10" cy="0" r="4" fill="#0f172a"/>
      <circle cx="0" cy="-45" r="3" fill="#fef08a"><animate attributeName="cy" values="-45;-65;-45" dur="${speed*.6}s" repeatCount="indefinite"/><animate attributeName="opacity" values="1;0;1" dur="${speed*.6}s" repeatCount="indefinite"/></circle>
      <circle cx="15" cy="-40" r="2" fill="#fbbf24"><animate attributeName="cy" values="-40;-60;-40" dur="${speed*.5}s" repeatCount="indefinite"/></circle>
      </g><text x="${w/2}" y="${h-25}" text-anchor="middle" font-family="monospace" font-size="12" fill="${color}">rebirth · phoenix</text>`, '#1a0a00'),
  },
  {
    id: 'jellyfish', name: 'Nimbus', emoji: '🎐', vibe: 'floaty · glowing',
    svg: ({ color = '#a78bfa', speed = 3, scale = 1 } = {}) => petFrame(`
      <defs><radialGradient id="jf"><stop offset="0" stop-color="#e9d5ff"/><stop offset="1" stop-color="${color}"/></radialGradient><filter id="jfg"><feGaussianBlur stdDeviation="3"/><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>
      <g transform="translate(${w/2*scale} ${h/2*scale}) scale(${scale})" filter="url(#jfg)"><animateTransform attributeName="transform" type="translate" values="${w/2*scale} ${h/2*scale};${w/2*scale} ${h/2*scale-12};${w/2*scale} ${h/2*scale}" dur="${speed}s" repeatCount="indefinite"/>
      <path d="M-40 0 Q-40 -45 0 -45 Q40 -45 40 0 Q20 10 0 5 Q-20 10 -40 0" fill="url(#jf)" opacity=".85"/>
      <circle cx="-15" cy="-20" r="4" fill="#fff"/><circle cx="15" cy="-20" r="4" fill="#fff"/>
      ${[-30,-15,0,15,30].map((x,i)=>`<path d="M${x} 5 Q${x-5} 30 ${x+3} 55" stroke="${color}" stroke-width="3" fill="none" stroke-linecap="round" opacity=".7"><animate attributeName="d" values="M${x} 5 Q${x-5} 30 ${x+3} 55;M${x} 5 Q${x+5} 30 ${x-3} 55;M${x} 5 Q${x-5} 30 ${x+3} 55" dur="${speed*(.7+i*.15)}s" repeatCount="indefinite"/></path>`).join('')}
      </g><text x="${w/2}" y="${h-25}" text-anchor="middle" font-family="monospace" font-size="12" fill="${color}">drift · jellyfish</text>`, '#0c0a2e'),
  },
  {
    id: 'axolotl', name: 'Peppy', emoji: '🦎', vibe: 'pink · adorable',
    svg: ({ color = '#f9a8d4', speed = 2.5, scale = 1 } = {}) => petFrame(`
      <g transform="translate(${w/2*scale} ${h/2*scale}) scale(${scale})"><animateTransform attributeName="transform" type="translate" values="${w/2*scale} ${h/2*scale};${w/2*scale+4} ${h/2*scale-2};${w/2*scale} ${h/2*scale}" dur="${speed}s" repeatCount="indefinite"/>
      <ellipse cx="0" cy="5" rx="50" ry="28" fill="${color}"/>
      <circle cx="30" cy="-5" r="24" fill="${color}"/>
      ${[-1,0,1].map(s=>`<path d="M${45+s} -25 Q${60+s*8} -35 ${55+s*5} -20" stroke="#f472b6" stroke-width="5" fill="none" stroke-linecap="round"/>`).join('')}
      ${[-1,0,1].map(s=>`<path d="M${15+s} -25 Q${s*8} -38 ${5+s*5} -22" stroke="#f472b6" stroke-width="5" fill="none" stroke-linecap="round"/>`).join('')}
      <circle cx="24" cy="-8" r="3" fill="#0f172a"><animate attributeName="r" values="3;3;.5;3" dur="${speed*1.5}s" repeatCount="indefinite" keyTimes="0;.9;.93;1"/></circle>
      <circle cx="38" cy="-8" r="3" fill="#0f172a"><animate attributeName="r" values="3;3;.5;3" dur="${speed*1.5}s" repeatCount="indefinite" keyTimes="0;.9;.93;1"/></circle>
      <circle cx="26" cy="2" r="4" fill="#f472b6" opacity=".6"/><circle cx="40" cy="2" r="4" fill="#f472b6" opacity=".6"/>
      <path d="M28 4 Q31 7 34 4" stroke="#0f172a" stroke-width="1.5" fill="none"/>
      </g><text x="${w/2}" y="${h-25}" text-anchor="middle" font-family="monospace" font-size="12" fill="${color}">blub · axolotl</text>`, '#2a0a1a'),
  },
  {
    id: 'shibe', name: 'Doge', emoji: '🐕', vibe: 'much wow · shiba',
    svg: ({ color = '#f59e0b', speed = 1.5, scale = 1 } = {}) => petFrame(`
      <g transform="translate(${w/2*scale} ${h/2*scale}) scale(${scale})"><animateTransform attributeName="transform" type="translate" values="${w/2*scale} ${h/2*scale};${w/2*scale} ${h/2*scale-3};${w/2*scale} ${h/2*scale}" dur="${speed}s" repeatCount="indefinite"/>
      <polygon points="-42,-25 -32,-58 -18,-30" fill="${color}"/><polygon points="42,-25 32,-58 18,-30" fill="${color}"/>
      <polygon points="-38,-30 -30,-50 -22,-32" fill="#fde68a"/><polygon points="38,-30 30,-50 22,-32" fill="#fde68a"/>
      <ellipse cx="0" cy="0" rx="48" ry="42" fill="${color}"/>
      <ellipse cx="0" cy="15" rx="34" ry="26" fill="#fef3c7"/>
      <circle cx="-16" cy="-5" r="5" fill="#0f172a"/><circle cx="16" cy="-5" r="5" fill="#0f172a"/>
      <circle cx="-14" cy="-7" r="1.5" fill="#fff"/><circle cx="18" cy="-7" r="1.5" fill="#fff"/>
      <ellipse cx="0" cy="10" rx="5" ry="4" fill="#0f172a"/>
      <path d="M0 14 L0 20 M0 20 Q-8 24 -14 20 M0 20 Q8 24 14 20" stroke="#0f172a" stroke-width="1.5" fill="none"/>
      </g><text x="${w/2}" y="${h-25}" text-anchor="middle" font-family="monospace" font-size="12" fill="${color}">wow · such doge</text>`, '#2a1a00'),
  },
  {
    id: 'crystal', name: 'Prism', emoji: '💎', vibe: 'shimmer · gem',
    svg: ({ color = '#22d3ee', speed = 3, scale = 1 } = {}) => petFrame(`
      <defs><linearGradient id="cr" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#a5f3fc"><animate attributeName="stop-color" values="#a5f3fc;${color};#818cf8;#a5f3fc" dur="${speed}s" repeatCount="indefinite"/></stop><stop offset="1" stop-color="${color}"/></linearGradient><filter id="crg"><feGaussianBlur stdDeviation="2"/><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>
      <g transform="translate(${w/2*scale} ${h/2*scale}) scale(${scale})" filter="url(#crg)"><animateTransform attributeName="transform" type="rotate" values="-5;5;-5" dur="${speed}s" repeatCount="indefinite"/>
      <polygon points="0,-50 30,-15 20,45 -20,45 -30,-15" fill="url(#cr)"/>
      <polygon points="0,-50 30,-15 0,0" fill="#fff" opacity=".3"/>
      <polygon points="0,-50 -30,-15 0,0" fill="#000" opacity=".15"/>
      <circle cx="-10" cy="5" r="4" fill="#0f172a"/><circle cx="10" cy="5" r="4" fill="#0f172a"/>
      <path d="M-6 18 Q0 24 6 18" stroke="#0f172a" stroke-width="2" fill="none"/>
      <circle cx="25" cy="-30" r="2" fill="#fff"><animate attributeName="opacity" values="0;1;0" dur="${speed*.6}s" repeatCount="indefinite"/></circle>
      </g><text x="${w/2}" y="${h-25}" text-anchor="middle" font-family="monospace" font-size="12" fill="${color}">shine · crystal</text>`, '#041520'),
  },
  {
    id: 'hamster', name: 'Cheeks', emoji: '🐹', vibe: 'fluffy · snack',
    svg: ({ color = '#d97706', speed = 1.5, scale = 1 } = {}) => petFrame(`
      <g transform="translate(${w/2*scale} ${h/2*scale}) scale(${scale})"><animateTransform attributeName="transform" type="translate" values="${w/2*scale} ${h/2*scale};${w/2*scale} ${h/2*scale-2};${w/2*scale} ${h/2*scale}" dur="${speed}s" repeatCount="indefinite"/>
      <circle cx="-38" cy="-30" r="12" fill="${color}"/><circle cx="38" cy="-30" r="12" fill="${color}"/>
      <ellipse cx="0" cy="5" rx="52" ry="45" fill="${color}"/>
      <ellipse cx="0" cy="15" rx="38" ry="30" fill="#fde68a"/>
      <ellipse cx="-30" cy="12" rx="14" ry="12" fill="#fca5a5" opacity=".6"/><ellipse cx="30" cy="12" rx="14" ry="12" fill="#fca5a5" opacity=".6"/>
      <circle cx="-15" cy="-2" r="5" fill="#0f172a"/><circle cx="15" cy="-2" r="5" fill="#0f172a"/>
      <circle cx="-13" cy="-4" r="1.5" fill="#fff"/><circle cx="17" cy="-4" r="1.5" fill="#fff"/>
      <ellipse cx="0" cy="10" rx="4" ry="3" fill="#0f172a"/>
      <rect x="-6" y="14" width="4" height="6" fill="#fff"/><rect x="2" y="14" width="4" height="6" fill="#fff"/>
      </g><text x="${w/2}" y="${h-25}" text-anchor="middle" font-family="monospace" font-size="12" fill="${color}">nom nom · hamster</text>`, '#2a1a00'),
  },
  {
    id: 'ninja', name: 'Shadow', emoji: '🥷', vibe: 'stealth · swift',
    svg: ({ color = '#1e293b', speed = 2, scale = 1 } = {}) => petFrame(`
      <g transform="translate(${w/2*scale} ${h/2*scale}) scale(${scale})"><animateTransform attributeName="transform" type="translate" values="${w/2*scale} ${h/2*scale};${w/2*scale+3} ${h/2*scale-4};${w/2*scale} ${h/2*scale}" dur="${speed}s" repeatCount="indefinite"/>
      <circle cx="0" cy="0" r="42" fill="${color}"/>
      <rect x="-42" y="-12" width="84" height="20" fill="#0f172a"/>
      <path d="M40 -8 Q65 -5 70 -20" stroke="${color}" stroke-width="6" fill="none"><animate attributeName="d" values="M40 -8 Q65 -5 70 -20;M40 -8 Q65 0 70 -10;M40 -8 Q65 -5 70 -20" dur="${speed}s" repeatCount="indefinite"/></path>
      <ellipse cx="-14" cy="-2" rx="8" ry="5" fill="#fff"/><ellipse cx="14" cy="-2" rx="8" ry="5" fill="#fff"/>
      <circle cx="-14" cy="-2" r="3" fill="${color}"/><circle cx="14" cy="-2" r="3" fill="${color}"/>
      <circle cx="55" cy="-15" r="2" fill="#f87171"><animate attributeName="opacity" values="1;0;1" dur="${speed*.5}s" repeatCount="indefinite"/></circle>
      </g><text x="${w/2}" y="${h-25}" text-anchor="middle" font-family="monospace" font-size="12" fill="#94a3b8">silent · ninja</text>`, '#000000'),
  },
  {
    id: 'wizard', name: 'Merlin', emoji: '🧙', vibe: 'magic · wise',
    svg: ({ color = '#7c3aed', speed = 2.5, scale = 1 } = {}) => petFrame(`
      <defs><filter id="wzg"><feGaussianBlur stdDeviation="2"/><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>
      <g transform="translate(${w/2*scale} ${h/2*scale}) scale(${scale})"><animateTransform attributeName="transform" type="translate" values="${w/2*scale} ${h/2*scale};${w/2*scale} ${h/2*scale-3};${w/2*scale} ${h/2*scale}" dur="${speed}s" repeatCount="indefinite"/>
      <polygon points="0,-70 30,-15 -30,-15" fill="${color}"/>
      <circle cx="0" cy="-55" r="4" fill="#fbbf24"><animate attributeName="opacity" values="1;.3;1" dur="${speed*.5}s" repeatCount="indefinite"/></circle>
      <circle cx="0" cy="10" r="38" fill="#e2e8f0"/>
      <circle cx="-12" cy="5" r="4" fill="#0f172a"/><circle cx="12" cy="5" r="4" fill="#0f172a"/>
      <path d="M-25 20 Q0 30 25 20 L20 45 Q0 40 -20 45 Z" fill="#cbd5e1"/>
      <circle cx="35" cy="-20" r="2" fill="#fbbf24" filter="url(#wzg)"><animate attributeName="opacity" values="0;1;0" dur="${speed*.7}s" repeatCount="indefinite"/></circle>
      <circle cx="-35" cy="-10" r="2" fill="#22d3ee" filter="url(#wzg)"><animate attributeName="opacity" values="1;0;1" dur="${speed*.6}s" repeatCount="indefinite"/></circle>
      </g><text x="${w/2}" y="${h-25}" text-anchor="middle" font-family="monospace" font-size="12" fill="${color}">abracadabra</text>`, '#0f0a20'),
  },
  {
    id: 'raccoon', name: 'Bandit', emoji: '🦝', vibe: 'sneaky · trash',
    svg: ({ color = '#6b7280', speed = 2, scale = 1 } = {}) => petFrame(`
      <g transform="translate(${w/2*scale} ${h/2*scale}) scale(${scale})"><animateTransform attributeName="transform" type="translate" values="${w/2*scale} ${h/2*scale};${w/2*scale} ${h/2*scale-3};${w/2*scale} ${h/2*scale}" dur="${speed}s" repeatCount="indefinite"/>
      <polygon points="-40,-25 -30,-52 -18,-28" fill="${color}"/><polygon points="40,-25 30,-52 18,-28" fill="${color}"/>
      <ellipse cx="0" cy="0" rx="48" ry="42" fill="${color}"/>
      <ellipse cx="0" cy="12" rx="34" ry="26" fill="#e5e7eb"/>
      <path d="M-30 -8 Q-15 -15 -5 -5 L-5 5 Q-20 8 -30 0 Z" fill="#0f172a"/>
      <path d="M30 -8 Q15 -15 5 -5 L5 5 Q20 8 30 0 Z" fill="#0f172a"/>
      <circle cx="-15" cy="-2" r="4" fill="#fff"/><circle cx="15" cy="-2" r="4" fill="#fff"/>
      <circle cx="-15" cy="-2" r="2" fill="#0f172a"/><circle cx="15" cy="-2" r="2" fill="#0f172a"/>
      <ellipse cx="0" cy="12" rx="5" ry="4" fill="#0f172a"/>
      </g><text x="${w/2}" y="${h-25}" text-anchor="middle" font-family="monospace" font-size="12" fill="#94a3b8">sneaky · raccoon</text>`, '#0f172a'),
  },
  {
    id: 'sloth', name: 'Chill', emoji: '🦥', vibe: 'slow · relaxed',
    svg: ({ color = '#a8a29e', speed = 6, scale = 1 } = {}) => petFrame(`
      <g transform="translate(${w/2*scale} ${h/2*scale}) scale(${scale})"><animateTransform attributeName="transform" type="translate" values="${w/2*scale} ${h/2*scale};${w/2*scale} ${h/2*scale-2};${w/2*scale} ${h/2*scale}" dur="${speed}s" repeatCount="indefinite"/>
      <ellipse cx="0" cy="0" rx="45" ry="42" fill="${color}"/>
      <ellipse cx="0" cy="5" rx="34" ry="30" fill="#d6d3d1"/>
      <ellipse cx="-16" cy="-2" rx="10" ry="8" fill="#78716c"/><ellipse cx="16" cy="-2" rx="10" ry="8" fill="#78716c"/>
      <circle cx="-16" cy="-2" r="4" fill="#0f172a"><animate attributeName="r" values="4;4;1;4" dur="${speed}s" repeatCount="indefinite" keyTimes="0;.8;.85;1"/></circle>
      <circle cx="16" cy="-2" r="4" fill="#0f172a"><animate attributeName="r" values="4;4;1;4" dur="${speed}s" repeatCount="indefinite" keyTimes="0;.8;.85;1"/></circle>
      <ellipse cx="0" cy="12" rx="4" ry="3" fill="#57534e"/>
      <path d="M-8 20 Q0 24 8 20" stroke="#57534e" stroke-width="2" fill="none"/>
      </g><text x="${w/2}" y="${h-25}" text-anchor="middle" font-family="monospace" font-size="12" fill="${color}">zzz... · sloth</text>`, '#1c1917'),
  },
  {
    id: 'shark', name: 'Chomp', emoji: '🦈', vibe: 'apex · ocean',
    svg: ({ color = '#64748b', speed = 2.5, scale = 1 } = {}) => petFrame(`
      <g transform="translate(${w/2*scale} ${h/2*scale}) scale(${scale})"><animateTransform attributeName="transform" type="translate" values="${w/2*scale} ${h/2*scale};${w/2*scale+15} ${h/2*scale-5};${w/2*scale} ${h/2*scale}" dur="${speed}s" repeatCount="indefinite"/>
      <ellipse cx="0" cy="0" rx="60" ry="25" fill="${color}"/>
      <polygon points="-60,0 -85,-15 -85,15" fill="${color}"/>
      <polygon points="0,-25 15,-50 25,-25" fill="${color}"/>
      <path d="M30 5 L60 5 L55 12 L48 5 L42 12 L35 5" fill="#fff"/>
      <circle cx="40" cy="-8" r="4" fill="#0f172a"/><circle cx="38" cy="-10" r="1.5" fill="#fff"/>
      <ellipse cx="0" cy="8" rx="40" ry="12" fill="#cbd5e1" opacity=".4"/>
      </g><text x="${w/2}" y="${h-25}" text-anchor="middle" font-family="monospace" font-size="12" fill="#94a3b8">chomp · shark</text>`, '#0c1e2e'),
  },
  {
    id: 'crab', name: 'Pinch', emoji: '🦀', vibe: 'sideways · sassy',
    svg: ({ color = '#ef4444', speed = 1.5, scale = 1 } = {}) => petFrame(`
      <g transform="translate(${w/2*scale} ${h/2*scale}) scale(${scale})"><animateTransform attributeName="transform" type="translate" values="${w/2*scale} ${h/2*scale};${w/2*scale+6} ${h/2*scale};${w/2*scale} ${h/2*scale}" dur="${speed}s" repeatCount="indefinite"/>
      <ellipse cx="0" cy="0" rx="45" ry="30" fill="${color}"/>
      <circle cx="-14" cy="-8" r="6" fill="#fff"/><circle cx="14" cy="-8" r="6" fill="#fff"/>
      <circle cx="-14" cy="-8" r="3" fill="#0f172a"/><circle cx="14" cy="-8" r="3" fill="#0f172a"/>
      <path d="M-45 0 Q-70 -10 -65 -25 Q-55 -15 -50 -20" fill="${color}"><animateTransform attributeName="transform" type="rotate" values="0 -55 -10;-15 -55 -10;0 -55 -10" dur="${speed}s" repeatCount="indefinite"/></path>
      <path d="M45 0 Q70 -10 65 -25 Q55 -15 50 -20" fill="${color}"><animateTransform attributeName="transform" type="rotate" values="0 55 -10;15 55 -10;0 55 -10" dur="${speed}s" repeatCount="indefinite"/></path>
      ${[-30,-15,15,30].map(x=>`<line x1="${x}" y1="25" x2="${x*1.3}" y2="40" stroke="${color}" stroke-width="3"/>`).join('')}
      <path d="M-8 8 Q0 12 8 8" stroke="#0f172a" stroke-width="2" fill="none"/>
      </g><text x="${w/2}" y="${h-25}" text-anchor="middle" font-family="monospace" font-size="12" fill="${color}">pinch · crab</text>`, '#2a0a0a'),
  },
  {
    id: 'snail', name: 'Gary', emoji: '🐌', vibe: 'slow · shelled',
    svg: ({ color = '#84cc16', speed = 5, scale = 1 } = {}) => petFrame(`
      <g transform="translate(${w/2*scale} ${h/2*scale}) scale(${scale})"><animateTransform attributeName="transform" type="translate" values="${w/2*scale} ${h/2*scale};${w/2*scale+4} ${h/2*scale};${w/2*scale} ${h/2*scale}" dur="${speed}s" repeatCount="indefinite"/>
      <ellipse cx="-20" cy="20" rx="55" ry="12" fill="${color}"/>
      <circle cx="15" cy="0" r="35" fill="#f59e0b"/>
      <circle cx="15" cy="0" r="26" fill="none" stroke="#d97706" stroke-width="4"/>
      <circle cx="15" cy="0" r="16" fill="none" stroke="#d97706" stroke-width="3"/>
      <circle cx="15" cy="0" r="7" fill="none" stroke="#d97706" stroke-width="2"/>
      <ellipse cx="-45" cy="15" rx="18" ry="12" fill="${color}"/>
      <line x1="-52" y1="8" x2="-58" y2="-8" stroke="${color}" stroke-width="2"/><circle cx="-58" cy="-9" r="3" fill="${color}"/><circle cx="-58" cy="-9" r="1.5" fill="#0f172a"/>
      <line x1="-45" y1="8" x2="-48" y2="-8" stroke="${color}" stroke-width="2"/><circle cx="-48" cy="-9" r="3" fill="${color}"/><circle cx="-48" cy="-9" r="1.5" fill="#0f172a"/>
      </g><text x="${w/2}" y="${h-25}" text-anchor="middle" font-family="monospace" font-size="12" fill="${color}">slow · snail</text>`, '#0a1a00'),
  },
  {
    id: 'seal', name: 'Blubber', emoji: '🦭', vibe: 'round · derpy',
    svg: ({ color = '#94a3b8', speed = 2.5, scale = 1 } = {}) => petFrame(`
      <g transform="translate(${w/2*scale} ${h/2*scale}) scale(${scale})"><animateTransform attributeName="transform" type="translate" values="${w/2*scale} ${h/2*scale};${w/2*scale} ${h/2*scale-3};${w/2*scale} ${h/2*scale}" dur="${speed}s" repeatCount="indefinite"/>
      <ellipse cx="0" cy="10" rx="45" ry="40" fill="${color}"/>
      <ellipse cx="0" cy="18" rx="32" ry="28" fill="#e2e8f0"/>
      <circle cx="-14" cy="-2" r="6" fill="#0f172a"/><circle cx="14" cy="-2" r="6" fill="#0f172a"/>
      <circle cx="-12" cy="-4" r="2" fill="#fff"/><circle cx="16" cy="-4" r="2" fill="#fff"/>
      <ellipse cx="0" cy="12" rx="6" ry="4" fill="#475569"/>
      <line x1="-6" y1="14" x2="-20" y2="16" stroke="#475569" stroke-width="1"/><line x1="6" y1="14" x2="20" y2="16" stroke="#475569" stroke-width="1"/>
      <ellipse cx="-38" cy="30" rx="12" ry="8" fill="${color}"/><ellipse cx="38" cy="30" rx="12" ry="8" fill="${color}"/>
      </g><text x="${w/2}" y="${h-25}" text-anchor="middle" font-family="monospace" font-size="12" fill="${color}">ork ork · seal</text>`, '#0c1e2e'),
  },
  {
    id: 'hedgehog', name: 'Sonic', emoji: '🦔', vibe: 'spiky · cute',
    svg: ({ color = '#78716c', speed = 1.8, scale = 1 } = {}) => petFrame(`
      <g transform="translate(${w/2*scale} ${h/2*scale}) scale(${scale})"><animateTransform attributeName="transform" type="translate" values="${w/2*scale} ${h/2*scale};${w/2*scale} ${h/2*scale-3};${w/2*scale} ${h/2*scale}" dur="${speed}s" repeatCount="indefinite"/>
      ${Array.from({length:12}).map((_,i)=>{const a=(i/12)*Math.PI-Math.PI;const x=Math.cos(a)*45;const y=Math.sin(a)*35-5;return `<polygon points="${x},${y} ${x*1.4},${y*1.4-5} ${x+8},${y}" fill="${color}"/>`;}).join('')}
      <ellipse cx="0" cy="10" rx="42" ry="35" fill="#d6d3d1"/>
      <ellipse cx="0" cy="25" rx="30" ry="20" fill="#fde68a"/>
      <circle cx="-12" cy="18" r="4" fill="#0f172a"/><circle cx="12" cy="18" r="4" fill="#0f172a"/>
      <ellipse cx="0" cy="30" rx="5" ry="4" fill="#0f172a"/>
      </g><text x="${w/2}" y="${h-25}" text-anchor="middle" font-family="monospace" font-size="12" fill="${color}">spiky · hedgehog</text>`, '#1c1917'),
  },
  {
    id: 'peacock', name: 'Vain', emoji: '🦚', vibe: 'proud · colorful',
    svg: ({ color = '#0ea5e9', speed = 3, scale = 1 } = {}) => petFrame(`
      <g transform="translate(${w/2*scale} ${h/2*scale}) scale(${scale})"><animateTransform attributeName="transform" type="translate" values="${w/2*scale} ${h/2*scale};${w/2*scale} ${h/2*scale-3};${w/2*scale} ${h/2*scale}" dur="${speed}s" repeatCount="indefinite"/>
      ${Array.from({length:9}).map((_,i)=>{const a=(i-4)*22*Math.PI/180;const x=Math.sin(a)*55;const y=-Math.cos(a)*55-5;return `<line x1="0" y1="0" x2="${x}" y2="${y}" stroke="#16a34a" stroke-width="2"/><circle cx="${x}" cy="${y}" r="8" fill="${color}"/><circle cx="${x}" cy="${y}" r="4" fill="#a855f7"/><circle cx="${x}" cy="${y}" r="2" fill="#fbbf24"/>`;}).join('')}
      <ellipse cx="0" cy="15" rx="18" ry="25" fill="#0284c7"/>
      <circle cx="0" cy="-5" r="12" fill="#0284c7"/>
      <circle cx="-4" cy="-6" r="2.5" fill="#0f172a"/><circle cx="4" cy="-6" r="2.5" fill="#0f172a"/>
      <polygon points="-2,-2 2,-2 0,3" fill="#fbbf24"/>
      </g><text x="${w/2}" y="${h-25}" text-anchor="middle" font-family="monospace" font-size="12" fill="${color}">show off · peacock</text>`, '#041520'),
  },
  {
    id: 'llama', name: 'Kuzco', emoji: '🦙', vibe: 'fluffy · andes',
    svg: ({ color = '#fbbf24', speed = 2.5, scale = 1 } = {}) => petFrame(`
      <g transform="translate(${w/2*scale} ${h/2*scale}) scale(${scale})"><animateTransform attributeName="transform" type="translate" values="${w/2*scale} ${h/2*scale};${w/2*scale} ${h/2*scale-3};${w/2*scale} ${h/2*scale}" dur="${speed}s" repeatCount="indefinite"/>
      <ellipse cx="0" cy="25" rx="35" ry="30" fill="${color}"/>
      <rect x="-12" y="-30" width="24" height="45" rx="12" fill="${color}"/>
      <ellipse cx="0" cy="-35" rx="20" ry="18" fill="${color}"/>
      <polygon points="-15,-45 -10,-60 -5,-45" fill="${color}"/><polygon points="15,-45 10,-60 5,-45" fill="${color}"/>
      <circle cx="-7" cy="-38" r="3" fill="#0f172a"/><circle cx="7" cy="-38" r="3" fill="#0f172a"/>
      <ellipse cx="0" cy="-28" rx="4" ry="3" fill="#92400e"/>
      </g><text x="${w/2}" y="${h-25}" text-anchor="middle" font-family="monospace" font-size="12" fill="${color}">no touchy · llama</text>`, '#2a1a00'),
  },
  {
    id: 'ufo', name: 'Beam', emoji: '🛸', vibe: 'abduct · space',
    svg: ({ color = '#22d3ee', speed = 2, scale = 1 } = {}) => petFrame(`
      <defs><filter id="ufg"><feGaussianBlur stdDeviation="3"/><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>
      <g transform="translate(${w/2*scale} ${h/2*scale}) scale(${scale})" filter="url(#ufg)"><animateTransform attributeName="transform" type="translate" values="${w/2*scale} ${h/2*scale};${w/2*scale+10} ${h/2*scale-6};${w/2*scale} ${h/2*scale}" dur="${speed}s" repeatCount="indefinite"/>
      <polygon points="-50,40 -20,15 20,15 50,40" fill="${color}" opacity=".2"/>
      <ellipse cx="0" cy="0" rx="55" ry="18" fill="#64748b"/>
      <ellipse cx="0" cy="-12" rx="28" ry="20" fill="${color}" opacity=".7"/>
      ${[-30,-10,10,30].map((x,i)=>`<circle cx="${x}" cy="5" r="4" fill="#fbbf24"><animate attributeName="opacity" values="1;.2;1" dur="${speed*.5}s" begin="${i*.2}s" repeatCount="indefinite"/></circle>`).join('')}
      <circle cx="0" cy="-14" r="6" fill="#0f172a"/>
      </g><text x="${w/2}" y="${h-25}" text-anchor="middle" font-family="monospace" font-size="12" fill="${color}">beam · ufo</text>`, '#050510'),
  },
  {
    id: 'volcano', name: 'Rumble', emoji: '🌋', vibe: 'eruption · hot',
    svg: ({ color = '#78350f', speed = 2, scale = 1 } = {}) => petFrame(`
      <defs><filter id="vcg"><feGaussianBlur stdDeviation="2"/><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>
      <g transform="translate(${w/2*scale} ${h/2*scale}) scale(${scale})">
      <polygon points="-50,45 -18,-20 18,-20 50,45" fill="${color}"/>
      <polygon points="-18,-20 18,-20 12,-10 -12,-10" fill="#0f172a"/>
      <path d="M-12 -12 Q-15 -30 -10 -45 Q0 -60 8 -45 Q14 -30 10 -12" fill="#f97316" filter="url(#vcg)"><animate attributeName="d" values="M-12 -12 Q-15 -30 -10 -45 Q0 -60 8 -45 Q14 -30 10 -12;M-12 -12 Q-18 -35 -8 -50 Q2 -65 10 -48 Q16 -32 10 -12;M-12 -12 Q-15 -30 -10 -45 Q0 -60 8 -45 Q14 -30 10 -12" dur="${speed}s" repeatCount="indefinite"/></path>
      <circle cx="-20" cy="-40" r="3" fill="#fbbf24"><animate attributeName="cy" values="-40;-70;-40" dur="${speed*.6}s" repeatCount="indefinite"/></circle>
      <circle cx="20" cy="-35" r="2" fill="#f97316"><animate attributeName="cy" values="-35;-65;-35" dur="${speed*.5}s" repeatCount="indefinite"/></circle>
      <circle cx="-8" cy="20" r="4" fill="#0f172a"/><circle cx="8" cy="20" r="4" fill="#0f172a"/>
      </g><text x="${w/2}" y="${h-25}" text-anchor="middle" font-family="monospace" font-size="12" fill="#f97316">rumble · volcano</text>`, '#1a0a00'),
  },
  {
    id: 'ice', name: 'Frosty', emoji: '❄️', vibe: 'cold · sparkle',
    svg: ({ color = '#7dd3fc', speed = 4, scale = 1 } = {}) => petFrame(`
      <defs><filter id="icg"><feGaussianBlur stdDeviation="1.5"/><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>
      <g transform="translate(${w/2*scale} ${h/2*scale}) scale(${scale})" filter="url(#icg)"><animateTransform attributeName="transform" type="rotate" values="0;360" dur="${speed*5}s" repeatCount="indefinite"/>
      ${Array.from({length:6}).map((_,i)=>{const a=i*60;return `<g transform="rotate(${a})"><line x1="0" y1="0" x2="0" y2="-45" stroke="${color}" stroke-width="4"/><line x1="0" y1="-25" x2="-12" y2="-35" stroke="${color}" stroke-width="3"/><line x1="0" y1="-25" x2="12" y2="-35" stroke="${color}" stroke-width="3"/><line x1="0" y1="-38" x2="-8" y2="-45" stroke="${color}" stroke-width="2"/><line x1="0" y1="-38" x2="8" y2="-45" stroke="${color}" stroke-width="2"/></g>`;}).join('')}
      <circle cx="-8" cy="-3" r="3" fill="#0369a1"/><circle cx="8" cy="-3" r="3" fill="#0369a1"/>
      <path d="M-5 8 Q0 12 5 8" stroke="#0369a1" stroke-width="1.5" fill="none"/>
      </g><text x="${w/2}" y="${h-25}" text-anchor="middle" font-family="monospace" font-size="12" fill="${color}">brr · snowflake</text>`, '#041530'),
  },
];

// ===== 34 MORE PETS (v3 batch — more variety & effects) =====
const morePets: Pet[] = [
  {
    id: 'tiger', name: 'Stripes', emoji: '🐯', vibe: 'fierce · orange',
    svg: ({ color = '#f97316', speed = 2, scale = 1 } = {}) => petFrame(`
      <g transform="translate(${w/2*scale} ${h/2*scale}) scale(${scale})"><animateTransform attributeName="transform" type="translate" values="${w/2*scale} ${h/2*scale};${w/2*scale} ${h/2*scale-3};${w/2*scale} ${h/2*scale}" dur="${speed}s" repeatCount="indefinite"/>
      <circle cx="-38" cy="-30" r="12" fill="${color}"/><circle cx="38" cy="-30" r="12" fill="${color}"/>
      <ellipse cx="0" cy="0" rx="48" ry="44" fill="${color}"/>
      <ellipse cx="0" cy="12" rx="34" ry="28" fill="#fed7aa"/>
      <path d="M-30 -25 L-25 -10 M-15 -35 L-12 -18 M0 -38 L0 -20 M15 -35 L12 -18 M30 -25 L25 -10" stroke="#7c2d12" stroke-width="3"/>
      <circle cx="-15" cy="-2" r="5" fill="#0f172a"/><circle cx="15" cy="-2" r="5" fill="#0f172a"/>
      <path d="M-8 12 L0 18 L8 12" fill="#ec4899"/>
      <path d="M-6 18 Q0 24 6 18" stroke="#0f172a" stroke-width="2" fill="none"/>
      </g><text x="${w/2}" y="${h-25}" text-anchor="middle" font-family="monospace" font-size="12" fill="${color}">roar · tiger</text>`, '#1a0e00'),
  },
  {
    id: 'monkey', name: 'Cheeky', emoji: '🐵', vibe: 'playful · banana',
    svg: ({ color = '#92400e', speed = 1.5, scale = 1 } = {}) => petFrame(`
      <g transform="translate(${w/2*scale} ${h/2*scale}) scale(${scale})"><animateTransform attributeName="transform" type="translate" values="${w/2*scale} ${h/2*scale};${w/2*scale} ${h/2*scale-4};${w/2*scale} ${h/2*scale}" dur="${speed}s" repeatCount="indefinite"/>
      <circle cx="-42" cy="-8" r="14" fill="${color}"/><circle cx="42" cy="-8" r="14" fill="${color}"/>
      <circle cx="-42" cy="-8" r="8" fill="#d6bfa8"/><circle cx="42" cy="-8" r="8" fill="#d6bfa8"/>
      <circle cx="0" cy="0" r="42" fill="${color}"/>
      <ellipse cx="0" cy="10" rx="32" ry="28" fill="#e7d3bf"/>
      <circle cx="-13" cy="-5" r="5" fill="#0f172a"/><circle cx="13" cy="-5" r="5" fill="#0f172a"/>
      <ellipse cx="0" cy="8" rx="6" ry="4" fill="#7c2d12"/>
      <path d="M-10 16 Q0 24 10 16" stroke="#7c2d12" stroke-width="2" fill="none"/>
      </g><text x="${w/2}" y="${h-25}" text-anchor="middle" font-family="monospace" font-size="12" fill="${color}">ooh ooh · monkey</text>`, '#1c1006'),
  },
  {
    id: 'pig', name: 'Oink', emoji: '🐷', vibe: 'pink · happy',
    svg: ({ color = '#f9a8d4', speed = 1.8, scale = 1 } = {}) => petFrame(`
      <g transform="translate(${w/2*scale} ${h/2*scale}) scale(${scale})"><animateTransform attributeName="transform" type="translate" values="${w/2*scale} ${h/2*scale};${w/2*scale} ${h/2*scale-3};${w/2*scale} ${h/2*scale}" dur="${speed}s" repeatCount="indefinite"/>
      <polygon points="-35,-28 -25,-45 -15,-28" fill="${color}"/><polygon points="35,-28 25,-45 15,-28" fill="${color}"/>
      <circle cx="0" cy="0" r="45" fill="${color}"/>
      <circle cx="-15" cy="-5" r="5" fill="#0f172a"/><circle cx="15" cy="-5" r="5" fill="#0f172a"/>
      <ellipse cx="0" cy="12" rx="16" ry="12" fill="#f472b6"/>
      <circle cx="-5" cy="12" r="3" fill="#9d174d"/><circle cx="5" cy="12" r="3" fill="#9d174d"/>
      </g><text x="${w/2}" y="${h-25}" text-anchor="middle" font-family="monospace" font-size="12" fill="${color}">oink · piggy</text>`, '#2a0a1a'),
  },
  {
    id: 'cow', name: 'Moo', emoji: '🐮', vibe: 'farm · spotty',
    svg: ({ color = '#fff', speed = 2, scale = 1 } = {}) => petFrame(`
      <g transform="translate(${w/2*scale} ${h/2*scale}) scale(${scale})"><animateTransform attributeName="transform" type="translate" values="${w/2*scale} ${h/2*scale};${w/2*scale} ${h/2*scale-3};${w/2*scale} ${h/2*scale}" dur="${speed}s" repeatCount="indefinite"/>
      <ellipse cx="-40" cy="-5" rx="12" ry="16" fill="#f9a8d4"/><ellipse cx="40" cy="-5" rx="12" ry="16" fill="#f9a8d4"/>
      <path d="M-42 -25 Q-48 -35 -40 -38" stroke="#d6d3d1" stroke-width="5" fill="none"/><path d="M42 -25 Q48 -35 40 -38" stroke="#d6d3d1" stroke-width="5" fill="none"/>
      <ellipse cx="0" cy="0" rx="45" ry="42" fill="${color}"/>
      <ellipse cx="-22" cy="-18" rx="12" ry="10" fill="#0f172a"/><ellipse cx="18" cy="15" rx="14" ry="10" fill="#0f172a"/>
      <circle cx="-15" cy="-3" r="5" fill="#0f172a"/><circle cx="15" cy="-3" r="5" fill="#0f172a"/>
      <ellipse cx="0" cy="16" rx="20" ry="14" fill="#f9a8d4"/>
      <circle cx="-7" cy="16" r="3" fill="#9d174d"/><circle cx="7" cy="16" r="3" fill="#9d174d"/>
      </g><text x="${w/2}" y="${h-25}" text-anchor="middle" font-family="monospace" font-size="12" fill="#94a3b8">moo · cow</text>`, '#0f172a'),
  },
  {
    id: 'sheep', name: 'Woolly', emoji: '🐑', vibe: 'fluffy · cloud',
    svg: ({ color = '#f1f5f9', speed = 2.5, scale = 1 } = {}) => petFrame(`
      <g transform="translate(${w/2*scale} ${h/2*scale}) scale(${scale})"><animateTransform attributeName="transform" type="translate" values="${w/2*scale} ${h/2*scale};${w/2*scale} ${h/2*scale-3};${w/2*scale} ${h/2*scale}" dur="${speed}s" repeatCount="indefinite"/>
      ${Array.from({length:8}).map((_,i)=>{const a=(i/8)*Math.PI*2;return `<circle cx="${Math.cos(a)*38}" cy="${Math.sin(a)*32}" r="16" fill="${color}"/>`;}).join('')}
      <circle cx="0" cy="0" r="32" fill="${color}"/>
      <ellipse cx="0" cy="5" rx="24" ry="26" fill="#1e293b"/>
      <circle cx="-9" cy="0" r="4" fill="#fff"/><circle cx="9" cy="0" r="4" fill="#fff"/>
      <circle cx="-9" cy="0" r="2" fill="#0f172a"/><circle cx="9" cy="0" r="2" fill="#0f172a"/>
      </g><text x="${w/2}" y="${h-25}" text-anchor="middle" font-family="monospace" font-size="12" fill="#cbd5e1">baa · sheep</text>`, '#0f172a'),
  },
  {
    id: 'deer', name: 'Fawn', emoji: '🦌', vibe: 'graceful · forest',
    svg: ({ color = '#a16207', speed = 3, scale = 1 } = {}) => petFrame(`
      <g transform="translate(${w/2*scale} ${h/2*scale}) scale(${scale})"><animateTransform attributeName="transform" type="translate" values="${w/2*scale} ${h/2*scale};${w/2*scale} ${h/2*scale-3};${w/2*scale} ${h/2*scale}" dur="${speed}s" repeatCount="indefinite"/>
      <path d="M-25 -35 Q-35 -55 -45 -50 M-25 -35 Q-30 -58 -20 -55 M-25 -35 L-25 -20" stroke="#78350f" stroke-width="3" fill="none"/>
      <path d="M25 -35 Q35 -55 45 -50 M25 -35 Q30 -58 20 -55 M25 -35 L25 -20" stroke="#78350f" stroke-width="3" fill="none"/>
      <ellipse cx="0" cy="0" rx="38" ry="42" fill="${color}"/>
      <ellipse cx="0" cy="18" rx="24" ry="22" fill="#fde68a"/>
      <circle cx="-13" cy="-5" r="5" fill="#0f172a"/><circle cx="13" cy="-5" r="5" fill="#0f172a"/>
      <ellipse cx="0" cy="14" rx="6" ry="4" fill="#0f172a"/>
      <circle cx="-20" cy="10" r="3" fill="#fef3c7"/><circle cx="20" cy="10" r="3" fill="#fef3c7"/>
      </g><text x="${w/2}" y="${h-25}" text-anchor="middle" font-family="monospace" font-size="12" fill="${color}">graceful · deer</text>`, '#0a1a0a'),
  },
  {
    id: 'crocodile', name: 'Snappy', emoji: '🐊', vibe: 'snappy · swamp',
    svg: ({ color = '#16a34a', speed = 2.5, scale = 1 } = {}) => petFrame(`
      <g transform="translate(${w/2*scale} ${h/2*scale}) scale(${scale})"><animateTransform attributeName="transform" type="translate" values="${w/2*scale} ${h/2*scale};${w/2*scale+8} ${h/2*scale};${w/2*scale} ${h/2*scale}" dur="${speed}s" repeatCount="indefinite"/>
      <ellipse cx="0" cy="0" rx="58" ry="20" fill="${color}"/>
      <path d="M-58 0 Q-80 -5 -75 8" stroke="${color}" stroke-width="5" fill="none"/>
      <ellipse cx="35" cy="-2" rx="30" ry="14" fill="${color}"/>
      <path d="M10 -12 L65 -8 L60 -2 L10 -4Z" fill="#86efac"/>
      <path d="M12 -10 L20 -4 M28 -9 L34 -4 M44 -8 L50 -4" stroke="#fff" stroke-width="2"/>
      <circle cx="25" cy="-14" r="5" fill="#fde68a"/><circle cx="25" cy="-14" r="2" fill="#0f172a"/>
      <path d="M-30 -12 L-35 -20 M-15 -14 L-18 -22" stroke="${color}" stroke-width="4"/>
      </g><text x="${w/2}" y="${h-25}" text-anchor="middle" font-family="monospace" font-size="12" fill="${color}">snap · croc</text>`, '#052012'),
  },
  {
    id: 'hippo', name: 'Chonk', emoji: '🦛', vibe: 'chunky · river',
    svg: ({ color = '#a78bfa', speed = 3, scale = 1 } = {}) => petFrame(`
      <g transform="translate(${w/2*scale} ${h/2*scale}) scale(${scale})"><animateTransform attributeName="transform" type="translate" values="${w/2*scale} ${h/2*scale};${w/2*scale} ${h/2*scale-2};${w/2*scale} ${h/2*scale}" dur="${speed}s" repeatCount="indefinite"/>
      <ellipse cx="0" cy="0" rx="52" ry="44" fill="${color}"/>
      <circle cx="-30" cy="-32" r="8" fill="${color}"/><circle cx="30" cy="-32" r="8" fill="${color}"/>
      <circle cx="-30" cy="-32" r="4" fill="#0f172a"/><circle cx="30" cy="-32" r="4" fill="#0f172a"/>
      <ellipse cx="0" cy="20" rx="40" ry="24" fill="#c4b5fd"/>
      <circle cx="-18" cy="16" r="5" fill="#6d28d9"/><circle cx="18" cy="16" r="5" fill="#6d28d9"/>
      <circle cx="-16" cy="0" r="4" fill="#0f172a"/><circle cx="16" cy="0" r="4" fill="#0f172a"/>
      </g><text x="${w/2}" y="${h-25}" text-anchor="middle" font-family="monospace" font-size="12" fill="${color}">chonk · hippo</text>`, '#160f2e'),
  },
  {
    id: 'squirrel', name: 'Nutty', emoji: '🐿️', vibe: 'nutty · quick',
    svg: ({ color = '#b45309', speed = 1.2, scale = 1 } = {}) => petFrame(`
      <g transform="translate(${w/2*scale} ${h/2*scale}) scale(${scale})"><animateTransform attributeName="transform" type="translate" values="${w/2*scale} ${h/2*scale};${w/2*scale} ${h/2*scale-4};${w/2*scale} ${h/2*scale}" dur="${speed}s" repeatCount="indefinite"/>
      <path d="M40 30 Q75 10 60 -40 Q50 -10 35 15 Z" fill="${color}"><animateTransform attributeName="transform" type="rotate" values="0 40 30;12 40 30;0 40 30" dur="${speed*.8}s" repeatCount="indefinite"/></path>
      <ellipse cx="0" cy="10" rx="35" ry="32" fill="${color}"/>
      <polygon points="-25,-22 -18,-42 -10,-24" fill="${color}"/><polygon points="25,-22 18,-42 10,-24" fill="${color}"/>
      <ellipse cx="0" cy="16" rx="22" ry="18" fill="#fde68a"/>
      <circle cx="-11" cy="0" r="5" fill="#0f172a"/><circle cx="11" cy="0" r="5" fill="#0f172a"/>
      <ellipse cx="0" cy="10" rx="4" ry="3" fill="#0f172a"/>
      <ellipse cx="0" cy="20" rx="7" ry="5" fill="#a16207"/>
      </g><text x="${w/2}" y="${h-25}" text-anchor="middle" font-family="monospace" font-size="12" fill="${color}">nom · squirrel</text>`, '#1c1206'),
  },
  {
    id: 'bat', name: 'Echo', emoji: '🦇', vibe: 'night · sonar',
    svg: ({ color = '#6366f1', speed = 1, scale = 1 } = {}) => petFrame(`
      <g transform="translate(${w/2*scale} ${h/2*scale}) scale(${scale})"><animateTransform attributeName="transform" type="translate" values="${w/2*scale} ${h/2*scale};${w/2*scale} ${h/2*scale-6};${w/2*scale} ${h/2*scale}" dur="${speed*2}s" repeatCount="indefinite"/>
      <path d="M-15 0 Q-55 -25 -70 0 Q-55 -8 -50 5 Q-40 -5 -30 8 Z" fill="${color}"><animateTransform attributeName="transform" type="rotate" values="0 -15 0;-15 -15 0;0 -15 0" dur="${speed}s" repeatCount="indefinite"/></path>
      <path d="M15 0 Q55 -25 70 0 Q55 -8 50 5 Q40 -5 30 8 Z" fill="${color}"><animateTransform attributeName="transform" type="rotate" values="0 15 0;15 15 0;0 15 0" dur="${speed}s" repeatCount="indefinite"/></path>
      <circle cx="0" cy="0" r="20" fill="${color}"/>
      <polygon points="-14,-16 -8,-28 -4,-16" fill="${color}"/><polygon points="14,-16 8,-28 4,-16" fill="${color}"/>
      <circle cx="-7" cy="-3" r="3" fill="#fbbf24"/><circle cx="7" cy="-3" r="3" fill="#fbbf24"/>
      <path d="M-5 6 L0 10 L5 6" fill="#fff"/>
      </g><text x="${w/2}" y="${h-25}" text-anchor="middle" font-family="monospace" font-size="12" fill="${color}">screech · bat</text>`, '#0a0a1a'),
  },
  {
    id: 'ant', name: 'Marcher', emoji: '🐜', vibe: 'tiny · worker',
    svg: ({ color = '#7c2d12', speed = 1, scale = 1 } = {}) => petFrame(`
      <g transform="translate(${w/2*scale} ${h/2*scale}) scale(${scale})"><animateTransform attributeName="transform" type="translate" values="${w/2*scale} ${h/2*scale};${w/2*scale+5} ${h/2*scale};${w/2*scale} ${h/2*scale}" dur="${speed}s" repeatCount="indefinite"/>
      <circle cx="30" cy="0" r="16" fill="${color}"/>
      <circle cx="5" cy="0" r="12" fill="${color}"/>
      <ellipse cx="-25" cy="0" rx="20" ry="16" fill="${color}"/>
      <circle cx="35" cy="-4" r="3" fill="#fff"/><circle cx="35" cy="-4" r="1.5" fill="#0f172a"/>
      <line x1="40" y1="-10" x2="50" y2="-22" stroke="${color}" stroke-width="2"/><line x1="44" y1="-8" x2="55" y2="-16" stroke="${color}" stroke-width="2"/>
      ${[-30,-20,-10].map(x=>`<line x1="${x}" y1="12" x2="${x-6}" y2="26" stroke="${color}" stroke-width="2"/><line x1="${x}" y1="-12" x2="${x-6}" y2="-24" stroke="${color}" stroke-width="2"/>`).join('')}
      </g><text x="${w/2}" y="${h-25}" text-anchor="middle" font-family="monospace" font-size="12" fill="${color}">march · ant</text>`, '#1a0a00'),
  },
  {
    id: 'spider', name: 'Webby', emoji: '🕷️', vibe: 'creepy · web',
    svg: ({ color = '#1e293b', speed = 1.5, scale = 1 } = {}) => petFrame(`
      <g transform="translate(${w/2*scale} ${h/2*scale}) scale(${scale})"><animateTransform attributeName="transform" type="translate" values="${w/2*scale} ${h/2*scale-40};${w/2*scale} ${h/2*scale};${w/2*scale} ${h/2*scale-40}" dur="${speed*2}s" repeatCount="indefinite"/>
      <line x1="0" y1="-90" x2="0" y2="-25" stroke="#64748b" stroke-width="1"/>
      <ellipse cx="0" cy="10" rx="28" ry="32" fill="${color}"/>
      <circle cx="0" cy="-18" r="18" fill="${color}"/>
      <circle cx="-7" cy="-20" r="4" fill="#ef4444"/><circle cx="7" cy="-20" r="4" fill="#ef4444"/>
      <circle cx="-7" cy="-20" r="2" fill="#fff"/><circle cx="7" cy="-20" r="2" fill="#fff"/>
      ${[-1,1].map(s=>[0,1,2,3].map(i=>`<path d="M${s*15} ${i*10-5} Q${s*45} ${i*8-15} ${s*50} ${i*12+5}" stroke="${color}" stroke-width="3" fill="none"/>`).join('')).join('')}
      </g><text x="${w/2}" y="${h-25}" text-anchor="middle" font-family="monospace" font-size="12" fill="#94a3b8">creep · spider</text>`, '#0a0a0a'),
  },
  {
    id: 'snowman', name: 'Frosty', emoji: '⛄', vibe: 'winter · jolly',
    svg: ({ color = '#f1f5f9', speed = 3, scale = 1 } = {}) => petFrame(`
      <g transform="translate(${w/2*scale} ${h/2*scale}) scale(${scale})"><animateTransform attributeName="transform" type="translate" values="${w/2*scale} ${h/2*scale};${w/2*scale} ${h/2*scale-2};${w/2*scale} ${h/2*scale}" dur="${speed}s" repeatCount="indefinite"/>
      <circle cx="0" cy="30" r="30" fill="${color}"/>
      <circle cx="0" cy="-10" r="22" fill="${color}"/>
      <circle cx="-8" cy="-14" r="3" fill="#0f172a"/><circle cx="8" cy="-14" r="3" fill="#0f172a"/>
      <polygon points="0,-8 18,-5 0,-2" fill="#f97316"/>
      <path d="M-8 -2 Q0 4 8 -2" stroke="#0f172a" stroke-width="1.5" fill="none" stroke-dasharray="1 3"/>
      <circle cx="0" cy="20" r="3" fill="#0f172a"/><circle cx="0" cy="35" r="3" fill="#0f172a"/>
      <rect x="-25" y="-38" width="50" height="8" fill="#0f172a"/><rect x="-14" y="-55" width="28" height="18" fill="#0f172a"/>
      <line x1="-30" y1="20" x2="-55" y2="8" stroke="#78350f" stroke-width="3"/><line x1="30" y1="20" x2="55" y2="8" stroke="#78350f" stroke-width="3"/>
      </g><text x="${w/2}" y="${h-25}" text-anchor="middle" font-family="monospace" font-size="12" fill="#cbd5e1">brr · snowman</text>`, '#0c1e3a'),
  },
  {
    id: 'ninja-cat', name: 'Shinobi', emoji: '🐱‍👤', vibe: 'stealth · feline',
    svg: ({ color = '#0f172a', speed = 2, scale = 1 } = {}) => petFrame(`
      <g transform="translate(${w/2*scale} ${h/2*scale}) scale(${scale})"><animateTransform attributeName="transform" type="translate" values="${w/2*scale} ${h/2*scale};${w/2*scale+4} ${h/2*scale-3};${w/2*scale} ${h/2*scale}" dur="${speed}s" repeatCount="indefinite"/>
      <polygon points="-40,-28 -22,-58 -12,-30" fill="${color}"/><polygon points="40,-28 22,-58 12,-30" fill="${color}"/>
      <circle cx="0" cy="0" r="44" fill="${color}"/>
      <rect x="-44" y="-8" width="88" height="18" fill="#dc2626"/>
      <path d="M40 -5 Q60 0 62 -15" stroke="#dc2626" stroke-width="5" fill="none"><animate attributeName="d" values="M40 -5 Q60 0 62 -15;M40 -5 Q60 8 62 -5;M40 -5 Q60 0 62 -15" dur="${speed}s" repeatCount="indefinite"/></path>
      <ellipse cx="-13" cy="1" rx="7" ry="5" fill="#fde68a"/><ellipse cx="13" cy="1" rx="7" ry="5" fill="#fde68a"/>
      <ellipse cx="-13" cy="1" rx="2" ry="4" fill="#0f172a"/><ellipse cx="13" cy="1" rx="2" ry="4" fill="#0f172a"/>
      </g><text x="${w/2}" y="${h-25}" text-anchor="middle" font-family="monospace" font-size="12" fill="#94a3b8">silent · ninja cat</text>`, '#000000'),
  },
  {
    id: 'boba', name: 'Pearl', emoji: '🧋', vibe: 'sweet · drink',
    svg: ({ color = '#c084fc', speed = 3, scale = 1 } = {}) => petFrame(`
      <g transform="translate(${w/2*scale} ${h/2*scale}) scale(${scale})"><animateTransform attributeName="transform" type="translate" values="${w/2*scale} ${h/2*scale};${w/2*scale} ${h/2*scale-3};${w/2*scale} ${h/2*scale}" dur="${speed}s" repeatCount="indefinite"/>
      <path d="M-28 -35 L28 -35 L22 45 L-22 45 Z" fill="${color}" opacity=".85"/>
      <rect x="-30" y="-42" width="60" height="10" rx="3" fill="#e9d5ff"/>
      <rect x="8" y="-60" width="8" height="45" fill="#f472b6" transform="rotate(12 12 -40)"/>
      ${[-14,-2,10,-8,4,16].map((x,i)=>`<circle cx="${x}" cy="${28+(i%2)*8}" r="5" fill="#3b1d0e"/>`).join('')}
      <circle cx="-10" cy="0" r="4" fill="#0f172a"/><circle cx="10" cy="0" r="4" fill="#0f172a"/>
      <path d="M-6 8 Q0 12 6 8" stroke="#0f172a" stroke-width="1.5" fill="none"/>
      </g><text x="${w/2}" y="${h-25}" text-anchor="middle" font-family="monospace" font-size="12" fill="${color}">sip · boba</text>`, '#1a0a2e'),
  },
  {
    id: 'donut', name: 'Sprinkle', emoji: '🍩', vibe: 'sweet · glazed',
    svg: ({ color = '#f472b6', speed = 6, scale = 1 } = {}) => petFrame(`
      <g transform="translate(${w/2*scale} ${h/2*scale}) scale(${scale})"><animateTransform attributeName="transform" type="rotate" values="0;360" dur="${speed}s" repeatCount="indefinite"/>
      <circle cx="0" cy="0" r="45" fill="#a16207"/>
      <path d="M-45 0 A45 45 0 0 1 45 0 A45 45 0 0 1 -45 0" fill="${color}"/>
      <circle cx="0" cy="0" r="18" fill="#1a0a2e"/>
      ${['#22c55e','#3b82f6','#fbbf24','#ef4444','#a855f7'].map((c,i)=>{const a=i*72*Math.PI/180;return `<rect x="${Math.cos(a)*32-4}" y="${Math.sin(a)*32-1}" width="8" height="3" rx="1" fill="${c}" transform="rotate(${i*40} ${Math.cos(a)*32} ${Math.sin(a)*32})"/>`;}).join('')}
      </g><text x="${w/2}" y="${h-25}" text-anchor="middle" font-family="monospace" font-size="12" fill="${color}">yum · donut</text>`, '#1a0a1a'),
  },
  {
    id: 'rocket', name: 'Zoom', emoji: '🚀', vibe: 'launch · fast',
    svg: ({ color = '#ef4444', speed = 1.5, scale = 1 } = {}) => petFrame(`
      <g transform="translate(${w/2*scale} ${h/2*scale}) scale(${scale})"><animateTransform attributeName="transform" type="translate" values="${w/2*scale} ${h/2*scale};${w/2*scale} ${h/2*scale-8};${w/2*scale} ${h/2*scale}" dur="${speed}s" repeatCount="indefinite"/>
      <path d="M0 -50 Q22 -20 22 20 L-22 20 Q-22 -20 0 -50Z" fill="#e2e8f0"/>
      <path d="M0 -50 Q22 -20 22 20 L0 20 Z" fill="#cbd5e1"/>
      <circle cx="0" cy="-15" r="10" fill="#38bdf8"/><circle cx="0" cy="-15" r="5" fill="#0ea5e9"/>
      <path d="M-22 5 L-38 25 L-22 20Z" fill="${color}"/><path d="M22 5 L38 25 L22 20Z" fill="${color}"/>
      <path d="M-12 20 Q0 60 12 20Z" fill="#f97316"><animate attributeName="d" values="M-12 20 Q0 60 12 20Z;M-12 20 Q0 40 12 20Z;M-12 20 Q0 60 12 20Z" dur="${speed*.3}s" repeatCount="indefinite"/></path>
      <path d="M-7 20 Q0 45 7 20Z" fill="#fbbf24"/>
      </g><text x="${w/2}" y="${h-25}" text-anchor="middle" font-family="monospace" font-size="12" fill="${color}">launch · rocket</text>`, '#050510'),
  },
  {
    id: 'skull', name: 'Bones', emoji: '💀', vibe: 'spooky · edgy',
    svg: ({ color = '#f1f5f9', speed = 2.5, scale = 1 } = {}) => petFrame(`
      <g transform="translate(${w/2*scale} ${h/2*scale}) scale(${scale})"><animateTransform attributeName="transform" type="translate" values="${w/2*scale} ${h/2*scale};${w/2*scale} ${h/2*scale-3};${w/2*scale} ${h/2*scale}" dur="${speed}s" repeatCount="indefinite"/>
      <path d="M-38 -5 Q-38 -50 0 -50 Q38 -50 38 -5 Q38 20 20 25 L20 38 L-20 38 L-20 25 Q-38 20 -38 -5Z" fill="${color}"/>
      <ellipse cx="-16" cy="-8" rx="12" ry="14" fill="#0f172a"><animate attributeName="ry" values="14;14;3;14" dur="${speed*1.6}s" repeatCount="indefinite" keyTimes="0;.85;.9;1"/></ellipse>
      <ellipse cx="16" cy="-8" rx="12" ry="14" fill="#0f172a"><animate attributeName="ry" values="14;14;3;14" dur="${speed*1.6}s" repeatCount="indefinite" keyTimes="0;.85;.9;1"/></ellipse>
      <polygon points="0,5 -6,18 6,18" fill="#0f172a"/>
      <rect x="-16" y="30" width="4" height="8" fill="${color}"/><rect x="-6" y="30" width="4" height="8" fill="${color}"/><rect x="4" y="30" width="4" height="8" fill="${color}"/><rect x="12" y="30" width="4" height="8" fill="${color}"/>
      </g><text x="${w/2}" y="${h-25}" text-anchor="middle" font-family="monospace" font-size="12" fill="#94a3b8">spooky · skull</text>`, '#0a0a0a'),
  },
  {
    id: 'heart', name: 'Lovely', emoji: '❤️', vibe: 'love · beat',
    svg: ({ color = '#ef4444', speed = 1, scale = 1 } = {}) => petFrame(`
      <g transform="translate(${w/2*scale} ${h/2*scale}) scale(${scale})"><animateTransform attributeName="transform" type="scale" values="${scale};${scale*1.12};${scale}" dur="${speed}s" repeatCount="indefinite" additive="sum"/>
      <path d="M0 40 C-45 5 -45 -30 -20 -35 Q0 -38 0 -15 Q0 -38 20 -35 C45 -30 45 5 0 40Z" fill="${color}"/>
      <circle cx="-14" cy="-8" r="4" fill="#0f172a"/><circle cx="14" cy="-8" r="4" fill="#0f172a"/>
      <circle cx="-13" cy="-9" r="1.5" fill="#fff"/><circle cx="15" cy="-9" r="1.5" fill="#fff"/>
      <path d="M-8 2 Q0 8 8 2" stroke="#0f172a" stroke-width="2" fill="none"/>
      <circle cx="-22" cy="2" r="4" fill="#fca5a5" opacity=".7"/><circle cx="22" cy="2" r="4" fill="#fca5a5" opacity=".7"/>
      </g><text x="${w/2}" y="${h-25}" text-anchor="middle" font-family="monospace" font-size="12" fill="${color}">beat · heart</text>`, '#2a0a0a'),
  },
  {
    id: 'clover', name: 'Lucky', emoji: '🍀', vibe: 'lucky · green',
    svg: ({ color = '#22c55e', speed = 4, scale = 1 } = {}) => petFrame(`
      <g transform="translate(${w/2*scale} ${h/2*scale}) scale(${scale})"><animateTransform attributeName="transform" type="rotate" values="0;8;-8;0" dur="${speed}s" repeatCount="indefinite"/>
      ${[0,90,180,270].map(a=>`<path d="M0 0 Q-18 -18 0 -36 Q18 -18 0 0Z" fill="${color}" transform="rotate(${a})"/>`).join('')}
      <line x1="0" y1="0" x2="8" y2="40" stroke="#16a34a" stroke-width="3"/>
      <circle cx="-8" cy="-14" r="3" fill="#0f172a"/><circle cx="8" cy="-14" r="3" fill="#0f172a"/>
      <path d="M-5 -6 Q0 -2 5 -6" stroke="#0f172a" stroke-width="1.5" fill="none"/>
      </g><text x="${w/2}" y="${h-25}" text-anchor="middle" font-family="monospace" font-size="12" fill="${color}">lucky · clover</text>`, '#031a0a'),
  },
  {
    id: 'diamond', name: 'Shiny', emoji: '💠', vibe: 'gem · sparkle',
    svg: ({ color = '#38bdf8', speed = 2, scale = 1 } = {}) => petFrame(`
      <defs><linearGradient id="dm" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#e0f2fe"/><stop offset="1" stop-color="${color}"/></linearGradient></defs>
      <g transform="translate(${w/2*scale} ${h/2*scale}) scale(${scale})"><animateTransform attributeName="transform" type="translate" values="${w/2*scale} ${h/2*scale};${w/2*scale} ${h/2*scale-4};${w/2*scale} ${h/2*scale}" dur="${speed}s" repeatCount="indefinite"/>
      <polygon points="0,-40 35,-10 0,45 -35,-10" fill="url(#dm)"/>
      <polygon points="0,-40 35,-10 0,-10" fill="#fff" opacity=".4"/>
      <polygon points="0,-40 -35,-10 0,-10" fill="#0369a1" opacity=".2"/>
      <line x1="-35" y1="-10" x2="35" y2="-10" stroke="#fff" stroke-width="1" opacity=".5"/>
      <circle cx="15" cy="-18" r="2" fill="#fff"><animate attributeName="opacity" values="0;1;0" dur="${speed*.7}s" repeatCount="indefinite"/></circle>
      <circle cx="-10" cy="-25" r="4" fill="#0f172a"/><circle cx="10" cy="-25" r="4" fill="#0f172a"/>
      </g><text x="${w/2}" y="${h-25}" text-anchor="middle" font-family="monospace" font-size="12" fill="${color}">shine · diamond</text>`, '#041520'),
  },
  {
    id: 'ramen', name: 'Slurp', emoji: '🍜', vibe: 'warm · noodle',
    svg: ({ color = '#f59e0b', speed = 2.5, scale = 1 } = {}) => petFrame(`
      <g transform="translate(${w/2*scale} ${h/2*scale}) scale(${scale})"><animateTransform attributeName="transform" type="translate" values="${w/2*scale} ${h/2*scale};${w/2*scale} ${h/2*scale-2};${w/2*scale} ${h/2*scale}" dur="${speed}s" repeatCount="indefinite"/>
      <path d="M-45 0 Q-45 40 0 45 Q45 40 45 0 Z" fill="#dc2626"/>
      <ellipse cx="0" cy="0" rx="45" ry="12" fill="#fbbf24"/>
      <ellipse cx="0" cy="0" rx="38" ry="9" fill="#fde68a"/>
      <circle cx="-12" cy="-2" r="8" fill="#fff"/><circle cx="-12" cy="-2" r="4" fill="#f59e0b"/>
      <path d="M15 -2 Q20 -25 30 -22" stroke="#a16207" stroke-width="2" fill="none"/><path d="M8 -3 Q10 -28 20 -30" stroke="#a16207" stroke-width="2" fill="none"/>
      <rect x="20" y="-40" width="3" height="45" fill="#78350f" transform="rotate(15 21 -18)"/><rect x="28" y="-40" width="3" height="45" fill="#78350f" transform="rotate(20 29 -18)"/>
      <path d="M-8 3 Q-12 8 -18 6" stroke="#0f172a" stroke-width="1.5" fill="none"/>
      <circle cx="-20" cy="-4" r="2.5" fill="#0f172a"/><circle cx="6" cy="-4" r="2.5" fill="#0f172a"/>
      </g><text x="${w/2}" y="${h-25}" text-anchor="middle" font-family="monospace" font-size="12" fill="${color}">slurp · ramen</text>`, '#1a0e00'),
  },
  {
    id: 'cactus-pot', name: 'Spike', emoji: '🪴', vibe: 'desk · plant',
    svg: ({ color = '#16a34a', speed = 4, scale = 1 } = {}) => petFrame(`
      <g transform="translate(${w/2*scale} ${h/2*scale}) scale(${scale})"><animateTransform attributeName="transform" type="rotate" values="-2;2;-2" dur="${speed}s" repeatCount="indefinite"/>
      <path d="M-25 50 L-18 15 L18 15 L25 50Z" fill="#ea580c"/>
      <rect x="-28" y="8" width="56" height="10" rx="2" fill="#f97316"/>
      <rect x="-12" y="-40" width="24" height="55" rx="12" fill="${color}"/>
      <rect x="-32" y="-15" width="16" height="30" rx="8" fill="${color}"/>
      <rect x="16" y="-25" width="16" height="30" rx="8" fill="${color}"/>
      <circle cx="-8" cy="-25" r="4" fill="#0f172a"/><circle cx="8" cy="-25" r="4" fill="#0f172a"/>
      <path d="M-5 -16 Q0 -12 5 -16" stroke="#0f172a" stroke-width="1.5" fill="none"/>
      <circle cx="0" cy="-42" r="5" fill="#f472b6"/>
      </g><text x="${w/2}" y="${h-25}" text-anchor="middle" font-family="monospace" font-size="12" fill="${color}">grow · plant</text>`, '#031a0a'),
  },
  {
    id: 'ladybird2', name: 'Spot', emoji: '🐞', vibe: 'red · fly',
    svg: ({ color = '#dc2626', speed = 3, scale = 1 } = {}) => petFrame(`
      <g transform="translate(${w/2*scale} ${h/2*scale}) scale(${scale})"><animateTransform attributeName="transform" type="translate" values="${w/2*scale} ${h/2*scale};${w/2*scale} ${h/2*scale-3};${w/2*scale} ${h/2*scale}" dur="${speed}s" repeatCount="indefinite"/>
      <ellipse cx="0" cy="5" rx="40" ry="42" fill="${color}"/>
      <path d="M0 -37 L0 45" stroke="#0f172a" stroke-width="3"/>
      <circle cx="-16" cy="-10" r="6" fill="#0f172a"/><circle cx="16" cy="-5" r="6" fill="#0f172a"/><circle cx="-14" cy="18" r="6" fill="#0f172a"/><circle cx="15" cy="22" r="6" fill="#0f172a"/>
      <circle cx="0" cy="-38" r="16" fill="#0f172a"/>
      <circle cx="-6" cy="-40" r="3" fill="#fff"/><circle cx="6" cy="-40" r="3" fill="#fff"/>
      <line x1="-6" y1="-52" x2="-12" y2="-60" stroke="#0f172a" stroke-width="2"/><line x1="6" y1="-52" x2="12" y2="-60" stroke="#0f172a" stroke-width="2"/>
      </g><text x="${w/2}" y="${h-25}" text-anchor="middle" font-family="monospace" font-size="12" fill="${color}">fly · ladybird</text>`, '#1a0505'),
  },
  {
    id: 'comet', name: 'Streak', emoji: '☄️', vibe: 'cosmic · fast',
    svg: ({ color = '#38bdf8', speed = 2, scale = 1 } = {}) => petFrame(`
      <defs><linearGradient id="cmt" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${color}" stop-opacity="0"/><stop offset="1" stop-color="${color}"/></linearGradient></defs>
      <g transform="translate(${w/2*scale} ${h/2*scale}) scale(${scale})"><animateTransform attributeName="transform" type="translate" values="${w/2*scale} ${h/2*scale};${w/2*scale+6} ${h/2*scale-6};${w/2*scale} ${h/2*scale}" dur="${speed}s" repeatCount="indefinite"/>
      <path d="M20 -20 L-50 50 L-30 30 L-45 40 L-25 20Z" fill="url(#cmt)"/>
      <circle cx="20" cy="-20" r="22" fill="#fbbf24"/>
      <circle cx="20" cy="-20" r="14" fill="#f97316"/>
      <circle cx="14" cy="-24" r="4" fill="#0f172a"/><circle cx="26" cy="-24" r="4" fill="#0f172a"/>
      <path d="M14 -14 Q20 -10 26 -14" stroke="#0f172a" stroke-width="2" fill="none"/>
      </g><text x="${w/2}" y="${h-25}" text-anchor="middle" font-family="monospace" font-size="12" fill="${color}">whoosh · comet</text>`, '#050510'),
  },
  {
    id: 'mushroom2', name: 'Toadie', emoji: '🍄', vibe: 'red · dotty',
    svg: ({ color = '#dc2626', speed = 2.5, scale = 1 } = {}) => petFrame(`
      <g transform="translate(${w/2*scale} ${h/2*scale}) scale(${scale})"><animateTransform attributeName="transform" type="translate" values="${w/2*scale} ${h/2*scale};${w/2*scale} ${h/2*scale-3};${w/2*scale} ${h/2*scale}" dur="${speed}s" repeatCount="indefinite"/>
      <path d="M-45 5 Q-45 -40 0 -40 Q45 -40 45 5 Z" fill="${color}"/>
      <circle cx="-22" cy="-15" r="7" fill="#fff"/><circle cx="12" cy="-25" r="6" fill="#fff"/><circle cx="24" cy="-8" r="5" fill="#fff"/><circle cx="-5" cy="-8" r="5" fill="#fff"/>
      <path d="M-25 5 Q-25 45 0 45 Q25 45 25 5Z" fill="#fef3c7"/>
      <circle cx="-10" cy="18" r="4" fill="#0f172a"/><circle cx="10" cy="18" r="4" fill="#0f172a"/>
      <ellipse cx="-16" cy="26" rx="5" ry="3" fill="#fca5a5"/><ellipse cx="16" cy="26" rx="5" ry="3" fill="#fca5a5"/>
      <path d="M-6 28 Q0 33 6 28" stroke="#0f172a" stroke-width="1.5" fill="none"/>
      </g><text x="${w/2}" y="${h-25}" text-anchor="middle" font-family="monospace" font-size="12" fill="${color}">1-up · mushroom</text>`, '#1a0505'),
  },
  {
    id: 'yeti', name: 'Frostbite', emoji: '🦣', vibe: 'snow · big',
    svg: ({ color = '#bae6fd', speed = 3, scale = 1 } = {}) => petFrame(`
      <g transform="translate(${w/2*scale} ${h/2*scale}) scale(${scale})"><animateTransform attributeName="transform" type="translate" values="${w/2*scale} ${h/2*scale};${w/2*scale} ${h/2*scale-3};${w/2*scale} ${h/2*scale}" dur="${speed}s" repeatCount="indefinite"/>
      <ellipse cx="0" cy="5" rx="50" ry="46" fill="${color}"/>
      <ellipse cx="0" cy="14" rx="34" ry="30" fill="#e0f2fe"/>
      <circle cx="-16" cy="-8" r="6" fill="#0369a1"/><circle cx="16" cy="-8" r="6" fill="#0369a1"/>
      <circle cx="-16" cy="-8" r="3" fill="#0f172a"/><circle cx="16" cy="-8" r="3" fill="#0f172a"/>
      <path d="M-16 12 Q0 22 16 12" stroke="#0369a1" stroke-width="2" fill="none"/>
      <path d="M-12 16 L-12 24 M12 16 L12 24" stroke="#fff" stroke-width="4"/>
      <ellipse cx="-42" cy="0" rx="12" ry="18" fill="${color}"/><ellipse cx="42" cy="0" rx="12" ry="18" fill="${color}"/>
      </g><text x="${w/2}" y="${h-25}" text-anchor="middle" font-family="monospace" font-size="12" fill="#7dd3fc">grr · yeti</text>`, '#0c1e3a'),
  },
  {
    id: 'ghost-pac', name: 'Blinky', emoji: '👾', vibe: 'arcade · retro',
    svg: ({ color = '#ef4444', speed = 1.5, scale = 1 } = {}) => petFrame(`
      <g transform="translate(${w/2*scale} ${h/2*scale}) scale(${scale})"><animateTransform attributeName="transform" type="translate" values="${w/2*scale} ${h/2*scale};${w/2*scale+6} ${h/2*scale};${w/2*scale-6} ${h/2*scale};${w/2*scale} ${h/2*scale}" dur="${speed*2}s" repeatCount="indefinite"/>
      <path d="M-35 40 L-35 -5 Q-35 -45 0 -45 Q35 -45 35 -5 L35 40 L26 30 L18 40 L9 30 L0 40 L-9 30 L-18 40 L-26 30Z" fill="${color}"/>
      <circle cx="-14" cy="-8" r="10" fill="#fff"/><circle cx="14" cy="-8" r="10" fill="#fff"/>
      <circle cx="-10" cy="-8" r="5" fill="#1e3a8a"><animate attributeName="cx" values="-10;-18;-10;-6;-10" dur="${speed*2}s" repeatCount="indefinite"/></circle>
      <circle cx="18" cy="-8" r="5" fill="#1e3a8a"><animate attributeName="cx" values="18;10;18;22;18" dur="${speed*2}s" repeatCount="indefinite"/></circle>
      </g><text x="${w/2}" y="${h-25}" text-anchor="middle" font-family="monospace" font-size="12" fill="${color}">wokka · ghost</text>`, '#000010'),
  },
  {
    id: 'jellybean', name: 'Beany', emoji: '🫘', vibe: 'squishy · candy',
    svg: ({ color = '#a855f7', speed = 1.5, scale = 1 } = {}) => petFrame(`
      <g transform="translate(${w/2*scale} ${h/2*scale}) scale(${scale})"><animateTransform attributeName="transform" type="scale" values="1 1;1.08 .92;1 1" dur="${speed}s" repeatCount="indefinite" additive="sum"/>
      <ellipse cx="0" cy="0" rx="35" ry="45" fill="${color}"/>
      <ellipse cx="-12" cy="-18" rx="10" ry="16" fill="#fff" opacity=".4"/>
      <circle cx="-12" cy="0" r="5" fill="#0f172a"/><circle cx="12" cy="0" r="5" fill="#0f172a"/>
      <circle cx="-10" cy="-2" r="1.5" fill="#fff"/><circle cx="14" cy="-2" r="1.5" fill="#fff"/>
      <path d="M-8 12 Q0 20 8 12" stroke="#0f172a" stroke-width="2" fill="none"/>
      <circle cx="-20" cy="8" r="4" fill="#fff" opacity=".3"/><circle cx="20" cy="8" r="4" fill="#fff" opacity=".3"/>
      </g><text x="${w/2}" y="${h-25}" text-anchor="middle" font-family="monospace" font-size="12" fill="${color}">boing · jellybean</text>`, '#1a0a2e'),
  },
  {
    id: 'firefly', name: 'Glow', emoji: '✨', vibe: 'night · glow',
    svg: ({ color = '#fde047', speed = 2, scale = 1 } = {}) => petFrame(`
      <defs><radialGradient id="ff"><stop offset="0" stop-color="#fef9c3"/><stop offset="1" stop-color="${color}"/></radialGradient><filter id="ffg"><feGaussianBlur stdDeviation="4"/><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>
      <g transform="translate(${w/2*scale} ${h/2*scale}) scale(${scale})" filter="url(#ffg)"><animateTransform attributeName="transform" type="translate" values="${w/2*scale} ${h/2*scale};${w/2*scale+10} ${h/2*scale-10};${w/2*scale-8} ${h/2*scale+6};${w/2*scale} ${h/2*scale}" dur="${speed*2}s" repeatCount="indefinite"/>
      <ellipse cx="0" cy="10" rx="14" ry="20" fill="#4b5563"/>
      <ellipse cx="0" cy="22" rx="12" ry="14" fill="url(#ff)"><animate attributeName="opacity" values="1;.3;1" dur="${speed}s" repeatCount="indefinite"/></ellipse>
      <ellipse cx="-16" cy="-2" rx="14" ry="8" fill="#fff" opacity=".3"/><ellipse cx="16" cy="-2" rx="14" ry="8" fill="#fff" opacity=".3"/>
      <circle cx="-5" cy="-8" r="2.5" fill="#0f172a"/><circle cx="5" cy="-8" r="2.5" fill="#0f172a"/>
      ${[[-30,-20],[30,-15],[-25,20],[28,25]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="2" fill="${color}"><animate attributeName="opacity" values="0;1;0" dur="${speed*.8}s" repeatCount="indefinite"/></circle>`).join('')}
      </g><text x="${w/2}" y="${h-25}" text-anchor="middle" font-family="monospace" font-size="12" fill="${color}">glow · firefly</text>`, '#0a0a1a'),
  },
  {
    id: 'toucan', name: 'Beaky', emoji: '🦜', vibe: 'tropical · bright',
    svg: ({ color = '#0f172a', speed = 2, scale = 1 } = {}) => petFrame(`
      <g transform="translate(${w/2*scale} ${h/2*scale}) scale(${scale})"><animateTransform attributeName="transform" type="translate" values="${w/2*scale} ${h/2*scale};${w/2*scale} ${h/2*scale-4};${w/2*scale} ${h/2*scale}" dur="${speed}s" repeatCount="indefinite"/>
      <ellipse cx="-8" cy="8" rx="38" ry="42" fill="${color}"/>
      <path d="M20 -20 Q65 -15 60 5 Q55 15 20 8Z" fill="#f59e0b"/>
      <path d="M20 -18 Q55 -14 52 -2" stroke="#dc2626" stroke-width="4" fill="none"/>
      <circle cx="0" cy="-12" r="10" fill="#fff"/><circle cx="2" cy="-12" r="5" fill="#0f172a"/>
      <ellipse cx="-15" cy="20" rx="20" ry="16" fill="#fbbf24"/>
      </g><text x="${w/2}" y="${h-25}" text-anchor="middle" font-family="monospace" font-size="12" fill="#f59e0b">squawk · toucan</text>`, '#0a1a0a'),
  },
  {
    id: 'robot2', name: 'Bolt', emoji: '🤖', vibe: 'mech · retro',
    svg: ({ color = '#f59e0b', speed = 2, scale = 1 } = {}) => petFrame(`
      <g transform="translate(${w/2*scale} ${h/2*scale}) scale(${scale})"><animateTransform attributeName="transform" type="translate" values="${w/2*scale} ${h/2*scale};${w/2*scale} ${h/2*scale-3};${w/2*scale} ${h/2*scale}" dur="${speed}s" repeatCount="indefinite"/>
      <line x1="0" y1="-50" x2="0" y2="-38" stroke="${color}" stroke-width="3"/>
      <circle cx="0" cy="-54" r="6" fill="#22c55e"><animate attributeName="fill" values="#22c55e;#ef4444;#22c55e" dur="${speed}s" repeatCount="indefinite"/></circle>
      <rect x="-40" y="-38" width="80" height="60" rx="14" fill="${color}"/>
      <rect x="-30" y="-28" width="60" height="34" rx="8" fill="#1e293b"/>
      <rect x="-22" y="-20" width="18" height="18" rx="3" fill="#22d3ee"><animate attributeName="opacity" values="1;.4;1" dur="${speed*.8}s" repeatCount="indefinite"/></rect>
      <rect x="6" y="-20" width="18" height="18" rx="3" fill="#22d3ee"><animate attributeName="opacity" values="1;.4;1" dur="${speed*.8}s" repeatCount="indefinite"/></rect>
      <rect x="-14" y="10" width="28" height="5" rx="2" fill="#22d3ee"/>
      <rect x="-46" y="-20" width="8" height="30" rx="3" fill="#d97706"/><rect x="38" y="-20" width="8" height="30" rx="3" fill="#d97706"/>
      </g><text x="${w/2}" y="${h-25}" text-anchor="middle" font-family="monospace" font-size="12" fill="${color}">beep · bolt</text>`, '#0a0a0a'),
  },
  {
    id: 'jelly-cube', name: 'Cubey', emoji: '🟩', vibe: 'blocky · bounce',
    svg: ({ color = '#22c55e', speed = 1.5, scale = 1 } = {}) => petFrame(`
      <g transform="translate(${w/2*scale} ${h/2*scale}) scale(${scale})"><animateTransform attributeName="transform" type="scale" values="1 1;1.06 .9;1 1" dur="${speed}s" repeatCount="indefinite" additive="sum"/>
      <rect x="-38" y="-38" width="76" height="76" rx="14" fill="${color}"/>
      <rect x="-30" y="-30" width="24" height="24" rx="6" fill="#fff" opacity=".25"/>
      <circle cx="-13" cy="0" r="6" fill="#0f172a"/><circle cx="13" cy="0" r="6" fill="#0f172a"/>
      <circle cx="-11" cy="-2" r="2" fill="#fff"/><circle cx="15" cy="-2" r="2" fill="#fff"/>
      <path d="M-10 15 Q0 24 10 15" stroke="#0f172a" stroke-width="2.5" fill="none"/>
      <ellipse cx="-22" cy="12" rx="5" ry="3" fill="#fff" opacity=".3"/><ellipse cx="22" cy="12" rx="5" ry="3" fill="#fff" opacity=".3"/>
      </g><text x="${w/2}" y="${h-25}" text-anchor="middle" font-family="monospace" font-size="12" fill="${color}">bounce · cube</text>`, '#031a0a'),
  },
];

export const PETS: Pet[] = [...origPets, ...extraPets, ...premiumPets, ...morePets];

export function renderPet(pet: Pet, opts?: { color?: string; speed?: number; scale?: number }) {
  return pet.svg(opts);
}

export function petDefaultSvg(pet: Pet): string {
  return pet.svg();
}

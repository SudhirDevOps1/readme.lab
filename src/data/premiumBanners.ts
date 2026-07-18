// ===== PREMIUM RICH BANNERS (1000×600 cinematic, full SMIL effects) =====
// All banners are self-contained SVG with gradients, filters, particles, animations.
// Uses placeholders {{NAME}} {{ROLE}} {{HANDLE}} for live personalization.

export type PremiumBanner = {
  id: string;
  name: string;
  style: string;
  palette: string;
  svg: string;
};

// no helper used — keep raw entries directly

const ph = (svg: string) =>
  svg.replace(/\{\{NAME\}\}/g, '__NAME__').replace(/\{\{ROLE\}\}/g, '__ROLE__').replace(/\{\{HANDLE\}\}/g, '__HANDLE__');

const fill = (svg: string, n: string, r: string, h: string) =>
  svg.replace(/__NAME__/g, n).replace(/__ROLE__/g, r).replace(/__HANDLE__/g, h);

// ---------- 1. WISE OWL ON BRANCH (the example) ----------
const owl = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 600" width="100%" height="100%">
  <defs>
    <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#05080f"/>
      <stop offset="40%" stop-color="#0f1429"/>
      <stop offset="100%" stop-color="#1a1a3e"/>
    </linearGradient>
    <radialGradient id="moonGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#fff8dc" stop-opacity=".8"/>
      <stop offset="60%" stop-color="#fff8dc" stop-opacity=".2"/>
      <stop offset="100%" stop-color="#fff8dc" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="owlBody" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#c0761e"/>
      <stop offset="60%" stop-color="#8b5a2b"/>
      <stop offset="100%" stop-color="#4a2e1b"/>
    </radialGradient>
    <radialGradient id="bellyGrad" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#f5c542"/>
      <stop offset="100%" stop-color="#d97706"/>
    </radialGradient>
    <radialGradient id="eyeGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#ffdd44" stop-opacity="1"/>
      <stop offset="60%" stop-color="#ff8800" stop-opacity=".4"/>
      <stop offset="100%" stop-color="#ff8800" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="starGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#fff" stop-opacity="1"/>
      <stop offset="100%" stop-color="#fff" stop-opacity="0"/>
    </radialGradient>
    <filter id="owlGlow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="6" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <rect width="1000" height="600" fill="url(#sky)"/>
  <g fill="#fff">
    <circle cx="80" cy="60" r="2"><animate attributeName="opacity" values=".3;1;.3" dur="2s" repeatCount="indefinite"/></circle>
    <circle cx="150" cy="140" r="1.5"><animate attributeName="opacity" values=".5;1;.5" dur="2.5s" repeatCount="indefinite"/></circle>
    <circle cx="220" cy="40" r="2.5"><animate attributeName="opacity" values=".2;.9;.2" dur="1.8s" repeatCount="indefinite"/></circle>
    <circle cx="320" cy="100" r="1.8"><animate attributeName="opacity" values=".4;1;.4" dur="3s" repeatCount="indefinite"/></circle>
    <circle cx="410" cy="50" r="2"><animate attributeName="opacity" values=".3;.8;.3" dur="2.2s" repeatCount="indefinite"/></circle>
    <circle cx="520" cy="120" r="1.5"><animate attributeName="opacity" values=".6;1;.6" dur="1.6s" repeatCount="indefinite"/></circle>
    <circle cx="620" cy="30" r="2.2"><animate attributeName="opacity" values=".2;.9;.2" dur="2.8s" repeatCount="indefinite"/></circle>
    <circle cx="730" cy="90" r="1.8"><animate attributeName="opacity" values=".4;1;.4" dur="2.1s" repeatCount="indefinite"/></circle>
    <circle cx="850" cy="60" r="2"><animate attributeName="opacity" values=".3;.9;.3" dur="1.9s" repeatCount="indefinite"/></circle>
    <circle cx="940" cy="130" r="1.5"><animate attributeName="opacity" values=".5;1;.5" dur="2.3s" repeatCount="indefinite"/></circle>
  </g>
  <g>
    <circle cx="180" cy="80" r="4" fill="url(#starGlow)" opacity=".6"><animate attributeName="r" values="3;6;3" dur="3s" repeatCount="indefinite"/></circle>
    <circle cx="600" cy="70" r="4" fill="url(#starGlow)" opacity=".5"><animate attributeName="r" values="3;6;3" dur="3.5s" repeatCount="indefinite"/></circle>
    <circle cx="820" cy="40" r="3" fill="url(#starGlow)" opacity=".7"><animate attributeName="r" values="2;5;2" dur="2.5s" repeatCount="indefinite"/></circle>
  </g>
  <circle cx="850" cy="110" r="70" fill="url(#moonGlow)"/>
  <circle cx="850" cy="110" r="40" fill="#fff8dc"/>
  <circle cx="870" cy="95" r="7" fill="#d4c5a0" opacity=".4"/>
  <circle cx="840" cy="120" r="6" fill="#d4c5a0" opacity=".35"/>
  <circle cx="860" cy="130" r="4" fill="#d4c5a0" opacity=".3"/>
  <circle cx="830" cy="100" r="5" fill="#d4c5a0" opacity=".3"/>
  <g>
    <line x1="950" y1="30" x2="830" y2="120" stroke="#fff" stroke-width="2" opacity=".8">
      <animate attributeName="x1" values="950;850;750;650;550" dur="5s" repeatCount="indefinite"/>
      <animate attributeName="y1" values="30;80;130;180;230" dur="5s" repeatCount="indefinite"/>
      <animate attributeName="x2" values="830;730;630;530;430" dur="5s" repeatCount="indefinite"/>
      <animate attributeName="y2" values="120;170;220;270;320" dur="5s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="1;.7;.3;.7;1" dur="5s" repeatCount="indefinite"/>
    </line>
  </g>
  <g>
    <circle cx="120" cy="300" r="3" fill="#ffdd44" filter="url(#owlGlow)"><animate attributeName="cy" values="300;280;300;320;300" dur="4s" repeatCount="indefinite"/><animate attributeName="cx" values="120;140;120;100;120" dur="4s" repeatCount="indefinite"/><animate attributeName="opacity" values=".2;.8;.2" dur="2s" repeatCount="indefinite"/></circle>
    <circle cx="200" cy="250" r="2.5" fill="#ffdd44" filter="url(#owlGlow)"><animate attributeName="cy" values="250;230;250;270;250" dur="3.5s" repeatCount="indefinite"/><animate attributeName="cx" values="200;220;200;180;200" dur="3.5s" repeatCount="indefinite"/><animate attributeName="opacity" values=".3;.9;.3" dur="2.5s" repeatCount="indefinite"/></circle>
    <circle cx="780" cy="350" r="2.5" fill="#ffdd44" filter="url(#owlGlow)"><animate attributeName="cy" values="350;330;350;370;350" dur="4.5s" repeatCount="indefinite"/><animate attributeName="cx" values="780;800;780;760;780" dur="4.5s" repeatCount="indefinite"/><animate attributeName="opacity" values=".1;.7;.1" dur="1.8s" repeatCount="indefinite"/></circle>
    <circle cx="450" cy="200" r="2" fill="#ffdd44" filter="url(#owlGlow)"><animate attributeName="cy" values="200;180;200;220;200" dur="5s" repeatCount="indefinite"/><animate attributeName="cx" values="450;470;450;430;450" dur="5s" repeatCount="indefinite"/><animate attributeName="opacity" values=".2;.6;.2" dur="3s" repeatCount="indefinite"/></circle>
  </g>
  <path d="M-20,450 Q100,430 200,460 Q350,500 500,460 Q650,420 800,460 Q900,490 1020,450" stroke="#2d1a0b" stroke-width="18" fill="none" stroke-linecap="round"/>
  <path d="M-20,450 Q100,430 200,460 Q350,500 500,460 Q650,420 800,460 Q900,490 1020,450" stroke="#4a2e1b" stroke-width="14" fill="none" stroke-linecap="round"/>
  <g fill="#1a3a1a" opacity=".85">
    <ellipse cx="235" cy="390" rx="20" ry="8" transform="rotate(-30,235,390)"/>
    <ellipse cx="260" cy="395" rx="15" ry="6" transform="rotate(-15,260,395)"/>
    <ellipse cx="275" cy="385" rx="12" ry="5" transform="rotate(-40,275,385)"/>
    <ellipse cx="635" cy="398" rx="18" ry="7" transform="rotate(20,635,398)"/>
    <ellipse cx="150" cy="450" rx="14" ry="6" transform="rotate(-20,150,450)"/>
  </g>
  <g>
    <animateTransform attributeName="transform" type="translate" values="500,400;500,330;500,330;500,400;500,400" dur="10s" repeatCount="indefinite" keyTimes="0;.25;.6;.85;1"/>
    <g>
      <animateTransform attributeName="transform" type="rotate" values="0;-5;-5;0;0" dur="10s" repeatCount="indefinite" keyTimes="0;.25;.6;.85;1"/>
      <g transform="scale(1.2)">
        <ellipse cx="0" cy="55" rx="55" ry="14" fill="#000" opacity=".35"><animate attributeName="opacity" values=".35;.05;.05;.35;.35" dur="10s" repeatCount="indefinite" keyTimes="0;.25;.6;.85;1"/><animate attributeName="ry" values="14;8;8;14;14" dur="10s" repeatCount="indefinite" keyTimes="0;.25;.6;.85;1"/></ellipse>
        <ellipse cx="0" cy="8" rx="58" ry="52" fill="url(#owlBody)"/>
        <ellipse cx="0" cy="18" rx="38" ry="32" fill="url(#bellyGrad)"/>
        <g stroke="#4a2e1b" stroke-width="1.2" fill="none" opacity=".4">
          <path d="M-28,8 Q0,14 28,8"/><path d="M-32,20 Q0,26 32,20"/><path d="M-30,32 Q0,38 30,32"/>
        </g>
        <g>
          <path d="M-48,-2 Q-70,-18 -85,-32 Q-75,-10 -58,4 Q-53,4 -48,-2" fill="#6b3f1a"><animateTransform attributeName="transform" type="rotate" values="0,-48,0;-15,-48,0;0,-48,0" dur=".3s" repeatCount="indefinite"/></path>
          <path d="M48,-2 Q70,-18 85,-32 Q75,-10 58,4 Q53,4 48,-2" fill="#6b3f1a"><animateTransform attributeName="transform" type="rotate" values="0,48,0;15,48,0;0,48,0" dur=".3s" repeatCount="indefinite"/></path>
        </g>
        <polygon points="-40,-38 -54,-66 -28,-50" fill="#5a3412"/><polygon points="40,-38 54,-66 28,-50" fill="#5a3412"/>
        <circle cx="-22" cy="-5" r="24" fill="url(#eyeGlow)" filter="url(#owlGlow)"/><circle cx="22" cy="-5" r="24" fill="url(#eyeGlow)" filter="url(#owlGlow)"/>
        <circle cx="-22" cy="-5" r="19" fill="#fde68a" stroke="#7a4a1a" stroke-width="2.5"/><circle cx="22" cy="-5" r="19" fill="#fde68a" stroke="#7a4a1a" stroke-width="2.5"/>
        <circle cx="-22" cy="-5" r="13" fill="#0f172a"><animate attributeName="r" values="13;4;13" dur="3.5s" repeatCount="indefinite" keyTimes="0;.95;1"/></circle>
        <circle cx="22" cy="-5" r="13" fill="#0f172a"><animate attributeName="r" values="13;4;13" dur="3.5s" repeatCount="indefinite" keyTimes="0;.95;1"/></circle>
        <circle cx="-19" cy="-10" r="4.5" fill="#fff"/><circle cx="25" cy="-10" r="4.5" fill="#fff"/>
        <polygon points="-9,14 9,14 0,26" fill="#f59e0b" stroke="#b45309" stroke-width="1.2"/>
        <g stroke="#5a3412" stroke-width="3" stroke-linecap="round" fill="none">
          <path d="M-20,54 L-27,62"/><path d="M-20,54 L-18,62"/><path d="M-20,54 L-13,62"/><path d="M20,54 L13,62"/><path d="M20,54 L22,62"/><path d="M20,54 L27,62"/>
        </g>
        <g fill="#5a3412">
          <circle cx="-27" cy="62" r="2.5"/><circle cx="-18" cy="62" r="2.5"/><circle cx="-13" cy="62" r="2.5"/><circle cx="13" cy="62" r="2.5"/><circle cx="22" cy="62" r="2.5"/><circle cx="27" cy="62" r="2.5"/>
        </g>
      </g>
    </g>
  </g>
  <text x="500" y="560" text-anchor="middle" font-family="monospace" font-size="14" fill="#fbbf24" letter-spacing="3" opacity=".9">wise.owl · __HANDLE__ · 2026</text>
  <text x="500" y="582" text-anchor="middle" font-family="monospace" font-size="10" fill="#666" letter-spacing="2">always watching · never blinking</text>
</svg>`;

// ---------- 2. CYBERPUNK NEON CITY ----------
const neonCity = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 600" width="100%" height="100%">
  <defs>
    <linearGradient id="neonSky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#0a0014"/><stop offset="50%" stop-color="#1a0033"/><stop offset="100%" stop-color="#2d0066"/>
    </linearGradient>
    <linearGradient id="neonFloor" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#0a0014"/><stop offset="100%" stop-color="#1f0033"/>
    </linearGradient>
    <radialGradient id="sunNeon" cx="50%" cy="50%">
      <stop offset="0%" stop-color="#ff006e" stop-opacity=".8"/><stop offset="50%" stop-color="#8338ec" stop-opacity=".4"/><stop offset="100%" stop-color="#3a0ca3" stop-opacity="0"/>
    </radialGradient>
    <filter id="neonGlow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="3" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <rect width="1000" height="600" fill="url(#neonSky)"/>
  <circle cx="500" cy="280" r="100" fill="url(#sunNeon)"/>
  <line x1="0" y1="380" x2="1000" y2="380" stroke="#ff006e" stroke-width="1.5" opacity=".6"/>
  <line x1="0" y1="410" x2="1000" y2="410" stroke="#3a0ca3" stroke-width="1" opacity=".4"/>
  ${[0,1,2,3,4].map(i=>`<line x1="${i*200}" y1="380" x2="${i*200-150}" y2="600" stroke="#ff006e" stroke-width=".8" opacity=".3"/>`).join('')}
  <rect x="0" y="380" width="1000" height="220" fill="url(#neonFloor)"/>
  <g fill="#0f172a">
    <rect x="50" y="280" width="60" height="100"/><rect x="55" y="285" width="50" height="20" fill="#3a0ca3"/><rect x="55" y="315" width="50" height="20" fill="#ff006e"/><rect x="55" y="345" width="50" height="20" fill="#3a0ca3"/>
    <rect x="130" y="240" width="80" height="140"/><rect x="135" y="245" width="70" height="20" fill="#ff006e"/><rect x="135" y="275" width="70" height="20" fill="#3a0ca3"/><rect x="135" y="305" width="70" height="20" fill="#ff006e"/><rect x="135" y="335" width="70" height="20" fill="#3a0ca3"/>
    <rect x="230" y="290" width="50" height="90"/><rect x="235" y="295" width="40" height="15" fill="#3a0ca3"/><rect x="235" y="320" width="40" height="15" fill="#ff006e"/><rect x="235" y="345" width="40" height="15" fill="#3a0ca3"/>
    <rect x="300" y="220" width="100" height="160"/><rect x="305" y="225" width="90" height="20" fill="#ff006e"/><rect x="305" y="255" width="90" height="20" fill="#3a0ca3"/><rect x="305" y="285" width="90" height="20" fill="#ff006e"/><rect x="305" y="315" width="90" height="20" fill="#3a0ca3"/><rect x="305" y="345" width="90" height="20" fill="#ff006e"/>
    <rect x="420" y="260" width="60" height="120"/><rect x="425" y="265" width="50" height="18" fill="#3a0ca3"/><rect x="425" y="293" width="50" height="18" fill="#ff006e"/><rect x="425" y="321" width="50" height="18" fill="#3a0ca3"/><rect x="425" y="349" width="50" height="18" fill="#ff006e"/>
    <rect x="500" y="200" width="120" height="180"/><rect x="505" y="205" width="110" height="20" fill="#ff006e"/><rect x="505" y="235" width="110" height="20" fill="#3a0ca3"/><rect x="505" y="265" width="110" height="20" fill="#ff006e"/><rect x="505" y="295" width="110" height="20" fill="#3a0ca3"/><rect x="505" y="325" width="110" height="20" fill="#ff006e"/><rect x="505" y="355" width="110" height="20" fill="#3a0ca3"/>
    <rect x="640" y="240" width="70" height="140"/><rect x="645" y="245" width="60" height="18" fill="#3a0ca3"/><rect x="645" y="273" width="60" height="18" fill="#ff006e"/><rect x="645" y="301" width="60" height="18" fill="#3a0ca3"/><rect x="645" y="329" width="60" height="18" fill="#ff006e"/><rect x="645" y="357" width="60" height="18" fill="#3a0ca3"/>
    <rect x="730" y="270" width="50" height="110"/><rect x="735" y="275" width="40" height="15" fill="#3a0ca3"/><rect x="735" y="300" width="40" height="15" fill="#ff006e"/><rect x="735" y="325" width="40" height="15" fill="#3a0ca3"/><rect x="735" y="350" width="40" height="15" fill="#ff006e"/>
    <rect x="800" y="220" width="90" height="160"/><rect x="805" y="225" width="80" height="20" fill="#ff006e"/><rect x="805" y="255" width="80" height="20" fill="#3a0ca3"/><rect x="805" y="285" width="80" height="20" fill="#ff006e"/><rect x="805" y="315" width="80" height="20" fill="#3a0ca3"/><rect x="805" y="345" width="80" height="20" fill="#ff006e"/>
    <rect x="910" y="280" width="60" height="100"/><rect x="915" y="285" width="50" height="20" fill="#3a0ca3"/><rect x="915" y="315" width="50" height="20" fill="#ff006e"/><rect x="915" y="345" width="50" height="20" fill="#3a0ca3"/>
  </g>
  <g filter="url(#neonGlow)">
    <text x="500" y="120" text-anchor="middle" font-family="Georgia,serif" font-size="64" font-weight="900" fill="#ff006e" letter-spacing="2">__NAME__</text>
    <text x="500" y="165" text-anchor="middle" font-family="monospace" font-size="18" fill="#3a0ca3" letter-spacing="6">__ROLE__</text>
  </g>
  <text x="500" y="500" text-anchor="middle" font-family="monospace" font-size="11" fill="#ff006e" letter-spacing="3" opacity=".8">github.com/__HANDLE__</text>
  <line x1="0" y1="380" x2="1000" y2="380" stroke="#ff006e" stroke-width="1"><animate attributeName="opacity" values=".6;1;.6" dur="2s" repeatCount="indefinite"/></line>
  ${Array.from({length:8}).map((_,i)=>`<rect x="${100+i*100}" y="380" width="2" height="${20+Math.abs(Math.sin(i*2))*30}" fill="#ff006e" opacity=".8"><animate attributeName="height" values="${20+Math.abs(Math.sin(i*2))*30};${30+Math.abs(Math.cos(i*2))*20};${20+Math.abs(Math.sin(i*2))*30}" dur="${1.5+i%2}s" repeatCount="indefinite"/></rect>`).join('')}
</svg>`;

// ---------- 3. SPACE STATION ORBITING EARTH ----------
const spaceStation = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 600" width="100%" height="100%">
  <defs>
    <radialGradient id="spaceBg" cx="50%" cy="50%">
      <stop offset="0%" stop-color="#1e1b4b"/><stop offset="100%" stop-color="#000000"/>
    </radialGradient>
    <radialGradient id="earth" cx="35%" cy="40%">
      <stop offset="0%" stop-color="#3b82f6"/><stop offset="50%" stop-color="#1e40af"/><stop offset="100%" stop-color="#0c1a3e"/>
    </radialGradient>
    <radialGradient id="atmGlow" cx="35%" cy="40%">
      <stop offset="80%" stop-color="#3b82f6" stop-opacity="0"/><stop offset="100%" stop-color="#60a5fa" stop-opacity=".4"/>
    </radialGradient>
    <radialGradient id="sunSpace" cx="50%" cy="50%">
      <stop offset="0%" stop-color="#fbbf24" stop-opacity=".7"/><stop offset="100%" stop-color="#fbbf24" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1000" height="600" fill="url(#spaceBg)"/>
  <g fill="#fff">
    <circle cx="80" cy="80" r="1.5"/><circle cx="150" cy="120" r="2"><animate attributeName="opacity" values=".3;1;.3" dur="2s" repeatCount="indefinite"/></circle>
    <circle cx="220" cy="60" r="1"/><circle cx="310" cy="140" r="1.5"/><circle cx="420" cy="40" r="2"><animate attributeName="opacity" values=".4;.9;.4" dur="2.5s" repeatCount="indefinite"/></circle>
    <circle cx="500" cy="100" r="1.5"/><circle cx="600" cy="50" r="1"/><circle cx="680" cy="130" r="2"><animate attributeName="opacity" values=".3;1;.3" dur="1.8s" repeatCount="indefinite"/></circle>
    <circle cx="780" cy="80" r="1.5"/><circle cx="850" cy="150" r="1"/><circle cx="920" cy="100" r="2"><animate attributeName="opacity" values=".5;1;.5" dur="2.2s" repeatCount="indefinite"/></circle>
    <circle cx="50" cy="200" r="1"/><circle cx="950" cy="220" r="1.5"/><circle cx="120" cy="400" r="1"/><circle cx="880" cy="450" r="1.5"/>
  </g>
  <circle cx="350" cy="300" r="180" fill="url(#earth)"/>
  <ellipse cx="320" cy="280" rx="50" ry="20" fill="#22c55e" opacity=".6"/>
  <ellipse cx="380" cy="320" rx="60" ry="15" fill="#16a34a" opacity=".6"/>
  <ellipse cx="290" cy="350" rx="40" ry="12" fill="#15803d" opacity=".5"/>
  <ellipse cx="350" cy="260" rx="55" ry="18" fill="#84cc16" opacity=".5"/>
  <circle cx="350" cy="300" r="190" fill="url(#atmGlow)"/>
  <circle cx="850" cy="120" r="40" fill="url(#sunSpace)"/>
  <g>
    <circle cx="800" cy="450" r="6" fill="#94a3b8"><animateTransform attributeName="transform" type="rotate" values="0 500 300;360 500 300" dur="15s" repeatCount="indefinite"/></circle>
    <ellipse cx="0" cy="0" rx="200" ry="50" fill="none" stroke="#94a3b8" stroke-width="1" opacity=".4" transform="translate(500 300)"><animateTransform attributeName="transform" type="rotate" values="0 500 300;360 500 300" dur="15s" repeatCount="indefinite" additive="sum"/></ellipse>
  </g>
  <g>
    <animateTransform attributeName="transform" type="rotate" values="0 500 300;-360 500 300" dur="30s" repeatCount="indefinite"/>
    <rect x="730" y="296" width="40" height="8" fill="#06b6d4"/>
    <rect x="740" y="290" width="20" height="20" fill="#22d3ee"/>
    <rect x="760" y="288" width="20" height="24" fill="#67e8f9"/>
    <rect x="785" y="294" width="15" height="12" fill="#22d3ee"/>
  </g>
  <g filter="url(#sunSpace)"><circle cx="850" cy="120" r="3" fill="#fff"/></g>
  <text x="500" y="60" text-anchor="middle" font-family="monospace" font-size="10" fill="#94a3b8" letter-spacing="3" opacity=".7">— transmission from low earth orbit —</text>
  <g>
    <text x="500" y="520" text-anchor="middle" font-family="Georgia,serif" font-size="48" font-weight="900" fill="#e0e7ff" letter-spacing="2">__NAME__</text>
    <text x="500" y="555" text-anchor="middle" font-family="monospace" font-size="14" fill="#38bdf8" letter-spacing="6">__ROLE__</text>
  </g>
  <text x="500" y="585" text-anchor="middle" font-family="monospace" font-size="10" fill="#64748b" letter-spacing="2">@__HANDLE__ · mission control · 2026</text>
</svg>`;

// ---------- 4. SAMURAI MOONLIT ----------
const samurai = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 600" width="100%" height="100%">
  <defs>
    <linearGradient id="skySam" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#1a0a1a"/><stop offset="50%" stop-color="#2d0a2d"/><stop offset="100%" stop-color="#0a0a1a"/>
    </linearGradient>
    <radialGradient id="bigMoon" cx="50%" cy="50%">
      <stop offset="0%" stop-color="#fff8dc"/><stop offset="60%" stop-color="#fef3c7"/><stop offset="100%" stop-color="#fcd34d"/>
    </radialGradient>
    <radialGradient id="moonGlow2" cx="50%" cy="50%">
      <stop offset="0%" stop-color="#fff8dc" stop-opacity=".5"/><stop offset="100%" stop-color="#fff8dc" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1000" height="600" fill="url(#skySam)"/>
  <circle cx="800" cy="180" r="100" fill="url(#moonGlow2)"/>
  <circle cx="800" cy="180" r="55" fill="url(#bigMoon)"/>
  <g fill="#fff" opacity=".7">
    <circle cx="50" cy="50" r="1.5"/><circle cx="120" cy="80" r="1"/><circle cx="200" cy="40" r="2"/><circle cx="280" cy="100" r="1.5"/><circle cx="360" cy="60" r="1"/><circle cx="500" cy="80" r="1.5"/><circle cx="600" cy="40" r="2"/><circle cx="700" cy="120" r="1"/>
  </g>
  <g fill="#000" opacity=".2"><path d="M0 450 Q200 440 400 450 Q600 460 800 445 Q900 440 1000 450 L1000 600 L0 600 Z"/></g>
  <g fill="#0f0a1a" opacity=".4"><path d="M0 480 Q300 470 600 480 Q800 490 1000 480 L1000 600 L0 600 Z"/></g>
  <path d="M0 510 Q200 500 400 510 Q600 520 800 505 Q900 500 1000 510 L1000 600 L0 600 Z" fill="#0a050f"/>
  <g transform="translate(380 380)">
    <ellipse cx="0" cy="60" rx="80" ry="14" fill="#000" opacity=".3"/>
    <ellipse cx="0" cy="-30" rx="60" ry="70" fill="#dc2626"/>
    <ellipse cx="0" cy="-25" rx="48" ry="58" fill="#991b1b"/>
    <path d="M-50 -20 Q-60 -60 -50 -100 Q-30 -90 -20 -100 Q-10 -90 0 -100 Q10 -90 20 -100 Q30 -90 50 -100 Q60 -60 50 -20" fill="#0a0a0a"/>
    <ellipse cx="0" cy="-15" rx="35" ry="30" fill="#fbbf24"/>
    <rect x="-6" y="-20" width="12" height="3" fill="#dc2626"/><rect x="-6" y="-12" width="12" height="3" fill="#dc2626"/>
    <line x1="0" y1="-50" x2="0" y2="-30" stroke="#dc2626" stroke-width="2"/>
    <ellipse cx="0" cy="50" rx="40" ry="20" fill="#0f0a0a"/>
    <rect x="-50" y="0" width="20" height="50" fill="#7f1d1d" transform="rotate(-20 -40 25)"/>
    <rect x="30" y="0" width="20" height="50" fill="#7f1d1d" transform="rotate(20 40 25)"/>
    <path d="M-10 80 L-5 90 L0 85 L5 90 L10 80 Z" fill="#1a1a1a"/>
  </g>
  <g transform="translate(680 200) rotate(15)">
    <rect x="-3" y="0" width="6" height="200" fill="#94a3b8" opacity=".6"/>
    <polygon points="-3,0 3,0 8,-15 -8,-15" fill="#cbd5e1"/>
    <line x1="0" y1="200" x2="0" y2="220" stroke="#fbbf24" stroke-width="2" opacity=".4"/>
    <g><line x1="0" y1="0" x2="0" y2="200" stroke="#fff" stroke-width=".5" opacity=".4"/><animateTransform attributeName="transform" type="rotate" values="0 0 0;5 0 0;0 0 0;-5 0 0;0 0 0" dur="6s" repeatCount="indefinite"/></g>
  </g>
  <g fill="#cbd5e1" opacity=".5">
    ${Array.from({length:20}).map((_,i)=>{const x=i*55;return `<polygon points="${x},200 ${x+5},260 ${x-5},260"/>`}).join('')}
  </g>
  <text x="500" y="50" text-anchor="middle" font-family="Georgia,serif" font-size="32" fill="#fef3c7" letter-spacing="6" opacity=".9" font-style="italic">__NAME__</text>
  <text x="500" y="80" text-anchor="middle" font-family="monospace" font-size="12" fill="#fbbf24" letter-spacing="4" opacity=".7">「 __ROLE__ 」</text>
  <text x="500" y="540" text-anchor="middle" font-family="Georgia,serif" font-size="14" fill="#7f1d1d" font-style="italic" letter-spacing="3">the way of the code</text>
  <text x="500" y="585" text-anchor="middle" font-family="monospace" font-size="10" fill="#475569" letter-spacing="2">@__HANDLE__ · bushido · 2026</text>
</svg>`;

// ---------- 5. RAINY CITY NIGHT ----------
const rainyCity = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 600" width="100%" height="100%">
  <defs>
    <linearGradient id="rainSky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#1e1b4b"/><stop offset="50%" stop-color="#0f172a"/><stop offset="100%" stop-color="#020617"/>
    </linearGradient>
    <radialGradient id="lampGlow" cx="50%" cy="50%">
      <stop offset="0%" stop-color="#fbbf24" stop-opacity=".5"/><stop offset="100%" stop-color="#fbbf24" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1000" height="600" fill="url(#rainSky)"/>
  <g fill="#0a0a1a">
    ${[0,1,2,3,4,5,6,7,8].map(i=>{const h=80+Math.abs(Math.sin(i*3))*180;return `<rect x="${i*120-30}" y="${350-h}" width="${70+Math.abs(Math.cos(i*2))*30}" height="${h+250}"/>`}).join('')}
  </g>
  <g fill="#fbbf24" opacity=".4">
    <rect x="60" y="380" width="4" height="4"><animate attributeName="opacity" values=".4;1;.4" dur="1.2s" repeatCount="indefinite"/></rect>
    <rect x="170" y="350" width="4" height="4"><animate attributeName="opacity" values=".6;1;.6" dur="1.5s" repeatCount="indefinite"/></rect>
    <rect x="290" y="360" width="4" height="4"><animate attributeName="opacity" values=".3;.9;.3" dur="1.8s" repeatCount="indefinite"/></rect>
    <rect x="420" y="330" width="4" height="4"><animate attributeName="opacity" values=".5;1;.5" dur="1.3s" repeatCount="indefinite"/></rect>
    <rect x="560" y="340" width="4" height="4"><animate attributeName="opacity" values=".4;.8;.4" dur="1.6s" repeatCount="indefinite"/></rect>
    <rect x="710" y="355" width="4" height="4"><animate attributeName="opacity" values=".3;1;.3" dur="1.4s" repeatCount="indefinite"/></rect>
    <rect x="830" y="335" width="4" height="4"><animate attributeName="opacity" values=".5;.9;.5" dur="1.7s" repeatCount="indefinite"/></rect>
  </g>
  <g fill="#a5b4fc" opacity=".5">
    ${Array.from({length:60}).map((_,i)=>{const x=(i*23)%1000;const y=Math.random()*500;return `<line x1="${x}" y1="${y}" x2="${x-3}" y2="${y+15}" stroke="#a5b4fc" stroke-width="1" opacity=".4"><animate attributeName="y1" values="${y-50};${y+50}" dur="0.5s" repeatCount="indefinite"/><animate attributeName="y2" values="${y-35};${y+65}" dur="0.5s" repeatCount="indefinite"/></line>`}).join('')}
  </g>
  <ellipse cx="500" cy="600" rx="600" ry="40" fill="#1e1b4b" opacity=".6"/>
  <ellipse cx="500" cy="600" rx="400" ry="20" fill="#fbbf24" opacity=".2"/>
  <text x="500" y="160" text-anchor="middle" font-family="Georgia,serif" font-size="56" fill="#e0e7ff" font-style="italic">__NAME__</text>
  <text x="500" y="210" text-anchor="middle" font-family="monospace" font-size="18" fill="#a5b4fc" letter-spacing="6">__ROLE__</text>
  <line x1="300" y1="240" x2="700" y2="240" stroke="#fbbf24" stroke-width="1" opacity=".4"/>
  <text x="500" y="280" text-anchor="middle" font-family="monospace" font-size="12" fill="#94a3b8" letter-spacing="3">@__HANDLE__</text>
  <circle cx="500" cy="500" r="120" fill="url(#lampGlow)"/>
  <ellipse cx="500" cy="600" rx="100" ry="6" fill="#fbbf24" opacity=".4"/>
</svg>`;

// ---------- 6. UNDERWATER CORAL REEF ----------
const coralReef = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 600" width="100%" height="100%">
  <defs>
    <linearGradient id="seaGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#06b6d4"/><stop offset="40%" stop-color="#0e7490"/><stop offset="100%" stop-color="#082f49"/>
    </linearGradient>
    <radialGradient id="sunRays" cx="50%" cy="0%">
      <stop offset="0%" stop-color="#fff8dc" stop-opacity=".4"/><stop offset="100%" stop-color="#fff8dc" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1000" height="600" fill="url(#seaGrad)"/>
  <ellipse cx="500" cy="0" rx="600" ry="250" fill="url(#sunRays)"/>
  <g stroke="#fff" stroke-width="2" opacity=".15">
    <line x1="200" y1="0" x2="180" y2="600"/>
    <line x1="400" y1="0" x2="390" y2="600"/>
    <line x1="600" y1="0" x2="610" y2="600"/>
    <line x1="800" y1="0" x2="820" y2="600"/>
  </g>
  <g fill="#fff" opacity=".7">
    <circle cx="100" cy="200" r="2"><animate attributeName="cy" values="200;150;200" dur="3s" repeatCount="indefinite"/></circle>
    <circle cx="300" cy="300" r="1.5"><animate attributeName="cy" values="300;250;300" dur="4s" repeatCount="indefinite"/></circle>
    <circle cx="500" cy="180" r="2.5"><animate attributeName="cy" values="180;130;180" dur="3.5s" repeatCount="indefinite"/></circle>
    <circle cx="700" cy="250" r="1.8"><animate attributeName="cy" values="250;200;250" dur="4.5s" repeatCount="indefinite"/></circle>
    <circle cx="900" cy="320" r="2"><animate attributeName="cy" values="320;270;320" dur="3.2s" repeatCount="indefinite"/></circle>
  </g>
  <g>
    <ellipse cx="500" cy="300" rx="35" ry="15" fill="#fbbf24"><animateTransform attributeName="transform" type="translate" values="500 300;480 280;520 300;500 300" dur="4s" repeatCount="indefinite"/></ellipse>
    <polygon points="490 300 510 300 500 310" fill="#0e7490"/>
    <circle cx="492" cy="298" r="3" fill="#fff"/><circle cx="508" cy="298" r="3" fill="#fff"/>
  </g>
  <g fill="#ec4899">
    <ellipse cx="80" cy="500" rx="50" ry="20"/>
    <ellipse cx="100" cy="480" rx="40" ry="15"/>
    <line x1="80" y1="510" x2="80" y2="540" stroke="#ec4899" stroke-width="3"/>
    <line x1="60" y1="515" x2="55" y2="540" stroke="#ec4899" stroke-width="2"/>
    <line x1="100" y1="515" x2="105" y2="540" stroke="#ec4899" stroke-width="2"/>
  </g>
  <g fill="#f97316">
    <ellipse cx="900" cy="510" rx="60" ry="22"/>
    <ellipse cx="880" cy="490" rx="40" ry="14"/>
    <line x1="900" y1="525" x2="900" y2="555" stroke="#f97316" stroke-width="3"/>
    <line x1="880" y1="525" x2="875" y2="555" stroke="#f97316" stroke-width="2"/>
    <line x1="920" y1="525" x2="925" y2="555" stroke="#f97316" stroke-width="2"/>
  </g>
  <g fill="#84cc16">
    <ellipse cx="180" cy="540" rx="40" ry="12"/>
    <ellipse cx="820" cy="540" rx="50" ry="14"/>
  </g>
  <g fill="#a78bfa" opacity=".8">
    ${Array.from({length:5}).map((_,i)=>`<ellipse cx="${150+i*180}" cy="${540-i*8}" rx="${30-i*3}" ry="${6+i}"/>`).join('')}
  </g>
  <rect x="0" y="560" width="1000" height="40" fill="#0c4a6e" opacity=".7"/>
  ${Array.from({length:20}).map((_,i)=>`<line x1="${i*50+20}" y1="565" x2="${i*50+15}" y2="600" stroke="#fbbf24" stroke-width="1" opacity=".3"/>`).join('')}
  <text x="500" y="160" text-anchor="middle" font-family="Georgia,serif" font-size="42" fill="#fff" font-weight="700" font-style="italic">__NAME__</text>
  <text x="500" y="200" text-anchor="middle" font-family="monospace" font-size="16" fill="#a5f3fc" letter-spacing="4">__ROLE__</text>
  <text x="500" y="550" text-anchor="middle" font-family="monospace" font-size="11" fill="#67e8f9" letter-spacing="2" opacity=".8">@__HANDLE__ · deep sea dev · 2026</text>
</svg>`;

// ---------- 7. CYBER GRID RETROWAVE ----------
const cyberGrid = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 600" width="100%" height="100%">
  <defs>
    <linearGradient id="skyCw" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#1a0033"/><stop offset="50%" stop-color="#3b0764"/><stop offset="100%" stop-color="#0a0014"/>
    </linearGradient>
    <linearGradient id="sunCw" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#fbbf24"/><stop offset="50%" stop-color="#f97316"/><stop offset="100%" stop-color="#dc2626"/>
    </linearGradient>
    <filter id="glowCw" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="3" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <rect width="1000" height="600" fill="url(#skyCw)"/>
  <g fill="#fff" opacity=".5">
    <circle cx="100" cy="80" r="1.5"/><circle cx="200" cy="50" r="1"/><circle cx="300" cy="90" r="2"/><circle cx="400" cy="40" r="1.5"/><circle cx="500" cy="100" r="1"/><circle cx="600" cy="60" r="2"/><circle cx="700" cy="90" r="1"/><circle cx="800" cy="50" r="1.5"/><circle cx="900" cy="80" r="1"/>
  </g>
  <g>
    <ellipse cx="500" cy="300" rx="120" ry="60" fill="url(#sunCw)" filter="url(#glowCw)"/>
    ${Array.from({length:6}).map((_,i)=>`<rect x="${380+i*20}" y="${260-i*15}" width="40" height="2" fill="#000"/>`).join('')}
  </g>
  <g stroke="#ec4899" stroke-width="1" opacity=".5">
    <line x1="0" y1="400" x2="1000" y2="400"/>
    <line x1="0" y1="420" x2="1000" y2="420"/>
    <line x1="0" y1="445" x2="1000" y2="445"/>
    <line x1="0" y1="475" x2="1000" y2="475"/>
    <line x1="0" y1="510" x2="1000" y2="510"/>
    <line x1="0" y1="550" x2="1000" y2="550"/>
  </g>
  <g stroke="#06b6d4" stroke-width="1" opacity=".6">
    <line x1="500" y1="400" x2="-500" y2="600"/>
    <line x1="500" y1="400" x2="0" y2="600"/>
    <line x1="500" y1="400" x2="200" y2="600"/>
    <line x1="500" y1="400" x2="400" y2="600"/>
    <line x1="500" y1="400" x2="600" y2="600"/>
    <line x1="500" y1="400" x2="800" y2="600"/>
    <line x1="500" y1="400" x2="1500" y2="600"/>
  </g>
  <line x1="0" y1="400" x2="1000" y2="400" stroke="#ec4899" stroke-width="2"/>
  <text x="500" y="120" text-anchor="middle" font-family="monospace" font-size="14" fill="#06b6d4" letter-spacing="6" opacity=".8">&gt; SYSTEM ACCESS &lt;</text>
  <text x="500" y="220" text-anchor="middle" font-family="Impact,sans-serif" font-size="64" fill="#ec4899" letter-spacing="3" filter="url(#glowCw)">__NAME__</text>
  <text x="500" y="260" text-anchor="middle" font-family="monospace" font-size="18" fill="#06b6d4" letter-spacing="4">__ROLE__</text>
  <line x1="200" y1="280" x2="800" y2="280" stroke="#ec4899" stroke-width="1" opacity=".5"/>
  <text x="500" y="310" text-anchor="middle" font-family="monospace" font-size="12" fill="#a5b4fc" letter-spacing="2">github.com/__HANDLE__</text>
  <text x="500" y="360" text-anchor="middle" font-family="monospace" font-size="10" fill="#7c3aed" letter-spacing="3" opacity=".7">EST. 2026 · v.84</text>
</svg>`;

// ---------- 8. GALAXY SPIRAL ----------
const galaxy = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 600" width="100%" height="100%">
  <defs>
    <radialGradient id="galaxyBg" cx="50%" cy="50%">
      <stop offset="0%" stop-color="#1e1b4b"/><stop offset="100%" stop-color="#000"/>
    </radialGradient>
    <radialGradient id="galaxyCore" cx="50%" cy="50%">
      <stop offset="0%" stop-color="#fef3c7"/><stop offset="30%" stop-color="#f97316"/><stop offset="60%" stop-color="#a855f7"/><stop offset="100%" stop-color="#3b0764" stop-opacity="0"/>
    </radialGradient>
    <filter id="galaxyGlow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="8" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <rect width="1000" height="600" fill="url(#galaxyBg)"/>
  <g fill="#fff" opacity=".8">
    <circle cx="80" cy="80" r="2"><animate attributeName="opacity" values=".3;1;.3" dur="2s" repeatCount="indefinite"/></circle>
    <circle cx="180" cy="130" r="1.5"/><circle cx="280" cy="60" r="2.5"/><circle cx="380" cy="110" r="1"/><circle cx="480" cy="40" r="1.5"/><circle cx="580" cy="90" r="2"/><circle cx="680" cy="130" r="1.5"/><circle cx="780" cy="60" r="1"/><circle cx="880" cy="100" r="2.5"/><circle cx="950" cy="40" r="1.5"/>
    <circle cx="60" cy="450" r="1.5"/><circle cx="160" cy="500" r="1"/><circle cx="260" cy="480" r="2"/><circle cx="360" cy="530" r="1.5"/><circle cx="940" cy="500" r="1"/><circle cx="850" cy="480" r="2.5"/>
  </g>
  <g transform="translate(500 300)">
    <circle r="120" fill="url(#galaxyCore)" filter="url(#galaxyGlow)"/>
    ${Array.from({length:5}).map((_,i)=>`<ellipse rx="${100-i*12}" ry="${30-i*4}" fill="none" stroke="#a855f7" stroke-width="1.5" opacity=".6" transform="rotate(${i*15})"><animateTransform attributeName="transform" type="rotate" values="0;360" dur="${20+i*5}s" repeatCount="indefinite" additive="sum"/></ellipse>`).join('')}
    <g fill="#fbbf24"><circle cx="50" cy="0" r="2.5"><animateTransform attributeName="transform" type="rotate" values="0;360" dur="8s" repeatCount="indefinite"/></circle>
    <circle cx="35" cy="0" r="2"><animateTransform attributeName="transform" type="rotate" values="0;-360" dur="12s" repeatCount="indefinite"/></circle></g>
    <g fill="#22d3ee"><circle cx="-30" cy="10" r="2"><animateTransform attributeName="transform" type="rotate" values="0;360" dur="15s" repeatCount="indefinite"/></circle>
    <circle cx="60" cy="-20" r="1.5"><animateTransform attributeName="transform" type="rotate" values="0;-360" dur="20s" repeatCount="indefinite"/></circle></g>
  </g>
  <text x="500" y="60" text-anchor="middle" font-family="Georgia,serif" font-size="32" fill="#fef3c7" letter-spacing="3" filter="url(#galaxyGlow)">__NAME__</text>
  <text x="500" y="92" text-anchor="middle" font-family="monospace" font-size="16" fill="#a5b4fc" letter-spacing="6" opacity=".9">__ROLE__</text>
  <text x="500" y="540" text-anchor="middle" font-family="monospace" font-size="11" fill="#94a3b8" letter-spacing="3">github.com/__HANDLE__ · orbital · 2026</text>
  <text x="500" y="565" text-anchor="middle" font-family="monospace" font-size="9" fill="#475569" letter-spacing="2">~ 4.24 light years from Earth ~</text>
</svg>`;

// ---------- 9. ABSTRACT GEOMETRIC ----------
const geometric = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 600" width="100%" height="100%">
  <defs>
    <linearGradient id="geoBg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0a1a2e"/><stop offset="50%" stop-color="#1e3a5f"/><stop offset="100%" stop-color="#0f172a"/>
    </linearGradient>
    <linearGradient id="geoAcc" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#f43f5e"/><stop offset="50%" stop-color="#a855f7"/><stop offset="100%" stop-color="#22d3ee"/>
    </linearGradient>
  </defs>
  <rect width="1000" height="600" fill="url(#geoBg)"/>
  <g>
    <polygon points="100,100 200,150 150,250 50,200" fill="url(#geoAcc)" opacity=".6"><animateTransform attributeName="transform" type="rotate" values="0 125 175;360 125 175" dur="20s" repeatCount="indefinite"/></polygon>
    <polygon points="850,150 950,100 900,250 800,200" fill="#fbbf24" opacity=".4"><animateTransform attributeName="transform" type="rotate" values="0 875 175;-360 875 175" dur="25s" repeatCount="indefinite"/></polygon>
    <circle cx="850" cy="450" r="40" fill="none" stroke="url(#geoAcc)" stroke-width="3"><animate attributeName="r" values="40;55;40" dur="3s" repeatCount="indefinite"/></circle>
    <circle cx="850" cy="450" r="60" fill="none" stroke="#a855f7" stroke-width="2" opacity=".5"><animate attributeName="r" values="60;75;60" dur="4s" repeatCount="indefinite"/></circle>
  </g>
  <g>
    <rect x="80" y="450" width="40" height="40" fill="none" stroke="#22d3ee" stroke-width="2"><animate attributeName="y" values="450;430;450" dur="3s" repeatCount="indefinite"/></rect>
    <rect x="80" y="450" width="40" height="40" fill="none" stroke="#f43f5e" stroke-width="2" transform="rotate(45 100 470)"><animate attributeName="y" values="450;430;450" dur="3s" repeatCount="indefinite"/></rect>
  </g>
  <g>
    <line x1="200" y1="350" x2="200" y2="400" stroke="#22d3ee" stroke-width="2"><animate attributeName="y1" values="200;400" dur="3s" repeatCount="indefinite"/><animate attributeName="y2" values="300;500" dur="3s" repeatCount="indefinite"/></line>
    <line x1="800" y1="350" x2="800" y2="400" stroke="#f43f5e" stroke-width="2"><animate attributeName="y1" values="200;400" dur="3.5s" repeatCount="indefinite"/><animate attributeName="y2" values="300;500" dur="3.5s" repeatCount="indefinite"/></line>
  </g>
  <text x="500" y="180" text-anchor="middle" font-family="Georgia,serif" font-size="56" font-weight="900" fill="url(#geoAcc)" letter-spacing="2">__NAME__</text>
  <text x="500" y="225" text-anchor="middle" font-family="monospace" font-size="18" fill="#cbd5e1" letter-spacing="6">__ROLE__</text>
  <line x1="350" y1="250" x2="650" y2="250" stroke="url(#geoAcc)" stroke-width="2" opacity=".6"/>
  <text x="500" y="290" text-anchor="middle" font-family="monospace" font-size="14" fill="#94a3b8" letter-spacing="3">@__HANDLE__</text>
  <text x="500" y="540" text-anchor="middle" font-family="monospace" font-size="11" fill="#64748b" letter-spacing="2">geometric · 2026</text>
</svg>`;

// ---------- 10. MINIMAL PASTEL ----------
const minimal = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 600" width="100%" height="100%">
  <defs>
    <linearGradient id="minBg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#fef9c3"/><stop offset="50%" stop-color="#fce7f3"/><stop offset="100%" stop-color="#dbeafe"/>
    </linearGradient>
  </defs>
  <rect width="1000" height="600" fill="url(#minBg)"/>
  <g opacity=".4">
    <circle cx="200" cy="100" r="50" fill="#f9a8d4"><animate attributeName="r" values="50;65;50" dur="6s" repeatCount="indefinite"/></circle>
    <circle cx="800" cy="500" r="70" fill="#a5b4fc"><animate attributeName="r" values="70;85;70" dur="7s" repeatCount="indefinite"/></circle>
    <circle cx="100" cy="500" r="40" fill="#fde68a"><animate attributeName="r" values="40;55;40" dur="5s" repeatCount="indefinite"/></circle>
    <circle cx="900" cy="100" r="60" fill="#86efac"><animate attributeName="r" values="60;75;60" dur="8s" repeatCount="indefinite"/></circle>
  </g>
  <g font-family="Georgia,serif" text-anchor="middle">
    <text x="500" y="240" font-size="14" fill="#a16207" letter-spacing="6" opacity=".6">HELLO, I'M</text>
    <text x="500" y="310" font-size="72" font-weight="900" fill="#1e293b">__NAME__</text>
    <text x="500" y="360" font-size="22" fill="#a855f7" font-style="italic">__ROLE__</text>
  </g>
  <line x1="380" y1="395" x2="620" y2="395" stroke="#f9a8d4" stroke-width="2"/>
  <text x="500" y="430" text-anchor="middle" font-family="monospace" font-size="14" fill="#64748b" letter-spacing="3">github.com/__HANDLE__</text>
  <text x="500" y="540" text-anchor="middle" font-family="monospace" font-size="10" fill="#94a3b8" letter-spacing="2">2026 · minimal · peaceful</text>
</svg>`;

// ---------- 11. WIZARD SPELLBOOK ----------
const wizard = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 600" width="100%" height="100%">
  <defs>
    <radialGradient id="wizBg" cx="50%" cy="50%">
      <stop offset="0%" stop-color="#1e1b4b"/><stop offset="100%" stop-color="#0a0a1a"/>
    </radialGradient>
    <radialGradient id="orbGlow" cx="50%" cy="50%">
      <stop offset="0%" stop-color="#a855f7" stop-opacity=".8"/><stop offset="100%" stop-color="#7c3aed" stop-opacity="0"/>
    </radialGradient>
    <filter id="wizBlur" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="4" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <rect width="1000" height="600" fill="url(#wizBg)"/>
  <g fill="#fff" opacity=".5">
    <circle cx="100" cy="100" r="1.5"/><circle cx="300" cy="60" r="1"/><circle cx="500" cy="120" r="2"/><circle cx="700" cy="80" r="1.5"/><circle cx="900" cy="100" r="1"/>
  </g>
  <g>
    <circle cx="500" cy="150" r="50" fill="url(#orbGlow)">
      <animate attributeName="r" values="50;65;50" dur="3s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values=".7;1;.7" dur="3s" repeatCount="indefinite"/>
    </circle>
    <circle cx="500" cy="150" r="20" fill="#c084fc" filter="url(#wizBlur)"/>
    <circle cx="500" cy="150" r="12" fill="#e9d5ff"/>
  </g>
  <g>
    ${Array.from({length:12}).map((_,i)=>{const a=i*30*Math.PI/180;const r1=80;const r2=200;const x1=500+Math.cos(a)*r1;const y1=150+Math.sin(a)*r1;const x2=500+Math.cos(a)*r2;const y2=150+Math.sin(a)*r2;return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="#a855f7" stroke-width=".5" opacity=".4"><animate attributeName="opacity" values=".4;.8;.4" dur="${2+i%3}s" repeatCount="indefinite"/></line>`;}).join('')}
  </g>
  <g>
    <polygon points="500,500 460,560 540,560" fill="#1e1b4b" stroke="#a855f7" stroke-width="2"/>
    <ellipse cx="500" cy="500" rx="50" ry="20" fill="none" stroke="#7c3aed" stroke-width="2">
      <animate attributeName="rx" values="50;65;50" dur="3s" repeatCount="indefinite"/>
    </ellipse>
  </g>
  <text x="500" y="270" text-anchor="middle" font-family="Georgia,serif" font-size="48" font-weight="900" fill="#e9d5ff" font-style="italic">__NAME__</text>
  <text x="500" y="305" text-anchor="middle" font-family="monospace" font-size="16" fill="#a5b4fc" letter-spacing="4">__ROLE__</text>
  <text x="500" y="350" text-anchor="middle" font-family="monospace" font-size="14" fill="#7c3aed" letter-spacing="3">⚡ @__HANDLE__</text>
  <g fill="#fbbf24" opacity=".6">
    ${Array.from({length:8}).map((_,i)=>{const a=i*45*Math.PI/180;return `<text x="${800+Math.cos(a)*80}" y="${300+Math.sin(a)*60}" font-family="serif" font-size="14">★</text>`}).join('')}
  </g>
  <text x="500" y="580" text-anchor="middle" font-family="monospace" font-size="10" fill="#64748b" letter-spacing="2">~ magic.coder() · returns.success ~</text>
</svg>`;

// ---------- 12. MINECRAFT BLOCKY ----------
const minecraft = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 600" width="100%" height="100%">
  <defs>
    <linearGradient id="mcSky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#60a5fa"/><stop offset="100%" stop-color="#1e40af"/>
    </linearGradient>
  </defs>
  <rect width="1000" height="600" fill="url(#mcSky)" shape-rendering="crispEdges"/>
  ${Array.from({length:8}).map((_,i)=>`<rect x="${i*125-20}" y="20" width="80" height="40" fill="#fff" opacity=".9" shape-rendering="crispEdges"/>`).join('')}
  ${Array.from({length:6}).map((_,i)=>`<rect x="${50+i*150}" y="80" width="60" height="30" fill="#cbd5e1" opacity=".7" shape-rendering="crispEdges"/>`).join('')}
  <g shape-rendering="crispEdges">
    <rect x="0" y="380" width="1000" height="220" fill="#65a30d"/>
    <rect x="0" y="350" width="1000" height="30" fill="#84cc16"/>
    <rect x="0" y="330" width="1000" height="20" fill="#a3e635"/>
  </g>
  <g shape-rendering="crispEdges">
    <rect x="50" y="280" width="40" height="40" fill="#65a30d" opacity=".6"/>
    <rect x="850" y="290" width="50" height="50" fill="#65a30d" opacity=".6"/>
    <rect x="400" y="320" width="20" height="20" fill="#16a34a" opacity=".6"/>
    <rect x="600" y="310" width="30" height="30" fill="#16a34a" opacity=".6"/>
  </g>
  <g shape-rendering="crispEdges" transform="translate(200 280)">
    <rect x="0" y="20" width="50" height="60" fill="#92400e"/>
    <rect x="0" y="0" width="50" height="20" fill="#16a34a"/>
    <rect x="10" y="-20" width="30" height="20" fill="#0f172a"/>
    <rect x="10" y="-15" width="6" height="6" fill="#fff"/>
    <rect x="20" y="-15" width="6" height="6" fill="#fff"/>
    <rect x="13" y="-13" width="2" height="2" fill="#0f172a"/>
    <rect x="23" y="-13" width="2" height="2" fill="#0f172a"/>
    <rect x="15" y="-3" width="6" height="3" fill="#ef4444"/>
  </g>
  <g shape-rendering="crispEdges" transform="translate(600 260)">
    <rect x="0" y="0" width="60" height="60" fill="#6b3f1a"/>
    <rect x="0" y="0" width="60" height="20" fill="#92400e"/>
    <rect x="5" y="5" width="6" height="6" fill="#fff"/>
    <rect x="49" y="5" width="6" height="6" fill="#fff"/>
    <rect x="25" y="20" width="10" height="20" fill="#1a1a1a"/>
    <rect x="10" y="30" width="40" height="20" fill="#7c2d12"/>
  </g>
  <g shape-rendering="crispEdges" transform="translate(800 320)">
    <rect x="0" y="0" width="20" height="20" fill="#fbbf24"/>
    <rect x="0" y="0" width="20" height="20" fill="none" stroke="#000" stroke-width="1"/>
  </g>
  <g shape-rendering="crispEdges" transform="translate(150 350)">
    <rect x="0" y="0" width="20" height="20" fill="#16a34a"/>
    <rect x="0" y="0" width="20" height="20" fill="none" stroke="#000" stroke-width="1"/>
  </g>
  <g shape-rendering="crispEdges" transform="translate(400 200)">
    <rect x="0" y="0" width="200" height="30" fill="#0a0a0a" opacity=".8"/>
    <text x="100" y="22" text-anchor="middle" font-family="monospace" font-size="14" fill="#22c55e">__NAME__</text>
  </g>
  <text x="500" y="450" text-anchor="middle" font-family="monospace" font-size="20" fill="#0a0a0a" letter-spacing="2" font-weight="700">__NAME__</text>
  <text x="500" y="475" text-anchor="middle" font-family="monospace" font-size="14" fill="#1a1a1a" letter-spacing="2">__ROLE__</text>
  <text x="500" y="495" text-anchor="middle" font-family="monospace" font-size="10" fill="#444">@__HANDLE__</text>
  <text x="500" y="575" text-anchor="middle" font-family="monospace" font-size="10" fill="#1a1a1a" letter-spacing="2" opacity=".6">[ MINECRAFT MODE ENABLED ]</text>
</svg>`;

// ---------- 13. SNOWY MOUNTAIN ----------
const mountain = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 600" width="100%" height="100%">
  <defs>
    <linearGradient id="mtnSky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#1e3a8a"/><stop offset="50%" stop-color="#60a5fa"/><stop offset="100%" stop-color="#a5b4fc"/>
    </linearGradient>
  </defs>
  <rect width="1000" height="600" fill="url(#mtnSky)"/>
  <circle cx="800" cy="120" r="50" fill="#fef9c3" opacity=".9"/>
  <circle cx="800" cy="120" r="80" fill="#fef9c3" opacity=".2"/>
  ${Array.from({length:30}).map(()=>`<circle cx="${Math.random()*1000}" cy="${Math.random()*300}" r="${1+Math.random()*2}" fill="#fff" opacity=".9"/>`).join('')}
  <g fill="#0f172a"><polygon points="100,400 250,150 400,400"/><polygon points="300,400 500,80 700,400"/><polygon points="600,400 800,180 1000,400"/></g>
  <g fill="#1e293b"><polygon points="250,150 220,200 280,200"/><polygon points="500,80 460,150 540,150"/><polygon points="800,180 770,220 830,220"/></g>
  <g fill="#fff"><polygon points="240,170 250,150 260,170"/><polygon points="490,100 500,80 510,100"/><polygon points="790,200 800,180 810,200"/></g>
  <g fill="#475569"><polygon points="100,400 0,400 0,500 100,500"/><polygon points="200,400 100,400 200,500 350,500 350,400"/><polygon points="500,400 600,400 600,500 500,500"/><polygon points="700,400 800,400 800,500 700,500"/><polygon points="900,400 1000,400 1000,500 900,500"/></g>
  <g fill="#94a3b8">
    <rect x="100" y="450" width="800" height="50" opacity=".5"/>
    <rect x="0" y="500" width="1000" height="100" opacity=".4"/>
  </g>
  ${Array.from({length:8}).map((_,i)=>`<rect x="${100+i*100}" y="${500+Math.random()*50}" width="4" height="4" fill="#fff" opacity=".7"><animate attributeName="y" values="${500};${600}" dur="${2+i}s" repeatCount="indefinite"/></rect>`).join('')}
  <g transform="translate(750 460)">
    <line x1="0" y1="0" x2="0" y2="40" stroke="#78350f" stroke-width="2"/>
    <polygon points="-15,40 15,40 0,55" fill="#0f172a"/>
    <polygon points="-10,0 10,0 0,-10" fill="#0f172a"/>
  </g>
  <text x="500" y="180" text-anchor="middle" font-family="Georgia,serif" font-size="42" fill="#fff" font-weight="900">__NAME__</text>
  <text x="500" y="215" text-anchor="middle" font-family="monospace" font-size="16" fill="#fef3c7" letter-spacing="4">__ROLE__</text>
  <line x1="380" y1="240" x2="620" y2="240" stroke="#fef9c3" stroke-width="1" opacity=".5"/>
  <text x="500" y="270" text-anchor="middle" font-family="monospace" font-size="11" fill="#cbd5e1" letter-spacing="2">@__HANDLE__ · 2026</text>
  <text x="500" y="580" text-anchor="middle" font-family="monospace" font-size="10" fill="#94a3b8" letter-spacing="2" opacity=".6">~ peak altitude: 8,849m ~</text>
</svg>`;

// ---------- 14. PIXEL ART RETRO PC ----------
const pixelRetro = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 600" width="100%" height="100%">
  <defs>
    <linearGradient id="retroBg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#1a1a3e"/><stop offset="100%" stop-color="#0a0a1a"/>
    </linearGradient>
  </defs>
  <rect width="1000" height="600" fill="url(#retroBg)"/>
  <g fill="#0a0a1a" shape-rendering="crispEdges">
    <rect x="0" y="400" width="1000" height="200"/>
  </g>
  ${Array.from({length:20}).map((_,i)=>`<rect x="${i*50}" y="${400+(i%3)*5}" width="40" height="200" fill="#0f0a1a" shape-rendering="crispEdges"/>`).join('')}
  <g transform="translate(120 100)" shape-rendering="crispEdges">
    <rect x="0" y="0" width="180" height="120" fill="#0f172a" stroke="#22d3ee" stroke-width="2"/>
    <rect x="10" y="10" width="160" height="100" fill="#0a0a1a"/>
    <rect x="20" y="20" width="20" height="20" fill="#22d3ee"/><rect x="50" y="20" width="20" height="20" fill="#a855f7"/><rect x="80" y="20" width="20" height="20" fill="#f43f5e"/><rect x="110" y="20" width="20" height="20" fill="#10b981"/><rect x="140" y="20" width="20" height="20" fill="#fbbf24"/>
    <rect x="20" y="50" width="80" height="8" fill="#22c3ee"/>
    <rect x="20" y="65" width="120" height="8" fill="#a78bfa"/>
    <rect x="20" y="80" width="100" height="8" fill="#f472b6"/>
    <rect x="20" y="95" width="50" height="8" fill="#34d399"/>
  </g>
  <g transform="translate(330 60)" shape-rendering="crispEdges">
    <rect x="0" y="0" width="160" height="80" fill="#475569"/>
    <rect x="0" y="0" width="160" height="20" fill="#334155"/>
    <rect x="10" y="20" width="30" height="20" fill="#22d3ee"/>
    <rect x="50" y="20" width="30" height="20" fill="#f43f5e"/>
    <rect x="90" y="20" width="30" height="20" fill="#fbbf24"/>
    <rect x="130" y="20" width="20" height="20" fill="#10b981"/>
    <rect x="10" y="50" width="60" height="20" fill="#1e293b"/>
    <rect x="80" y="50" width="70" height="20" fill="#1e293b"/>
  </g>
  <g transform="translate(540 80)" shape-rendering="crispEdges">
    <rect x="0" y="0" width="120" height="160" fill="#0f172a" stroke="#a855f7" stroke-width="2"/>
    <rect x="10" y="10" width="100" height="100" fill="#0a0a1a"/>
    ${Array.from({length:8}).map((_,i)=>`<rect x="${20+i*12}" y="${20+(i%4)*20}" width="8" height="8" fill="#a855f7"/>`).join('')}
    <rect x="20" y="120" width="80" height="6" fill="#22d3ee"/>
    <rect x="20" y="130" width="60" height="6" fill="#a855f7"/>
    <rect x="20" y="140" width="40" height="6" fill="#f472b6"/>
  </g>
  <g transform="translate(700 100)" shape-rendering="crispEdges">
    <rect x="0" y="0" width="100" height="100" fill="#1a1a3e"/>
    <rect x="5" y="5" width="90" height="80" fill="#0a0a1a"/>
    <rect x="0" y="0" width="100" height="10" fill="#0f172a"/>
    <rect x="0" y="0" width="10" height="100" fill="#0f172a"/>
    <rect x="20" y="30" width="60" height="50" fill="#22d3ee" opacity=".6"/>
    <text x="50" y="55" text-anchor="middle" font-family="monospace" font-size="8" fill="#0a0a1a" font-weight="900">CODE</text>
  </g>
  <g transform="translate(820 130)" shape-rendering="crispEdges">
    <rect x="0" y="0" width="80" height="80" fill="#94a3b8" rx="4"/>
    <rect x="6" y="6" width="68" height="68" fill="#1a1a3e"/>
    <rect x="14" y="14" width="6" height="6" fill="#22d3ee"/>
    <rect x="22" y="14" width="6" height="6" fill="#22d3ee"/>
    <rect x="30" y="14" width="6" height="6" fill="#22d3ee"/>
    <rect x="46" y="14" width="6" height="6" fill="#22d3ee"/>
    <rect x="54" y="14" width="6" height="6" fill="#22d3ee"/>
    <rect x="62" y="14" width="6" height="6" fill="#22d3ee"/>
    <rect x="14" y="22" width="14" height="6" fill="#a855f7"/>
    <rect x="46" y="22" width="22" height="6" fill="#a855f7"/>
    <rect x="14" y="30" width="22" height="6" fill="#f43f5e"/>
    <rect x="46" y="30" width="6" height="6" fill="#f43f5e"/>
    <rect x="14" y="38" width="38" height="6" fill="#22d3ee"/>
  </g>
  <g fill="#7c3aed" opacity=".4">
    ${Array.from({length:30}).map((_,i)=>`<rect x="${(i*47)%1000}" y="${500+Math.random()*100}" width="2" height="${20+Math.random()*40}"/>`).join('')}
  </g>
  <text x="200" y="200" font-family="monospace" font-size="22" font-weight="700" fill="#0f172a" text-anchor="middle">__NAME__</text>
  <text x="200" y="225" font-family="monospace" font-size="11" fill="#1e1b4b" text-anchor="middle">__ROLE__</text>
  <text x="200" y="245" font-family="monospace" font-size="8" fill="#0f172a" text-anchor="middle">@__HANDLE__</text>
  <text x="500" y="565" text-anchor="middle" font-family="monospace" font-size="11" fill="#a78bfa" letter-spacing="2">[1986] CRT MONITOR · AUTH &#60;3</text>
  <text x="500" y="582" text-anchor="middle" font-family="monospace" font-size="9" fill="#7c3aed" letter-spacing="2">@__HANDLE__ · v.2.0 · 2026</text>
</svg>`;

// ---------- 15. TROPICAL SUNSET ----------
const tropical = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 600" width="100%" height="100%">
  <defs>
    <linearGradient id="tropSky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#1e1b4b"/><stop offset="30%" stop-color="#7c2d12"/><stop offset="60%" stop-color="#f97316"/><stop offset="80%" stop-color="#fbbf24"/><stop offset="100%" stop-color="#fef3c7"/>
    </linearGradient>
    <radialGradient id="sunTrop" cx="50%" cy="50%">
      <stop offset="0%" stop-color="#fef3c7"/><stop offset="100%" stop-color="#fbbf24" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1000" height="600" fill="url(#tropSky)"/>
  <circle cx="500" cy="400" r="80" fill="url(#sunTrop)"/>
  <circle cx="500" cy="400" r="50" fill="#fef9c3"/>
  <g stroke="#000" stroke-width="1" opacity=".3">
    <line x1="380" y1="380" x2="620" y2="380"/>
    <line x1="370" y1="395" x2="630" y2="395"/>
    <line x1="360" y1="410" x2="640" y2="410"/>
    <line x1="350" y1="425" x2="650" y2="425"/>
  </g>
  ${Array.from({length:15}).map((_,i)=>`<line x1="${50+i*70}" y1="200" x2="${50+i*70-30}" y2="450" stroke="#1a1a1a" stroke-width=".5" opacity=".4"/>`).join('')}
  <path d="M0 450 Q100 440 200 450 Q300 460 400 450 Q500 440 600 450 Q700 460 800 450 Q900 440 1000 450 L1000 600 L0 600 Z" fill="#0c0a1a" opacity=".6"/>
  <path d="M0 480 Q200 470 400 480 Q600 490 800 480 Q900 470 1000 480 L1000 600 L0 600 Z" fill="#000"/>
  <g transform="translate(100 350)">
    <line x1="0" y1="0" x2="0" y2="100" stroke="#0f172a" stroke-width="3"/>
    <g fill="#0f172a" shape-rendering="crispEdges">
      <ellipse cx="-15" cy="0" rx="20" ry="8"/>
      <ellipse cx="20" cy="-10" rx="15" ry="6"/>
      <ellipse cx="-5" cy="-30" rx="10" ry="5"/>
    </g>
  </g>
  <g transform="translate(800 360)">
    <line x1="0" y1="0" x2="0" y2="100" stroke="#0f172a" stroke-width="3"/>
    <g fill="#0f172a" shape-rendering="crispEdges">
      <ellipse cx="20" cy="0" rx="20" ry="8"/>
      <ellipse cx="-10" cy="-15" rx="12" ry="5"/>
    </g>
  </g>
  <text x="500" y="180" text-anchor="middle" font-family="Georgia,serif" font-size="48" font-weight="900" fill="#fff" font-style="italic">__NAME__</text>
  <text x="500" y="220" text-anchor="middle" font-family="monospace" font-size="18" fill="#fef3c7" letter-spacing="6">__ROLE__</text>
  <line x1="400" y1="245" x2="600" y2="245" stroke="#fef3c7" stroke-width="1" opacity=".6"/>
  <text x="500" y="280" text-anchor="middle" font-family="monospace" font-size="12" fill="#fde68a" letter-spacing="3">@__HANDLE__</text>
  <text x="500" y="555" text-anchor="middle" font-family="monospace" font-size="10" fill="#fef3c7" letter-spacing="2" opacity=".5">☀ golden hour · 2026</text>
</svg>`;

// ---------- 16. CHESS / ROYALTY ----------
const royal = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 600" width="100%" height="100%">
  <defs>
    <linearGradient id="royalBg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#1c1917"/><stop offset="100%" stop-color="#0c0a09"/>
    </linearGradient>
    <linearGradient id="gold" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#fef9c3"/><stop offset="50%" stop-color="#fde68a"/><stop offset="100%" stop-color="#d97706"/>
    </linearGradient>
    <filter id="goldGlow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="2" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <rect width="1000" height="600" fill="url(#royalBg)"/>
  <g opacity=".15">
    <pattern id="diamonds" width="30" height="30" patternUnits="userSpaceOnUse">
      <polygon points="15,5 25,15 15,25 5,15" fill="#d97706"/>
    </pattern>
    <rect width="1000" height="600" fill="url(#diamonds)"/>
  </g>
  <g fill="url(#gold)" filter="url(#goldGlow)" opacity=".8">
    <circle cx="500" cy="120" r="40" fill="none" stroke="url(#gold)" stroke-width="2"><animate attributeName="r" values="40;55;40" dur="3s" repeatCount="indefinite"/></circle>
  </g>
  <g transform="translate(500 80)">
    <polygon points="0,0 -15,30 15,30" fill="url(#gold)"/>
    <rect x="-3" y="30" width="6" height="20" fill="url(#gold)"/>
    <circle cx="0" cy="58" r="6" fill="url(#gold)"/>
  </g>
  <g transform="translate(120 380)">
    <rect x="-30" y="0" width="60" height="80" fill="none" stroke="url(#gold)" stroke-width="2"/>
    <polygon points="0,80 -30,80 -30,100 30,100 30,80" fill="url(#gold)"/>
    <polygon points="-20,0 -10,15 10,15 20,0" fill="url(#gold)"/>
    <line x1="-30" y1="50" x2="30" y2="50" stroke="url(#gold)" stroke-width="1"/>
  </g>
  <g transform="translate(880 380)">
    <rect x="-30" y="0" width="60" height="80" fill="none" stroke="url(#gold)" stroke-width="2"/>
    <polygon points="0,80 -30,80 -30,100 30,100 30,80" fill="url(#gold)"/>
    <polygon points="-20,0 -10,15 10,15 20,0" fill="url(#gold)"/>
    <line x1="-30" y1="50" x2="30" y2="50" stroke="url(#gold)" stroke-width="1"/>
  </g>
  <text x="500" y="220" text-anchor="middle" font-family="Georgia,serif" font-size="56" font-weight="900" fill="url(#gold)" letter-spacing="2" filter="url(#goldGlow)">__NAME__</text>
  <text x="500" y="260" text-anchor="middle" font-family="monospace" font-size="16" fill="#fde68a" letter-spacing="6" font-style="italic">__ROLE__</text>
  <g stroke="url(#gold)" stroke-width="1" opacity=".5">
    <line x1="300" y1="285" x2="700" y2="285"/>
    <circle cx="500" cy="285" r="3" fill="url(#gold)" stroke="none"/>
  </g>
  <text x="500" y="320" text-anchor="middle" font-family="monospace" font-size="13" fill="#fef9c3" letter-spacing="3">@__HANDLE__</text>
  <text x="500" y="550" text-anchor="middle" font-family="monospace" font-size="10" fill="#a16207" letter-spacing="3" opacity=".6">⚜ KING OF THE REPO · 2026 ⚜</text>
  <g fill="#fde68a" opacity=".7">
    ${Array.from({length:8}).map((_,i)=>`<circle cx="${100+i*110}" cy="${300+Math.sin(i)*30}" r="2"><animate attributeName="cy" values="${300+Math.sin(i)*30};${300+Math.cos(i)*30};${300+Math.sin(i)*30}" dur="${3+i*.5}s" repeatCount="indefinite"/></circle>`).join('')}
  </g>
</svg>`;

// ---------- 17. WINTER HOLIDAY ----------
const holiday = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 600" width="100%" height="100%">
  <defs>
    <linearGradient id="holSky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#1e3a8a"/><stop offset="100%" stop-color="#7c3aed"/>
    </linearGradient>
    <radialGradient id="treeGlow" cx="50%" cy="50%">
      <stop offset="0%" stop-color="#10b981" stop-opacity=".4"/><stop offset="100%" stop-color="#10b981" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1000" height="600" fill="url(#holSky)"/>
  ${Array.from({length:50}).map(()=>`<circle cx="${Math.random()*1000}" cy="${Math.random()*500}" r="${1+Math.random()*3}" fill="#fff" opacity=".9"><animate attributeName="cy" values="${Math.random()*500};${Math.random()*500+50}" dur="${3+Math.random()*4}s" repeatCount="indefinite"/></circle>`).join('')}
  <g transform="translate(500 380)">
    <rect x="-20" y="100" width="40" height="50" fill="#78350f"/>
    <polygon points="0,-100 -100,0 100,0" fill="url(#treeGlow)"/>
    <polygon points="0,-100 -100,0 100,0" fill="#10b981"/>
    <polygon points="0,-30 -80,60 80,60" fill="url(#treeGlow)"/>
    <polygon points="0,-30 -80,60 80,60" fill="#059669"/>
    <polygon points="0,30 -60,100 60,100" fill="url(#treeGlow)"/>
    <polygon points="0,30 -60,100 60,100" fill="#047857"/>
    <polygon points="0,-110 -5,-100 5,-100" fill="#fbbf24"/>
    <circle cx="-20" cy="20" r="4" fill="#dc2626"><animate attributeName="opacity" values="1;.3;1" dur="2s" repeatCount="indefinite"/></circle>
    <circle cx="20" cy="-30" r="4" fill="#fbbf24"><animate attributeName="opacity" values="1;.3;1" dur="2.5s" repeatCount="indefinite"/></circle>
    <circle cx="0" cy="60" r="4" fill="#3b82f6"><animate attributeName="opacity" values="1;.3;1" dur="1.8s" repeatCount="indefinite"/></circle>
    <circle cx="-30" cy="80" r="4" fill="#a855f7"><animate attributeName="opacity" values="1;.3;1" dur="2.2s" repeatCount="indefinite"/></circle>
    <circle cx="30" cy="80" r="4" fill="#f97316"><animate attributeName="opacity" values="1;.3;1" dur="1.6s" repeatCount="indefinite"/></circle>
  </g>
  <g fill="#dc2626">
    <rect x="100" y="50" width="8" height="20"/><rect x="95" y="55" width="18" height="10"/><rect x="98" y="60" width="12" height="2" fill="#fff"/>
  </g>
  <g fill="#10b981">
    <rect x="892" y="50" width="8" height="20"/><rect x="887" y="55" width="18" height="10"/>
  </g>
  <g fill="#fbbf24">
    <rect x="892" y="500" width="8" height="20"/><rect x="887" y="505" width="18" height="10"/>
  </g>
  <g fill="#3b82f6">
    <rect x="100" y="500" width="8" height="20"/><rect x="95" y="505" width="18" height="10"/>
  </g>
  ${Array.from({length:15}).map((_,i)=>`<circle cx="${150+i*60}" cy="${150+(i%3)*120}" r="2" fill="#dc2626"><animate attributeName="opacity" values=".3;1;.3" dur="${1+i*.3}s" repeatCount="indefinite"/></circle>`).join('')}
  <text x="500" y="80" text-anchor="middle" font-family="Georgia,serif" font-size="44" fill="#fff" font-weight="900">__NAME__</text>
  <text x="500" y="115" text-anchor="middle" font-family="monospace" font-size="16" fill="#fbbf24" letter-spacing="6">__ROLE__</text>
  <text x="500" y="555" text-anchor="middle" font-family="monospace" font-size="14" fill="#fef9c3" letter-spacing="2">@__HANDLE__ · 2026 · happy coding</text>
</svg>`;

// ---------- 18. NEURAL / AI BRAIN ----------
const neural = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 600" width="100%" height="100%">
  <defs>
    <radialGradient id="brainBg" cx="50%" cy="50%">
      <stop offset="0%" stop-color="#0c0a4a"/><stop offset="100%" stop-color="#000"/>
    </radialGradient>
    <radialGradient id="synapse" cx="50%" cy="50%">
      <stop offset="0%" stop-color="#22d3ee" stop-opacity=".8"/><stop offset="100%" stop-color="#22d3ee" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1000" height="600" fill="url(#brainBg)"/>
  <g stroke="#22d3ee" stroke-width=".5" opacity=".4">
    ${Array.from({length:20}).map((_,i)=>{const a1=(i*18*Math.PI/180);const a2=((i+5)*18*Math.PI/180);const x1=500+Math.cos(a1)*200;const y1=300+Math.sin(a1)*150;const x2=500+Math.cos(a2)*220;const y2=300+Math.sin(a2)*160;return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}"/>`;}).join('')}
  </g>
  ${Array.from({length:14}).map((_,i)=>{const a=i*25*Math.PI/180;const x=500+Math.cos(a)*200;const y=300+Math.sin(a)*150;return `<circle cx="${x}" cy="${y}" r="8" fill="url(#synapse)"><animate attributeName="r" values="6;14;6" dur="${2+i*.3}s" repeatCount="indefinite"/><animate attributeName="opacity" values=".5;1;.5" dur="${2+i*.3}s" repeatCount="indefinite"/></circle>`}).join('')}
  <g transform="translate(500 300)">
    <circle r="50" fill="#22d3ee" opacity=".3"><animate attributeName="r" values="50;65;50" dur="2s" repeatCount="indefinite"/></circle>
    <circle r="35" fill="#a78bfa" opacity=".6">
      <animateTransform attributeName="transform" type="rotate" values="0;360" dur="8s" repeatCount="indefinite"/>
    </circle>
    <circle r="20" fill="#22d3ee" filter="url(#synapse)"/>
    <g fill="#fff" font-family="monospace" font-size="6">
      ${Array.from({length:6}).map((_,i)=>{const a=i*60*Math.PI/180;return `<text x="${Math.cos(a)*30}" y="${Math.sin(a)*30+2}">01</text>`;}).join('')}
    </g>
  </g>
  <g>
    ${Array.from({length:8}).map((_,i)=>{const x=100+i*100;return `<line x1="${x}" y1="50" x2="${x+30}" y2="50" stroke="#a78bfa" stroke-width="1.5" opacity=".5"><animate attributeName="x2" values="${x+30};${x+50};${x+30}" dur="2s" begin="${i*.2}s" repeatCount="indefinite"/></line>`;}).join('')}
  </g>
  <text x="500" y="80" text-anchor="middle" font-family="monospace" font-size="11" fill="#22d3ee" letter-spacing="3" opacity=".6">&gt; initializing neural network</text>
  <text x="500" y="200" text-anchor="middle" font-family="Georgia,serif" font-size="48" fill="#e0e7ff" font-weight="900">__NAME__</text>
  <text x="500" y="240" text-anchor="middle" font-family="monospace" font-size="16" fill="#a78bfa" letter-spacing="4">__ROLE__</text>
  <text x="500" y="450" text-anchor="middle" font-family="monospace" font-size="11" fill="#94a3b8" letter-spacing="3" opacity=".6">@__HANDLE__</text>
  <text x="500" y="540" text-anchor="middle" font-family="monospace" font-size="10" fill="#22d3ee" letter-spacing="2" opacity=".4">~ 1.7B parameters · 2026 ~</text>
</svg>`;

// ---------- 19. RAINBOW GRADIENT ----------
const rainbow = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 600" width="100%" height="100%">
  <defs>
    <linearGradient id="rainbowBg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#f0f9ff"/><stop offset="50%" stop-color="#fef3c7"/><stop offset="100%" stop-color="#fce7f3"/>
    </linearGradient>
    <linearGradient id="rainbowArc" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#ef4444"/><stop offset="20%" stop-color="#f59e0b"/><stop offset="40%" stop-color="#eab308"/><stop offset="60%" stop-color="#22c55e"/><stop offset="80%" stop-color="#3b82f6"/><stop offset="100%" stop-color="#a855f7"/>
    </linearGradient>
  </defs>
  <rect width="1000" height="600" fill="url(#rainbowBg)"/>
  ${Array.from({length:5}).map((_,i)=>`<path d="M ${100-i*15} 400 Q 500 ${150-i*30} ${900+i*15} 400" fill="none" stroke="url(#rainbowArc)" stroke-width="${16-i*2}" opacity="${.85-i*.12}"/>`).join('')}
  <g fill="#fff" opacity=".6">
    <ellipse cx="200" cy="150" rx="25" ry="10"/><ellipse cx="320" cy="120" rx="30" ry="12"/><ellipse cx="450" cy="100" rx="40" ry="15"/><ellipse cx="600" cy="100" rx="35" ry="14"/><ellipse cx="750" cy="130" rx="30" ry="11"/><ellipse cx="850" cy="160" rx="20" ry="8"/>
  </g>
  <g fill="#1a1a1a" opacity=".4">
    <path d="M100 400 L120 410 L150 405 L200 415 L280 400 L360 410 L500 395 L640 410 L720 400 L800 415 L880 405 L900 400 L900 600 L100 600 Z"/>
  </g>
  <g fill="#1a1a1a" opacity=".3">
    ${Array.from({length:5}).map((_,i)=>{const x=180+i*150;return `<ellipse cx="${x}" cy="${500-Math.sin(i*2)*30}" rx="15" ry="8"/>`}).join('')}
  </g>
  <g fill="#10b981">
    <rect x="500" y="395" width="3" height="100"/>
    <polygon points="500,395 510,395 506,385" fill="#1a1a1a"/>
  </g>
  ${Array.from({length:5}).map((_,i)=>`<rect x="${180+i*150}" y="${490-Math.sin(i*2)*30}" width="3" height="${100+Math.sin(i*2)*30}" fill="#78350f"/>`).join('')}
  <text x="500" y="290" text-anchor="middle" font-family="Georgia,serif" font-size="52" font-weight="900" fill="#1e293b">__NAME__</text>
  <text x="500" y="335" text-anchor="middle" font-family="monospace" font-size="18" fill="#7c3aed" letter-spacing="4" font-style="italic">__ROLE__</text>
  <text x="500" y="380" text-anchor="middle" font-family="monospace" font-size="13" fill="#475569" letter-spacing="2">github.com/__HANDLE__</text>
  <text x="500" y="555" text-anchor="middle" font-family="monospace" font-size="10" fill="#64748b" letter-spacing="2" opacity=".6">~ colorful dev · 2026 ~</text>
</svg>`;

// ---------- 20. COMIC / POP-ART ----------
const comic = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 600" width="100%" height="100%">
  <defs>
    <pattern id="halftone" x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse">
      <circle cx="6" cy="6" r="2" fill="#0a0a1a" opacity=".15"/>
    </pattern>
  </defs>
  <rect width="1000" height="600" fill="#fef9c3"/>
  <rect width="1000" height="600" fill="url(#halftone)"/>
  <g stroke="#0a0a1a" stroke-width="4" fill="#fbbf24">
    <polygon points="500,60 470,100 530,100" transform="rotate(0 500 100)"/>
    <polygon points="500,60 470,100 530,100" transform="rotate(45 500 100)"/>
    <polygon points="500,60 470,100 530,100" transform="rotate(90 500 100)"/>
    <polygon points="500,60 470,100 530,100" transform="rotate(135 500 100)"/>
    <polygon points="500,60 470,100 530,100" transform="rotate(180 500 100)"/>
    <polygon points="500,60 470,100 530,100" transform="rotate(225 500 100)"/>
    <polygon points="500,60 470,100 530,100" transform="rotate(270 500 100)"/>
    <polygon points="500,60 470,100 530,100" transform="rotate(315 500 100)"/>
  </g>
  <text x="500" y="180" text-anchor="middle" font-family="Impact,sans-serif" font-size="64" font-weight="900" fill="#dc2626" stroke="#0a0a1a" stroke-width="3" transform="rotate(-3 500 180)">__NAME__</text>
  <text x="500" y="220" text-anchor="middle" font-family="Impact,sans-serif" font-size="22" fill="#0a0a1a" transform="rotate(2 500 220)">SAYS HI!!</text>
  <g transform="translate(500 290)">
    <ellipse rx="240" ry="40" fill="#fff" stroke="#0a0a1a" stroke-width="3"/>
    <text text-anchor="middle" y="6" font-family="monospace" font-size="16" fill="#0a0a1a" font-weight="700">__ROLE__</text>
  </g>
  <g transform="translate(500 360)">
    <rect x="-110" y="-15" width="220" height="30" fill="#fbbf24" stroke="#0a0a1a" stroke-width="3" transform="rotate(-2)"/>
    <text text-anchor="middle" y="6" font-family="monospace" font-size="14" fill="#0a0a1a" font-weight="700">github.com/__HANDLE__</text>
  </g>
  <g transform="translate(150 480)" fill="#dc2626" stroke="#0a0a1a" stroke-width="3">
    <polygon points="0,0 60,-30 50,0 70,15 20,10"/>
    <text x="35" y="-10" text-anchor="middle" font-family="Impact,sans-serif" font-size="18" fill="#fef9c3" font-weight="900">POW!</text>
  </g>
  <g transform="translate(800 480)" fill="#3b82f6" stroke="#0a0a1a" stroke-width="3">
    <polygon points="0,0 -60,-30 -50,0 -70,15 -20,10"/>
    <text x="-35" y="-10" text-anchor="middle" font-family="Impact,sans-serif" font-size="18" fill="#fef9c3" font-weight="900">ZAP!</text>
  </g>
  <text x="500" y="565" text-anchor="middle" font-family="monospace" font-size="10" fill="#0a0a1a" letter-spacing="2" font-weight="700">2026 · COMIC ISSUE #1 · @__HANDLE__</text>
</svg>`;

// ---------- 21. LAVA / VOLCANO ----------
const lava = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 600" width="100%" height="100%">
  <defs>
    <linearGradient id="lavaBg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#1a0a1a"/><stop offset="50%" stop-color="#7c2d12"/><stop offset="100%" stop-color="#ea580c"/>
    </linearGradient>
    <radialGradient id="lavaGlow" cx="50%" cy="100%">
      <stop offset="0%" stop-color="#fbbf24" stop-opacity=".6"/><stop offset="100%" stop-color="#fbbf24" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1000" height="600" fill="url(#lavaBg)"/>
  <ellipse cx="500" cy="500" rx="500" ry="200" fill="url(#lavaGlow)"/>
  ${Array.from({length:15}).map((_,i)=>`<circle cx="${100+i*60}" cy="${350+Math.abs(Math.sin(i*2))*100}" r="${2+Math.random()*4}" fill="#fbbf24" opacity=".8"><animate attributeName="cy" values="${350};${200};${350}" dur="${2+i*.2}s" repeatCount="indefinite"/><animate attributeName="opacity" values=".3;1;.3" dur="${1+i*.15}s" repeatCount="indefinite"/></circle>`).join('')}
  ${Array.from({length:8}).map((_,i)=>`<ellipse cx="${500+(i%4-2)*80}" cy="${380+Math.floor(i/4)*30}" rx="${30+i*3}" ry="8" fill="#dc2626" opacity=".8"><animate attributeName="rx" values="${30+i*3};${35+i*3};${30+i*3}" dur="1.5+i*.2}s" repeatCount="indefinite"/></ellipse>`).join('')}
  <g fill="#0a0a0a">
    <polygon points="0,420 200,380 300,440 450,360 600,420 800,380 1000,420 1000,600 0,600"/>
  </g>
  ${Array.from({length:10}).map((_,i)=>`<path d="M${i*100+50} 420 L${i*100+30} 600 L${i*100+70} 600 Z" fill="#7c2d12" opacity=".5"/>`).join('')}
  <text x="500" y="120" text-anchor="middle" font-family="Georgia,serif" font-size="48" font-weight="900" fill="#fef3c7">__NAME__</text>
  <text x="500" y="158" text-anchor="middle" font-family="monospace" font-size="16" fill="#fbbf24" letter-spacing="6">__ROLE__</text>
  <text x="500" y="195" text-anchor="middle" font-family="monospace" font-size="12" fill="#fed7aa" letter-spacing="3">@__HANDLE__</text>
  <g fill="#fbbf24" opacity=".6">
    ${Array.from({length:5}).map((_,i)=>`<polygon points="${100+i*200},330 ${110+i*200},310 ${120+i*200},330 ${110+i*200},350" transform="rotate(0 ${110+i*200} 330)"><animateTransform attributeName="transform" type="rotate" values="0 ${110+i*200} 330;360 ${110+i*200} 330" dur="${2+i*.3}s" repeatCount="indefinite"/></polygon>`).join('')}
  </g>
  <text x="500" y="555" text-anchor="middle" font-family="monospace" font-size="10" fill="#fed7aa" letter-spacing="2" opacity=".6">~ molten magma · 1200°C · 2026 ~</text>
</svg>`;

// ---------- 22. ARCTIC / SNOWFALL ----------
const arctic = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 600" width="100%" height="100%">
  <defs>
    <linearGradient id="arcticSky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#dbeafe"/><stop offset="60%" stop-color="#bfdbfe"/><stop offset="100%" stop-color="#e0f2fe"/>
    </linearGradient>
  </defs>
  <rect width="1000" height="600" fill="url(#arcticSky)"/>
  ${Array.from({length:60}).map((_,i)=>`<circle cx="${(i*37)%1000}" cy="${(i*53)%400}" r="${1+Math.random()*2}" fill="#fff"><animate attributeName="cy" values="${(i*53)%400};${((i*53)%400)+50}" dur="${3+Math.random()*4}s" repeatCount="indefinite"/><animate attributeName="opacity" values=".5;1;.5" dur="${1+Math.random()*2}s" repeatCount="indefinite"/></circle>`).join('')}
  <g fill="#0a4a6e" opacity=".4">
    <path d="M0 400 L150 250 L300 320 L450 200 L600 280 L800 180 L1000 240 L1000 400 Z"/>
  </g>
  <g fill="#bae6fd">
    <path d="M0 430 L150 320 L300 380 L450 280 L600 350 L800 260 L1000 310 L1000 430 Z"/>
  </g>
  <g fill="#fff">
    <path d="M0 460 L200 380 L350 420 L500 350 L700 400 L850 360 L1000 400 L1000 460 Z"/>
  </g>
  <g fill="#f0f9ff">
    <rect x="0" y="460" width="1000" height="140"/>
  </g>
  ${Array.from({length:20}).map((_,i)=>`<ellipse cx="${50+i*50}" cy="${540-Math.sin(i)*15}" rx="${15+Math.abs(Math.cos(i*2))*8}" ry="${6+Math.abs(Math.sin(i*2))*3}" fill="#fff" opacity=".9"/>`).join('')}
  <g transform="translate(750 380)">
    <ellipse cx="0" cy="0" rx="35" ry="25" fill="#fff" stroke="#7dd3fc" stroke-width="2"/>
    <ellipse cx="-10" cy="-5" rx="3" ry="4" fill="#0f172a"/><ellipse cx="10" cy="-5" rx="3" ry="4" fill="#0f172a"/>
    <polygon points="0,0 -3,8 3,8" fill="#f97316"/>
    <ellipse cx="-20" cy="5" rx="3" ry="2" fill="#fda4af" opacity=".7"/><ellipse cx="20" cy="5" rx="3" ry="2" fill="#fda4af" opacity=".7"/>
  </g>
  <g transform="translate(200 400)">
    <ellipse cx="0" cy="0" rx="25" ry="18" fill="#fff" stroke="#7dd3fc" stroke-width="1.5"/>
    <ellipse cx="-7" cy="-3" rx="2" ry="3" fill="#0f172a"/><ellipse cx="7" cy="-3" rx="2" ry="3" fill="#0f172a"/>
    <polygon points="0,2 -2,7 2,7" fill="#f97316"/>
  </g>
  <text x="500" y="120" text-anchor="middle" font-family="Georgia,serif" font-size="48" font-weight="900" fill="#0c4a6e" letter-spacing="1">__NAME__</text>
  <text x="500" y="158" text-anchor="middle" font-family="monospace" font-size="16" fill="#0284c7" letter-spacing="6">__ROLE__</text>
  <line x1="380" y1="180" x2="620" y2="180" stroke="#7dd3fc" stroke-width="2" opacity=".5"/>
  <text x="500" y="210" text-anchor="middle" font-family="monospace" font-size="12" fill="#0e7490" letter-spacing="3">@__HANDLE__</text>
  <text x="500" y="565" text-anchor="middle" font-family="monospace" font-size="10" fill="#0284c7" letter-spacing="2" opacity=".5">❄ -8°C · aurora · 2026 ❄</text>
</svg>`;

// ---------- 23. CONCRETE / MONOCHROME INDUSTRIAL ----------
const concrete = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 600" width="100%" height="100%">
  <defs>
    <linearGradient id="concBg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#52525b"/><stop offset="100%" stop-color="#27272a"/>
    </linearGradient>
  </defs>
  <rect width="1000" height="600" fill="url(#concBg)"/>
  ${Array.from({length:30}).map((_,i)=>`<rect x="${(i*67)%1000}" y="${(i*113)%600}" width="${20+Math.random()*60}" height="${1+Math.random()*2}" fill="#71717a" opacity=".4"/>`).join('')}
  ${Array.from({length:10}).map((_,i)=>`<circle cx="${(i*143)%1000}" cy="${(i*97)%600}" r="${2+Math.random()*5}" fill="#fafafa" opacity=".3"/>`).join('')}
  <g stroke="#fafafa" stroke-width="1" opacity=".4" fill="none">
    <line x1="0" y1="200" x2="1000" y2="200"/>
    <line x1="0" y1="400" x2="1000" y2="400"/>
    ${Array.from({length:5}).map((_,i)=>`<line x1="0" y1="${200+i*50}" x2="40" y2="${200+i*50}"/><line x1="960" y1="${200+i*50}" x2="1000" y2="${200+i*50}"/>`).join('')}
  </g>
  <text x="500" y="200" text-anchor="middle" font-family="monospace" font-size="10" fill="#fafafa" letter-spacing="6" opacity=".4">// CONCRETE.JS · NO FRAMEWORK · NO LIMITS</text>
  <text x="500" y="280" text-anchor="middle" font-family="Impact,sans-serif" font-size="72" font-weight="900" fill="#fafafa" letter-spacing="4">__NAME__</text>
  <text x="500" y="325" text-anchor="middle" font-family="monospace" font-size="16" fill="#a3e635" letter-spacing="6" font-weight="700">__ROLE__</text>
  <line x1="400" y1="345" x2="600" y2="345" stroke="#fafafa" stroke-width="1" opacity=".5"/>
  <text x="500" y="380" text-anchor="middle" font-family="monospace" font-size="13" fill="#a1a1aa" letter-spacing="3">github.com/__HANDLE__</text>
  <g>
    <rect x="100" y="500" width="6" height="60" fill="#fafafa" opacity=".3"><animate attributeName="y" values="500;450;500" dur="2s" repeatCount="indefinite"/></rect>
    <rect x="200" y="500" width="6" height="60" fill="#fafafa" opacity=".3"><animate attributeName="y" values="500;450;500" dur="2.5s" repeatCount="indefinite"/></rect>
    <rect x="300" y="500" width="6" height="60" fill="#fafafa" opacity=".3"><animate attributeName="y" values="500;450;500" dur="2.2s" repeatCount="indefinite"/></rect>
    <rect x="700" y="500" width="6" height="60" fill="#fafafa" opacity=".3"><animate attributeName="y" values="500;450;500" dur="2.4s" repeatCount="indefinite"/></rect>
    <rect x="800" y="500" width="6" height="60" fill="#fafafa" opacity=".3"><animate attributeName="y" values="500;450;500" dur="2.6s" repeatCount="indefinite"/></rect>
    <rect x="900" y="500" width="6" height="60" fill="#fafafa" opacity=".3"><animate attributeName="y" values="500;450;500" dur="2.3s" repeatCount="indefinite"/></rect>
  </g>
  <text x="500" y="565" text-anchor="middle" font-family="monospace" font-size="10" fill="#71717a" letter-spacing="2" opacity=".6">[ BRUTALIST ENGINEER · 2026 ]</text>
</svg>`;

// ---------- 24. GARDEN / FLORAL ----------
const garden = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 600" width="100%" height="100%">
  <defs>
    <linearGradient id="gardenSky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#fef3c7"/><stop offset="100%" stop-color="#d9f99d"/>
    </linearGradient>
  </defs>
  <rect width="1000" height="600" fill="url(#gardenSky)"/>
  <g fill="#86efac" opacity=".5">
    <ellipse cx="100" cy="100" rx="50" ry="20"/><ellipse cx="200" cy="60" rx="60" ry="20"/><ellipse cx="350" cy="80" rx="40" ry="15"/>
    <ellipse cx="600" cy="50" rx="50" ry="20"/><ellipse cx="800" cy="80" rx="60" ry="25"/><ellipse cx="900" cy="100" rx="50" ry="18"/>
  </g>
  <g fill="#fde047">
    <circle cx="180" cy="80" r="20"/><circle cx="170" cy="70" r="10"/><circle cx="190" cy="70" r="10"/><circle cx="170" cy="90" r="10"/><circle cx="190" cy="90" r="10"/><circle cx="180" cy="80" r="8" fill="#f97316"/>
    <circle cx="720" cy="70" r="20"/><circle cx="710" cy="60" r="10"/><circle cx="730" cy="60" r="10"/><circle cx="710" cy="80" r="10"/><circle cx="730" cy="80" r="10"/><circle cx="720" cy="70" r="8" fill="#f97316"/>
  </g>
  <g>
    ${Array.from({length:5}).map((_,i)=>{const x=100+i*180;return `<g transform="translate(${x} 360)"><line x1="0" y1="0" x2="0" y2="100" stroke="#22c55e" stroke-width="3"/><ellipse cx="0" cy="0" rx="15" ry="6" fill="#fbbf24"><animate attributeName="cx" values="-5;5;-5" dur="${2+i*.3}s" repeatCount="indefinite"/></ellipse><circle cx="0" cy="-3" r="10" fill="#f59e0b"/><circle cx="-5" cy="-5" r="6" fill="#fde047"/><circle cx="5" cy="-5" r="6" fill="#fde047"/><circle cx="0" cy="-8" r="5" fill="#fde047"/></g>`;}).join('')}
  </g>
  <g>
    ${Array.from({length:4}).map((_,i)=>{const x=180+i*200;return `<g transform="translate(${x} 380)"><line x1="0" y1="0" x2="0" y2="80" stroke="#16a34a" stroke-width="3"/><circle cx="0" cy="0" r="15" fill="#a855f7"/><circle cx="-3" cy="-3" r="5" fill="#c084fc"/><circle cx="5" cy="-2" r="5" fill="#d8b4fe"/></g>`;}).join('')}
  </g>
  ${Array.from({length:15}).map((_,i)=>`<ellipse cx="${(i*73)%1000}" cy="${500+Math.random()*50}" rx="${20+Math.random()*15}" ry="${3+Math.random()*4}" fill="#10b981" opacity=".7"/>`).join('')}
  <rect x="0" y="530" width="1000" height="70" fill="#78350f" opacity=".4"/>
  <g fill="#3b1d0e" opacity=".5">
    ${Array.from({length:8}).map((_,i)=>`<rect x="${50+i*125}" y="540" width="3" height="50"/>`).join('')}
  </g>
  ${Array.from({length:3}).map((_,i)=>`<g><animateTransform attributeName="transform" type="translate" values="${200+i*200} 150;${200+i*200+Math.sin(i*2)*30} 130;${200+i*200} 150" dur="${3+i}s" repeatCount="indefinite"/><path d="M0 0 Q -10 -10 0 -20 Q 10 -10 0 0" fill="#fff" stroke="#cbd5e1" stroke-width="1"/><circle cx="0" cy="-3" r="1.5" fill="#0f172a"/></g>`).join('')}
  <text x="500" y="180" text-anchor="middle" font-family="Georgia,serif" font-size="48" font-weight="900" fill="#15803d" font-style="italic">__NAME__</text>
  <text x="500" y="220" text-anchor="middle" font-family="monospace" font-size="16" fill="#166534" letter-spacing="4">__ROLE__</text>
  <line x1="380" y1="240" x2="620" y2="240" stroke="#16a34a" stroke-width="1" opacity=".5"/>
  <text x="500" y="275" text-anchor="middle" font-family="monospace" font-size="12" fill="#15803d" letter-spacing="3">@__HANDLE__</text>
  <text x="500" y="510" text-anchor="middle" font-family="monospace" font-size="10" fill="#15803d" letter-spacing="2" opacity=".6">~ garden of code · 2026 ~</text>
</svg>`;

// ---------- 25. CHINESE INK WASH ----------
const ink = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 600" width="100%" height="100%">
  <defs>
    <linearGradient id="inkBg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#fef9c3"/><stop offset="100%" stop-color="#fef3c7"/>
    </linearGradient>
    <filter id="inkBlur"><feGaussianBlur stdDeviation=".4"/></filter>
  </defs>
  <rect width="1000" height="600" fill="url(#inkBg)"/>
  <g fill="#1a1a1a" opacity=".4" filter="url(#inkBlur)">
    <path d="M100 350 Q200 320 300 340 Q400 380 500 350 Q600 320 700 340 Q800 370 900 350 L900 600 L100 600 Z"/>
    <ellipse cx="250" cy="400" rx="100" ry="30"/>
    <ellipse cx="650" cy="430" rx="120" ry="35"/>
  </g>
  <g fill="#0a0a0a">
    <path d="M150 350 Q200 280 230 320 Q260 240 280 290 Q300 220 320 280 Q340 320 350 280 Q360 340 380 350 L380 380 L150 380 Z"/>
    <ellipse cx="180" cy="400" rx="40" ry="12"/>
  </g>
  <g fill="#0a0a0a">
    <ellipse cx="700" cy="370" rx="60" ry="20"/>
    <path d="M700 350 Q680 320 670 280 Q680 320 700 250 Q720 320 730 280 Q740 320 720 350 Z"/>
  </g>
  <g fill="#dc2626" opacity=".8">
    <circle cx="700" cy="350" r="5"/>
    <circle cx="690" cy="345" r="4"/>
    <circle cx="710" cy="345" r="4"/>
  </g>
  <g stroke="#0a0a0a" stroke-width="2" fill="none">
    <circle cx="500" cy="200" r="80"/>
    <circle cx="500" cy="200" r="40" fill="#0a0a0a" opacity=".3"/>
  </g>
  <g fill="#fbbf24" opacity=".6">
    <circle cx="500" cy="200" r="50"/>
    ${Array.from({length:12}).map((_,i)=>{const a=i*30*Math.PI/180;return `<line x1="${500+Math.cos(a)*50}" y1="${200+Math.sin(a)*50}" x2="${500+Math.cos(a)*70}" y2="${200+Math.sin(a)*70}" stroke="#dc2626" stroke-width="2"><animateTransform attributeName="transform" type="rotate" values="0 500 200;360 500 200" dur="20s" repeatCount="indefinite"/></line>`;}).join('')}
  </g>
  <circle cx="500" cy="200" r="20" fill="#dc2626"/>
  <circle cx="500" cy="200" r="10" fill="#7f1d1d"/>
  <text x="500" y="450" text-anchor="middle" font-family="Georgia,serif" font-size="42" fill="#0a0a0a" font-style="italic">__NAME__</text>
  <text x="500" y="490" text-anchor="middle" font-family="monospace" font-size="14" fill="#0a0a0a" letter-spacing="3">__ROLE__</text>
  <text x="500" y="525" text-anchor="middle" font-family="monospace" font-size="11" fill="#1a1a1a" letter-spacing="2">@__HANDLE__ · 2026</text>
  <g fill="#0a0a0a" opacity=".4">
    ${Array.from({length:8}).map((_,i)=>`<ellipse cx="${(i*113)%1000}" cy="${(i*97)%150+20}" rx="${20+Math.random()*30}" ry="${2+Math.random()*3}"/>`).join('')}
  </g>
  <text x="900" y="560" text-anchor="end" font-family="serif" font-size="14" fill="#0a0a0a" opacity=".5">· 一期一会 ·</text>
</svg>`;

// ---------- BUILDER ----------
const RAW: Array<Omit<PremiumBanner,'svg'> & {svg: string}> = [
  { id: 'owl', name: 'Wise Owl on Branch', style: 'cinematic · night · moonlit', palette: 'amber/cream', svg: owl },
  { id: 'neon-city', name: 'Cyberpunk Neon City', style: 'cyberpunk · synthwave', palette: 'magenta/violet', svg: neonCity },
  { id: 'space-station', name: 'Space Station Orbit', style: 'sci-fi · earth · cosmos', palette: 'blue/cyan', svg: spaceStation },
  { id: 'samurai', name: 'Samurai Moonlit', style: 'japanese · cinematic', palette: 'crimson/gold', svg: samurai },
  { id: 'rainy-city', name: 'Rainy City Night', style: 'noir · cyberpunk', palette: 'indigo/yellow', svg: rainyCity },
  { id: 'coral-reef', name: 'Coral Reef', style: 'underwater · tropical', palette: 'cyan/cyan-300', svg: coralReef },
  { id: 'cyber-grid', name: 'Cyber Grid Retrowave', style: 'synthwave · 80s', palette: 'magenta/cyan', svg: cyberGrid },
  { id: 'galaxy', name: 'Galaxy Spiral', style: 'cosmic · dreamy', palette: 'amber/purple', svg: galaxy },
  { id: 'geometric', name: 'Geometric', style: 'minimal · modern', palette: 'multi-gradient', svg: geometric },
  { id: 'minimal-pastel', name: 'Minimal Pastel', style: 'soft · calm', palette: 'pastel', svg: minimal },
  { id: 'wizard', name: 'Wizard Spellbook', style: 'magical · mystical', palette: 'purple/violet', svg: wizard },
  { id: 'minecraft', name: 'Minecraft Blocky', style: 'pixel · game', palette: 'green/brown', svg: minecraft },
  { id: 'mountain', name: 'Snowy Mountain', style: 'nature · alpine', palette: 'blue/white', svg: mountain },
  { id: 'pixel-retro', name: 'Pixel Retro PC', style: 'pixel · 80s', palette: 'violet/cyan', svg: pixelRetro },
  { id: 'tropical', name: 'Tropical Sunset', style: 'warm · beach', palette: 'sunset/orange', svg: tropical },
  { id: 'royal', name: 'Royal Chess', style: 'luxury · regal', palette: 'gold/cream', svg: royal },
  { id: 'holiday', name: 'Winter Holiday', style: 'festive · pine', palette: 'green/red', svg: holiday },
  { id: 'neural', name: 'Neural AI Brain', style: 'tech · futuristic', palette: 'cyan/violet', svg: neural },
  { id: 'rainbow', name: 'Rainbow Day', style: 'colorful · cheerful', palette: 'rainbow', svg: rainbow },
  { id: 'comic', name: 'Comic Pop-Art', style: 'pop-art · punchy', palette: 'yellow/red', svg: comic },
  { id: 'lava', name: 'Lava Volcano', style: 'hot · molten', palette: 'red/orange', svg: lava },
  { id: 'arctic', name: 'Arctic Snowfall', style: 'cold · serene', palette: 'blue/white', svg: arctic },
  { id: 'concrete', name: 'Concrete Industrial', style: 'brutalist · raw', palette: 'gray/charcoal', svg: concrete },
  { id: 'garden', name: 'Floral Garden', style: 'nature · spring', palette: 'green/yellow', svg: garden },
  { id: 'ink-wash', name: 'Ink Wash Painting', style: 'eastern · zen', palette: 'sepia/ink', svg: ink },
];

// Each banner has placeholders converted to __XXX__ so the .map(svg=>svg) loop is fast.
const PH: PremiumBanner[] = RAW.map(b => ({ ...b, svg: ph(b.svg) }));

export const PREMIUM_BANNERS: PremiumBanner[] = PH;

// Fill function used at render time.
export function fillPremiumBanner(svg: string, data: { name: string; role: string; handle: string }) {
  return fill(svg, data.name, data.role, data.handle);
}

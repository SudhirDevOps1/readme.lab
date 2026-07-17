// Playable inline SVG/DOM mini-games — each is a React component with self-contained state.
// Designed to be embedded in a portfolio page; not all work in GitHub README markdown
// (which renders static markdown only) but all work as standalone pages.

import { useEffect, useRef, useState } from 'react';

const wrap = 'rounded-xl border border-slate-800 bg-[#0b0d10] p-4 font-mono';
const btn = 'rounded-md bg-slate-800 px-3 py-1.5 text-xs text-slate-200 hover:bg-slate-700 transition-colors disabled:opacity-40';
const btnPri = 'rounded-md bg-amber-500 px-3 py-1.5 text-xs font-bold text-[#0b0d10] hover:bg-amber-400 transition-colors';
const label = 'mb-2 block text-[11px] uppercase tracking-widest text-slate-500';

// 1. Tic-Tac-Toe
export function TicTacToe() {
  const [b, setB] = useState<(string | null)[]>(Array(9).fill(null));
  const [x, setX] = useState(true);
  const wins = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
  const winner = wins.find(([a,bb,c]) => b[a] && b[a]===b[bb] && b[a]===b[c]);
  const w = winner ? b[winner[0]] : null;
  const draw = !w && b.every(Boolean);

  useEffect(() => {
    if (x && !w && !draw) {
      const empty = b.map((v,i)=>v?null:i).filter(v=>v!==null) as number[];
      if (empty.length) {
        const t = setTimeout(() => {
          const i = empty[Math.floor(Math.random()*empty.length)];
          const nb = [...b]; nb[i] = 'O'; setB(nb); setX(true);
        }, 400);
        return () => clearTimeout(t);
      }
    }
  }, [x, b, w, draw]);

  const click = (i: number) => {
    if (b[i] || w || !x) return;
    const nb = [...b]; nb[i] = 'X'; setB(nb); setX(false);
  };

  return <div className={wrap}>
    <div className={label}>Tic-Tac-Toe · you = X</div>
    <div className="grid grid-cols-3 gap-1 w-32 mx-auto mb-3">
      {b.map((v,i) => <button key={i} onClick={()=>click(i)} disabled={!!v||!!w} className={`h-10 rounded bg-slate-900 text-lg font-bold ${v==='X'?'text-amber-400':'text-lime-400'} hover:bg-slate-800`}>{v}</button>)}
    </div>
    <div className="text-center text-xs text-slate-400">{w ? `${w} wins!` : draw ? 'Draw' : (x ? 'Your turn' : 'AI thinking…')}</div>
    <div className="mt-3 text-center"><button className={btnPri} onClick={()=>{setB(Array(9).fill(null)); setX(true);}}>Reset</button></div>
  </div>;
}

// 2. Memory Match
export function Memory() {
  const emojis = ['🎮','','','🚀','','🎯','💎','🌈'];
  const make = () => [...emojis, ...emojis].map((e,i)=>({id:i, e, flipped:false, matched:false})).sort(()=>Math.random()-.5);
  const [cards, setCards] = useState(make());
  const [flipped, setFlipped] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);

  useEffect(() => {
    if (flipped.length === 2) {
      setMoves(m=>m+1);
      const [a,b] = flipped;
      if (cards[a].e === cards[b].e) {
        setCards(c=>c.map((x,i)=>i===a||i===b?{...x,matched:true}:x));
        setFlipped([]);
      } else {
        const t = setTimeout(()=>{
          setCards(c=>c.map((x,i)=>i===a||i===b?{...x,flipped:false}:x));
          setFlipped([]);
        }, 700);
        return () => clearTimeout(t);
      }
    }
  }, [flipped, cards]);

  const click = (i: number) => {
    if (cards[i].flipped || cards[i].matched || flipped.length===2) return;
    setCards(c=>c.map((x,j)=>j===i?{...x,flipped:true}:x));
    setFlipped(f=>[...f,i]);
  };

  const done = cards.every(c=>c.matched);

  return <div className={wrap}>
    <div className={label}>Memory · pairs left: {cards.filter(c=>!c.matched).length/2}</div>
    <div className="grid grid-cols-4 gap-1.5 max-w-[220px] mx-auto">
      {cards.map((c,i)=> <button key={i} onClick={()=>click(i)} className={`h-12 rounded text-xl transition-all ${c.matched?'bg-lime-500/20 text-lime-400':c.flipped?'bg-amber-500 text-[#0b0d10]':'bg-slate-800 text-slate-700 hover:bg-slate-700'}`}>{c.flipped||c.matched?c.e:'?'}</button>)}
    </div>
    <div className="mt-3 text-center text-xs text-slate-400">moves: {moves} {done && '· 🎉 solved!'}</div>
    <div className="mt-2 text-center"><button className={btnPri} onClick={()=>{setCards(make()); setFlipped([]); setMoves(0);}}>Reset</button></div>
  </div>;
}

// 3. Rock Paper Scissors
export function RPS() {
  const opts = ['🪨','','✂'] as const;
  const [u, setU] = useState<number|null>(null);
  const [c, setC] = useState<number|null>(null);
  const [score, setScore] = useState({w:0,l:0,d:0});
  const play = (i: number) => {
    const ci = Math.floor(Math.random()*3);
    setU(i); setC(ci);
    if (i===ci) setScore(s=>({...s,d:s.d+1}));
    else if ((i+1)%3===ci) setScore(s=>({...s,l:s.l+1}));
    else setScore(s=>({...s,w:s.w+1}));
  };
  const result = u===null ? 'pick one' : u===c ? 'draw' : (u+1)%3===c ? 'lose' : 'win';
  return <div className={wrap}>
    <div className={label}>Rock · Paper · Scissors</div>
    <div className="flex justify-center gap-2 text-3xl mb-3 h-10">
      <span>{u!==null?opts[u]:'❔'}</span><span className="text-slate-500">vs</span><span>{c!==null?opts[c]:'❔'}</span>
    </div>
    <div className={`text-center text-xs mb-3 ${result==='win'?'text-lime-400':result==='lose'?'text-red-400':'text-slate-400'}`}>{result.toUpperCase()}</div>
    <div className="flex justify-center gap-2 mb-3">
      {opts.map((o,i)=> <button key={i} onClick={()=>play(i)} className="h-12 w-12 rounded bg-slate-800 text-2xl hover:bg-slate-700">{o}</button>)}
    </div>
    <div className="text-center text-xs text-slate-500">W {score.w} · L {score.l} · D {score.d}</div>
  </div>;
}

// 4. Snake
export function Snake() {
  const [snake, setSnake] = useState([{x:5,y:5}]);
  const [food, setFood] = useState({x:10,y:10});
  const [dir, setDir] = useState({x:1,y:0});
  const [dead, setDead] = useState(false);
  const [score, setScore] = useState(0);
  const dirRef = useRef(dir);
  dirRef.current = dir;

  useEffect(() => {
    if (dead) return;
    const t = setInterval(() => {
      setSnake(s => {
        const head = {x: s[0].x+dirRef.current.x, y: s[0].y+dirRef.current.y};
        if (head.x<0||head.y<0||head.x>=15||head.y>=15||s.some(p=>p.x===head.x&&p.y===head.y)) { setDead(true); return s; }
        const ns = [head, ...s];
        if (head.x===food.x && head.y===food.y) {
          setScore(v=>v+1);
          setFood({x:Math.floor(Math.random()*15), y:Math.floor(Math.random()*15)});
        } else ns.pop();
        return ns;
      });
    }, 140);
    return () => clearInterval(t);
  }, [dead, food]);

  useEffect(() => {
    const k = (e: KeyboardEvent) => {
      const d = dirRef.current;
      if (e.key==='ArrowUp' && d.y!==1) setDir({x:0,y:-1});
      if (e.key==='ArrowDown' && d.y!==-1) setDir({x:0,y:1});
      if (e.key==='ArrowLeft' && d.x!==1) setDir({x:-1,y:0});
      if (e.key==='ArrowRight' && d.x!==-1) setDir({x:1,y:0});
    };
    window.addEventListener('keydown', k);
    return () => window.removeEventListener('keydown', k);
  }, []);

  const reset = () => { setSnake([{x:5,y:5}]); setFood({x:10,y:10}); setDir({x:1,y:0}); setDead(false); setScore(0); };

  return <div className={wrap}>
    <div className={label}>Snake · arrow keys / buttons</div>
    <div className="grid gap-0.5 mx-auto w-fit" style={{gridTemplateColumns:'repeat(15,14px)'}}>
      {Array.from({length:15*15}).map((_,i)=>{
        const x=i%15, y=Math.floor(i/15);
        const isSnake = snake.some(p=>p.x===x&&p.y===y);
        const isHead = snake[0].x===x && snake[0].y===y;
        const isFood = food.x===x && food.y===y;
        return <div key={i} className={`h-[14px] w-[14px] rounded-sm ${isHead?'bg-amber-400':isSnake?'bg-lime-400':isFood?'bg-red-400':'bg-slate-900'}`}/>;
      })}
    </div>
    <div className="mt-2 grid grid-cols-3 gap-1 max-w-[150px] mx-auto">
      <div/><button className={btn} onClick={()=>dirRef.current.y!==1&&setDir({x:0,y:-1})}>↑</button><div/>
      <button className={btn} onClick={()=>dirRef.current.x!==1&&setDir({x:-1,y:0})}>←</button>
      <button className={btn} onClick={reset}>⟳</button>
      <button className={btn} onClick={()=>dirRef.current.x!==-1&&setDir({x:1,y:0})}>→</button>
      <div/><button className={btn} onClick={()=>dirRef.current.y!==-1&&setDir({x:0,y:1})}>↓</button><div/>
    </div>
    <div className="mt-2 text-center text-xs text-slate-400">score: {score} {dead && '· 💀 game over'}</div>
  </div>;
}

// 5. Whack-a-Mole
export function WhackAMole() {
  const [mole, setMole] = useState<number|null>(null);
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(20);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!playing) return;
    const t = setInterval(()=>setTime(v=>v-1), 1000);
    const m = setInterval(()=>setMole(Math.floor(Math.random()*9)), 700);
    return () => { clearInterval(t); clearInterval(m); };
  }, [playing]);

  useEffect(() => { if (time<=0) { setPlaying(false); setMole(null); } }, [time]);

  const start = () => { setScore(0); setTime(20); setPlaying(true); };
  const hit = (i: number) => { if (mole===i) { setScore(s=>s+1); setMole(null); } };

  return <div className={wrap}>
    <div className={label}>Whack-a-Mole · 20s</div>
    <div className="grid grid-cols-3 gap-1.5 max-w-[180px] mx-auto mb-2">
      {Array.from({length:9}).map((_,i)=> <button key={i} onClick={()=>hit(i)} className={`h-14 rounded-full transition-all ${mole===i?'bg-amber-500 scale-95':'bg-slate-900 hover:bg-slate-800'} text-2xl`}>{mole===i?'🐹':''}</button>)}
    </div>
    <div className="flex justify-between text-xs text-slate-400 mb-2">
      <span>score: {score}</span><span>time: {time}</span>
    </div>
    <div className="text-center"><button className={btnPri} onClick={start}>{playing?'restart':'start'}</button></div>
  </div>;
}

// 6. Simon
export function Simon() {
  const colors = ['#ef4444','#22c55e','#3b82f6','#eab308'];
  const [seq, setSeq] = useState<number[]>([]);
  const [input, setInput] = useState<number[]>([]);
  const [active, setActive] = useState<number|null>(null);
  const [playing, setPlaying] = useState(false);
  const [msg, setMsg] = useState('press start');

  const playSeq = async (s: number[]) => {
    setPlaying(true);
    for (const n of s) {
      await new Promise(r=>setTimeout(r,400));
      setActive(n); await new Promise(r=>setTimeout(r,400)); setActive(null);
    }
    setPlaying(false);
  };

  const start = () => {
    const ns = [Math.floor(Math.random()*4)];
    setSeq(ns); setInput([]); setMsg('watch…');
    playSeq(ns);
  };

  const next = () => {
    const ns = [...seq, Math.floor(Math.random()*4)];
    setSeq(ns); setInput([]); setMsg('watch…');
    playSeq(ns);
  };

  const click = (i: number) => {
    if (playing) return;
    setActive(i); setTimeout(()=>setActive(null), 200);
    const ni = [...input, i];
    if (seq[ni.length-1] !== i) { setMsg(`💀 game over · score ${seq.length-1}`); setSeq([]); setInput([]); return; }
    setInput(ni);
    if (ni.length === seq.length) { setMsg(`level ${seq.length+1}!`); setTimeout(next, 500); }
  };

  return <div className={wrap}>
    <div className={label}>Simon · memorize</div>
    <div className="grid grid-cols-2 gap-2 max-w-[160px] mx-auto mb-2">
      {colors.map((c,i)=> <button key={i} onClick={()=>click(i)} style={{background:active===i?'#fff':c, opacity:active===i?1:.5}} className="h-16 rounded-lg transition-all"/>)}
    </div>
    <div className="text-center text-xs text-slate-400 mb-2">{msg}</div>
    <div className="text-center"><button className={btnPri} onClick={start} disabled={playing}>{seq.length?'restart':'start'}</button></div>
  </div>;
}

// 7. CPS test
export function CPS() {
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(5);
  const [started, setStarted] = useState(false);
  const [over, setOver] = useState(false);

  useEffect(() => {
    if (!started || over) return;
    const t = setInterval(()=>setTime(v=>{
      if (v<=1) { setOver(true); setStarted(false); return 0; }
      return v-1;
    }), 1000);
    return () => clearInterval(t);
  }, [started, over]);

  const click = () => {
    if (over) return;
    if (!started) { setStarted(true); setTime(5); setCount(1); return; }
    setCount(c=>c+1);
  };

  const reset = () => { setCount(0); setTime(5); setStarted(false); setOver(false); };

  return <div className={wrap}>
    <div className={label}>Click Speed · 5s</div>
    <button onClick={click} className="w-full h-24 rounded-lg bg-gradient-to-br from-amber-500 to-lime-400 text-[#0b0d10] text-2xl font-bold hover:brightness-110 active:scale-95 transition-all">
      {over ? `${count} clicks` : started ? count : 'CLICK'}
    </button>
    <div className="mt-2 flex justify-between text-xs text-slate-400">
      <span>time: {time}s</span>
      <span>cps: {started||over ? (count/(5-time+1||5)).toFixed(1) : '0.0'}</span>
    </div>
    <div className="mt-2 text-center"><button className={btn} onClick={reset}>reset</button></div>
  </div>;
}

// 8. Reaction time
export function Reaction() {
  const [state, setState] = useState<'idle'|'wait'|'go'|'result'|'early'>('idle');
  const [start, setStart] = useState(0);
  const [ms, setMs] = useState(0);

  const begin = () => {
    setState('wait');
    setTimeout(()=>{ setStart(Date.now()); setState('go'); }, 1000 + Math.random()*3000);
  };

  const click = () => {
    if (state==='idle') begin();
    else if (state==='wait') setState('early');
    else if (state==='go') { setMs(Date.now()-start); setState('result'); }
    else begin();
  };

  const bg = state==='wait' ? 'bg-red-500/30' : state==='go' ? 'bg-lime-500/30' : state==='early' ? 'bg-orange-500/30' : 'bg-slate-900';
  const txt = state==='idle' ? 'click to start' : state==='wait' ? 'wait for green…' : state==='go' ? 'CLICK!' : state==='early' ? 'too early · click to retry' : `${ms} ms · click to retry`;

  return <div className={wrap}>
    <div className={label}>Reaction Time</div>
    <button onClick={click} className={`w-full h-24 rounded-lg ${bg} text-slate-100 text-lg font-mono hover:brightness-110 transition-all`}>{txt}</button>
    <div className="mt-2 text-xs text-slate-500 text-center">best human avg ≈ 250ms</div>
  </div>;
}

// 9. Dice roller
export function Dice() {
  const [a, setA] = useState(1);
  const [b, setB] = useState(1);
  const [rolling, setRolling] = useState(false);
  const faces = ['⚀','⚁','⚂','⚃','⚄','⚅'];
  const roll = () => {
    setRolling(true);
    let i = 0;
    const t = setInterval(()=>{
      setA(Math.ceil(Math.random()*6)); setB(Math.ceil(Math.random()*6));
      if (++i>8) { clearInterval(t); setRolling(false); setA(Math.ceil(Math.random()*6)); setB(Math.ceil(Math.random()*6)); }
    }, 80);
  };
  return <div className={wrap}>
    <div className={label}>Dice Roll</div>
    <div className="flex justify-center gap-4 text-6xl mb-3">
      <span className={rolling?'animate-spin':''}>{faces[a-1]}</span>
      <span className={rolling?'animate-spin':''}>{faces[b-1]}</span>
    </div>
    <div className="text-center text-sm text-slate-400 mb-3">total: <span className="text-amber-400 font-bold">{a+b}</span></div>
    <div className="text-center"><button className={btnPri} onClick={roll} disabled={rolling}>Roll</button></div>
  </div>;
}

// 10. Number Guess
export function NumberGuess() {
  const [target, setTarget] = useState(() => Math.floor(Math.random()*100)+1);
  const [guess, setGuess] = useState('');
  const [log, setLog] = useState<string[]>([]);
  const [won, setWon] = useState(false);

  const submit = () => {
    const n = parseInt(guess);
    if (!n || won) return;
    if (n === target) { setLog(l=>[`${n} ✓ correct! (${log.length+1} tries)`, ...l]); setWon(true); }
    else if (n < target) setLog(l=>[`${n} → higher`, ...l]);
    else setLog(l=>[`${n} → lower`, ...l]);
    setGuess('');
  };

  const reset = () => { setTarget(Math.floor(Math.random()*100)+1); setLog([]); setWon(false); setGuess(''); };

  return <div className={wrap}>
    <div className={label}>Number Guess · 1-100</div>
    <div className="flex gap-2 mb-2">
      <input value={guess} onChange={e=>setGuess(e.target.value)} onKeyDown={e=>e.key==='Enter'&&submit()} type="number" className="flex-1 rounded bg-slate-900 px-2 py-1 text-sm text-white" placeholder="guess"/>
      <button className={btnPri} onClick={submit} disabled={won}>Go</button>
    </div>
    <div className="h-24 overflow-y-auto text-xs text-slate-400 space-y-0.5 mb-2 font-mono">
      {log.map((l,i)=> <div key={i}>{l}</div>)}
      {!log.length && <div className="opacity-50">no guesses yet…</div>}
    </div>
    <button className={btn} onClick={reset}>new game</button>
  </div>;
}

// 11. Minesweeper-lite (5x5, 3 mines)
export function MinesLite() {
  const SIZE = 5;
  const MINES = 3;
  const init = () => {
    const g = Array.from({length:SIZE*SIZE}, (_,i)=>({i, mine:false, open:false, adj:0}));
    const idx = new Set<number>();
    while (idx.size<MINES) idx.add(Math.floor(Math.random()*SIZE*SIZE));
    idx.forEach(i=>g[i].mine=true);
    for (let y=0;y<SIZE;y++) for (let x=0;x<SIZE;x++) {
      if (g[y*SIZE+x].mine) continue;
      let c=0;
      for (let dy=-1;dy<=1;dy++) for (let dx=-1;dx<=1;dx++) {
        const ny=y+dy, nx=x+dx;
        if (ny>=0&&ny<SIZE&&nx>=0&&nx<SIZE&&g[ny*SIZE+nx].mine) c++;
      }
      g[y*SIZE+x].adj=c;
    }
    return g;
  };
  const [g, setG] = useState(init);
  const [dead, setDead] = useState(false);

  const open = (i: number) => {
    if (dead || g[i].open) return;
    const ng = [...g]; ng[i] = {...ng[i], open:true};
    if (ng[i].mine) { ng.forEach(c=>c.open=true); setDead(true); }
    setG(ng);
  };

  const won = !dead && g.filter(c=>!c.mine).every(c=>c.open);

  return <div className={wrap}>
    <div className={label}>Mines · {SIZE}×{SIZE} · {MINES} mines</div>
    <div className="grid gap-1 mx-auto w-fit" style={{gridTemplateColumns:`repeat(${SIZE},28px)`}}>
      {g.map((c,i)=> <button key={i} onClick={()=>open(i)} className={`h-7 w-7 rounded text-xs font-bold ${c.open ? c.mine ? 'bg-red-500/40 text-red-300' : 'bg-slate-900 text-lime-400' : 'bg-slate-800 hover:bg-slate-700'}`}>{c.open ? (c.mine?'💣':c.adj||'') : ''}</button>)}
    </div>
    <div className="mt-2 text-center text-xs text-slate-400">{dead?'💥 boom':won?'🏆 cleared':'find safe cells'}</div>
    <div className="mt-2 text-center"><button className={btnPri} onClick={()=>{setG(init()); setDead(false);}}>reset</button></div>
  </div>;
}

// 12. 2048-lite (3x3)
export function Mini2048() {
  const SIZE = 3;
  const addRandom = (b: number[]) => {
    const empty = b.map((v,i)=>v===0?i:-1).filter(v=>v>=0);
    if (!empty.length) return b;
    const nb = [...b]; nb[empty[Math.floor(Math.random()*empty.length)]] = Math.random()<.9?2:4;
    return nb;
  };
  const init = () => addRandom(addRandom(Array(SIZE*SIZE).fill(0)));
  const [b, setB] = useState(init);
  const [score, setScore] = useState(0);

  const slide = (row: number[]) => {
    let r = row.filter(v=>v);
    for (let i=0;i<r.length-1;i++) if (r[i]===r[i+1]) { r[i]*=2; setScore(s=>s+r[i]); r[i+1]=0; }
    r = r.filter(v=>v);
    while (r.length<SIZE) r.push(0);
    return r;
  };

  const move = (dir: string) => {
    let nb = [...b];
    const getRow = (i: number) => {
      if (dir==='left') return [nb[i*SIZE],nb[i*SIZE+1],nb[i*SIZE+2]];
      if (dir==='right') return [nb[i*SIZE+2],nb[i*SIZE+1],nb[i*SIZE]];
      if (dir==='up') return [nb[i],nb[SIZE+i],nb[2*SIZE+i]];
      return [nb[2*SIZE+i],nb[SIZE+i],nb[i]];
    };
    const setRow = (i: number, r: number[]) => {
      if (dir==='left') { nb[i*SIZE]=r[0]; nb[i*SIZE+1]=r[1]; nb[i*SIZE+2]=r[2]; }
      if (dir==='right') { nb[i*SIZE+2]=r[0]; nb[i*SIZE+1]=r[1]; nb[i*SIZE]=r[2]; }
      if (dir==='up') { nb[i]=r[0]; nb[SIZE+i]=r[1]; nb[2*SIZE+i]=r[2]; }
      if (dir==='down') { nb[2*SIZE+i]=r[0]; nb[SIZE+i]=r[1]; nb[i]=r[2]; }
    };
    for (let i=0;i<SIZE;i++) setRow(i, slide(getRow(i)));
    if (nb.join() !== b.join()) setB(addRandom(nb));
  };

  useEffect(() => {
    const k = (e: KeyboardEvent) => {
      if (e.key==='ArrowLeft') move('left');
      if (e.key==='ArrowRight') move('right');
      if (e.key==='ArrowUp') move('up');
      if (e.key==='ArrowDown') move('down');
    };
    window.addEventListener('keydown', k);
    return () => window.removeEventListener('keydown', k);
  }, [b]);

  return <div className={wrap}>
    <div className={label}>2048 · 3×3 · arrows/buttons</div>
    <div className="grid gap-1 mx-auto w-fit" style={{gridTemplateColumns:`repeat(${SIZE},44px)`}}>
      {b.map((v,i)=> <div key={i} className={`h-11 w-11 rounded flex items-center justify-center text-sm font-bold ${v===0?'bg-slate-900':v<16?'bg-amber-500/30 text-amber-300':v<64?'bg-amber-500/60 text-[#0b0d10]':'bg-lime-400 text-[#0b0d10]'}`}>{v||''}</div>)}
    </div>
    <div className="mt-2 grid grid-cols-3 gap-1 max-w-[150px] mx-auto">
      <div/><button className={btn} onClick={()=>move('up')}>↑</button><div/>
      <button className={btn} onClick={()=>move('left')}>←</button>
      <button className={btn} onClick={()=>{setB(init()); setScore(0);}}>⟳</button>
      <button className={btn} onClick={()=>move('right')}>→</button>
      <div/><button className={btn} onClick={()=>move('down')}>↓</button><div/>
    </div>
    <div className="mt-2 text-center text-xs text-slate-400">score: {score}</div>
  </div>;
}

// 13. Coin Flip
export function CoinFlip() {
  const [side, setSide] = useState<'H'|'T'|null>(null);
  const [flipping, setFlipping] = useState(false);
  const [score, setScore] = useState({ h: 0, t: 0 });
  const flip = () => {
    setFlipping(true);
    setTimeout(() => {
      const r = Math.random() < 0.5 ? 'H' : 'T';
      setSide(r); setFlipping(false);
      setScore(s => r === 'H' ? {...s, h: s.h+1} : {...s, t: s.t+1});
    }, 600);
  };
  return <div className={wrap}>
    <div className={label}>Coin Flip</div>
    <div className={`mx-auto mb-3 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-yellow-600 text-4xl font-bold text-[#0b0d10] ${flipping?'animate-spin':''}`}>
      {flipping ? '?' : side === 'H' ? '👑' : side === 'T' ? '🌾' : '🪙'}
    </div>
    <div className="text-center text-xs text-slate-400 mb-2">Heads {score.h} · Tails {score.t}</div>
    <div className="text-center"><button className={btnPri} onClick={flip} disabled={flipping}>Flip</button></div>
  </div>;
}

// 14. Higher or Lower
export function HigherLower() {
  const [cur, setCur] = useState(() => Math.floor(Math.random()*100)+1);
  const [next, setNext] = useState<number|null>(null);
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(0);
  const [msg, setMsg] = useState('higher or lower?');
  const guess = (dir: 'h'|'l') => {
    const n = Math.floor(Math.random()*100)+1;
    setNext(n);
    const correct = dir === 'h' ? n >= cur : n <= cur;
    if (correct) { setScore(s => { const ns = s+1; setBest(b => Math.max(b, ns)); return ns; }); setMsg('correct! ✓'); setTimeout(() => { setCur(n); setNext(null); setMsg('higher or lower?'); }, 800); }
    else { setMsg(`wrong! it was ${n}`); setScore(0); setTimeout(() => { setCur(Math.floor(Math.random()*100)+1); setNext(null); setMsg('higher or lower?'); }, 1200); }
  };
  return <div className={wrap}>
    <div className={label}>Higher / Lower · 1-100</div>
    <div className="text-center mb-2"><span className="text-4xl font-bold text-amber-400">{next ?? cur}</span></div>
    <div className="text-center text-xs text-slate-400 mb-3">{msg}</div>
    <div className="flex justify-center gap-2 mb-2">
      <button className={btn} onClick={()=>guess('l')} disabled={!!next}>▼ Lower</button>
      <button className={btn} onClick={()=>guess('h')} disabled={!!next}>▲ Higher</button>
    </div>
    <div className="text-center text-xs text-slate-500">streak: {score} · best: {best}</div>
  </div>;
}

// 15. Rapid Math
export function RapidMath() {
  const gen = () => { const a = Math.floor(Math.random()*12)+1, b = Math.floor(Math.random()*12)+1; return { a, b, ans: a*b }; };
  const [q, setQ] = useState(gen);
  const [input, setInput] = useState('');
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(30);
  const [playing, setPlaying] = useState(false);
  useEffect(() => {
    if (!playing) return;
    if (time <= 0) { setPlaying(false); return; }
    const t = setInterval(() => setTime(v => v-1), 1000);
    return () => clearInterval(t);
  }, [playing, time]);
  const start = () => { setScore(0); setTime(30); setPlaying(true); setQ(gen()); setInput(''); };
  const check = (v: string) => {
    setInput(v);
    if (parseInt(v) === q.ans) { setScore(s => s+1); setQ(gen()); setInput(''); }
  };
  return <div className={wrap}>
    <div className={label}>Rapid Math · 30s</div>
    {playing ? <>
      <div className="text-center text-2xl font-bold text-white mb-2">{q.a} × {q.b} = ?</div>
      <input value={input} onChange={e=>check(e.target.value)} type="number" autoFocus className="w-full rounded bg-slate-900 px-3 py-2 text-center text-sm text-white mb-2"/>
      <div className="flex justify-between text-xs text-slate-400"><span>score: {score}</span><span>time: {time}s</span></div>
    </> : <div className="text-center">
      <div className="text-sm text-slate-400 mb-3">{time <= 0 ? `Final score: ${score}` : 'Solve as many as you can!'}</div>
      <button className={btnPri} onClick={start}>start</button>
    </div>}
  </div>;
}

// 16. Color Match
export function ColorMatch() {
  const colors = [['red','#ef4444'],['green','#22c55e'],['blue','#3b82f6'],['yellow','#eab308'],['purple','#a855f7']];
  const [q, setQ] = useState(() => ({ word: colors[0][0], color: colors[1][1] }));
  const [score, setScore] = useState(0);
  const [msg, setMsg] = useState('does word match ink color?');
  const gen = () => { const word = colors[Math.floor(Math.random()*5)]; const color = colors[Math.floor(Math.random()*5)]; setQ({ word: word[0], color: color[1] }); };
  const answer = (match: boolean) => {
    const actualMatch = colors.find(c => c[0]===q.word)?.[1] === q.color;
    if (match === actualMatch) { setScore(s=>s+1); setMsg('correct! ✓'); }
    else { setMsg('nope ✗'); setScore(0); }
    setTimeout(gen, 500);
  };
  return <div className={wrap}>
    <div className={label}>Color Match (Stroop)</div>
    <div className="text-center mb-3"><span className="text-3xl font-bold" style={{color: q.color}}>{q.word.toUpperCase()}</span></div>
    <div className="text-center text-xs text-slate-400 mb-3">{msg}</div>
    <div className="flex justify-center gap-2 mb-2">
      <button className={btn} onClick={()=>answer(true)}>✓ Match</button>
      <button className={btn} onClick={()=>answer(false)}>✗ No Match</button>
    </div>
    <div className="text-center text-xs text-slate-500">score: {score}</div>
  </div>;
}

// 17. Bulls & Cows
export function BullsCows() {
  const makeSecret = () => { const d: string[] = []; while (d.length < 4) { const n = String(Math.floor(Math.random()*10)); if (!d.includes(n)) d.push(n); } return d.join(''); };
  const [secret, setSecret] = useState(makeSecret);
  const [guess, setGuess] = useState('');
  const [log, setLog] = useState<string[]>([]);
  const [won, setWon] = useState(false);
  const submit = () => {
    if (guess.length !== 4 || won) return;
    let bulls = 0, cows = 0;
    guess.split('').forEach((c, i) => { if (c === secret[i]) bulls++; else if (secret.includes(c)) cows++; });
    setLog(l => [`${guess} → ${bulls}🐂 ${cows}🐄`, ...l]);
    if (bulls === 4) setWon(true);
    setGuess('');
  };
  const reset = () => { setSecret(makeSecret()); setLog([]); setWon(false); setGuess(''); };
  return <div className={wrap}>
    <div className={label}>Bulls & Cows · 4 digits</div>
    <div className="flex gap-2 mb-2">
      <input value={guess} onChange={e=>setGuess(e.target.value.replace(/\D/g,'').slice(0,4))} onKeyDown={e=>e.key==='Enter'&&submit()} className="flex-1 rounded bg-slate-900 px-2 py-1 text-sm text-white" placeholder="4 digits"/>
      <button className={btnPri} onClick={submit} disabled={won}>Go</button>
    </div>
    <div className="h-20 overflow-y-auto text-xs text-slate-400 space-y-0.5 mb-2 font-mono">
      {log.map((l,i)=><div key={i}>{l}</div>)}
      {won && <div className="text-lime-400">🏆 solved!</div>}
    </div>
    <button className={btn} onClick={reset}>new</button>
  </div>;
}

// 18. Pattern Repeat
export function PatternRepeat() {
  const [seq, setSeq] = useState<number[]>([]);
  const [userIdx, setUserIdx] = useState(0);
  const [showing, setShowing] = useState(false);
  const [flash, setFlash] = useState(-1);
  const [msg, setMsg] = useState('press start');
  const play = async (s: number[]) => {
    setShowing(true);
    for (const n of s) { await new Promise(r=>setTimeout(r,350)); setFlash(n); await new Promise(r=>setTimeout(r,350)); setFlash(-1); }
    setShowing(false); setUserIdx(0);
  };
  const start = () => { const s = [Math.floor(Math.random()*9)]; setSeq(s); setMsg('repeat!'); play(s); };
  const tap = (i: number) => {
    if (showing) return;
    if (seq[userIdx] === i) {
      if (userIdx+1 === seq.length) { const ns = [...seq, Math.floor(Math.random()*9)]; setSeq(ns); setMsg(`level ${ns.length}`); setTimeout(()=>play(ns), 400); }
      else setUserIdx(userIdx+1);
    } else { setMsg(`game over · level ${seq.length}`); setSeq([]); }
  };
  return <div className={wrap}>
    <div className={label}>Pattern Repeat</div>
    <div className="grid grid-cols-3 gap-1.5 max-w-[180px] mx-auto mb-2">
      {Array.from({length:9}).map((_,i)=><button key={i} onClick={()=>tap(i)} className={`h-14 rounded transition-all ${flash===i?'bg-amber-400':'bg-slate-900 hover:bg-slate-800'}`}/>)}
    </div>
    <div className="text-center text-xs text-slate-400 mb-2">{msg}</div>
    <div className="text-center"><button className={btnPri} onClick={start} disabled={showing}>{seq.length?'restart':'start'}</button></div>
  </div>;
}

// 19. Fruit Slice (click targets)
export function FruitSlice() {
  const [fruits, setFruits] = useState<{id:number;x:number;emoji:string}[]>([]);
  const [score, setScore] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [time, setTime] = useState(20);
  const emojis = ['🍎','🍊','🍋','🍉','🍇','🍓','🥝','🍑'];
  useEffect(() => {
    if (!playing) return;
    if (time <= 0) { setPlaying(false); setFruits([]); return; }
    const t = setInterval(() => setTime(v=>v-1), 1000);
    const spawn = setInterval(() => {
      setFruits(f => [...f, { id: Date.now()+Math.random(), x: Math.random()*80+10, emoji: emojis[Math.floor(Math.random()*emojis.length)] }].slice(-6));
    }, 800);
    return () => { clearInterval(t); clearInterval(spawn); };
  }, [playing, time]);
  const slice = (id: number) => { setScore(s=>s+1); setFruits(f=>f.filter(x=>x.id!==id)); };
  const start = () => { setScore(0); setTime(20); setPlaying(true); setFruits([]); };
  return <div className={wrap}>
    <div className={label}>Fruit Slice · 20s</div>
    <div className="relative h-32 rounded-lg bg-slate-900 overflow-hidden mb-2">
      {fruits.map(f => <button key={f.id} onClick={()=>slice(f.id)} className="absolute text-2xl hover:scale-125 transition-transform" style={{left:`${f.x}%`, top:'40%'}}>{f.emoji}</button>)}
      {!playing && <div className="absolute inset-0 flex items-center justify-center text-xs text-slate-500">{time<=0?`Score: ${score}`:'tap fruits fast!'}</div>}
    </div>
    <div className="flex justify-between text-xs text-slate-400 mb-2"><span>score: {score}</span><span>time: {time}</span></div>
    <div className="text-center"><button className={btnPri} onClick={start}>{playing?'restart':'start'}</button></div>
  </div>;
}

// 20. Typing Speed
export function TypingSpeed() {
  const sentences = ['the quick brown fox', 'code every single day', 'ship it and iterate', 'build in public now', 'commit push deploy'];
  const [target, setTarget] = useState(sentences[0]);
  const [input, setInput] = useState('');
  const [start, setStart] = useState(0);
  const [wpm, setWpm] = useState<number|null>(null);
  const begin = () => { setTarget(sentences[Math.floor(Math.random()*sentences.length)]); setInput(''); setStart(Date.now()); setWpm(null); };
  const onType = (v: string) => {
    setInput(v);
    if (v === target) { const mins = (Date.now()-start)/60000; setWpm(Math.round((target.split(' ').length)/mins)); }
  };
  return <div className={wrap}>
    <div className={label}>Typing Speed</div>
    <div className="rounded bg-slate-900 p-2 text-sm text-amber-400 mb-2 font-mono">{target}</div>
    <input value={input} onChange={e=>onType(e.target.value)} onFocus={()=>!start&&begin()} className="w-full rounded bg-slate-900 px-2 py-1 text-sm text-white mb-2 font-mono" placeholder="type here…"/>
    <div className="flex justify-between text-xs text-slate-400"><span>{wpm ? `${wpm} WPM 🎉` : 'type the sentence'}</span><button className={btn} onClick={begin}>↻ new</button></div>
  </div>;
}

// 21. Emoji Memory Sequence
export function EmojiSequence() {
  const emojis = ['🎮','🎯','🎨','🎸','🎲','🚀'];
  const [seq, setSeq] = useState<string[]>([]);
  const [show, setShow] = useState(false);
  const [input, setInput] = useState<string[]>([]);
  const [msg, setMsg] = useState('memorize the sequence');
  const start = () => { const s = Array.from({length:4}, ()=>emojis[Math.floor(Math.random()*emojis.length)]); setSeq(s); setInput([]); setShow(true); setMsg('memorize!'); setTimeout(()=>{setShow(false); setMsg('now repeat');}, 2000); };
  const tap = (e: string) => {
    if (show) return;
    const ni = [...input, e]; setInput(ni);
    if (seq[ni.length-1] !== e) { setMsg('wrong! ✗'); setSeq([]); return; }
    if (ni.length === seq.length) setMsg('perfect! 🎉');
  };
  return <div className={wrap}>
    <div className={label}>Emoji Memory</div>
    <div className="h-10 flex items-center justify-center gap-2 text-2xl mb-2">{show ? seq.map((e,i)=><span key={i}>{e}</span>) : input.map((e,i)=><span key={i}>{e}</span>)}</div>
    <div className="text-center text-xs text-slate-400 mb-2">{msg}</div>
    <div className="flex flex-wrap justify-center gap-1 mb-2">{emojis.map(e=><button key={e} onClick={()=>tap(e)} className="h-10 w-10 rounded bg-slate-800 text-xl hover:bg-slate-700">{e}</button>)}</div>
    <div className="text-center"><button className={btnPri} onClick={start}>{seq.length?'restart':'start'}</button></div>
  </div>;
}

// 22. Target Clicker
export function TargetClicker() {
  const [pos, setPos] = useState({ x: 50, y: 50 });
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(15);
  const [playing, setPlaying] = useState(false);
  useEffect(() => {
    if (!playing) return;
    if (time <= 0) { setPlaying(false); return; }
    const t = setInterval(() => setTime(v=>v-1), 1000);
    return () => clearInterval(t);
  }, [playing, time]);
  const hit = () => { setScore(s=>s+1); setPos({ x: Math.random()*80+10, y: Math.random()*70+10 }); };
  const start = () => { setScore(0); setTime(15); setPlaying(true); setPos({x:50,y:50}); };
  return <div className={wrap}>
    <div className={label}>Target Clicker · 15s</div>
    <div className="relative h-32 rounded-lg bg-slate-900 overflow-hidden mb-2">
      {playing && time>0 && <button onClick={hit} className="absolute h-8 w-8 rounded-full bg-gradient-to-br from-red-500 to-amber-400 hover:scale-110 transition-transform" style={{left:`${pos.x}%`, top:`${pos.y}%`}}/>}
      {!playing && <div className="absolute inset-0 flex items-center justify-center text-xs text-slate-500">{time<=0?`Hits: ${score}`:'hit the targets!'}</div>}
    </div>
    <div className="flex justify-between text-xs text-slate-400 mb-2"><span>hits: {score}</span><span>time: {time}</span></div>
    <div className="text-center"><button className={btnPri} onClick={start}>{playing?'restart':'start'}</button></div>
  </div>;
}

// 23. Odd One Out
export function OddOneOut() {
  const [grid, setGrid] = useState<{ odd: number; base: string; diff: string }>(() => ({ odd: 0, base: '#3b82f6', diff: '#4b8ef8' }));
  const [score, setScore] = useState(0);
  const [size, setSize] = useState(2);
  const gen = (lvl: number) => { const hue = Math.floor(Math.random()*360); const base = `hsl(${hue},60%,50%)`; const diff = `hsl(${hue},60%,${50 + Math.max(4, 25-lvl*2)}%)`; const s = Math.min(5, 2+Math.floor(lvl/2)); setSize(s); setGrid({ odd: Math.floor(Math.random()*s*s), base, diff }); };
  const pick = (i: number) => { if (i === grid.odd) { setScore(s=>{ const ns=s+1; gen(ns); return ns; }); } else { setScore(0); gen(0); } };
  return <div className={wrap}>
    <div className={label}>Odd One Out</div>
    <div className="grid gap-1 mx-auto w-fit mb-2" style={{gridTemplateColumns:`repeat(${size},32px)`}}>
      {Array.from({length:size*size}).map((_,i)=><button key={i} onClick={()=>pick(i)} className="h-8 w-8 rounded" style={{background: i===grid.odd?grid.diff:grid.base}}/>)}
    </div>
    <div className="text-center text-xs text-slate-400">score: {score} · find the different shade</div>
  </div>;
}

// 24. Balloon Pop
export function BalloonPop() {
  const [balloons, setBalloons] = useState<{id:number;x:number;c:string}[]>([]);
  const [score, setScore] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [time, setTime] = useState(20);
  const cols = ['#ef4444','#22c55e','#3b82f6','#eab308','#a855f7','#ec4899'];
  useEffect(() => {
    if (!playing) return;
    if (time <= 0) { setPlaying(false); setBalloons([]); return; }
    const t = setInterval(() => setTime(v=>v-1), 1000);
    const spawn = setInterval(() => setBalloons(b => [...b, { id: Date.now()+Math.random(), x: Math.random()*85+5, c: cols[Math.floor(Math.random()*cols.length)] }].slice(-8)), 600);
    return () => { clearInterval(t); clearInterval(spawn); };
  }, [playing, time]);
  const pop = (id: number) => { setScore(s=>s+1); setBalloons(b=>b.filter(x=>x.id!==id)); };
  const start = () => { setScore(0); setTime(20); setPlaying(true); setBalloons([]); };
  return <div className={wrap}>
    <div className={label}>Balloon Pop · 20s</div>
    <div className="relative h-32 rounded-lg bg-slate-900 overflow-hidden mb-2">
      {balloons.map(b => <button key={b.id} onClick={()=>pop(b.id)} className="absolute text-2xl hover:scale-125 transition-transform" style={{left:`${b.x}%`, top:'35%', color:b.c}}>🎈</button>)}
      {!playing && <div className="absolute inset-0 flex items-center justify-center text-xs text-slate-500">{time<=0?`Popped: ${score}`:'pop the balloons!'}</div>}
    </div>
    <div className="flex justify-between text-xs text-slate-400 mb-2"><span>popped: {score}</span><span>time: {time}</span></div>
    <div className="text-center"><button className={btnPri} onClick={start}>{playing?'restart':'start'}</button></div>
  </div>;
}

// Catalog metadata for display
export const GAMES_META = [
  { id: 'ttt', name: 'Tic-Tac-Toe', emoji: '❌', cmp: TicTacToe },
  { id: 'mem', name: 'Memory Match', emoji: '🧠', cmp: Memory },
  { id: 'rps', name: 'Rock Paper Scissors', emoji: '✂', cmp: RPS },
  { id: 'snake', name: 'Snake', emoji: '🐍', cmp: Snake },
  { id: 'whack', name: 'Whack-a-Mole', emoji: '🐹', cmp: WhackAMole },
  { id: 'simon', name: 'Simon', emoji: '🎵', cmp: Simon },
  { id: 'cps', name: 'CPS Test', emoji: '🖱', cmp: CPS },
  { id: 'react', name: 'Reaction Time', emoji: '⚡', cmp: Reaction },
  { id: 'dice', name: 'Dice Roller', emoji: '🎲', cmp: Dice },
  { id: 'num', name: 'Number Guess', emoji: '🔢', cmp: NumberGuess },
  { id: 'mines', name: 'Mines Lite', emoji: '💣', cmp: MinesLite },
  { id: '2048', name: '2048 Lite', emoji: '🔲', cmp: Mini2048 },
  { id: 'coin', name: 'Coin Flip', emoji: '🪙', cmp: CoinFlip },
  { id: 'hilo', name: 'Higher / Lower', emoji: '📈', cmp: HigherLower },
  { id: 'math', name: 'Rapid Math', emoji: '➗', cmp: RapidMath },
  { id: 'stroop', name: 'Color Match', emoji: '🎨', cmp: ColorMatch },
  { id: 'bulls', name: 'Bulls & Cows', emoji: '🐂', cmp: BullsCows },
  { id: 'pattern', name: 'Pattern Repeat', emoji: '🔁', cmp: PatternRepeat },
  { id: 'fruit', name: 'Fruit Slice', emoji: '🍉', cmp: FruitSlice },
  { id: 'typing', name: 'Typing Speed', emoji: '⌨️', cmp: TypingSpeed },
  { id: 'emojiseq', name: 'Emoji Memory', emoji: '🧩', cmp: EmojiSequence },
  { id: 'target', name: 'Target Clicker', emoji: '🎯', cmp: TargetClicker },
  { id: 'odd', name: 'Odd One Out', emoji: '🔍', cmp: OddOneOut },
  { id: 'balloon', name: 'Balloon Pop', emoji: '🎈', cmp: BalloonPop },
] as const;

// Additional game names for the catalog (display-only — not all implemented as React components)
export const EXTRA_GAMES = [
  'Pong','Breakout','Flappy Bird','Tetris','Pac-Man','Space Invaders','Connect Four','Checkers','Chess','Sudoku','Hangman','Wordle Clone','Typing Test','Anagram','Crossword Mini','21 Questions','Higher Lower','Rock Paper Lizard Spock','Truth or Dare','Maze Runner','Tower of Hanoi','Nim','Mastermind','Battleship','Sliding Puzzle','Lights Out','Match-3','Bubble Pop','Color Match','Emoji Guess','Quick Math','Prime Check','Roman Numeral','Binary Guess','Hex to Dec','Caesar Cipher','Morse Decoder','Braille Reader','Flag Quiz','Capital Quiz','Periodic Table','Star Sign','Tarot Draw','Magic 8-Ball','Fortune Cookie','Dice Poker','Blackjack','War Card','Crazy Eights','Go','Reversi','Dominoes','Yahtzee','Bingo','Keno','Lottery','Roulette','Slot Machine','Craps Mini','Baccarat','Poker Hand','Bridge Trick','Uno Flip','Solitaire','FreeCell','Spider','Hearts','Spades','Cribbage','Backgammon','Mahjong','Shogi','Xiangqi','Mancala','Nine Mens Morris','Dots and Boxes','Sprouts','Hex','Chomp','Peg Solitaire','Rush Hour','Sokoban','Pipe Dream','Lemmings Clone','Bomberman Mini','Frogger','Q*bert','Donkey Kong Mini','Asteroids','Centipede','Defender','Galaga','Dig Dug','Bubble Bobble','Arkanoid','Pang','Gyruss','Phoenix','Berzerk','Robotron','Wizard of Wor','Gauntlet Mini','Contra Mini','Metroidvania Mini','Zelda Mini','Mario Jump','Sonic Ring','Kirby Float','Mega Man Shot','Castlevania Whip','Ninja Gaiden Slash','Street Fight','Mortal Kombat Mini','Tekken Mini','King of Fighters Mini','Smash Mini','Platformer','Metroidvania','Roguelike','Dungeon Crawl','Tactics','Tower Defense','Endless Runner','Auto Battler','Idle Clicker','Merge Game','Farming Sim','Cooking Dash','Pet Sim','Zoo Tycoon Mini','City Builder Mini','Flight Sim Mini','Racing Mini','Drift Mini','Parkour Mini','Skate Mini','Snowboard Mini','Surf Mini','BMX Mini','Golf Mini','Pool Mini','Bowling Mini','Darts Mini','Archery Mini','Fencing Mini','Boxing Mini','MMA Mini','Sumo Mini','Tennis Mini','Ping Pong Mini','Badminton Mini','Volleyball Mini','Basketball Mini','Soccer Mini','Hockey Mini','Cricket Mini','Baseball Mini','American Football Mini','Rugby Mini','Lacrosse Mini','Field Hockey Mini','Handball Mini','Water Polo Mini','Swimming Mini','Diving Mini','Surfing Mini','Skateboard Mini','Snowboard Mini','Skiing Mini','Climbing Mini','Running Mini','Sprinting Mini','Marathon Mini','Triathlon Mini','Decathlon Mini','Pentathlon Mini','Biathlon Mini','Skeleton Mini','Bobsled Mini','Luge Mini','Curling Mini','Figure Skate Mini','Speed Skate Mini','Short Track Mini','Cross Country Mini','Downhill Mini','Super-G Mini','Giant Slalom Mini','Slalom Mini','Moguls Mini','Aerials Mini','Halfpipe Mini','Slopestyle Mini','Big Air Mini','Skicross Mini','Snowboard Cross Mini','Parallel Giant Slalom Mini','Parallel Slalom Mini','Snowboard Halfpipe Mini','Snowboard Slopestyle Mini','Snowboard Big Air Mini','Snowboard Cross Mini',
];

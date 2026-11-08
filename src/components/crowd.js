// Cartoon crowd + peeking characters that look at the cursor. Vanilla JS.

// ================= palette =================
const D = '#151515';
const SKINS = ['#fbfbfb', '#f4f4f4', '#eaeaea', '#dddddd', '#c9c9c9'];
const CLOTH = [D, '#2b2b2b', '#4a4a4a', '#7a7a7a', '#bdbdbd', '#e6e6e6'];
const HAIRC = [D, D, D, '#2e2e2e', '#9c9c9c', '#d4d4d4'];

// ================= helpers =================
let R = Math.random; // random fn for current build
const pick = (a) => a[Math.floor(R() * a.length)];
const chance = (p) => R() < p;
const dot = (x, y, r, f = D) => `<circle class="ns" cx="${x}" cy="${y}" r="${r}" fill="${f}"/>`;
const shade = (rx, ry, cy = 0) =>
  `<ellipse class="ns" cx="0" cy="${cy}" rx="${rx}" ry="${ry}" fill="url(#vol)"/>`;

// ================= bodies =================
function body(skin) {
  const c = pick(CLOTH);
  const light = CLOTH.indexOf(c) >= 4;
  const shirt = `<path d="M-94,178 C-94,112 -74,86 -30,78 Q0,74 30,78 C74,86 94,112 94,178 Z" fill="${c}"/>`;
  const neck = `<path d="M-14,38 L-14,76 Q0,84 14,76 L14,38" fill="${skin}"/>`;
  const kind = pick(['tee', 'stripe', 'collar', 'hoodie', 'tank', 'jacket']);
  let detail = '';
  let sil = shirt;
  if (kind === 'tee') detail = `<path d="M-15,78 Q0,92 15,78" fill="none"/>`;
  if (kind === 'stripe') {
    sil = `<path d="M-94,178 C-94,112 -74,86 -30,78 Q0,74 30,78 C74,86 94,112 94,178 Z" fill="#ededed"/>`;
    detail = `<path d="M-62,96 h124 M-78,116 h156 M-86,136 h172 M-90,156 h180" fill="none" style="stroke-width:4"/>`;
  }
  if (kind === 'collar') detail = `<path d="M-18,74 L-4,96 L0,80 L4,96 L18,74" fill="#f2f2f2"/>`;
  if (kind === 'hoodie') detail = `<path d="M-44,84 Q0,58 44,84 Q0,104 -44,84 Z" fill="${c}"/><path d="M-8,96 v26 M8,96 v26" fill="none" style="stroke:${light ? D : '#ddd'}"/>`;
  if (kind === 'tank') detail = `<path d="M-34,80 L-44,178 M34,80 L44,178" fill="none" style="stroke:${light ? '#888' : '#666'};stroke-width:5"/>`;
  if (kind === 'jacket') detail = `<path d="M-22,76 L0,130 L22,76 Z" fill="${light ? '#555' : '#e8e8e8'}"/><path d="M-22,76 L-30,112 L-8,100 M22,76 L30,112 L8,100" fill="none"/>`;
  return { sil: [sil], detail: neck + detail + `<path class="ns" d="M-94,178 C-94,112 -74,86 -30,78 Q0,74 30,78 C74,86 94,112 94,178 Z" fill="url(#bodyvol)"/>` };
}

// ================= hair / headwear =================
function hairStyle(hc, skin) {
  const style = pick(['short', 'messy', 'side', 'afro', 'long', 'bun', 'pony', 'bald', 'buzz', 'curly', 'spiky']);
  const back = [], front = [];
  let detail = '';
  switch (style) {
    case 'short':
      front.push(`<path d="M-48,-2 C-56,-50 -20,-66 6,-60 C30,-66 56,-46 48,-4 C40,-24 30,-30 18,-28 C6,-40 -14,-34 -20,-26 C-30,-30 -42,-20 -48,-2 Z" fill="${hc}"/>`); break;
    case 'messy':
      front.push(`<path d="M-48,-4 C-58,-40 -36,-62 -10,-60 C0,-70 30,-66 38,-54 C56,-46 54,-20 48,-4 C44,-24 36,-30 26,-26 C24,-36 10,-38 0,-30 C-14,-38 -30,-32 -34,-22 C-42,-22 -46,-14 -48,-4 Z" fill="${hc}"/>`); break;
    case 'side':
      front.push(`<path d="M-48,2 C-54,-46 -18,-60 4,-56 C34,-58 54,-40 48,2 C40,-20 22,-32 -4,-30 C-24,-28 -40,-18 -48,2 Z" fill="${hc}"/>`);
      detail = `<path d="M-30,-36 q20,-14 46,-8 M-38,-20 q20,-18 44,-14" fill="none" style="stroke-width:1.8;stroke:${hc === D ? '#555' : D}"/>`; break;
    case 'afro':
      back.push(`<path d="M-62,6 C-84,-24 -62,-76 -20,-76 C0,-94 44,-84 54,-62 C80,-42 76,2 60,14 Z" fill="${hc}"/>`);
      front.push(`<path d="M-48,-4 C-50,-48 -20,-60 0,-58 C24,-60 50,-46 48,-4 C40,-18 34,-22 28,-14 C24,-26 12,-28 6,-18 C0,-30 -14,-28 -18,-16 C-24,-28 -38,-24 -38,-12 C-44,-16 -48,-12 -48,-4 Z" fill="${hc}"/>`); break;
    case 'curly':
      front.push(`<path d="M-50,0 C-62,-6 -60,-24 -50,-28 C-60,-44 -44,-60 -30,-56 C-26,-72 -6,-72 0,-62 C8,-74 30,-70 32,-56 C48,-62 60,-44 50,-30 C62,-24 60,-6 50,0 C44,-16 34,-24 22,-22 C14,-32 -12,-32 -20,-22 C-34,-24 -44,-16 -50,0 Z" fill="${hc}"/>`); break;
    case 'long':
      back.push(`<path d="M-54,0 C-62,-52 -24,-66 0,-64 C24,-66 62,-52 54,0 L60,86 C40,98 -40,98 -60,86 Z" fill="${hc}"/>`);
      front.push(`<path d="M-48,6 C-52,-44 -20,-60 0,-58 C20,-60 52,-44 48,6 C44,-16 30,-30 10,-34 C-4,-22 -30,-18 -48,6 Z" fill="${hc}"/>`); break;
    case 'bun':
      back.push(`<circle cx="${pick([-18, 0, 18])}" cy="-60" r="19" fill="${hc}"/>`);
      front.push(`<path d="M-48,0 C-54,-46 -18,-60 4,-56 C34,-58 54,-40 48,0 C40,-22 20,-32 0,-32 C-20,-32 -40,-22 -48,0 Z" fill="${hc}"/>`); break;
    case 'pony':
      back.push(`<path d="M28,-40 C72,-52 84,4 62,46 C64,12 56,-18 32,-22 Z" fill="${hc}"/>`);
      front.push(`<path d="M-48,0 C-54,-46 -18,-60 4,-56 C34,-58 54,-40 48,0 C40,-22 20,-32 0,-32 C-20,-32 -40,-22 -48,0 Z" fill="${hc}"/>`); break;
    case 'bald':
      detail = `<path d="M-6,-50 q6,-12 14,-4 q4,-10 10,0" fill="none"/>`; break;
    case 'buzz':
      front.push(`<path d="M-46,-6 C-48,-50 -20,-56 0,-56 C20,-56 48,-50 46,-6 C30,-28 -30,-28 -46,-6 Z" fill="#8a8a8a"/>`); break;
    case 'spiky':
      front.push(`<path d="M-48,-2 L-52,-30 L-38,-34 L-40,-56 L-22,-48 L-16,-70 L0,-54 L12,-72 L20,-50 L40,-60 L36,-38 L54,-30 L48,-2 C38,-22 -38,-22 -48,-2 Z" fill="${hc}"/>`); break;
  }
  return { back, front, detail, style };
}

function headwear() {
  const kind = pick(['bandana', 'fedora', 'cap', 'beanie']);
  const front = []; let detail = '';
  const c = pick(['#f2f2f2', D, '#5a5a5a']);
  const dark = c !== '#f2f2f2';
  if (kind === 'bandana') {
    front.push(`<path d="M-48,-8 C-50,-52 -20,-64 0,-64 C20,-64 50,-52 48,-8 C30,-22 -30,-22 -48,-8 Z" fill="${c}"/>`);
    front.push(`<path d="M16,-58 l22,-22 l6,24 Z M30,-56 l28,-4 l-14,20 Z" fill="${c}"/>`);
    const f = dark ? '#eee' : D;
    detail = dot(-24, -38, 3, f) + dot(-4, -46, 3, f) + dot(18, -40, 3, f) + dot(-34, -24, 3, f) + dot(32, -24, 3, f) + dot(4, -30, 3, f);
  }
  if (kind === 'fedora') {
    front.push(`<path d="M-36,-24 C-36,-60 -20,-70 0,-62 C20,-70 36,-60 36,-24 Z" fill="${c}"/>`);
    front.push(`<path d="M-66,-22 C-40,-34 40,-34 66,-22 C50,-14 -50,-14 -66,-22 Z" fill="${c}"/>`);
    detail = `<path d="M-35,-33 C-10,-38 10,-38 35,-33" fill="none" style="stroke:${dark ? '#fff' : D};stroke-width:4"/>`;
  }
  if (kind === 'cap') {
    front.push(`<path d="M-47,-12 C-48,-60 48,-60 47,-12 C20,-20 -20,-20 -47,-12 Z" fill="${c}"/>`);
    front.push(`<path d="M-14,-16 C20,-26 62,-22 72,-10 C52,-4 18,-8 -14,-10 Z" fill="${c}"/>`);
    detail = dot(0, -54, 4, dark ? '#eee' : D);
  }
  if (kind === 'beanie') {
    front.push(`<path d="M-46,-14 C-50,-70 50,-70 46,-14 Z" fill="${c}"/>`);
    front.push(`<rect x="-50" y="-22" width="100" height="16" rx="6" fill="${c}"/>`);
    front.push(`<circle cx="0" cy="-66" r="10" fill="${c}"/>`);
    detail = `<path d="M-30,-22 v16 M-15,-22 v16 M0,-22 v16 M15,-22 v16 M30,-22 v16" fill="none" style="stroke-width:1.6;stroke:${dark ? '#888' : D}"/>`;
  }
  return { back: [], front, detail };
}

// ================= face =================
function face(skin, opts) {
  let f = '', pupils = [];
  const ey = pick([0, 2, 4]);
  const sp = pick([14, 16, 18]);
  const eyeKind = pick(['dot', 'dot', 'dot', 'white', 'small']);
  const wear = opts.noWear ? 'none' : pick(['none', 'none', 'none', 'round', 'square', 'sun', 'patch']);
  const pr = eyeKind === 'small' ? 3.5 : eyeKind === 'white' ? 4 : 5;

  // brows
  const brow = pick(['arc', 'arc', 'angry', 'raised', 'thick', 'worried', 'none']);
  const by = ey - 14;
  if (brow === 'arc') f += `<path d="M${-sp - 9},${by} q8,-5 16,0 M${sp - 7},${by} q8,-5 16,0" fill="none"/>`;
  if (brow === 'angry') f += `<path d="M${-sp - 12},${by - 4} L${-sp + 6},${by + 4} M${sp - 6},${by + 4} L${sp + 12},${by - 4}" fill="none" style="stroke-width:5"/>`;
  if (brow === 'raised') f += `<path d="M${-sp - 9},${by - 6} q8,-8 16,0 M${sp - 7},${by - 6} q8,-8 16,0" fill="none"/>`;
  if (brow === 'thick') f += `<path d="M${-sp - 10},${by} l18,-3 M${sp - 8},${by - 3} l18,3" fill="none" style="stroke-width:6"/>`;
  if (brow === 'worried') f += `<path d="M${-sp - 10},${by - 2} L${-sp + 6},${by - 7} M${sp - 6},${by - 7} L${sp + 10},${by - 2}" fill="none"/>`;

  // eyes
  if (wear === 'sun') {
    f += `<path d="M${-sp - 19},${ey - 6} h29 q0,19 -14.5,19 q-14.5,0 -14.5,-19 Z M${sp - 10},${ey - 6} h29 q0,19 -14.5,19 q-14.5,0 -14.5,-19 Z" fill="${D}"/><path d="M${-sp + 10},${ey - 3} h${2 * sp - 20}" fill="none"/>`;
    pupils.push(dot(-sp - 9, ey - 1, 3, '#fff'), dot(sp + 1, ey - 1, 3, '#fff'));
  } else {
    [-sp, sp].forEach((x, i) => {
      if (wear === 'patch' && i === 0) return;
      if (eyeKind === 'white') f += `<circle cx="${x}" cy="${ey}" r="9" fill="#fff"/>`;
      pupils.push(dot(x, ey, pr));
    });
    if (wear === 'patch') f += `<path d="M-46,${ey - 18} L46,${ey - 30}" fill="none"/><circle cx="${-sp}" cy="${ey}" r="13" fill="${D}"/>`;
    if (wear === 'round') f += `<circle cx="${-sp}" cy="${ey}" r="12" fill="none"/><circle cx="${sp}" cy="${ey}" r="12" fill="none"/><path d="M${-sp + 12},${ey} h${2 * sp - 24}" fill="none"/>`;
    if (wear === 'square') f += `<rect x="${-sp - 13}" y="${ey - 10}" width="26" height="20" rx="4" fill="none"/><rect x="${sp - 13}" y="${ey - 10}" width="26" height="20" rx="4" fill="none"/><path d="M${-sp + 13},${ey} h${2 * sp - 26}" fill="none"/>`;
  }

  // nose
  const nose = pick(['hook', 'line', 'dot', 'big']);
  if (nose === 'hook') f += `<path d="M2,${ey + 6} q5,9 -3,13" fill="none"/>`;
  if (nose === 'line') f += `<path d="M0,${ey + 6} l-4,12 h6" fill="none" style="stroke-width:2.4"/>`;
  if (nose === 'dot') f += dot(0, ey + 16, 2.6);
  if (nose === 'big') f += `<path d="M-6,${ey + 8} q-6,14 6,14 q12,0 6,-14" fill="${skin}"/>`;

  // facial hair
  const beard = opts.noBeard ? 'none' : pick(['none', 'none', 'none', 'full', 'mustache', 'goatee', 'stubble']);
  if (beard === 'full') f += `<path d="M-44,8 C-46,62 -20,80 0,80 C20,80 46,62 44,8 C38,30 26,34 16,32 C8,26 -8,26 -16,32 C-26,34 -38,30 -44,8 Z" fill="${opts.hc}"/>`;
  if (beard === 'full' || beard === 'mustache') f += `<path d="M-22,30 C-12,18 -2,22 0,26 C2,22 12,18 22,30 C12,28 4,31 0,31 C-4,31 -12,28 -22,30 Z" fill="${opts.hc}"/>`;
  if (beard === 'goatee') f += `<path d="M-10,40 C-10,56 10,56 10,40 Z" fill="${opts.hc}"/>`;
  if (beard === 'stubble') for (let i = 0; i < 14; i++) f += dot(-28 + R() * 56, 30 + R() * 18, 1.3, '#555');

  // mouth
  if (beard === 'full') f += `<path d="M-7,42 q7,4 14,0" fill="none" style="stroke:#fff;stroke-width:2.5"/>`;
  else {
    const m = pick(['smile', 'smile', 'open', 'teeth', 'flat', 'o', 'smirk', 'frown', 'tongue']);
    const my = beard === 'mustache' ? 38 : 30;
    if (m === 'smile') f += `<path d="M-12,${my - 4} q12,12 24,0" fill="none"/>`;
    if (m === 'open') f += `<path d="M-14,${my - 4} h28 q0,16 -14,16 q-14,0 -14,-16 Z" fill="${D}"/>`;
    if (m === 'teeth') f += `<rect x="-20" y="${my - 8}" width="40" height="17" rx="7" fill="#fff"/><path d="M-10,${my - 8} v17 M0,${my - 8} v17 M10,${my - 8} v17 M-20,${my + .5} h40" fill="none" style="stroke-width:2"/>`;
    if (m === 'flat') f += `<path d="M-10,${my} h20" fill="none"/>`;
    if (m === 'o') f += `<ellipse cx="0" cy="${my}" rx="5" ry="7" fill="${D}"/>`;
    if (m === 'smirk') f += `<path d="M-10,${my} q14,4 20,-6" fill="none"/>`;
    if (m === 'frown') f += `<path d="M-11,${my + 2} q11,-8 22,0" fill="none"/>`;
    if (m === 'tongue') f += `<path d="M-12,${my - 4} q12,12 24,0" fill="none"/><path d="M-2,${my + 2} q2,10 9,4 l-1,-6" fill="#9a9a9a"/>`;
  }

  // extras
  if (chance(.18)) f += `<ellipse class="ns" cx="-28" cy="${ey + 18}" rx="7" ry="4" fill="#bbb" opacity=".6"/><ellipse class="ns" cx="28" cy="${ey + 18}" rx="7" ry="4" fill="#bbb" opacity=".6"/>`;
  if (chance(.14)) for (let i = 0; i < 6; i++) f += dot((i < 3 ? -26 : 20) + R() * 8, ey + 12 + R() * 8, 1.4, '#666');

  return { face: f, pupils: pupils.join(''), wear };
}

// ================= assemble one character =================
const haloOf = (s) => s.replace(/<(path|ellipse|circle|rect)\b(?![^>]*class="ns")/g, '<$1 class="halo"');

function makeChar() {
  const skin = pick(SKINS);
  const hc = pick(HAIRC);
  const hijab = chance(.1);
  const b = body(skin);

  let back = [], front = [], detail = '';
  let headShape;
  const ears = `<ellipse cx="-46" cy="6" rx="9" ry="12" fill="${skin}"/><ellipse cx="46" cy="6" rx="9" ry="12" fill="${skin}"/>`;

  if (hijab) {
    const hcol = pick([D, '#3a3a3a', '#8a8a8a', '#d8d8d8']);
    b.sil = [`<path d="M-94,178 C-94,108 -70,62 0,60 C70,62 94,108 94,178 Z" fill="${hcol}"/>`];
    b.detail = `<path class="ns" d="M-94,178 C-94,108 -70,62 0,60 C70,62 94,108 94,178 Z" fill="url(#bodyvol)"/>`;
    back.push(`<path d="M-60,10 C-64,-52 -30,-74 0,-74 C30,-74 64,-52 60,10 C58,52 30,76 0,76 C-30,76 -58,52 -60,10 Z" fill="${hcol}"/>`);
    headShape = `<ellipse cx="0" cy="8" rx="38" ry="44" fill="${skin}"/>` + shade(38, 44, 8);
    front.push(`<path d="M-40,-12 C-32,-46 32,-46 40,-12 C28,-30 -28,-30 -40,-12 Z" fill="${hcol}"/>`);
  } else {
    const h = chance(.22) ? headwear() : hairStyle(hc, skin);
    back = h.back; front = h.front; detail = h.detail;
    headShape = ears + `<ellipse cx="0" cy="0" rx="46" ry="50" fill="${skin}"/>` + shade(46, 50);
    if (chance(.15)) detail += dot(-46, 20, 3, '#fff').replace('class="ns" ', '') ;
  }

  const fc = face(skin, { noBeard: hijab || chance(.35), noWear: false, hc: hc === '#d4d4d4' ? '#9c9c9c' : hc });

  const sx = (0.9 + R() * 0.2).toFixed(3), sy = (0.92 + R() * 0.16).toFixed(3);
  const backS = back.join(''), frontS = front.join('');
  return `
    <g class="torso">${haloOf(b.sil.join(''))}${b.sil.join('')}${b.detail}</g>
    <g class="head"><g transform="scale(${sx} ${sy})">
      ${haloOf(backS + headShape + frontS)}
      ${backS}${headShape}
      <g class="face">${fc.face}<g class="eyes"><g class="pupils">${fc.pupils}</g></g></g>
      ${frontS}${detail}
    </g></g>`;
}

// ================= seeded random =================
function rng(seed) {
  return () => {
    seed |= 0; seed = seed + 0x6D2B79F5 | 0;
    let t = Math.imul(seed ^ seed >>> 15, 1 | seed);
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}

export const DEFS = `<defs>
  <radialGradient id="vol" cx="35%" cy="28%" r="80%">
    <stop offset="0" stop-color="#fff" stop-opacity=".35"/>
    <stop offset=".55" stop-color="#000" stop-opacity="0"/>
    <stop offset="1" stop-color="#000" stop-opacity=".2"/>
  </radialGradient>
  <linearGradient id="bodyvol" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#000" stop-opacity="0"/>
    <stop offset="1" stop-color="#000" stop-opacity=".35"/>
  </linearGradient>
</defs>`;

// mix a hex colour towards the background so far rows look darker (baked into the drawing)
function dimHex(hex, f) {
  let h = hex.slice(1);
  if (h.length === 3) h = h.split('').map((c) => c + c).join('');
  const n = parseInt(h, 16);
  const mix = (v) => Math.round(8 + (v - 8) * f);
  const r = mix(n >> 16), g = mix((n >> 8) & 255), b = mix(n & 255);
  return '#' + ((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1);
}
const dimMarkup = (str, f) => (f >= 0.999 ? str : str.replace(/#(?:[0-9a-f]{6}|[0-9a-f]{3})\b/gi, (m) => dimHex(m, f)));

// one direction (nx, ny in the character's own space) -> eyes, face, neck/head, shoulders
export function pose(nx, ny, m) {
  return {
    px: nx * 4.6 * m, py: ny * 4.6 * m,      // pupils
    fx: nx * 11 * m,  fy: ny * 9 * m,        // face features slide = head turning / nodding
    hx: nx * 7 * m,   hy: ny * 6 * m,        // whole head shifts on the neck
    a: nx * 12 * m + ny * nx * 3 * m,        // head tilt
    ba: nx * 3 * m                           // shoulders follow a little
  };
}

export function randomIdle(rand) {
  const ang = rand() * Math.PI * 2;
  return { nx: Math.cos(ang), ny: Math.sin(ang) * 0.8, m: 0.45 + rand() * 0.55 };
}

// one random character as SVG markup (deterministic for a given seed)
export function makeCharacter(seed) {
  const prev = R;
  R = rng(seed);
  const m = makeChar();
  R = prev;
  return m;
}

/* ------------------------------------------------------------------
   Peekers: single characters hiding behind section edges.
   Every element with [data-peeker] gets a character that watches the
   cursor anywhere on the page. Light: ~40 SVG nodes each, and the loop
   only runs while the pointer moves and a peeker is on screen.
------------------------------------------------------------------- */
export function initPeekers(root = document) {
  const els = [...root.querySelectorAll('[data-peeker]')];
  const items = els.map((el) => {
    const seed = Number(el.dataset.peeker) || 1;
    const flip = el.dataset.flip === '1' ? -1 : 1;
    el.innerHTML = `<svg viewBox="-95 -100 190 285" class="peeker-svg"><g transform="scale(${flip} 1)">${makeCharacter(seed)}</g></svg>`;
    const h = el.querySelector('.head');
    const idleRand = rng(seed * 7 + 3);
    const idle = randomIdle(idleRand);
    const st = pose(idle.nx, idle.ny, idle.m);
    const it = {
      el, flip, idle, visible: false,
      headEl: h, faceEl: h.querySelector('.face'), pupilEl: h.querySelector('.pupils'), eyesEl: h.querySelector('.eyes'),
      torsoEl: el.querySelector('.torso'), cur: { ...st }, tgt: { ...st },
    };
    apply(it);
    return it;
  });

  function apply(it) {
    const c = it.cur;
    it.headEl.setAttribute('transform', `translate(${c.hx.toFixed(2)} ${c.hy.toFixed(2)}) rotate(${c.a.toFixed(2)} 0 40)`);
    it.torsoEl.setAttribute('transform', `rotate(${c.ba.toFixed(2)} 0 170)`);
    it.faceEl.setAttribute('transform', `translate(${c.fx.toFixed(2)} ${c.fy.toFixed(2)})`);
    it.pupilEl.setAttribute('transform', `translate(${c.px.toFixed(2)} ${c.py.toFixed(2)})`);
  }

  const ptr = { x: 0, y: 0, active: false };
  let raf = 0, running = false;
  const KEYS = Object.keys(pose(0, 0, 0));

  function aim() {
    for (const it of items) {
      if (!it.visible) continue;
      if (!ptr.active) { it.tgt = pose(it.idle.nx, it.idle.ny, it.idle.m); continue; }
      const r = it.el.getBoundingClientRect();
      // head centre ≈ 35% down the character box
      const hx = r.left + r.width / 2, hy = r.top + r.height * 0.35;
      const dx = ptr.x - hx, dy = ptr.y - hy, d = Math.hypot(dx, dy) || 1;
      it.tgt = pose((dx / d) * it.flip, dy / d, Math.min(1, d / 120));
    }
  }
  function loop() {
    aim();
    let busy = false;
    for (const it of items) {
      if (!it.visible) continue;
      let sum = 0;
      for (const k of KEYS) { const dlt = it.tgt[k] - it.cur[k]; sum += Math.abs(dlt); it.cur[k] += dlt * (k[0] === 'p' ? 0.4 : 0.22); }
      if (sum > 0.02) { busy = true; apply(it); }
    }
    if (busy) raf = requestAnimationFrame(loop); else running = false;
  }
  const kick = () => { if (!running) { running = true; raf = requestAnimationFrame(loop); } };

  const onMove = (e) => { ptr.x = e.clientX; ptr.y = e.clientY; ptr.active = true; kick(); };
  const onLeave = () => { ptr.active = false; kick(); };
  window.addEventListener('mousemove', onMove, { passive: true });
  document.addEventListener('mouseleave', onLeave);

  const io = new IntersectionObserver((entries) => {
    for (const e of entries) { const it = items.find((i) => i.el === e.target); if (it) it.visible = e.isIntersecting; }
    kick();
  });
  items.forEach((it) => io.observe(it.el));

  const blink = setInterval(() => {
    const vis = items.filter((i) => i.visible);
    if (!vis.length || document.hidden) return;
    const it = vis[Math.floor(Math.random() * vis.length)];
    it.eyesEl.classList.add('blink');
    setTimeout(() => it.eyesEl.classList.remove('blink'), 240);
  }, 1400);

  return () => {
    cancelAnimationFrame(raf);
    clearInterval(blink);
    io.disconnect();
    window.removeEventListener('mousemove', onMove);
    document.removeEventListener('mouseleave', onLeave);
    els.forEach((el) => { el.innerHTML = ''; });
  };
}

export function initCrowd({ hero, crowd, defsEl, startFrac = 0.33, scale = 1, seed = 11 }) {
  // ================= build crowd =================
  // Rendering strategy (lightweight):
  //  * every character is rasterised ONCE into its row's <canvas> (≈11 canvases instead of ~7000 SVG nodes)
  //  * only the few characters near the cursor (or blinking) become live SVG, then get baked back
  let chars = [], rows = [];
  let W = 0, H = 0, buildToken = 0;
  const DPR = Math.min(window.devicePixelRatio || 1, 1.75);

  if (defsEl) defsEl.innerHTML = DEFS; // used by the live (DOM) characters

  const svgStyle = (halo) => `<style>path,circle,ellipse,rect{stroke:#111;stroke-width:3;stroke-linejoin:round;stroke-linecap:round}.halo{fill:${halo};stroke:${halo};stroke-width:12}.ns{stroke:none}</style>`;


  // write the current pose straight into the markup (for baking into the canvas)
  const posed = (m, p) => m
    .replace('<g class="torso">', `<g class="torso" transform="rotate(${p.ba.toFixed(2)} 0 170)">`)
    .replace('<g class="head">', `<g class="head" transform="translate(${p.hx.toFixed(2)} ${p.hy.toFixed(2)}) rotate(${p.a.toFixed(2)} 0 40)">`)
    .replace('<g class="face">', `<g class="face" transform="translate(${p.fx.toFixed(2)} ${p.fy.toFixed(2)})">`)
    .replace('<g class="pupils">', `<g class="pupils" transform="translate(${p.px.toFixed(2)} ${p.py.toFixed(2)})">`);

  function loadImage(c, pose) {
    const pw = Math.ceil(c.w * DPR), ph = Math.ceil(c.h * DPR);
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${pw}" height="${ph}" viewBox="-95 -100 190 285">${svgStyle(c.halo)}${DEFS}${posed(c.inner, pose)}</svg>`;
    const img = new Image(pw, ph);
    img.decoding = 'async';
    img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
    return img.decode().then(() => img, () => img);
  }

  function drawChar(row, c) {
    if (!c.img) return;
    row.ctx.drawImage(c.img, (c.left - row.x0) * DPR, (c.top - row.y0) * DPR, c.w * DPR, c.h * DPR);
  }
  function redrawRow(row) {
    row.ctx.clearRect(0, 0, row.canvas.width, row.canvas.height);
    for (const c of row.chars) if (!c.live) drawChar(row, c);
  }
  // repaint just the area around one character (cheap: only its neighbours are redrawn)
  function redrawAround(c) {
    const row = rows[c.row];
    if (!row.ready) return;
    // whole-pixel box (fractional clips leave hairline seams)
    const x = Math.floor((c.left - row.x0) * DPR) - 1, y = Math.floor((c.top - row.y0) * DPR) - 1;
    const w = Math.ceil((c.left + c.w - row.x0) * DPR) + 1 - x, h = Math.ceil((c.top + c.h - row.y0) * DPR) + 1 - y;
    const ctx = row.ctx;
    ctx.save();
    ctx.beginPath(); ctx.rect(x, y, w, h); ctx.clip();
    ctx.clearRect(x, y, w, h);
    for (const o of row.chars) {
      if (o.live) continue;
      if (o.left < c.left + c.w && o.left + o.w > c.left && o.top < c.top + c.h && o.top + o.h > c.top) drawChar(row, o);
    }
    ctx.restore();
  }

  function build() {
    const token = ++buildToken;
    const r = hero.getBoundingClientRect();
    W = r.width; H = r.height;
    R = rng(seed);
    const small = W < 700;
    const base = Math.min(1.15, Math.max(small ? 0.7 : 0.6, W / 1400));

    const rowData = [];
    let y = H * (small ? startFrac + 0.03 : startFrac), s = (small ? 0.5 : 0.42) * base * scale;
    while (y < H + 150 * s) { rowData.push({ y, s }); y += 92 * s; s *= 1.15; }
    const n = rowData.length;

    crowd.innerHTML = '';
    crowd.classList.add('ready');
    chars = []; rows = [];

    rowData.forEach((rd, ri) => {
      const t = n > 1 ? ri / (n - 1) : 1; // 0 = far back, 1 = front
      const f = Math.min(1, 0.38 + 0.66 * Math.pow(t, 0.8));
      const halo = dimHex('#ffffff', f);
      const gap = 118 * rd.s;
      const cnt = Math.ceil(W / gap) + 2;
      const off = (ri % 2) * gap / 2 - gap / 2;
      const rowChars = [];
      for (let i = 0; i < cnt; i++) {
        const x = i * gap + off + (R() - .5) * gap * .4;
        const yy = rd.y + (R() - .5) * 18 * rd.s;
        const sc = rd.s * (0.86 + R() * 0.28);
        const flip = R() < .5 ? -1 : 1;
        const inner = `<g transform="scale(${flip} 1)">${dimMarkup(makeChar(), f)}</g>`;
        const idle = randomIdle(R);
        const st = { ...pose(idle.nx, idle.ny, idle.m), w: 0 };
        const c = {
          x, y: yy, flip, s: sc, row: ri, f, halo, inner, idle,
          w: 190 * sc, h: 285 * sc, left: x - 95 * sc, top: yy - 100 * sc,
          cur: { ...st }, tgt: { ...st }, dirty: false, engaged: false, live: false, el: null, img: null, baking: false, holdUntil: 0
        };
        rowChars.push(c); chars.push(c);
      }

      const el = document.createElement('div');
      el.className = 'row';
      el.style.setProperty('--halo', halo);
      const x0 = -60, y0 = Math.floor(Math.min(...rowChars.map((c) => c.top)));
      const y1 = Math.min(H + 60, Math.ceil(Math.max(...rowChars.map((c) => c.top + c.h))));
      const cw = W + 120, chh = Math.max(1, y1 - y0);
      const canvas = document.createElement('canvas');
      canvas.width = Math.ceil(cw * DPR); canvas.height = Math.ceil(chh * DPR);
      canvas.style.cssText = `position:absolute;left:${x0}px;top:${y0}px;width:${cw}px;height:${chh}px;opacity:0;transition:opacity .6s ease`;
      el.appendChild(canvas);
      crowd.appendChild(el);
      rows.push({ el, canvas, ctx: canvas.getContext('2d'), x0, y0, t, chars: rowChars, ready: false, cx: 0, cy: 0, tx: 0, ty: 0 });
    });

    // rasterise rows front-to-back, one row per frame, so the page never freezes
    (async () => {
      for (let ri = rows.length - 1; ri >= 0; ri--) {
        const row = rows[ri];
        const imgs = await Promise.all(row.chars.map((c) => loadImage(c, c.cur)));
        if (token !== buildToken) return;
        row.chars.forEach((c, i) => { c.img = imgs[i]; });
        redrawRow(row);
        row.ready = true;
        row.canvas.style.opacity = '1';
        await new Promise((res) => setTimeout(res, 0)); // yield (works in background tabs too)
        if (token !== buildToken) return;
      }
      if (pointer.active) { pointer.pending = true; kick(); }
    })();
  }

  // ================= live characters =================
  function makeLive(c) {
    if (c.live) return;
    const row = rows[c.row];
    if (!row.ready) return;
    const el = document.createElement('div');
    el.className = 'ch';
    el.style.cssText = `left:${c.left.toFixed(1)}px;top:${c.top.toFixed(1)}px;width:${c.w.toFixed(1)}px;height:${c.h.toFixed(1)}px`;
    el.innerHTML = `<svg viewBox="-95 -100 190 285">${c.inner}</svg>`;
    row.el.appendChild(el);
    const h = el.querySelector('.head');
    Object.assign(c, {
      el, live: true,
      torsoEl: el.querySelector('.torso'), headEl: h, faceEl: h.querySelector('.face'),
      pupilEl: h.querySelector('.pupils'), eyesEl: h.querySelector('.eyes')
    });
    applyPose(c);
    redrawAround(c);
  }

  // bake a settled live character back into the canvas and drop its DOM
  function retire(c) {
    if (!c.live || c.baking) return;
    c.baking = true;
    const snapshot = { ...c.cur };
    loadImage(c, snapshot).then((img) => {
      c.baking = false;
      if (!c.live || c.engaged || c.dirty || performance.now() < c.holdUntil) return; // woke up again meanwhile
      c.img = img;
      c.el.remove();
      c.el = null; c.live = false;
      redrawAround(c);
    });
  }

  // ================= look-at (only nearby faces) =================
  const pointer = { x: 0, y: 0, active: false, pending: false, cx: 0, cy: 0 };
  const KEYS = ['px', 'py', 'fx', 'fy', 'hx', 'hy', 'a', 'ba'];


  function applyPose(c) {
    if (!c.live) return;
    const cu = c.cur;
    c.headEl.setAttribute('transform', `translate(${cu.hx.toFixed(2)} ${cu.hy.toFixed(2)}) rotate(${cu.a.toFixed(2)} 0 40)`);
    c.torsoEl.setAttribute('transform', `rotate(${cu.ba.toFixed(2)} 0 170)`);
    c.faceEl.setAttribute('transform', `translate(${cu.fx.toFixed(2)} ${cu.fy.toFixed(2)})`);
    c.pupilEl.setAttribute('transform', `translate(${cu.px.toFixed(2)} ${cu.py.toFixed(2)})`);
  }

  function relaxAll() {
    for (const c of chars) {
      if (!c.engaged) continue;
      Object.assign(c.tgt, pose(c.idle.nx, c.idle.ny, c.idle.m), { w: 0 });
      c.engaged = false; c.dirty = true;
    }
  }

  // only touches characters inside (or just leaving) the cursor radius
  function aimAt(mx, my) {
    pointer.x = mx; pointer.y = my;
    const radius = Math.max(170, Math.min(320, W * 0.2));
    for (const c of chars) {
      const row = rows[c.row];
      if (!row.ready) continue;
      const hx = c.x + row.cx, hy = c.y + row.cy - 10 * c.s;
      const dx = mx - hx, dy = my - hy;
      if (!c.engaged && (Math.abs(dx) > radius || Math.abs(dy) > radius)) continue;
      const d = Math.hypot(dx, dy) || 1;
      let w = 1 - d / radius;
      if (w <= 0) {
        if (c.engaged) { Object.assign(c.tgt, pose(c.idle.nx, c.idle.ny, c.idle.m), { w: 0 }); c.engaged = false; c.dirty = true; }
        continue;
      }
      w = w * w * (3 - 2 * w); // smoothstep falloff
      const nx = (dx / d) * c.flip, ny = dy / d;
      const near = Math.min(1, d / (70 * c.s + 20));
      const look = pose(nx, ny, near);
      const idle = pose(c.idle.nx, c.idle.ny, c.idle.m);
      for (const k in look) c.tgt[k] = idle[k] + (look[k] - idle[k]) * w;
      c.tgt.w = w;
      c.engaged = true; c.dirty = true;
      makeLive(c);
    }
  }

  // pointer events only record the position; the work happens once per frame
  const onMove = (e) => { pointer.cx = e.clientX; pointer.cy = e.clientY; pointer.pending = true; kick(); };
  hero.addEventListener('mousemove', onMove, { passive: true });
  const onTouch = (e) => { const t = e.touches[0]; if (t) onMove(t); };
  hero.addEventListener('touchmove', onTouch, { passive: true });
  hero.addEventListener('touchstart', onTouch, { passive: true });
  const leave = () => { pointer.active = false; pointer.pending = false; for (const row of rows) { row.tx = 0; row.ty = 0; } relaxAll(); kick(); };
  hero.addEventListener('mouseleave', leave);
  hero.addEventListener('touchend', leave);

  // ================= animation loop (runs only while something moves) =================
  let rafId = 0, running = false, visible = true;
  function kick() {
    if (!running && visible && chars.length) { running = true; rafId = requestAnimationFrame(frame); }
  }

  function frame() {
    if (pointer.pending) {
      pointer.pending = false;
      const r = hero.getBoundingClientRect();
      const mx = pointer.cx - r.left, my = pointer.cy - r.top;
      pointer.active = true;
      for (const row of rows) {
        row.tx = -(mx / W - .5) * (6 + row.t * 34);
        row.ty = -(my / H - .5) * (2 + row.t * 12);
      }
      aimAt(mx, my);
    }

    let busy = false, rowsMoved = false;
    for (const row of rows) {
      const dx = row.tx - row.cx, dy = row.ty - row.cy;
      if (Math.abs(dx) + Math.abs(dy) > 0.05) {
        row.cx += dx * 0.14; row.cy += dy * 0.14;
        row.el.style.transform = `translate3d(${row.cx.toFixed(2)}px, ${row.cy.toFixed(2)}px, 0)`;
        rowsMoved = true;
      }
    }
    if (rowsMoved) { busy = true; if (pointer.active) aimAt(pointer.x, pointer.y); }

    const now = performance.now();
    for (const c of chars) {
      if (!c.live) continue;
      if (c.dirty) {
        const cu = c.cur, tg = c.tgt;
        let sum = Math.abs(tg.w - cu.w) * 20;
        for (const key of KEYS) sum += Math.abs(tg[key] - cu[key]);
        if (sum < 0.02) {
          c.dirty = false;
        } else {
          busy = true;
          for (const key of KEYS) cu[key] += (tg[key] - cu[key]) * (key[0] === 'p' ? 0.45 : 0.3);
          cu.w += (tg.w - cu.w) * 0.25;
          const w = cu.w < 0.01 ? 0 : cu.w;
          const st = c.el.style;
          if (w === 0) {
            if (st.transform) { st.transform = ''; st.zIndex = ''; st.filter = ''; }
          } else {
            // pop: lift, grow a little and come back to full brightness
            st.zIndex = w > 0.2 ? 5 : '';
            st.transform = `translateY(${(-12 * w * c.s).toFixed(2)}px) scale(${(1 + 0.14 * w).toFixed(3)})`;
            st.filter = `brightness(${(1 + (1 / c.f - 1 + 0.12) * w).toFixed(3)})`;
          }
          applyPose(c);
        }
      }
      if (!c.engaged && !c.dirty && now >= c.holdUntil) {
        if (c.el.style.transform) { c.el.style.transform = ''; c.el.style.zIndex = ''; c.el.style.filter = ''; }
        retire(c);
      } else if (!c.engaged && !c.dirty) busy = true; // waiting out a blink
    }

    if (busy || pointer.pending) rafId = requestAnimationFrame(frame);
    else running = false;
  }

  // ambient life: now and then a visible face blinks or glances somewhere new
  const intervalId = setInterval(() => {
    if (!visible || document.hidden || !chars.length) return;
    for (let k = 0; k < 2; k++) {
      const c = chars[Math.floor(Math.random() * chars.length)];
      if (c.engaged || c.baking || !rows[c.row].ready || c.top > H) continue;
      makeLive(c);
      if (!c.live) continue;
      c.holdUntil = performance.now() + 450;
      c.eyesEl.classList.remove('blink');
      void c.eyesEl.getBoundingClientRect();
      c.eyesEl.classList.add('blink');
      if (k === 0) {
        c.idle = randomIdle(Math.random);
        Object.assign(c.tgt, pose(c.idle.nx, c.idle.ny, c.idle.m));
        c.dirty = true;
      }
      kick();
    }
  }, 700);

  // pause everything when the hero is scrolled away
  const io = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    if (visible) kick(); else { cancelAnimationFrame(rafId); running = false; }
  });
  io.observe(hero);

  let rt, lastW = 0;
  const onResize = () => {
    clearTimeout(rt);
    rt = setTimeout(() => {
      // mobile browsers fire resize when the URL bar hides: only rebuild on width change
      if (Math.abs(hero.clientWidth - lastW) < 2) return;
      lastW = hero.clientWidth; build();
    }, 200);
  };
  window.addEventListener('resize', onResize);

  // build after the page has painted, so the rest of the site loads first
  const idle = window.requestIdleCallback || ((fn) => setTimeout(fn, 120));
  const cancelIdle = window.cancelIdleCallback || clearTimeout;
  const idleId = idle(() => { lastW = hero.clientWidth; build(); }, { timeout: 600 });

  return () => {
    buildToken++;
    cancelIdle(idleId);
    cancelAnimationFrame(rafId);
    clearInterval(intervalId);
    clearTimeout(rt);
    io.disconnect();
    hero.removeEventListener('mousemove', onMove);
    hero.removeEventListener('touchmove', onTouch);
    hero.removeEventListener('touchstart', onTouch);
    hero.removeEventListener('mouseleave', leave);
    hero.removeEventListener('touchend', leave);
    window.removeEventListener('resize', onResize);
    crowd.innerHTML = '';
    crowd.classList.remove('ready');
  };
}

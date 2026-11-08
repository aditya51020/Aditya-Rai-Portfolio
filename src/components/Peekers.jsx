import React from 'react';
import './Peekers.css';

/* A single character in a box of width `size` (height = 1.5 × size).
   `show` = how much of it (from the top) is visible above the edge. */
export function Peeker({ seed, size = 90, flip = false, style }) {
  return (
    <div
      className="peeker"
      data-peeker={seed}
      data-flip={flip ? '1' : '0'}
      style={{ width: size, height: size * 1.5, ...style }}
      aria-hidden="true"
    />
  );
}

/* A strip between sections: a few characters peeking over a sticker fence. */
export function PeekRow({ people }) {
  return (
    <div className="peek-row" aria-hidden="true">
      {people.map((p, i) => (
        <Peeker
          key={i}
          seed={p.seed}
          size={p.size}
          flip={p.flip}
          style={{ left: `${p.x}%`, bottom: -p.size * 1.5 * 0.3 - 4 + (p.lift || 0) }}
        />
      ))}
    </div>
  );
}

/* A character peeking over the top edge of a card (put inside a positioned card). */
export function PeekOn({ seed, size = 120, right, left, flip = false }) {
  const visible = size * 1.5 * 0.56; // head + chin above the edge
  return (
    <div className="peek-on" style={{ right, left, width: size, height: visible }} aria-hidden="true">
      <Peeker seed={seed} size={size} flip={flip} style={{ left: 0, top: 4 }} />
    </div>
  );
}

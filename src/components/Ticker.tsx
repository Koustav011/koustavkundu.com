import { useState } from 'react';
import { TICKER } from '../data';

export function Ticker() {
  const [paused, setPaused] = useState(false);
  // Items are rendered twice so the CSS loop (translateX -50%) is seamless.
  const items = [...TICKER, ...TICKER];
  return (
    <div className={`ticker${paused ? ' is-paused' : ''}`}>
      <div className="ticker-track" aria-hidden="true">
        {items.map((item, i) => (
          <span className="ticker-item" key={i}>
            {item} <span className="up">▲</span>
          </span>
        ))}
      </div>
      <button className="ticker-toggle" type="button" aria-pressed={paused} onClick={() => setPaused(!paused)}>
        {paused ? 'Play' : 'Pause'}
      </button>
    </div>
  );
}

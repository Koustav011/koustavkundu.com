import { TICKER } from '../data';

export function Ticker() {
  // Items are rendered twice so the CSS loop (translateX -50%) is seamless.
  const items = [...TICKER, ...TICKER];
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">
        {items.map((item, i) => (
          <span className="ticker-item" key={i}>
            {item} <span className="up">▲</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export function LiquidStaircase() {
  return (
    <svg
      className="liquid-staircase"
      viewBox="0 0 560 520"
      role="img"
      aria-labelledby="liquid-staircase-title liquid-staircase-description"
    >
      <title id="liquid-staircase-title">Structure in liquid motion</title>
      <desc id="liquid-staircase-description">
        A precise cube descends a repeating isometric staircase whose surfaces
        move like water.
      </desc>

      <g className="liquid-staircase__steps">
        <path
          className="liquid-staircase__top"
          d="M36 360 274 223l82 47-238 138Z"
        />
        <path
          className="liquid-staircase__rise"
          d="m118 408 238-138v38L118 446Z"
        />
        <path
          className="liquid-staircase__side"
          d="M36 360 118 408v38l-82-47Z"
        />
        <path
          className="liquid-staircase__top"
          d="M118 302 356 165l82 47-238 138Z"
        />
        <path
          className="liquid-staircase__rise"
          d="m200 350 238-138v38L200 388Z"
        />
        <path
          className="liquid-staircase__side"
          d="m118 302 82 48v38l-82-48Z"
        />
        <path
          className="liquid-staircase__top"
          d="M200 244 438 107l82 47-238 138Z"
        />
        <path
          className="liquid-staircase__rise"
          d="m282 292 238-138v38L282 330Z"
        />
        <path
          className="liquid-staircase__side"
          d="m200 244 82 48v38l-82-48Z"
        />
        <path className="liquid-staircase__echo" d="m36 457 82 47 238-137" />
        <path className="liquid-staircase__echo" d="m200 447 82 47 238-137" />
      </g>

      <g className="liquid-staircase__flow" aria-hidden="true">
        <path d="M8 389c80-48 137-44 203-91s130-62 219-116" />
        <path d="M46 420c81-49 135-43 202-91s130-62 220-116" />
        <path d="M91 449c79-47 133-42 199-89s129-61 216-114" />
      </g>

      <g className="liquid-staircase__cube">
        <path
          className="liquid-staircase__cube-top"
          d="m296 104 68-39 68 39-68 39Z"
        />
        <path
          className="liquid-staircase__cube-left"
          d="m296 104 68 39v79l-68-39Z"
        />
        <path
          className="liquid-staircase__cube-right"
          d="m364 143 68-39v79l-68 39Z"
        />
        <path
          className="liquid-staircase__cube-glint"
          d="m312 108 52-30 51 30"
        />
      </g>

      <g className="liquid-staircase__caption" aria-hidden="true">
        <path d="M64 206h88" />
        <text x="64" y="196">
          STRUCTURE / MOTION / HIERARCHY
        </text>
      </g>
    </svg>
  );
}

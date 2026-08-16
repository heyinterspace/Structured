export function EthosFigure() {
  return (
    <section
      className="ethos-section wrap"
      aria-labelledby="ethos-figure-title"
    >
      <div className="ethos-section-copy reveal">
        <span className="eyebrow">System diagram · 01</span>
        <h2 className="section-title" id="ethos-figure-title">
          One language. Three dimensions.
        </h2>
        <p className="lead">
          The pillars do not compete for visual volume. Each owns a different
          design decision and all three are held to the same semantic standard.
        </p>
      </div>

      <figure className="technical-figure glass reveal">
        <div className="technical-stage">
          <svg
            viewBox="0 0 900 520"
            aria-hidden="true"
            preserveAspectRatio="none"
          >
            <path d="M450 260 L170 112" />
            <path d="M450 260 L730 112" />
            <path d="M450 260 L450 440" />
            <circle cx="450" cy="260" r="116" />
          </svg>
          <div className="technical-node node-structure">
            <span>01 · Frame</span>
            <strong>
              Structured
              <br />
              neobrutalism
            </strong>
          </div>
          <div className="technical-node node-editorial">
            <span>02 · Composition</span>
            <strong>
              Editorial scientific
              <br />
              modernism
            </strong>
          </div>
          <div className="technical-node node-liquid">
            <span>03 · Behavior</span>
            <strong>
              Liquid
              <br />
              depth
            </strong>
          </div>
          <div className="technical-core" aria-hidden="true">
            <span>SL</span>
          </div>
        </div>
        <figcaption>
          <span>FIG. 01 / DESIGN OPERATING MODEL</span>
          <p>
            <strong>
              Tactile structure. Editorial intelligence. Liquid depth.
            </strong>{" "}
            Semantic clarity tests the complete system.
          </p>
        </figcaption>
      </figure>
    </section>
  );
}

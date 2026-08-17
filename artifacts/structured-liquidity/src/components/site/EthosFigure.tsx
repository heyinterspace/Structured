export function EthosFigure() {
  return (
    <section
      className="ethos-section wrap"
      aria-labelledby="ethos-figure-title"
    >
      <div className="ethos-section-copy reveal">
        <span className="eyebrow">System diagram · 01</span>
        <h2 className="section-title" id="ethos-figure-title">
          The trifecta, made visible.
        </h2>
        <p className="lead">
          Like the three visible faces of the cube, each pillar owns a different
          design decision while remaining inseparable from the whole.
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
              Neobrutalist
              <br />
              structure
            </strong>
          </div>
          <div className="technical-node node-liquid">
            <span>02 · State</span>
            <strong>
              Liquid glass
              <br />
              motion
            </strong>
          </div>
          <div className="technical-node node-editorial">
            <span>03 · Composition</span>
            <strong>
              Editorial modern
              <br />
              frameworks
            </strong>
          </div>
          <div className="technical-core" aria-hidden="true">
            <span>SL</span>
          </div>
        </div>
        <figcaption>
          <span>FIG. 01 / THE STRUCTURED LIQUIDITY TRIFECTA</span>
          <p>
            <strong>
              Neobrutalist Structure. Liquid Glass Motion. Editorial Modern
              Frameworks.
            </strong>{" "}
            Frame, state, and composition operate as three faces of one system.
            Semantic Clarity tests the complete system; it is not a fourth face
            or pillar.
          </p>
        </figcaption>
      </figure>
    </section>
  );
}

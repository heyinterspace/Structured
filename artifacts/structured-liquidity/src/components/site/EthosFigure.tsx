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
              Tactile
              <br />
              structure
            </strong>
          </div>
          <div className="technical-node node-liquid">
            <span>02 · Behavior</span>
            <strong>
              Liquid
              <br />
              depth
            </strong>
          </div>
          <div className="technical-node node-editorial">
            <span>03 · Composition</span>
            <strong>
              Editorial
              <br />
              framework
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
              Tactile Structure. Liquid Depth. Editorial Framework.
            </strong>{" "}
            The physical frame, believable state and mass, and evidence-led
            composition work in that order. Semantic Clarity tests the complete
            system; it is not a fourth pillar.
          </p>
        </figcaption>
      </figure>
    </section>
  );
}

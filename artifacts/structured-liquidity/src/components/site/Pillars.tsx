export function Pillars() {
  return (
    <section id="manifesto" className="wrap">
      <div className="section-head reveal">
        <span className="eyebrow">Principles · the foundation</span>
        <h2 className="section-title">
          Structure holds it. Evidence explains it. Liquidity brings it to life.
        </h2>
        <p className="lead">
          Tactile Structure defines the frame. Liquid Depth makes state and mass
          perceptible. Editorial Framework composes hierarchy and evidence.
          Semantic Clarity tests the complete system rather than competing as a
          fourth pillar.
        </p>
      </div>

      <div className="pillars">
        <div className="glass pillar reveal">
          <span className="pnum">Pillar 01</span>
          <h3>Tactile Structure</h3>
          <p>
            Structured neobrutalism—the physical frame, load-bearing borders,
            hard shadows, clear affordances, and tactile interaction.
          </p>
          <ul>
            <li>
              <div>
                <strong className="rule-h">Shadows stay flat</strong>: offset,
                solid, hard-edged. A structural fact, not a mood.
              </div>
            </li>
            <li>
              <div>
                <strong className="rule-h">Borders carry weight</strong>: 2–3px,
                never decorative. The edge defines the object.
              </div>
            </li>
          </ul>
        </div>

        <div className="glass pillar reveal">
          <span className="pnum">Pillar 02</span>
          <h3>Liquid Depth</h3>
          <p>
            Layering, continuity, glass, and motion that communicates state and
            believable mass.
          </p>
          <ul>
            <li>
              <div>
                <strong className="rule-h">Depth through layers</strong>: stack
                translucent surfaces while every boundary remains structurally
                legible.
              </div>
            </li>
            <li>
              <div>
                <strong className="rule-h">Motion explains change</strong>:
                liquid settles, connects, and reveals state inside a frame that
                never wobbles.
              </div>
            </li>
          </ul>
        </div>

        <div className="glass pillar reveal editorial-pillar">
          <span className="pnum">Pillar 03</span>
          <h3>Editorial Framework</h3>
          <p>
            Hierarchy, refined grids, oversized typography, technical diagrams,
            captions, labeling, and evidence. It is informed by editorial
            scientific modernism.
          </p>
          <ul>
            <li>
              <div>
                <strong className="rule-h">
                  Monochrome carries information
                </strong>
                : accent marks selection, progression, or one key relationship.
              </div>
            </li>
            <li>
              <div>
                <strong className="rule-h">Type and evidence agree</strong>:
                display type creates hierarchy; mono captions label data,
                sources, and state.
              </div>
            </li>
          </ul>
        </div>
      </div>
      <p className="manifesto-gate reveal">
        <strong>Quality gate · Semantic Clarity</strong>
        Every screen must remain complete, legible, and useful without color,
        glass, or motion.
      </p>
    </section>
  );
}

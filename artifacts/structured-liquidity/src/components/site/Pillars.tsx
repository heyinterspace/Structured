export function Pillars() {
  return (
    <section id="manifesto" className="wrap">
      <div className="section-head reveal">
        <span className="eyebrow">Principles · the foundation</span>
        <h2 className="section-title">
          Three faces. One design language.
        </h2>
        <p className="lead">
          Neobrutalist Structure defines the physical frame. Liquid Glass Motion
          makes state, continuity, and mass perceptible. Editorial Modern
          Frameworks compose hierarchy and evidence. Together they form the
          Structured Liquidity trifecta; Semantic Clarity tests the complete
          system rather than competing as a fourth pillar.
        </p>
      </div>

      <div className="pillars">
        <div className="glass pillar reveal">
          <span className="pnum">Pillar 01</span>
          <h3>Neobrutalist Structure</h3>
          <p>
            The physical frame: load-bearing borders, hard shadows, square
            geometry, clear affordances, and tactile interaction.
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
          <h3>Liquid Glass Motion</h3>
          <p>
            Layered glass, continuity, and purposeful motion that communicate
            state and give interfaces believable mass.
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
          <h3>Editorial Modern Frameworks</h3>
          <p>
            Hierarchy, refined grids, oversized typography, technical diagrams,
            captions, labeling, and evidence, informed by editorial scientific
            modernism.
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

export function Pillars() {
  return (
    <section id="manifesto" className="wrap">
      <div className="section-head reveal">
        <span className="eyebrow">Principles · the foundation</span>
        <h2 className="section-title">
          Three faces. One design language.
        </h2>
        <p className="lead">
          Structured framing makes hierarchy and action unmistakable. Liquid
          motion makes state and continuity perceptible. Scientific clarity
          turns hierarchy, labels, diagrams, and evidence into one legible
          system. Together they form the Structured Liquidity trifecta.
        </p>
      </div>

      <div className="pillars">
        <div className="glass pillar reveal">
          <span className="pnum">Pillar 01</span>
          <h3>Structured framing</h3>
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
          <h3>Liquid motion</h3>
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
          <h3>Scientific clarity</h3>
          <p>
            Scientific Modernism applied to interfaces: refined grids,
            decisive typography, technical diagrams, captions, labels, and
            evidence.
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
        <strong>Quality floor · legibility</strong>
        Every screen remains complete and useful without color, glass, or
        motion. The aesthetic never outranks the information.
      </p>
    </section>
  );
}

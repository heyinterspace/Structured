export function Tenets() {
  return (
    <section id="manifesto" className="wrap">
      <div className="section-head reveal">
        <span className="eyebrow">Tenets · the foundation</span>
        <h2 className="section-title">
          Three faces. One design language.
        </h2>
        <p className="lead">
          Structured framing makes hierarchy and action unmistakable. Liquid
          motion makes state and continuity perceptible. Scientific clarity
          turns hierarchy, labels, diagrams, and evidence into one legible
          system. Together, these three tenets form Structured Liquidity.
        </p>
      </div>

      <div className="tenets">
        <div className="glass tenet reveal">
          <span className="pnum">Tenet 01</span>
          <h3>Structured framing</h3>
          <p>
            The physical frame: load-bearing borders, hard shadows, square
            geometry, unmistakable hierarchy, clear affordances, and tactile
            interaction. Content and action remain understandable before
            decoration is added.
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

        <div className="glass tenet reveal">
          <span className="pnum">Tenet 02</span>
          <h3>Liquid motion</h3>
          <p>
            Layered glass, continuity, and purposeful motion that communicate
            state and give interfaces believable mass without becoming the
            only carrier of meaning.
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
                never wobbles, with a complete reduced-motion state.
              </div>
            </li>
          </ul>
        </div>

        <div className="glass tenet reveal scientific-tenet">
          <span className="pnum">Tenet 03</span>
          <h3>Scientific clarity</h3>
          <p>
            Scientific Modernism applied to interfaces: refined grids,
            decisive typography, technical diagrams, captions, labels, and
            evidence. Information remains complete and legible without relying
            on color, glass, or motion.
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
    </section>
  );
}

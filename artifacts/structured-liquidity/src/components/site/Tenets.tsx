export function Tenets() {
  return (
    <section id="manifesto" className="wrap">
      <div className="section-head reveal">
        <span className="eyebrow">Principles · the foundation</span>
        <h2 className="section-title">Three faces. One design language.</h2>
        <p className="lead">
          Structured Framing organizes information. Liquid Motion makes the
          system's behavior perceptible. Scientific Clarity communicates meaning
          with disciplined hierarchy, evidence, and unmistakable legibility.
          Together these three tenets form Structured Liquidity.
        </p>
      </div>

      <div className="tenets">
        <article className="tenet tenet-framing reveal">
          <span className="pnum">Tenet 01</span>
          <span className="psub">Frame · Affordance</span>
          <h3>Structured Framing</h3>
          <p>
            Information organized through load-bearing borders, square geometry,
            rational grids, clear affordances, and tactile interaction. The
            frame makes hierarchy and action understandable before decoration.
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
        </article>

        <article className="tenet tenet-liquid reveal">
          <span className="pnum">Tenet 02</span>
          <span className="psub">State · Continuity</span>
          <h3>Liquid Motion</h3>
          <p>
            Layered glass, continuity, and purposeful motion that communicate
            state and give interfaces believable mass without becoming the only
            carrier of meaning.
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
        </article>

        <article className="tenet tenet-clarity reveal">
          <span className="pnum">Tenet 03</span>
          <span className="psub">Meaning · Legibility</span>
          <h3>Scientific Clarity</h3>
          <p>
            Meaning communicated through disciplined hierarchy, measured
            typography, captions, evidence, and purposeful whitespace. Swiss
            modernism is the informing tradition. Every screen remains complete
            and useful without relying on color, glass, or motion.
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
                <strong className="rule-h">
                  Every position is intentional
                </strong>
                : type, captions, data, and controls align to the same measured
                grid.
              </div>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}

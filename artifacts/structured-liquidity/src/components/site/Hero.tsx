import { Sparkles, Github } from "lucide-react";
import { LiquidWord, Hypercube } from "./liquid";
import { InstallButton } from "./InstallButton";

const GITHUB = "https://github.com/heyinterspace/Structured";

export function Hero() {
  return (
    <header className="hero wrap" id="top">
      <div className="hero-grid">
        <div>
          <span className="eyebrow reveal">
            An open shadcn theme · est. 2026
          </span>
          <h1 className="wordmark reveal">
            <span className="brutal">Structured</span>
            <br />
            <LiquidWord text="Liquidity" />
          </h1>
          <p className="lead reveal">
            <em>
              Structured framing. Liquid motion. Scientific clarity.
            </em>{" "}
            Framing organizes information. Motion makes the system's behavior
            perceptible. Clarity communicates meaning through ordered,
            unmistakable hierarchy. Three visible faces, one coherent
            interface.
          </p>
          <div className="hero-tags reveal">
            <span className="tag">
              <b>01</b> Structured Framing
            </span>
            <span className="tag">
              <b>02</b> Liquid Motion
            </span>
            <span className="tag">
              <b>03</b> Scientific Clarity
            </span>
          </div>
          <div className="hero-cta reveal">
            <InstallButton />
            <a
              className="btn glassy"
              href={GITHUB}
              target="_blank"
              rel="noopener"
            >
              <Github />
              Source
            </a>
            <a className="btn glassy" href="#showcase">
              <Sparkles />
              Showcase
            </a>
          </div>
        </div>
        <div
          className="hero-cube-wrap"
          role="img"
          aria-label="The Structured Liquidity trifecta shown on the cube's three visible faces: Structured Framing, Liquid Motion, and Scientific Clarity."
        >
          <Hypercube className="hero-cube" faceLabels={["01", "02", "03"]} />
        </div>
      </div>
    </header>
  );
}

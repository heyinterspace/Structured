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
              Neobrutalist Structure. Liquid Glass Motion. Editorial Modern
              Frameworks.
            </em>{" "}
            Structured Liquidity is a trifecta: a physical frame with
            load-bearing borders and hard shadows; layered glass and motion that
            make state feel continuous and massive; and editorial systems that
            compose hierarchy, diagrams, captions, labels, and evidence.
            Semantic Clarity tests the complete system. This page is both
            specimen and spec, so retheme it live as you read.
          </p>
          <div className="hero-tags reveal">
            <span className="tag">Neobrutalist Structure</span>
            <span className="tag">Liquid Glass Motion</span>
            <span className="tag">Editorial Modern Frameworks</span>
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
          aria-label="The Structured Liquidity trifecta shown on the cube's three visible faces: Neobrutalist Structure, Liquid Glass Motion, and Editorial Modern Frameworks."
        >
          <Hypercube className="hero-cube" faceLabels={["01", "02", "03"]} />
        </div>
      </div>
    </header>
  );
}

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
            <em>Tactile Structure. Liquid Depth. Editorial Framework.</em>{" "}
            Tactile Structure is structured neobrutalism: the physical frame,
            load-bearing borders, hard shadows, clear affordances, and tactile
            interaction. Liquid Depth is layering, continuity, glass, and motion
            that communicates state and believable mass. Editorial Framework is
            hierarchy, refined grids, oversized typography, technical diagrams,
            captions, labeling, and evidence; it is informed by editorial
            scientific modernism. This page is both specimen and spec, so
            retheme it live as you read.
          </p>
          <div className="hero-tags reveal">
            <span className="tag">Tactile Structure</span>
            <span className="tag">Liquid Depth</span>
            <span className="tag">Editorial Framework</span>
          </div>
          <div className="hero-cta reveal">
            <InstallButton />
            <a className="btn glassy" href="#showcase">
              <Sparkles />
              Showcase
            </a>
            <a
              className="btn glassy"
              href={GITHUB}
              target="_blank"
              rel="noopener"
            >
              <Github />
              Source
            </a>
          </div>
        </div>
        <div className="hero-cube-wrap" aria-hidden="true">
          <Hypercube className="hero-cube" />
        </div>
      </div>
    </header>
  );
}

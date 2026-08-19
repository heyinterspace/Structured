import { Sparkles, Github } from "lucide-react";
import { LiquidWord, Hypercube } from "./liquid";
import { InstallButton } from "./InstallButton";

const GITHUB = "https://github.com/Interspace-Ventures/Structured";

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
            <em>Structured framing. Liquid motion. Scientific clarity.</em>{" "}
            Structured Liquidity gives digital interfaces a rigorous frame,
            movement that explains state, and an evidence-first editorial
            system. The result is precise without feeling sterile and expressive
            without becoming visual noise. This page is both specimen and spec,
            so retheme it live as you read.
          </p>
          <div className="hero-tags reveal">
            <span className="tag">Structured framing</span>
            <span className="tag">Liquid motion</span>
            <span className="tag">Scientific clarity</span>
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
          aria-label="The Structured Liquidity trifecta shown on the cube's three visible faces: Structured framing, Liquid motion, and Scientific clarity."
        >
          <Hypercube className="hero-cube" faceLabels={["01", "02", "03"]} />
        </div>
      </div>
    </header>
  );
}

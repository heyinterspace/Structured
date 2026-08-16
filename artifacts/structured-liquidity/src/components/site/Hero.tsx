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
            A design language for information-rich software: tactile
            neobrutalist structure, editorial scientific composition, and liquid
            depth in motion. <em>Structured Liquidity</em> makes interfaces feel
            physical, read like instruments, and move like living material. This
            page is both specimen and spec, so retheme it live as you read.
          </p>
          <div className="hero-tags reveal">
            <span className="tag">Tactile structure</span>
            <span className="tag">Editorial intelligence</span>
            <span className="tag">Liquid depth</span>
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

import { Sparkles, Github } from "lucide-react";
import { Hypercube } from "./liquid";
import { InstallButton } from "./InstallButton";

const GITHUB = "https://github.com/heyinterspace/Structured";

export function Nav() {
  return (
    <nav className="nav">
      <a className="brand" href="#top">
        <Hypercube />
        <span className="name">Structured Liquidity</span>
      </a>
      <div className="links">
        <InstallButton
          className="btn solid nav-cta"
          style={
            { "--hard-x": "3px", "--hard-y": "3px" } as React.CSSProperties
          }
        />
        <a
          className="btn glassy nav-cta"
          href={GITHUB}
          target="_blank"
          rel="noopener"
          style={
            { "--hard-x": "3px", "--hard-y": "3px" } as React.CSSProperties
          }
        >
          <Github />
          Source
        </a>
        <a className="btn glassy nav-cta" href="#showcase">
          <Sparkles />
          Showcase
        </a>
      </div>
    </nav>
  );
}

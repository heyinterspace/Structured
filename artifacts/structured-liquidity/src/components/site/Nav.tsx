import { useCallback, useEffect, useRef } from "react";
import { Sparkles, Github } from "lucide-react";
import { Hypercube } from "./liquid";
import { InstallButton } from "./InstallButton";

const GITHUB = "https://github.com/heyinterspace/Structured";

export function Nav() {
  const navRef = useRef<HTMLElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  const positionMarker = useCallback((index: number) => {
    const links = linksRef.current;
    const slots = links?.querySelectorAll<HTMLElement>(".nav-action-slot");
    const target = slots?.[index];
    if (!links || !target) return;
    links.style.setProperty("--nav-marker-x", `${target.offsetLeft}px`);
    links.style.setProperty("--nav-marker-w", `${target.offsetWidth}px`);
    links.style.setProperty("--nav-marker-opacity", "1");
  }, []);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      positionMarker(0);
      const page = document.documentElement;
      const distance = Math.max(1, page.scrollHeight - window.innerHeight);
      const progress = Math.min(1, Math.max(0, window.scrollY / distance));
      navRef.current?.style.setProperty("--page-progress", `${progress * 100}%`);
    };
    const requestUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [positionMarker]);

  return (
    <nav className="nav" ref={navRef}>
      <a className="brand" href="#top">
        <Hypercube />
        <span className="name">Structured Liquidity</span>
      </a>
      <div
        className="links"
        ref={linksRef}
        onPointerLeave={() => positionMarker(0)}
        onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) positionMarker(0);
        }}
      >
        <span className="nav-liquid-marker" aria-hidden="true" />
        <span
          className="nav-action-slot"
          onPointerEnter={() => positionMarker(0)}
          onFocus={() => positionMarker(0)}
        >
          <InstallButton className="btn nav-cta" />
        </span>
        <span
          className="nav-action-slot"
          onPointerEnter={() => positionMarker(1)}
          onFocus={() => positionMarker(1)}
        >
          <a className="btn nav-cta" href={GITHUB} target="_blank" rel="noopener">
            <Github />
            Source
          </a>
        </span>
        <span
          className="nav-action-slot"
          onPointerEnter={() => positionMarker(2)}
          onFocus={() => positionMarker(2)}
        >
          <a className="btn nav-cta" href="#showcase">
            <Sparkles />
            Showcase
          </a>
        </span>
      </div>
      <span className="nav-page-progress" aria-hidden="true" />
    </nav>
  );
}

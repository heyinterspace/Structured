import { useCallback, useEffect, useRef } from "react";
import { Bot, Blocks, Github, Sparkles, Waypoints } from "lucide-react";
import { Hypercube } from "./liquid";
import { InstallButton } from "./InstallButton";

const GITHUB = "https://github.com/heyinterspace/Structured";
const NAV_ITEMS = [
  { label: "Principles", href: "#manifesto", icon: Waypoints },
  { label: "Components", href: "#components", icon: Blocks },
  { label: "Showcase", href: "#showcase", icon: Sparkles },
  { label: "For agents", href: "#adopt", icon: Bot },
] as const;

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
      <div className="nav-cluster">
        <div
          className="links"
          ref={linksRef}
          onPointerLeave={() => positionMarker(0)}
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) positionMarker(0);
          }}
        >
          <span className="nav-liquid-marker" aria-hidden="true" />
          {NAV_ITEMS.map(({ label, href, icon: Icon }, index) => (
            <span
              className="nav-action-slot"
              onPointerEnter={() => positionMarker(index)}
              onFocus={() => positionMarker(index)}
              key={href}
            >
              <a href={href}>
                <Icon />
                <span className="nav-label">{label}</span>
              </a>
            </span>
          ))}
        </div>
        <div className="nav-utilities">
          <InstallButton className="btn nav-utility" label="Install" />
          <a className="btn nav-utility" href={GITHUB} target="_blank" rel="noopener">
            <Github />
            Source
          </a>
        </div>
      </div>
      <span className="nav-page-progress" aria-hidden="true" />
    </nav>
  );
}

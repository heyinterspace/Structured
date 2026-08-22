import {
  BarChart3,
  Blocks,
  GalleryVerticalEnd,
  PanelsTopLeft,
} from "lucide-react";

const templates = [
  {
    icon: PanelsTopLeft,
    title: "Marketing site",
    source: "Interspace · 2 Days Early · Bumblebee",
    parts: "Section-aware navigation · proof blocks · conversion footer",
  },
  {
    icon: BarChart3,
    title: "Data dashboard",
    source: "Interspace Portfolio · Interspace Index",
    parts: "KPI rail · filter toolbar · responsive data views",
  },
  {
    icon: GalleryVerticalEnd,
    title: "Guided flow",
    source: "Bumble Bee enrollment",
    parts: "Persistent stepper · focused form stage · recovery states",
  },
  {
    icon: Blocks,
    title: "Immersive app",
    source: "Cosmograph · Universe",
    parts: "Full-viewport canvas · HUD overlays · command controls",
  },
];

export function Templates() {
  return (
    <div className="kit-group reveal">
      <div className="kit-group-head">
        <span className="kg-name">Templates</span>
        <span className="kg-rule" />
        <span className="kg-count">Production-tested page structures</span>
      </div>

      <div className="kit-grid">
        <div className="glass kit-cell w12">
          <span className="kit-cap">Templates</span>
          <div className="template-grid">
            {templates.map(({ icon: Icon, title, source, parts }) => (
              <article className="glass template-card" key={title}>
                <Icon aria-hidden="true" />
                <span className="mono template-source">{source}</span>
                <h3>{title}</h3>
                <p>{parts}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

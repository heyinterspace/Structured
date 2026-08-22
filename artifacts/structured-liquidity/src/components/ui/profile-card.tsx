import * as React from "react";
import { cn } from "@/lib/utils";

export interface ProfileCardFact {
  label: string;
  value: React.ReactNode;
}

export interface ProfileCardProps extends Omit<
  React.HTMLAttributes<HTMLElement>,
  "title"
> {
  label?: string;
  status?: string;
  imageSrc: string;
  imageAlt: string;
  summary: React.ReactNode;
  facts: ProfileCardFact[];
}

/** Field-sourced profile summary card: portrait, concise positioning, and scannable facts. */
export const ProfileCard = React.forwardRef<HTMLElement, ProfileCardProps>(
  (
    {
      label = "Profile",
      status = "Active",
      imageSrc,
      imageAlt,
      summary,
      facts,
      className,
      ...props
    },
    ref,
  ) => (
    <article ref={ref} className={cn("sl-profile-card", className)} {...props}>
      <header className="sl-profile-card-head">
        <span>{label}</span>
        <span className="sl-profile-card-status">{status}</span>
      </header>
      <div className="sl-profile-card-image">
        <img src={imageSrc} alt={imageAlt} />
      </div>
      <p className="sl-profile-card-summary">{summary}</p>
      <dl className="sl-profile-card-facts">
        {facts.map((fact) => (
          <div key={fact.label}>
            <dt>{fact.label}</dt>
            <dd>{fact.value}</dd>
          </div>
        ))}
      </dl>
    </article>
  ),
);
ProfileCard.displayName = "ProfileCard";

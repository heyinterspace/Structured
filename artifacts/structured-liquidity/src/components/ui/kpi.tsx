import * as React from "react";
import { ArrowDownRight, ArrowUpRight, Info, Minus } from "lucide-react";

import { Tooltip } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

export function KpiGrid({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("sl-kpi-grid", className)} {...props} />;
}

export interface KpiCardProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  change?: React.ReactNode;
  description?: React.ReactNode;
  direction?: "down" | "flat" | "up";
  label: React.ReactNode;
  loading?: boolean;
  unavailableLabel?: React.ReactNode;
  value?: React.ReactNode;
  variant?: "benchmark" | "default";
}

/**
 * Default Structured Liquidity KPI card.
 *
 * Data is supplied by the adopter. Missing data renders an explicit unavailable
 * state; the component never invents a fallback metric.
 */
export function KpiCard({
  change,
  className,
  description,
  direction = "flat",
  label,
  loading = false,
  unavailableLabel = "N/A",
  value,
  variant = "default",
  ...props
}: KpiCardProps) {
  const unavailable = !loading && (value === null || value === undefined);
  const DirectionIcon =
    direction === "up" ? ArrowUpRight : direction === "down" ? ArrowDownRight : Minus;

  return (
    <div
      className={cn("sl-kpi-card", variant === "benchmark" && "is-benchmark", className)}
      data-state={loading ? "loading" : unavailable ? "unavailable" : "ready"}
      {...props}
    >
      <div className="sl-kpi-label">
        <span>{label}</span>
        {description ? (
          <Tooltip content={description} className="sl-kpi-tip-wrap">
            <button type="button" className="sl-kpi-info" aria-label={`About ${String(label)}`}>
              <Info aria-hidden="true" />
            </button>
          </Tooltip>
        ) : null}
      </div>
      <div className="sl-kpi-row">
        <strong className="sl-kpi-value">
          {loading ? <span className="sl-kpi-skeleton" aria-label="Loading metric" /> : unavailable ? unavailableLabel : value}
        </strong>
        {!loading && !unavailable && change ? (
          <span className="sl-kpi-change">
            <DirectionIcon aria-hidden="true" />
            {change}
          </span>
        ) : null}
      </div>
    </div>
  );
}

import * as React from "react";
import { cn } from "@/lib/utils";

/** Chronological product updates, signals, and changelog entries. */
export function ActivityFeed({
  className,
  ...props
}: React.OlHTMLAttributes<HTMLOListElement>) {
  return <ol className={cn("sl-activity-feed", className)} {...props} />;
}

export function ActivityItem({
  className,
  ...props
}: React.LiHTMLAttributes<HTMLLIElement>) {
  return <li className={cn("sl-activity-item", className)} {...props} />;
}

export function ActivityMarker({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn("sl-activity-marker", className)}
      aria-hidden="true"
      {...props}
    />
  );
}

export function ActivityContent({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("sl-activity-content", className)} {...props} />;
}

export function ActivityHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("sl-activity-header", className)} {...props} />;
}

export function ActivityTitle({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h4 className={cn("sl-activity-title", className)} {...props} />;
}

export function ActivityMeta({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return <span className={cn("sl-activity-meta", className)} {...props} />;
}

export function ActivityDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn("sl-activity-description", className)} {...props} />;
}

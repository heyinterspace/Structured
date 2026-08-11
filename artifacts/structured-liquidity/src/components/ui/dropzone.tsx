import * as React from "react";
import { cn } from "@/lib/utils";

export interface DropzoneProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  active?: boolean;
}

/** Accessible file target; consumers own validation and upload state. */
export function Dropzone({ className, active, ...props }: DropzoneProps) {
  return (
    <label
      className={cn("sl-dropzone", className)}
      data-active={active || undefined}
      {...props}
    />
  );
}

export function DropzoneInput({
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn("sl-dropzone-input", className)}
      type="file"
      {...props}
    />
  );
}

export function DropzoneIcon({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn("sl-dropzone-icon", className)}
      aria-hidden="true"
      {...props}
    />
  );
}

export function DropzoneTitle({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return <span className={cn("sl-dropzone-title", className)} {...props} />;
}

export function DropzoneDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span className={cn("sl-dropzone-description", className)} {...props} />
  );
}

export function DropzoneMeta({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return <span className={cn("sl-dropzone-meta", className)} {...props} />;
}

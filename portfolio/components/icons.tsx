import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const defaults = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function ArrowUpRight(props: IconProps) {
  return <svg {...defaults} {...props}><path d="M7 17 17 7M8 7h9v9" /></svg>;
}

export function ArrowDown(props: IconProps) {
  return <svg {...defaults} {...props}><path d="m7 10 5 5 5-5" /></svg>;
}

export function GithubIcon(props: IconProps) {
  return <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}><path d="M12 .7A11.5 11.5 0 0 0 8.36 23.1c.58.1.79-.25.79-.56v-2.02c-3.23.7-3.91-1.37-3.91-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.78 1.19 1.78 1.19 1.04 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.58-.3-5.3-1.3-5.3-5.68 0-1.26.45-2.28 1.18-3.08-.12-.3-.51-1.47.11-3.04 0 0 .96-.31 3.16 1.17a10.9 10.9 0 0 1 5.76 0c2.2-1.48 3.16-1.17 3.16-1.17.62 1.57.23 2.74.11 3.04.73.8 1.18 1.82 1.18 3.08 0 4.4-2.73 5.38-5.32 5.67.42.36.79 1.07.79 2.16v3.04c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .7Z" /></svg>;
}

export function LinkedinIcon(props: IconProps) {
  return <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}><path d="M5.1 3.25a2.35 2.35 0 1 1 0 4.7 2.35 2.35 0 0 1 0-4.7ZM3.1 9.4h4V21h-4V9.4Zm6.45 0h3.83v1.59h.05c.53-1.01 1.84-2.08 3.79-2.08 4.05 0 4.8 2.66 4.8 6.13V21h-4v-5.28c0-1.26-.02-2.88-1.76-2.88-1.76 0-2.03 1.37-2.03 2.79V21h-4V9.4Z" /></svg>;
}

export function MailIcon(props: IconProps) {
  return <svg {...defaults} {...props}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></svg>;
}

export function SunIcon(props: IconProps) {
  return <svg {...defaults} {...props}><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.66 6.34l1.41-1.41" /></svg>;
}

export function MoonIcon(props: IconProps) {
  return <svg {...defaults} {...props}><path d="M20.4 15.2A8.5 8.5 0 0 1 8.8 3.6 8.5 8.5 0 1 0 20.4 15.2Z" /></svg>;
}

export function MenuIcon(props: IconProps) {
  return <svg {...defaults} {...props}><path d="M4 8h16M4 16h16" /></svg>;
}

export function CloseIcon(props: IconProps) {
  return <svg {...defaults} {...props}><path d="m6 6 12 12M18 6 6 18" /></svg>;
}

export function CheckIcon(props: IconProps) {
  return <svg {...defaults} {...props}><path d="m5 12 4 4L19 6" /></svg>;
}

export function CodeIcon(props: IconProps) {
  return <svg {...defaults} {...props}><path d="m8 9-3 3 3 3M16 9l3 3-3 3M14 5l-4 14" /></svg>;
}

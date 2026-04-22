import type { SVGProps } from "react"

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <rect x="2" y="2" width="20" height="20" stroke="currentColor" strokeWidth="1.5" />
      <path d="M7 16 L12 8 L17 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
    </svg>
  )
}

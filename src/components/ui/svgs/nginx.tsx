import type { SVGProps } from "react";

const Nginx = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 128 128" preserveAspectRatio="xMidYMid">
    <path
      fill="#009639"
      d="M64 10 110.77 37 110.77 91 64 118 17.23 91 17.23 37Z"
    />
    <path
      fill="none"
      stroke="#FFFFFF"
      strokeWidth="11"
      strokeLinecap="square"
      strokeLinejoin="miter"
      d="M46 38 46 90 M46 38 82 90 M82 38 82 90"
    />
  </svg>
);

export { Nginx };
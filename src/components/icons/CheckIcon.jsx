import React from "react";

const DEFAULT_SIZE = 18;

function CheckIcon({ size = DEFAULT_SIZE, ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
      {...props}
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export default CheckIcon;

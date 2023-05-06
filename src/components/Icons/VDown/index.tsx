import { IconProps } from "../IconProps";

function VIcon({ ...props }: IconProps) {
  return (
    <svg
      width="15"
      height="10"
      viewBox="0 0 15 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0.999847 1.7417L7.27234 8.25717L13.5448 1.7417"
        stroke="#C4C4C4"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default VIcon;

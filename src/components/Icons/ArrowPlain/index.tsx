import { IconProps } from "../IconProps";

function ArrowPlainIcon({ primary, ...props }: IconProps) {
  return (
    <svg
      width="22"
      height="16"
      viewBox="0 0 22 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0.754441 7.29277C0.363917 7.6833 0.363917 8.31646 0.754441 8.70698L7.1184 15.0709C7.50893 15.4615 8.14209 15.4615 8.53262 15.0709C8.92314 14.6804 8.92314 14.0473 8.53262 13.6567L2.87576 7.99988L8.53262 2.34302C8.92314 1.9525 8.92314 1.31933 8.53262 0.92881C8.14209 0.538286 7.50893 0.538286 7.1184 0.92881L0.754441 7.29277ZM20.6442 8.99988C21.1965 8.99988 21.6442 8.55216 21.6442 7.99988C21.6442 7.44759 21.1965 6.99988 20.6442 6.99988L20.6442 8.99988ZM1.46155 8.99988L20.6442 8.99988L20.6442 6.99988L1.46155 6.99988L1.46155 8.99988Z"
        fill={primary}
      />
    </svg>
  );
}

export default ArrowPlainIcon;
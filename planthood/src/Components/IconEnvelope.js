export const IconEnvelope = ({ className }) => {
  return (
    <svg
      className={`icon-envelope ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        className="rect"
        height="14"
        stroke="#080930"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        width="20"
        x="2"
        y="5"
      />
      <path
        className="path-2"
        d="M2 5L12 14L22 5"
        stroke="#080930"
        strokeWidth="2"
      />
      <path
        className="path-2"
        d="M2 19L9 11"
        stroke="#080930"
        strokeWidth="2"
      />
      <path
        className="path-2"
        clipRule="evenodd"
        d="M22 19L15 11L22 19Z"
        fillRule="evenodd"
        stroke="#080930"
        strokeWidth="2"
      />
    </svg>
  );
};

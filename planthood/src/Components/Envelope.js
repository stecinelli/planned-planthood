export const Envelope = ({ className }) => {
  return (
    <svg
      className={`envelope ${className}`}
      fill="none"
      height="35"
      viewBox="0 0 35 35"
      width="35"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        className="rect"
        height="20.4167"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
        width="29.1667"
        x="2.91663"
        y="7.29163"
      />
      <path
        className="path-2"
        d="M2.91663 7.29163L17.5 20.4166L32.0833 7.29163"
        stroke="white"
        strokeWidth="3"
      />
      <path
        className="path-2"
        d="M2.91663 27.7083L13.125 16.0416"
        stroke="white"
        strokeWidth="3"
      />
      <path
        className="path-2"
        clipRule="evenodd"
        d="M32.0833 27.7083L21.875 16.0416L32.0833 27.7083Z"
        fillRule="evenodd"
        stroke="white"
        strokeWidth="3"
      />
    </svg>
  );
};

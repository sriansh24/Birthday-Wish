function AvengersLogo({ className = "w-20 h-20" }) {
  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Avengers Logo"
      role="img"
    >
      <polygon
        points="50,5 95,28 95,72 50,95 5,72 5,28"
        fill="none"
        stroke="#C60000"
        strokeWidth="3"
      />
      <polygon
        points="50,15 85,33 85,67 50,85 15,67 15,33"
        fill="none"
        stroke="rgba(255,215,0,0.3)"
        strokeWidth="1"
      />
      <text
        x="50"
        y="68"
        textAnchor="middle"
        fontFamily="'Bebas Neue', cursive"
        fontSize="52"
        fill="#C60000"
      >
        A
      </text>
    </svg>
  );
}
export default AvengersLogo;

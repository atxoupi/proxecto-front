const LogoCN = ({ height = 38 }) => (
  <svg
    viewBox="0 0 190 52"
    height={height}
    style={{ width: 'auto' }}
    role="img"
    aria-label="Cris Núñez Touceda"
  >
    {/* Echo arc — trail de movimiento */}
    <path
      d="M 44 14 A 17 17 0 1 0 44 38"
      fill="none"
      stroke="#d4af37"
      strokeWidth="1.5"
      strokeLinecap="round"
      opacity="0.22"
    />

    {/* Arco C principal */}
    <path
      d="M 41 12 A 20 20 0 1 0 41 40"
      fill="none"
      stroke="#d4af37"
      strokeWidth="3"
      strokeLinecap="round"
    />

    {/* Puntos de movimiento en la cola del arco */}
    <circle cx="47" cy="40" r="2"   fill="#d4af37" opacity="0.60" />
    <circle cx="53" cy="39" r="1.3" fill="#d4af37" opacity="0.35" />
    <circle cx="57" cy="37" r="0.8" fill="#d4af37" opacity="0.18" />

    {/* Separador vertical */}
    <line
      x1="70" y1="14" x2="70" y2="38"
      stroke="#d4af37" strokeWidth="0.75" opacity="0.35"
    />

    {/* Nombre */}
    <text
      x="80" y="24"
      fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif"
      fontSize="13"
      fontWeight="500"
      letterSpacing="2"
      fill="#d4af37"
    >
      CRIS NÚÑEZ
    </text>

    {/* Apellido */}
    <text
      x="82" y="38"
      fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif"
      fontSize="8.5"
      fontWeight="300"
      letterSpacing="4.5"
      fill="#d4af37"
      opacity="0.78"
    >
      TOUCEDA
    </text>
  </svg>
);

export default LogoCN;

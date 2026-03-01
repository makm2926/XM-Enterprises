export default function Logo({
  className = "h-12 w-auto",
}: {
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        viewBox="0 0 100 100"
        className="h-full w-auto"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Cart Handle */}
        <path
          d="M85 15 L75 15 L65 45"
          stroke="#10b981"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Cart Body */}
        <path
          d="M15 45 L65 45 L55 75 L10 75 Z"
          stroke="#10b981"
          strokeWidth="6"
          strokeLinejoin="round"
        />
        {/* Arrows */}
        <path
          d="M25 55 L50 55 M40 48 L50 55 L40 62"
          stroke="#10b981"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M45 65 L20 65 M30 58 L20 65 L30 72"
          stroke="#10b981"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Wheels */}
        <circle cx="25" cy="90" r="8" stroke="#f97316" strokeWidth="6" />
        <circle cx="50" cy="90" r="8" stroke="#f97316" strokeWidth="6" />
      </svg>
      <div className="flex flex-col justify-center">
        <span className="text-2xl md:text-3xl font-black leading-none tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
          XM
        </span>
        <span className="text-sm md:text-base font-bold leading-none tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-emerald-400">
          Enterprises
        </span>
      </div>
    </div>
  );
}

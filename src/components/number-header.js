export const NumberHeader = ({ className, label, sectionNumber }) => (
  <div className={`flex flex-row items-center ${className}`}>
    <span className="font-mono bg-cyan-900/60 ring-1 ring-cyan-800 text-cyan-300 font-medium rounded-full w-8 h-8 aspect-square flex justify-center items-center">
      {sectionNumber}
    </span>
    <h2 className="font-mono ml-4 text-xl font-bold text-cyan-300">{label}</h2>
  </div>
);

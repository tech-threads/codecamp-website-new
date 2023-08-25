export const Section = ({ sectionTitle, children, className = "" }) => (
  <div className={`flex flex-row ${className}`}>
    <h2 className="w-[35%] font-medium text-2xl text-cyan-400">
      {sectionTitle}
    </h2>
    <div className="flex-1">{children}</div>
  </div>
);

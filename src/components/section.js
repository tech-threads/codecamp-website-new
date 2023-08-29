export const Section = ({ sectionTitle, children, className = "" }) => (
  <div className={`${className} w-3/4 mx-auto`}>
    <h2 className="flex-1 font-bold text-cyan-400 mb-4 text-lg">
      {sectionTitle}
    </h2>
    <div className="flex-1 text-lg text-zinc-200">{children}</div>
  </div>
);

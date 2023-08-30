export const Wrapper = ({ grid = true, className, children }) => (
  <div
    className={`relative w-[1040px] mx-auto ${
      grid ? "border-l border-r border-solid border-white/5" : ""
    } px-8 ${className}`}
  >
    {children}

    {grid && (
      <>
        <div className="border-l border-white/10 absolute left-1/2 w-px h-full top-0 border-dashed -z-10"></div>
        <div className="border-l border-white/10 absolute left-1/4 w-px h-full top-0 border-dashed -z-10"></div>
        <div className="border-l border-white/10 absolute left-3/4 w-px h-full top-0 border-dashed -z-10"></div>
      </>
    )}
  </div>
);

export const PageLayout = ({ children }) => (
  // <div className="min-h-screen flex bg-zinc-900 text-white">
  <div className="min-h-screen flex bg-zinc-900/50 text-white">
    <div className="flex mx-auto">
      <div className="inset-0 flex justify-center sm:px-8 mx-auto">
        <div className="w-[1249px] mx-24 pt-8 px-8 pb-40">{children}</div>
      </div>
    </div>
  </div>
);

// TODO: ring nor border, ring-1 ring-zinc-300/10

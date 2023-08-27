export const PageLayout = ({ children }) => (
  <div className="min-h-screen flex bg-[#0f0f10] text-white">
    <div className="flex w-full">
      <div className="inset-0 flex justify-center sm:px-8 mx-auto">
        <div className="shadow-2xl w-[1164px] mx-24 pt-8 px-8 bg-zinc-900 ring-1 ring-zinc-300/10 pb-40">
          {children}
        </div>
      </div>
    </div>
  </div>
);

export const PageLayout = ({ children }) => (
  <div className="w-full min-h-screen flex bg-zinc-900/50 text-white">
    <div className="flex mx-auto w-full">
      <div className="flex justify-center mx-auto w-[1185px] pt-8 pb-40">
        <div>{children}</div>
      </div>
    </div>
  </div>
);

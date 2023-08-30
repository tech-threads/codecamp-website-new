import { Wrapper } from "@/components/wrapper";

export const NumberHeader = ({ className, label, sectionNumber }) => (
  <div
    className={`bg-[#0c0c0ddd] backdrop-blur sticky z-50 top-0 ${className}`}
  >
    <Wrapper grid={false} className="py-5 flex flex-row items-center ">
      <span className="font-mono bg-cyan-900/60 ring-1 ring-cyan-800 text-cyan-300 font-medium rounded-full w-8 h-8 aspect-square flex justify-center items-center">
        {sectionNumber}
      </span>
      <h2 className="font-mono ml-4 text-xl font-bold text-cyan-300">
        {label}
      </h2>
    </Wrapper>
  </div>
);

import Image from "next/image";

export const PhotoReel = ({ className }) => (
  <div
    className={`-my-4 -mx-40 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8 ${className}`}
  >
    <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl rotate-2">
      <Image
        src="/photo1.jpeg"
        alt="Photo"
        fill
        style={{
          objectFit: "cover",
        }}
      />
    </div>
    <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl -rotate-2">
      <Image
        src="/photo2.jpeg"
        alt="Photo"
        fill
        style={{
          objectFit: "cover",
        }}
      />
    </div>
    <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl rotate-2">
      <Image
        src="/photo3.jpeg"
        alt="Photo"
        fill
        style={{
          objectFit: "cover",
        }}
      />
    </div>
    <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl -rotate-1">
      <Image
        src="/photo4.jpeg"
        alt="Photo"
        fill
        style={{
          objectFit: "cover",
        }}
      />
    </div>
  </div>
);

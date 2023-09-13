import Image from "next/image";

const PhotoReelImage = ({ rotation, imageSrc, altText }) => (
  <div
    className={`transition ease-in-out duration-300 shadow-xl relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2x ${rotation}`}
  >
    <Image
      src={imageSrc}
      alt={altText}
      fill
      style={{
        objectFit: "cover",
      }}
    />
  </div>
);

export const PhotoReel = ({ className }) => (
  <div
    className={`-my-4 -mx-40 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8 ${className}`}
  >
    <PhotoReelImage
      rotation="rotate-2"
      imageSrc="/photo1.jpeg"
      altText="Photo"
    />
    <PhotoReelImage
      rotation="-rotate-2"
      imageSrc="/photo2.jpeg"
      altText="Photo"
    />
    <PhotoReelImage
      rotation="rotate-2"
      imageSrc="/photo3.jpeg"
      altText="Photo"
    />
    <PhotoReelImage
      rotation="-rotate-1"
      imageSrc="/photo4.jpeg"
      altText="Photo"
    />
  </div>
);

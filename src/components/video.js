export const Video = ({ videoId, className }) => {
  return (
    <div
      className={`relative mx-auto ${className} shadow-xl ring-1 ring-zinc-800/30 rounded-2xl transition-all ease-in-out hover:shadow-2xl duration-300 group`}
    >
      <div className="absolute inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-all duration-300 ease-in-out"></div>
      <div className="relative rounded-2xl leading-none flex items-top justify-start space-x-6">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?controls=0`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          style={{ aspectRatio: "16/9", width: "100%" }}
          className="rounded-2xl"
        ></iframe>
      </div>
    </div>
  );
};

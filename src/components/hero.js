import { Fragment } from "react";
import { BigButton } from "@/components/big-button";

export const Hero = ({ headline, subtitle, ctaLink, ctaText }) => {
  return (
    <div className="px-20 flex flex-col items-center justify-center py-40">
      <h1 className="text-5xl leading-tight font-medium mb-4 text-center font-mono">
        {headline.split(" ").map((word, index, arr) => (
          <Fragment key={index}>
            {word}
            {index !== arr.length - 1 && (
              <span
                style={{
                  opacity: 0.5,
                  display: "inline-block",
                  textAlign: "center",
                }}
              >
                •
              </span>
            )}
          </Fragment>
        ))}
        <span
          className="inline-block bg-gray-200 px-3 font-semibold text-md text-gray-700 ml-2 typed-cursor"
          style={{
            height: ".8em",
          }}
        ></span>
      </h1>
      <h2 className="px-20 opacity-60 text-2xl mb-8 text-center">{subtitle}</h2>

      <BigButton href={ctaLink}>{ctaText}</BigButton>
    </div>
  );
};

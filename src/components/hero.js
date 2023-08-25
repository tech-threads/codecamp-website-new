import { Fragment } from "react";
import { BigButton } from "@/components/big-button";
import { Subtitle } from "@/components/subtitle";

export const Hero = ({ headline, subtitle, ctaLink, ctaText }) => {
  return (
    <div className="px-20 flex flex-col items-center justify-center pt-40 pb-20">
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
      <Subtitle>{subtitle}</Subtitle>

      <BigButton href={ctaLink}>{ctaText}</BigButton>
    </div>
  );
};

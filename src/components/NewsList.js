import React from "react";
import { Tooltip } from "@material-tailwind/react";

export default function NewsList(props) {
  function add3Dots(text, limit) {
    var dots = "...";
    if (text?.length > limit) {
      text = text.substring(0, limit) + dots;
    }
    return text;
  }

  return (
    <a href={props.news.url} target="_blank" rel="noreferrer">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden h-[350px] md:h-[400px] lg:h-[350px]">
        <img
          src={
            props.news.urlToImage !== null
              ? props.news.urlToImage
              : "https://via.placeholder.com/600x400"
          }
          alt="News article"
          className="object-cover object-center w-[400px] h-[180px]"
        />
        <div className="p-3">
          <Tooltip className="w-72" content={props.news.title}>
            <h3 className="font-semibold text-lg mb-2">
              {add3Dots(props.news.title, 50)}
            </h3>
          </Tooltip>
          <Tooltip
            className="w-72"
            content={props.news.description}
            placement="bottom-start"
          >
            <p className="text-gray-700 text-base">
              {add3Dots(props.news.description, 80)}
            </p>
          </Tooltip>
        </div>
      </div>
    </a>
  );
}

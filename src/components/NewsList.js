import React from "react";

export default function NewsList(props) {
  function add3Dots(text, limit) {
    var dots = "...";
    if (text?.length > limit) {
      text = text.substring(0, limit) + dots;
    }
    return text;
  }

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img
        src={
          props.news.urlToImage !== null
            ? props.news.urlToImage
            : "https://via.placeholder.com/600x400"
        }
        alt="News article"
        className="w-full object-cover object-center"
        style={{ width: 400, height: 180 }}
      />
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2">News article title 1</h3>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
  );
}

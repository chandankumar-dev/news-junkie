import React from "react";
import NewsList from "./NewsList";

export default function News(props) {
  return (
    <div>
      <header className="bg-white shadow">
        <div className="mx-auto w-full py-4 md:py-5 px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900">
            Dashboard
          </h1>
        </div>
      </header>
      <main>
        <div className="mx-auto w-full py-6 px-6 lg:px-8 flex justify-center md:justify-start">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {props.newsData?.map((news, i) => {
              return <NewsList key={i} news={news} />;
            })}
          </div>
        </div>
      </main>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import NewsList from "./NewsList";

export default function News() {
  const [newsData, setNewsData] = useState([]);

  const getMovieRequest = async () => {
    const apiKey = "a3c2f45046be4445969400abb2a79f49";
    const country = "in";
    const category = "politics";
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}`;

    const response = await fetch(url);
    const responseJson = await response.json();
    setNewsData(responseJson.articles);
    console.log(responseJson.articles);
  };

  useEffect(() => {
    getMovieRequest();
  }, []);

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
            {newsData?.map((news) => {
              return <NewsList news={news} />;
            })}
          </div>
        </div>
      </main>
    </div>
  );
}

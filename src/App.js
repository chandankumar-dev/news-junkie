import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";

import { ThemeProvider } from "@material-tailwind/react";

export default function App() {
  const [newsData, setNewsData] = useState([]);

  const getMovieRequest = async () => {
    const apiKey = "a3c2f45046be4445969400abb2a79f49";
    const country = "in";
    const category = "technology";
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}`;

    const response = await fetch(url);
    const responseJson = await response.json();
    setNewsData(responseJson.articles);
  };

  useEffect(() => {
    getMovieRequest();
  }, []);

  return (
    <div className="App">
      <ThemeProvider>
        <Navbar />
        <News newsData={newsData} />
      </ThemeProvider>
    </div>
  );
}

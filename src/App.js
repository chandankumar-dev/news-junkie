import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";

import { ThemeProvider } from "@material-tailwind/react";

export default function App() {
  const [newsData, setNewsData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("general");

  const getMovieRequest = async () => {
    const apiKey = "a3c2f45046be4445969400abb2a79f49";
    const country = "in";
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${selectedCategory}&apiKey=${apiKey}`;

    const response = await fetch(url);
    const responseJson = await response.json();
    setNewsData(responseJson.articles);
  };

  useEffect(() => {
    getMovieRequest();
  }, [selectedCategory]);

  useEffect(() => {
    console.log(selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="App">
      <ThemeProvider>
        <Navbar setSelectedCategory={setSelectedCategory} />
        <News newsData={newsData} selectedCategory={selectedCategory} />
      </ThemeProvider>
    </div>
  );
}
